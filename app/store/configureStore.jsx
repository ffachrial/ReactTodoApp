import {combineReducers, createStore, compose} from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

export const configure = () => {
  var reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
