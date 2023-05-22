import { AxiosPromise } from 'axios'
import { all, delay, put, spawn, takeLatest } from 'redux-saga/effects'
import { getProfile } from '../../axios/Api'
import {
  GET_PROFILE,
  GetProfileAction,
  LOAD_AUTOR,
  SET_AUTOR,
} from '../actions'
import { authorType } from '../reducers/postsReducer'
import { getPostSaga } from './postsSaga'

function* getAutorSaga(id: number) {
  yield put({ type: LOAD_AUTOR })
  yield delay(300)

  const author: AxiosPromise<authorType> = yield getProfile(id)
  yield put({ type: SET_AUTOR, peyload: author })
}

function* workerSaga({ id }: GetProfileAction) {
  yield spawn(getPostSaga, id)
  yield spawn(getAutorSaga, id)
}

function* watchPostsSaga() {
  yield takeLatest(GET_PROFILE, workerSaga)
}

export function* profileSaga() {
  yield all([spawn(watchPostsSaga)])
}
