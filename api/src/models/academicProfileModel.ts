import { Model } from 'objection';
import { UserModel } from './userModel';
import { CourseModel } from './courseModel';
import { BaseModel } from './BaseModel';

export class AcademicProfileModel extends BaseModel {
  id!: number;
  standing!: string;
  major!: string;
  minor!: string;
  language!: string;
  bio?: string;
  photoUrl?: string;
  userId!: UserModel;
  courses!: CourseModel[];

  static tableName = 'profiles';

  static relationMappings = () => ({
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: UserModel,
      join: {
        from: 'profiles.userId',
        to: 'users.id'
      }
    },
    courses: {
      relation: Model.HasManyRelation,
      modelClass: CourseModel,
      join: {
        from: 'profiles.id',
        to: 'courses.profileId'
      }
    }
  })
}
