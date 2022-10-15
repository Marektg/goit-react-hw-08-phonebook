import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'components/App';
import NotFound from 'pages/notFound';
import 'modern-normalize';
import './index.scss';

const Home = React.lazy(() => import("./pages/home"));
const PrivateRoute = React.lazy(() => import("./components/privateRoute"));
const PublicRoute = React.lazy(() => import("./components/publicRoute"));
const Contacts = React.lazy(() => import("./pages/contacts"));
const Registration = React.lazy(() => import("./pages/registration"));
const Login = React.lazy(() => import("./pages/login"));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route element={<PrivateRoute />}>
                <Route path="contacts" element={<Contacts />} />
              </Route>
              <Route element={<PublicRoute />}>
                <Route path="register" element={<Registration />} />
                <Route path="login" element={<Login />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);