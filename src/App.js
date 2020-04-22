import React from 'react';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { reducers } from './store';
import HomePage from './pages/HomePage';
import './App.css';

const { usersReducer, postsReducer, loaderReducer, photosReducer } = reducers;

const reducer = combineReducers({
  usersReducer,
  postsReducer,
  loaderReducer,
  photosReducer,
});
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div
          className="App"
          style={{
            padding: '1rem',
            minWidth: '1px',
          }}>
          <HomePage />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
