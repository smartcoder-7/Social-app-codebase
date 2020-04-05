import * as Knex from 'knex';
import { AddIdV1, AddInternalNotesV1, AddTimestampsV1 } from '../migrationHelper';
import { Models } from '../../src/shared/models';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(Models.USER.table, t => {
    AddIdV1(t, true);
    t.string('email').notNullable().unique().index('idx_user_email');
    t.string('token').notNullable().unique();
    t.string('student_id').unique().index('idx_user_student_id');

    t.string('password').notNullable();

    t.string('first_name').notNullable().index('idx_user_firstname');
    t.string('last_name').notNullable().index('idx_user_lastname');
    t.string('phone_number');

    t.boolean('admin').notNullable().defaultTo(false);

    AddInternalNotesV1(t);
    AddTimestampsV1(t);
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema
    .dropTableIfExists(Models.USER.table)
}

