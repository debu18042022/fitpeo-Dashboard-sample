import React from "react";
import Header from "./Header";
import InfoCards from "./InfoCards";
import ProductShell from "./ProductShell";
import Graph from "./Graph";

function Panel() {
  return (
      <main>
          <Header />
          <InfoCards />
          <Graph/>
          <ProductShell />
    </main>
  );
}

export default Panel;
