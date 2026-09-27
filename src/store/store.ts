import { combineReducers, legacy_createStore as createStore } from "redux";

import { grammarReducer } from "./grammarReducer";
import { statisticsReducer } from "./statisticsReducer";

const GRAMMAR_STORAGE_KEY = "grammarWords";

const STATISTICS_STORAGE_KEY = "testStats";

const rootReducer = combineReducers({
    grammar: grammarReducer,
    statistics: statisticsReducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
    const state = store.getState();

    localStorage.setItem(GRAMMAR_STORAGE_KEY, JSON.stringify(state.grammar.words));

    localStorage.setItem(STATISTICS_STORAGE_KEY, JSON.stringify(state.statistics));
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;