import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './app-reducer';
import {saveState, loadState} from '../common/utils/local-storage';
import {charactersReducer} from '../slice/charactersSlice';

export const rootReducer = combineReducers({
    charactersPage: charactersReducer,
    app: appReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
    preloadedState: { ...rootReducer, charactersPage: loadState() },
    devTools: true,
});

store.subscribe(() => {
    saveState(store.getState().charactersPage);
});

export type AppStateType = ReturnType<typeof rootReducer>;
