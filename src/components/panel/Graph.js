import React from "react";
import LabelingChart from "./LabelingChart";
import DoughnutGraph from "./DoughnutGraph";

function Graph() {
  return (
   <section className="section graph">
     <div className="container">
     <div className="flex flex--wrap">
        <LabelingChart />
        <DoughnutGraph />
    </div>
     </div>
   </section>
  )
}

export default Graph;
