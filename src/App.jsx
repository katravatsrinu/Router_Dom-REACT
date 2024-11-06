import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intial from "./router_dom/intial";
import First from "./router_dom/first";
import Second from "./router_dom/second";
import Third from "./router_dom/third";
import Display from "./router_dom/display"; // assuming you have a 'Display' component

function App() {
  return (
    <BrowserRouter>
      {/* You can include <Intial /> here if it's meant to be a layout or part of the initial view */}
      <Intial /> 

      <Routes>
        {/* Replace 'Display' with your actual component */}
        <Route path="/" element={<Display />} />
        
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

