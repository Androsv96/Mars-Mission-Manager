/* Redux */
import { createStore } from 'redux'

/* Reducers */
import combineReducers from '../Reducers/combineReducers';

export default function configureStore() {
    return {
        ...createStore(combineReducers),
    }
}
