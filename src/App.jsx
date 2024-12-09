import { useDispatch } from "react-redux";
import "./App.css";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { lazy, Suspense, useEffect } from "react";
import { getCurrentUser } from "./redux/auth/auth-operations";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { ParentDashboard } from "./pages/parents/ParentDashboard";
import { ChildDashboard } from "./pages/children/ChildDashboard";
import { TasksList } from "./components/Task/TasksList";
import { TaskPage } from "./pages/TaskPage";
import { useSaveCurrentPath } from "./hooks/useSaveCurrentPath ";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();
  const navigate = useNavigate();

  useSaveCurrentPath();
  const cp = localStorage.getItem("lastVisitedPath");

  useEffect(() => {
    dispatch(getCurrentUser());
    cp !== "null" && navigate(cp);
  }, [dispatch, cp, navigate]);

  return (
    !isLoading && (
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
            element={<PrivateRoute component={<SharedLayout />} />}
          >
            <Route path="parent" element={<ParentDashboard />}>
              <Route path=":childId/tasks" element={<TasksList />} />
            </Route>
            <Route
              path="parent/:childId/tasks/:taskId"
              element={<TaskPage />}
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
