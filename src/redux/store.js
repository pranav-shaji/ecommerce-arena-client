import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        value: null
    },
    reducers: {
        addProduct: (state, action) => {
            state.value = [...action.payload]
        }
    }
})
const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null
    },
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload);
            state.value = action.payload
        }
    }
})


export const { incremented, decremented } = counterSlice.actions
export const { addProduct } = productSlice.actions
export const { setUser } = userSlice.actions

let rootReducer = combineReducers({
    counter: counterSlice.reducer,
    products: productSlice.reducer,
    user: userSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})





// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}