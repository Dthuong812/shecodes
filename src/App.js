import React, { Suspense } from "react";
import { Routes,Route } from "react-router-dom"; 
import { lazy } from 'react';

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const HomePage = lazy(() => import("./pages/HomePage"));


function App() {
  return(
  <Suspense>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
    </Routes>
  </Suspense>
  ) 
}

export default App;
