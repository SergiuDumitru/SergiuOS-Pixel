import { configureStore, createSlice } from '@reduxjs/toolkit'


const activeAppsSlice = createSlice({
    name: 'activeApps',
    initialState: [],
    reducers: {
        addActiveApp(state, action) {
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        },
        removeActiveApp(state, action) {
            state.splice(state.indexOf(action.payload), 1)
        }
    }
})

const AppOnTopSlice = createSlice({
    name: 'appOnTop',
    initialState: "",
    reducers: {
        addAppOnTop(state, action) {

            return action.payload;

        }
    }
})

const ThemeSettingsSlice = createSlice({
    name: 'themeSettings',
    initialState: {
        theme: "dark",
        background: "https://i.redd.it/vrfm1irroql01.png"
    },
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload;
        },
        setBackground(state, action) {
            state.background = action.payload;
        }
        
    }
})

const store = configureStore({
    reducer: {
        activeApps: activeAppsSlice.reducer,
        appOnTop: AppOnTopSlice.reducer,
        themeSettings: ThemeSettingsSlice.reducer,
        
    }
})


export { store };
export const { addActiveApp, removeActiveApp } = activeAppsSlice.actions;
export const { addAppOnTop } = AppOnTopSlice.actions
export const { setBackground, setTheme } = ThemeSettingsSlice.actions
