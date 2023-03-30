import './styles/index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, Provider as ReduxProvider } from 'react-redux';

import AppContextProvider from './contexts/AppContextProvider';

import { HomePage } from './pages';
import { store } from './store/Twitter/store';

(async () => {

    const root = createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <AppContextProvider>
                    <HomePage />
                </AppContextProvider>
            </Provider>
        </React.StrictMode>
    );
})();
