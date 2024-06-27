const NAME_PROJECT = process.env.NAME_PROJECT || 'default_project_name';
const CURRENT_ENV = process.env.CURRENT_ENV || 'development';

export const storageNameToken: string = `${NAME_PROJECT}_token${CURRENT_ENV}`;