// actions for QFileBrowser
export const CREATE_FOLDER = 'CREATE_FOLDER'
export const UPDATE_FOLDER = 'UPDATE_FOLDER'
export const DELETE_FOLDER = 'DELETE_FOLDER'
export const UPLOAD_FILE = 'UPLOAD_FILE'
export const UPDATE_FILE = 'UPDATE_FILE'
export const DELETE_FILE = 'DELETE_FILE'
export const CHANGE_DIRECTORY = 'REFRESH_DIRECTORY'
export const SUB_DIRECTORY = 'SUB_DIRECTORY'
export const PREVIOUS_DIRECTORY = 'PREVIOUS_DIRECTORY'
export const NEXT_DIRECTORY = 'NEXT_DIRECTORY'
export const UPDATE_DATA = 'UPDATE_DATA'


export const changeDirectory = (paths) => {
  return {
    type: CHANGE_DIRECTORY,
    paths
  }
}

export const updateData = (data) => {
  return {
    type: UPDATE_DATA,
    data
  }
}

export const subDirectory = (dirname) => {
  return {
    type: SUB_DIRECTORY,
    dirname
  }
}
