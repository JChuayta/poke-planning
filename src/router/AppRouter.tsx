import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage, LoginPage } from "../pages";

export const AppRouter = () => {
  const authStatus = "authenticated";
  //   const authStatus = "not-authenticated";
  return (
    <Routes>
      {/* its depends go to route login */}
      {authStatus === "not-authenticated" ? (
        <Route path="auth" element={<LoginPage />} />
      ) : (
        <Route path="/*" element={<DashboardPage />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
