import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from "@react-native-community/async-storage";
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

const persistConfig = {
    // Root
    key: "root",
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: ["counter"],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

let persistor = persistStore(store);

export { store, persistor };