import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Jokes from "../pages/Jokes";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Jokes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
