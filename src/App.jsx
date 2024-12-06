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
import { TasksList } from "./pages/TasksList";
import { TaskPage } from "./components/TaskPage";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
// const AuthContent = lazy(() => import("./components/AuthContent"));
// const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
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
            path="/"
            element={<PrivateRoute component={<ParentSharedLayout />} />}
          >
            <Route
              path="parent"
              element={<PrivateRoute component={<ParentDashboard />} />}
            >
              <Route
                path=":childId/tasks"
                element={<PrivateRoute component={<TasksList />} />}
              />
            </Route>
            <Route
              path="parent/:childId/tasks/:taskId"
              element={<PrivateRoute component={<TaskPage />} />}
            />
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
      </>
    )
  );
}

export default App;
