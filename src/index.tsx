import React from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import { store } from './redux/store';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <main>
        <header>
            <h1>Hi, i am a Header</h1>
        </header>
            <App />     
        <footer>
            <h1>Hi, i am a footer
            </h1>
        </footer>
    </main> 
    </BrowserRouter >
  
    </Provider>

  </React.StrictMode>
);

