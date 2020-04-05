import * as Knex from "knex";
import { Models, DatabaseTable } from "../src/shared/models";

/* Do not ever change this, this file is append only */
export function AddIdV1(table: Knex.CreateTableBuilder, string?: boolean) {
  if (string === true) {
    table.string('id').notNullable().primary().index();
  } else {
    table.increments('id').primary().unsigned().index();
  }
}

/* Do not ever change this, this file is append only */
export function AddTimestampsV1(table: Knex.CreateTableBuilder) {
  table.timestamps(true, true);
}

/* Do not ever change this, this file is append only */
export function AddIdReferenceV1(table: Knex.CreateTableBuilder, columnName: string, referenceTable: DatabaseTable, index?: boolean): Knex.ColumnBuilder {
  let builder = table.integer(columnName).unsigned().notNullable().references("id").inTable(referenceTable.table);
  if (index) builder.index();
  return builder;
}

/* Do not ever change this, this file is append only */
export function AddIdReferenceStringV1(table: Knex.CreateTableBuilder, columnName: string, referenceTable: DatabaseTable, index?: boolean): Knex.ColumnBuilder {
  let builder = table.string(columnName, 256).unsigned().notNullable().references("id").inTable(referenceTable.table);
  if (index) builder.index();
  return builder;
}

/* Do not ever change this, this file is append only */
export function AddInternalNotesV1(table: Knex.CreateTableBuilder) {
  table.text('internal_notes');
}

/* Do not ever change this, this file is append only */
export function AddUserIdReferenceV1(table: Knex.CreateTableBuilder): Knex.ColumnBuilder {
  return AddIdReferenceStringV1(table, 'user_id', Models.USER, true).onDelete("RESTRICT");
}
/* Do not ever change this, this file is append only */
export function resetAutoIncrement(knex: Knex, referenceTable: DatabaseTable): Knex.Raw<any> {
  return knex.raw(`select setval(\'${referenceTable.table}_id_seq\', max(id)) from ${referenceTable.table}`);
}