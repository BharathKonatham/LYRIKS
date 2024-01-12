import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const shazamCoreApi = createApi( {
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers)=>{
            headers.set('X-RapidAPI-Key','13a369b66bmsh31eb42c18f21e2ep1bef23jsn8aa522aee192')
            return headers
        }
    }),
    endpoints:(builder)=>({
        getTopCharts:builder.query({query: ()=> '/charts/world'})
    })
})

export const {
    useGetTopChartsQuery
} = shazamCoreApi