import { useDispatch } from "react-redux";
import "./App.css";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { lazy, Suspense, useEffect } from "react";
import { getCurrentUser } from "./redux/auth/auth-operations";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AuthContent = lazy(() => import("./components/AuthContent"));
// const HomePage = lazy(() => import("./pages/HomePage"));

// TODO: добавить компонент not found и логику редиректа
const ROLE = "parent";

export const TEMP_USER_DATA = {
  name: "Alina",
  email: "alina@gmail.com",
  id: 213,
  childId: 45,
  childId2: 46,
};

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
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="parents"
          element={<PrivateRoute component={<AuthContent />} />}
        />
        {/* <Route
          path=":parentId/:childId/tasks"
          element={
            ROLE === "parent" ? (
              <HomePage />
            ) : (
              <main>
                <p>child dashboard</p>
              </main>
            )
          }
        /> */}
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
