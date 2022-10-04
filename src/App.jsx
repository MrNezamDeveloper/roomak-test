import { BrowserRouter , Routes , Route } from "react-router-dom";

import NotFound from "./pages/notfound";
import Login from "./pages/login";
import List from "./pages/list";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
