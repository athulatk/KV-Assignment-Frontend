import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const EmployeeAPI = createApi({
    reducerPath: 'EmployeeAPI',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/employee" }),
    endpoints: (builder) => ({
        getAllEmployees: builder.query({
            query: () => '/',
            providesTags: ['Employee']
        }),
        getEmployeeById: builder.query({
            query: (id) => `/${id}`,
            providesTags: ['Employee']
        }),
        createEmployee: builder.mutation({
            query: data => ({
                url: '/',
                method: 'POST',
                body: data,

            }),
            invalidatesTags: ['Employee']

        }),
        updateEmployee: builder.mutation({
            query: ({id,...data}) => ({
                url: `/${id}`,
                method:'PUT',
                body: data
            }),
            invalidatesTags: ['Employee']
        }),
        deleteEmployee: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Employee']

        })
    })
})

export const { useGetAllEmployeesQuery, useGetEmployeeByIdQuery, useCreateEmployeeMutation, useDeleteEmployeeMutation, useUpdateEmployeeMutation } = EmployeeAPI

