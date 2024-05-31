import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  persistReducer,
  persistStore,
} from 'redux-persist'
import localforage from 'localforage';
import dashboard from "./tasks"

const reducers = combineReducers({
  dashboard
})


const persistConfig = {
  key: 'root2',
  storage: localforage,
  whitelist: ['dashboard']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
      // {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    })

    return middlewares
  },
})

const persistor = persistStore(store)

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
export { store, persistor }