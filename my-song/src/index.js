import React from 'react';
import { createRoot } from 'react-dom/client';  
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

async function enableMocking() {

  const { worker } = await import('./Mocks/browser');


  return worker.start();
}

const rootElement = document.getElementById('root');

enableMocking().then(() => {
  if (rootElement) {
    const root = createRoot(rootElement);  
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
});

