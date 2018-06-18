import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Spin } from 'antd';
import App from './App';
import { store, persistor } from './store/configureStore';

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={<Spin />} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);

export default Root;