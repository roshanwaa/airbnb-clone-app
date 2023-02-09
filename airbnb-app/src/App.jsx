import { Routes, Route, useRoutes } from 'react-router-dom';
import './assets/CSS/App.css';
import { Register } from './assets/Register';
import { IndexPage } from './assets/IndexPage';
import { Layout } from './assets/Layout';
import { Login } from './assets/Login';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

function App() {
  // const routes = useRoutes([
  //   { path: '/', element: <Layout /> },
  //   { index: '', element: <IndexPage /> },
  //   { path: '/login', element: <Login /> },
  // ]);
  // return routes;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
