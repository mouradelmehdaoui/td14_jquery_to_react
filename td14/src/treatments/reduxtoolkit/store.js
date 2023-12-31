// store.js
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore,  } from 'redux-persist';

const employeePersistConfig = {
  key: 'employee',
  storage,
};

const persistedEmployeeReducer = persistReducer(employeePersistConfig, employeeReducer);

const store = configureStore({
  reducer: {
    employee: persistedEmployeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persistor = persistStore(store);
