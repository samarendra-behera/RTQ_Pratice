import {configureStore} from "@reduxjs/toolkit"
import { myApis } from "./api"
import { myreducer } from "./reducer"

export const store = configureStore({
    reducer: {
        [myApis.reducerPath]: myApis.reducer,
        [myreducer.name]: myreducer.reducer
    },
    middleware: (mid) => mid().concat(myApis.middleware)
})