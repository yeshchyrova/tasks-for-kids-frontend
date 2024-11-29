import { useDispatch } from "react-redux";
import "./App.css";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { lazy, Suspense, useEffect } from "react";
import { getCurrentUser } from "./redux/auth/auth-operations";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { ParentDashboard } from "./pages/parents/ParentDashboard";
import { ChildDashboard } from "./pages/children/ChildDashboard";
import { ParentSharedLayout } from "./components/SharedLayout/parent/ParentSharedLayout";
import { Task } from "./pages/Task";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
// const AuthContent = lazy(() => import("./components/AuthContent"));
// const HomePage = lazy(() => import("./pages/HomePage"));

// TODO: добавить компонент not found и логику редиректа

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
    // <div>
    <Routes>
      <Route
        path="/register"
        element={
          <Suspense fallback={null}>
            <RestrictedRoute component={<RegisterPage />} />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={null}>
            <RestrictedRoute component={<LoginPage />} />
          </Suspense>
        }
      />
      <Route
        path="/parent"
        element={<PrivateRoute component={<ParentSharedLayout />} />}
      >
        <Route index element={<ParentDashboard />}></Route>
        <Route path=":childId/tasks" element={<Task />} />
      </Route>
      <Route
        path="*"
        element={
          <p>
            Page not found. <a href="/login">Go to Login Page</a>
          </p>
        }
      />
    </Routes>
    // </div>
  );
}

export default App;
