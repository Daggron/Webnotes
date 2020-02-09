import {createStore} from 'redux';

import noteApp from './reducer/reducer'

const store = createStore(noteApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

export default store;