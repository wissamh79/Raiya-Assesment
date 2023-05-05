import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const RedirectPage = lazy(() => import("./pages/RedirectPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
function App() {
  return (
    <Suspense
      fallback={<div className="flex items-center justify-center "></div>}
    >
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="redirect" element={<RedirectPage />}></Route>
          {/* protect routes */}
          <Route path="home" element={<RequireAuth />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Route>
        {/* catch all */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
