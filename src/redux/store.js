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
import filtersSlice from './filtersSlice';

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filtersSlice,
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
