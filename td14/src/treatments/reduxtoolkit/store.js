import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

/**
 * Configuration for persisting the employee slice in local storage.
 *
 * @type {Object}
 * @property {string} key - Key to use for storing the data in local storage.
 * @property {Object} storage - Storage engine to use for persisting the data.
 */
const employeePersistConfig = {
  key: 'employee',
  storage,
};

/**
 * Reducer with persistence configuration for the employee slice.
 *
 * @type {Object}
 */
const persistedEmployeeReducer = persistReducer(employeePersistConfig, employeeReducer);

/**
 * Redux store configuration using Redux Toolkit.
 *
 * @type {Object}
 */
const store = configureStore({
  reducer: {
    employee: persistedEmployeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

/**
 * Exporting the Redux store.
 *
 * @type {Object}
 */
export default store;

/**
 * Exporting the Redux persistor for rehydration.
 *
 * @type {Object}
 */
export const persistor = persistStore(store);
