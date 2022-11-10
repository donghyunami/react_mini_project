import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './service/contact';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
  devTools: true,
});
