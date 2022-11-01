 

import { Routes, Route, Link } from "react-router-dom";
import Country from "./pages/Country";
import Egypt from "./pages/Egypt";
import German from "./pages/German";
import England from "./pages/England";

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/Country" element={<Country />} />
        <Route path="/Egypt" element={<Egypt />} />
        <Route path="/German" element={<German />} />
        <Route path="/England" element={<England />} />
      </Routes>
      
    </div>
  );
}

export default App;
