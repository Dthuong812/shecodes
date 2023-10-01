import React, { Suspense } from "react";
import { Routes,Route } from "react-router-dom"; 
import { lazy } from 'react';

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const FoodPage = lazy(() => import("./pages/FoodPage"));
const SportPage = lazy(() => import("./pages/SportPage"));
const NewPage = lazy(() => import("./pages/NewPage"));
const PersonPage = lazy(() => import("./pages/PersonPage"));
const SugarPage = lazy(() => import("./pages/SugarPage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));


function App() {
  return(
  <Suspense>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      <Route path="/food" element={<FoodPage></FoodPage>}></Route>
      <Route path="/sport" element={<SportPage></SportPage>}></Route>
      <Route path="/new" element={<NewPage></NewPage>}></Route>
      <Route path="/person" element={<PersonPage></PersonPage>}></Route>
      <Route path="/sugar" element={<SugarPage></SugarPage>}></Route>
      <Route path="/about" element={<AboutUs></AboutUs>}></Route>
    </Routes>
  </Suspense>
  ) 
}

export default App;
