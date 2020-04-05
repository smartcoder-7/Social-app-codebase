import { Model, QueryContext } from 'objection';
import { AcademicProfileModel } from './academicProfileModel';
import bcrypt from 'bcrypt';
import { Models } from '../shared/models';
import { BaseModel } from './BaseModel';
import crypto from 'crypto';
import { formatEmail } from '../shared/formats';
import { isEmail } from 'validator'
import { UserInput } from '../types/gqlTypings.generated';
import { isEmpty } from 'lodash';

export class UserModel extends BaseModel {
  id!: string;
  email!: string;
  password!: string;
  token!: string;
  studentId?: string;

  firstName!: string;
  lastName!: string;

  admin!: boolean;

  profileId!: AcademicProfileModel;

  private static encryptPassword = (password: string): string => bcrypt.hashSync(password.trim(), bcrypt.genSaltSync(10));
  private comparePassword = (password: string): boolean => bcrypt.compareSync(password, this.password);

  async $beforeInsert(context: QueryContext) {
    await super.$beforeInsert(context);
    const { password, email, token } = this;

    if (password) {
      this.password = UserModel.encryptPassword(password);
    }

    this.id = crypto.randomBytes(32).toString('hex');
    this.email = formatEmail(email);
    this.token = token || crypto.randomBytes(64).toString('hex');
  }

  async $afterInsert(context: any) {
    await super.$afterInsert(context);
  }

  static verifyPassword = async (baseEmail: string, password: string): Promise<UserModel | undefined> => {
    const user = await UserModel.query().findOne({ email: formatEmail(baseEmail) });
    const validPassword = user && (await user.comparePassword(password));
    return validPassword ? user : undefined;
  }

  static changePassword = async (userId: string, password: string): Promise<UserModel> => {
    return await UserModel.query().updateAndFetchById(userId, { password: UserModel.encryptPassword(password) });
  }

  static doesEmailExist = async (baseEmail: string): Promise<boolean> => {
    const user = await UserModel.query().findOne({ email: formatEmail(baseEmail) });
    return user !== undefined;
  }

  static create = async (params: UserInput): Promise<UserModel> => {
    if (!isEmail(params.email || "")) {
      throw Error('Email required');
    } else if (isEmpty(params.firstName) || isEmpty(params.lastName)) {
      throw Error('Name required');
    } else if (isEmpty(params.password)) {
      throw Error('Password required');
    }

    return UserModel.query().insert(params);
  }


  static tableName = Models.USER.table;

  static relationMappings = () => ({
    profile: {
      relation: Model.BelongsToOneRelation,
      modelClass: AcademicProfileModel,
      join: {
        from: `${Models.USER.table}.id`,
        to: `${Models.ACADEMIC_PROFILE.table}.user_id`,
      }
    }
  })
}
