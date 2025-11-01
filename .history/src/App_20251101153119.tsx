import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Route } from "react-router";

{/* TEST FEATURES */}
function App() {
  return (
    <>
      <div>TEST FEATURES</div>
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
