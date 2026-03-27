import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login-page';
import Header from './components/Header';

export default function RooteRoute() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}
