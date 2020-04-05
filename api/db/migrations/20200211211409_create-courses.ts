import * as Knex from "knex";
import { Models } from "../../src/shared/models";
import { AddIdV1, AddTimestampsV1 } from "../MigrationHelper";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(Models.COURSE.table, t => {
    AddIdV1(t);
    t.string('course_number').notNullable().index('idx_course_courseNumber');
    t.string('course_name').notNullable().index('idx_course_courseName');

    AddTimestampsV1(t);
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema
    .dropTableIfExists(Models.COURSE.table);
}

