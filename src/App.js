import React from "react";
import ScatterPlot from "./components/scatterPlot";
import data from "./data";
import BarChart from "./components/barChart";
import './styles/app.css';

function App() {
  return (
    <>
      <div>
        <ScatterPlot data={data} />
        <BarChart data={data} />
      </div>
    </>
  );
}

export default App;
