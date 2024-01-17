import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage, LoginPage } from "../pages";

export const AppRouter = () => {
  const accessToken = sessionStorage.getItem("accessToken");
  // console.log("token", accessToken);
  return (
    <Routes>
      {/* its depends go to route login */}
      {!accessToken ? (
        <Route path="auth" element={<LoginPage />} />
      ) : (
        <Route path="/:roomId" element={<DashboardPage />} />
      )}
      <Route path="/*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};
