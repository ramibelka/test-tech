import { Suspense } from "react";
import "./App.css";
import File from "./Pages/File";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import Login from "./Pages/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<File />} />
          <Route
            path="login"
            element={
              <Suspense fallback={<h1>Loading ...</h1>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="home"
            element={
              <Suspense fallback={<h1>Loading ...</h1>}>
                <Home />
              </Suspense>
            }
          />
          <Route path="*" element={<h1>Sorry, no match</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
