import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from '../redux/contactsSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import combineRedusers from './combineRedusers';

// що робить storage?
// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, combineRedusers);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// const persist = persistStore(store);

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: '',
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persist = persistStore(store);
export { persist, store };
