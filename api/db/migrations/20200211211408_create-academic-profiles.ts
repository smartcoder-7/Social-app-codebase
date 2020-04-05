import * as Knex from 'knex';
import { AddIdV1, AddUserIdReferenceV1, AddTimestampsV1 } from '../MigrationHelper';
import { Models } from '../../src/shared/models';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(Models.ACADEMIC_PROFILE.table, t => {
    AddIdV1(t);
    AddUserIdReferenceV1(t);
    t.string('standing').notNullable().index('idx_profile_standing');
    t.string('major').notNullable().index('idx_profile_major');
    t.string('minor').notNullable().index('idx_profile_minor');
    t.string('language').notNullable().index('idx_profile_language');
    t.string('bio').nullable();
    t.string('image_url').nullable();

    AddTimestampsV1(t);
  });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema
    .dropTableIfExists(Models.ACADEMIC_PROFILE.table);
}

