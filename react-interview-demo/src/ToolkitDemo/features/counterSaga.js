import { takeEvery, put, delay } from 'redux-saga/effects';
import { increment } from './counterSlice';
function* incrementAsyncSaga() {
    yield delay(3000);
    yield put(increment());
}
function* watchIncrementAsync() {
    yield takeEvery('counter/incrementAsync', incrementAsyncSaga);
}
export default function* rootSaga() {
    yield watchIncrementAsync();
}