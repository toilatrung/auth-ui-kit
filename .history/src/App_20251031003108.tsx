import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
      </BrowserRouter>
    </>
  )
}

export default App
