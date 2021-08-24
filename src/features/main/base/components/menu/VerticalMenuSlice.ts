import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../../../app/store'

export interface VerticalMenuState {
    listExpand?: number[],
    onClickMenu?: { key: string, time: number }
}
const initialState: VerticalMenuState = {
    listExpand: [],
}

export const verticalMenuSlice = createSlice({
    name: "verticalMenu",
    initialState,
    reducers: {
        handleExpandCollapse: (state, action: PayloadAction<number>) => {
            if (state.listExpand?.indexOf(action.payload) !== -1) {
                // da co trong list => remove
                state.listExpand?.splice(state.listExpand?.indexOf(action.payload), 1)
            } else {
                state.listExpand.push(action.payload)
            }
        },
        onClickMenu: (state, action: PayloadAction<{ key: string, time: number }>) => {
            state.onClickMenu = action.payload
        }
    }
})
// selectors
export const verticalMenuSelector = (rootState: RootState) => rootState.verticalMenu
// actions
export const verticalMenuActions = verticalMenuSlice.actions;
// reducers
const verticalMenuReducer = verticalMenuSlice.reducer;
export default verticalMenuReducer;