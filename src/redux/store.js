import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import { browserHistory } from './history';

const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(browserHistory);

function configureStore() {
  const middlewares = [sagaMiddleware, routerMiddleware];
  const middlewareEnhancers = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancers];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(
    rootReducer,
    composedEnhancers
  )

  return store;
}

const store = configureStore();
sagaMiddleware.run(rootSaga);
export default store;


// export const store = configureStore({
//   reducer: {
//     router: createRouterReducer(browserHistory),
//     auth: authReducers,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware()
//     .concat(sagaMiddleware, routerMiddleware),
// });

// sagaMiddleware.run(rootSaga);