export type DatabaseTable = {
  class: string;
  table: string;
}

type ModelMap = {
  [name: string]: DatabaseTable;
}

export const Models = {
  ACADEMIC_PROFILE: {
    class: 'AcademicProfileModel',
    table: 'academic_profiles'
  },
  COURSE: {
    class: 'CourseModel',
    table: 'courses'
  },
  USER: {
    class: 'UserModel',
    table: 'users'
  },
}

function makeMap(_models: ModelMap): void { undefined }
makeMap(Models);