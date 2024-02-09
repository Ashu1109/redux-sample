
import {configureStore} from "@reduxjs/toolkit"
import { customReduser } from "./Redusers"

const store = configureStore({
    reducer: {
        custom:customReduser
    }
})

export default store