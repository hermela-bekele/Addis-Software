import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import songsReducer from './features/songs/SongSlice';
import SongSaga from './features/songs/SongSaga'; 
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(SongSaga);

export default store;

