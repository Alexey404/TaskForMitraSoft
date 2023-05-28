import {
  DELETE_PROFILE,
  LOAD_PROFILE,
  MyProfileAction,
  SET_PROFILE,
} from '../action/myProfileAction'
import { authorType } from './postsReducer'

const initialState = {
  profile: {} as authorType,
  isLoading: false,
}

export const myProfileReducer = (
  state = initialState,
  action: MyProfileAction
) => {
  switch (action.type) {
    case SET_PROFILE: {
      localStorage.setItem('myId', String(action.peyload.id))
      return {
        ...state,
        profile: action.peyload,
        isLoading: false,
      }
    }
    case LOAD_PROFILE: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case DELETE_PROFILE: {
      localStorage.setItem('myId', '')
      return {
        ...state,
        profile: {} as authorType,
      }
    }

    default:
      return state
  }
}
