import { types } from "../types/types"

export const setErrorActions = (error)=>{
    return {
        type: types.uiSetError,
        payload: error
    }
}

export const removeErrorActions = ()=>{
    return {
        type: types.uiRemoveError
    }
}

export const startLoading = ()=>{
    return {
        type: types.uiStartLoading
    }
}
export const finishLoading = ()=>{
    return {
        type: types.uiFinishLoading
    }
}

