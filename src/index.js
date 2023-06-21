import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/productcontext';
import { FilterContextProvider } from './context/filter_context';
import { CartContextProvider } from './context/cart_context';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-s72j7ntma42t2kpy.us.auth0.com"
    clientId="EyfT7S9dj4r6fzWU5FNu6upGvDdkaNJB"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <FilterContextProvider>
      <CartContextProvider>
        <App />
        </CartContextProvider>
      </FilterContextProvider>

    </AppProvider>
    </Auth0Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
