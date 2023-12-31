import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/auth-slice';


const persistConfig = {
  key: 'root',
  storage: storage,
};

// const themePersistedConfig = {
//   key: 'theme',
//   storage,
// };

// const recipePersistedConfig = {
//   key: 'recipe',
//   storage,
// };

// const ingredientsPersistConfig = {
//   key: 'ingredients',
//   storage,
//   whitelist: ['ingredients'],
// };

// const ownRecipePersistConfig = {
//   key: 'ownRecipes',
//   storage,
// };

// const persistShoppingListConfig = {
//   key: 'shoppingList',
//   storage,
// };

// const persistFavoritesConfig = {
//   key: 'favorites',
//   storage,
// };

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);