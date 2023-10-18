import "./LabellingChart.css";
const LabelingChart = () => {
  const calender1 = [
    {
      month: "Jan",
      height: "110px",
    },
    {
      month: "Feb",
      height: "80px",
    },
    {
      month: "Mar",
      height: "220px",
    },
    {
      month: "Apr",
      height: "135px",
    },
    {
      month: "May",
      height: "160px",
    },
    {
      month: "Jun",
      height: "56px",
    },
  ];

const calender2 = [
  {
    month: "Jul",
    height: "180px",
  },
  {
    month: "Aug",
    height: "220px",
  },
  {
    month: "Sep",
    height: "200px",
  },
  {
    month: "Oct",
    height: "165px",
  },
  {
    month: "Nov",
    height: "145px",
  },
  {
    month: "Dec",
    height: "165px",
  },
]

  return (
    <div className="flex__item flex__item--70 flex__item--M100 bar-graph-container">
      <div className="labeling__card">
      <div className="flex flex--justifyBetween">
        <div className="">
          <h2>Overview</h2>
          <p className="monthy-earning-text">Monthly Earning</p>
          </div>
          <select>
            <option>Quertly</option>
          </select>
      </div>
      <div className="flex flex--wrap graph__bar">
      <div className="flex__item flex__item--50 flex__item--M100 bar-label-container">
        {calender1.map((item,index) => {
          return (
            <div className="bar-label" key={`key-${index+1}`}>
              <div
                className="bar"
                style={{
                  height: `${item.height}`,
                }}
              ></div>
              <p className="label">{item.month}</p>
            </div>
          );
        })}
      </div>
      <div className="flex__item flex__item--50 flex__item--M100 bar-label-container">
        {calender2.map((item,index) => {
          return (
            <div className="bar-label" key={`key-${index+1}`}>
              <div
                className="bar"
                style={{
                  height: `${item.height}`,
                }}
              ></div>
              <p className="label">{item.month}</p>
            </div>
          );
        })}
      </div>
      </div>
      </div>
    </div>
  );
};
export default LabelingChart;
