import { Model, snakeCaseMappers } from "objection";

export const BaseModel = class BaseModel extends Model {

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get modelPaths() {
    return [__dirname];
  }
}
