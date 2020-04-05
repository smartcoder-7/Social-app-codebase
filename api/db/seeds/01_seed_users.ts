import Knex from 'knex';
import { Model } from 'objection';
import { UserModel } from '../../src/models/UserModel';
import { consoleLog } from '../../src/shared/utilities';

const knexFile = require('../../knexfile');
Model.knex(Knex(knexFile[process.env.NODE_ENV || 'development']));

const userRows = [
  {
    id: "1",
    token: '123admin123',
    email: 'admin@test.com',
    phone_number: '302-275-1111',
    password: 'testtest',
    first_name: 'Admin',
    last_name: 'Account',
    admin: true
  },
  {
    id: "2",
    token: '123p',
    email: 'user@test.com',
    phone_number: '302-275-2222',
    password: 'testtest',
    first_name: 'Partner',
    last_name: 'Demo',
  }
];

export async function seed(knex: Knex): Promise<any> {
  await UserModel.query().del();

  await Promise.all(
    userRows.map(row => UserModel.query().insert(row))
  );

  consoleLog('✅ Users');
};
