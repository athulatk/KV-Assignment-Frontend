import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const EmployeeAPI = createApi({
    reducerPath:'EmployeeAPI',
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000/employee"}),
    endpoints:(builder)=>({
        getAllEmployees:builder.query({
            query:()=>``
        }),
        getEmployeeById:builder.query({
            query:(id)=>`/:${id}`
        }),
    })
})

export const {useGetAllEmployeesQuery,useGetEmployeeByIdQuery} = EmployeeAPI

