import State from './state';
import Reducer from './reducer'
import { createSlice } from '@reduxjs/toolkit'
import { DashboardState } from './props'

const slice = createSlice({
  name: 'dashboard',
  initialState: State as DashboardState,
  reducers: Reducer,
})

export const loyaltySliceActions = slice.actions

export default slice.reducer
