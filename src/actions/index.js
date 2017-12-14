// actions for QFileBrowser
export const CREATE_FOLDER = 'CREATE_FOLDER';
export const UPDATE_FOLDER = 'UPDATE_FOLDER';
export const DELETE_FOLDER = 'DELETE_FOLDER';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPDATE_FILE = 'UPDATE_FILE';
export const DELETE_FILE = 'DELETE_FILE';
export const REFRESH_DIRECTORY = 'REFRESH_DIRECTORY';


export const refreshDirectory = ( path ) => {
  return {
    type: REFRESH_DIRECTORY,
    path
  }
}
