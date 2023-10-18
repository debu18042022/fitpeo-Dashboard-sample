import "./DoughnutGraph.css";
const DoughnutGraph = () => {
  return (
    <div className="flex__item flex__item--30 flex__item--M100">
      <div className="doughnut__graph-container">
      <div className="customers">
        <h2>Customers</h2>
        <p>Customers that buy products</p>
      </div>
      <div className="doughnut-graph">
        <div class="progress-bar-container">
          <div class="progress-bar-blue blueBar">
            <div class="pink-bar"></div>
            <div class="text-container">
              <div>
                <h3>68%</h3>
                <p>Total new</p>
                <p>Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DoughnutGraph;
