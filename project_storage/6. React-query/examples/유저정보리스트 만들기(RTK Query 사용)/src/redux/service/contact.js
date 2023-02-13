import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL } from '../../constants/baseUrl';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: build => ({
    getContacts: build.query({
      query: () => '/contacts',
    }),
    getContact: build.query({
      query: id => `/contacts/${id}`,
    }),
  }),
});

export const { useGetContactsQuery, useGetContactQuery } = contactsApi;
