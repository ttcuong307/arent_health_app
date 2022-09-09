import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AuthLayout } from "../components/layouts/AuthLayout/AuthLayout"
import { BasicLayout } from "../components/layouts/BasicLayout/BasicLayout"

import { Column } from "../pages/Column/Column"
import { Login } from "../pages/Login/Login"
import { MyPage } from "../pages/MyPage/MyPage"
import { MyRecord } from "../pages/MyRecord/MyRecord"
import { ProtectedRoute, PublicRoute } from "./router";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // ProtectedRoute would check the User already Logged on or not
              <ProtectedRoute>
                <BasicLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<MyPage/>} />
            <Route path="/myrecord" element={<MyRecord/>}/>
          </Route>
          <Route path="/"
            element={
              <PublicRoute>
                <BasicLayout/>
              </PublicRoute>
            }
          >
            <Route path="/column" element={<Column />} />
          </Route>

          <Route path="/" element={<AuthLayout/>}>
            <Route  path="/login" element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}