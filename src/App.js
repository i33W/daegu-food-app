import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/home";
import Detail from "./routes/detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route
          path={process.env.PUBLIC_URL + "/detail/:gu/:id"}
          element={<Detail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
