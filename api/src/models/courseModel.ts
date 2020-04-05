import { Model } from 'objection';
import { AcademicProfileModel } from './academicProfileModel';
import { BaseModel } from './BaseModel';

export class CourseModel extends BaseModel {
  id!: number;
  courseNumber!: number;
  courseName!: string;
  profileId!: AcademicProfileModel;

  static tableName = 'courses';

  static jsonSchema = {
    type: 'object',
    required: ['courseNumber', 'courseName'],
    properties: {
      id: { type: 'integer' },
      courseNumber: { type: 'integer' },
      courseName: { type: 'string' },
      profileId: { type: 'integer' },
    }
  }

  static relationMappings = () => ({
    profile: {
      relation: Model.BelongsToOneRelation,
      modelClass: AcademicProfileModel,
      join: {
        from: 'courses.profileId',
        to: 'profiles.id'
      }
    }
  })
}
