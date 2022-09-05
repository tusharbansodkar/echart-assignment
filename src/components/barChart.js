import React from "react";
import EChartsReact from "echarts-for-react";
import '../styles/barChart.css';

const BarChart = ({ data }) => {
  const getOption = () => {
    let alcohol1_avg = 0;
    let alcohol2_avg = 0;
    let alcohol3_avg = 0;

    let alcohol1 = [];
    let alcohol2 = [];
    let alcohol3 = [];

    // getting data for displaying on chart
    data.forEach((item) => {
      if (item.Alcohol == 1) {
        alcohol1.push(item["Malic Acid"]);
      }
      if (item.Alcohol == 2) {
        alcohol2.push(item["Malic Acid"]);
      }
      if (item.Alcohol == 3) {
        alcohol3.push(item["Malic Acid"]);
      }
    });

    alcohol1_avg = (alcohol1.reduce((a, b) => a + b) / alcohol1.length).toFixed(
      2
    );
    alcohol2_avg = (alcohol2.reduce((a, b) => a + b) / alcohol2.length).toFixed(
      2
    );
    alcohol3_avg = (alcohol3.reduce((a, b) => a + b) / alcohol3.length).toFixed(
      2
    );


    const option = {
      title: {
        text: "Bar Chart",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      xAxis: {
        type: "category",
        data: [1, 2, 3],
        name: "Alcohol",
        nameLocation: "middle",
        nameGap: "30",
        nameTextStyle: {
          color: 'black',
          fontSize: '14px'
        }
      },
      yAxis: {
        name: "Avg Malic Acid",
        nameLocation: "middle",
        nameGap: "20",
        nameTextStyle: {
          color: 'black',
          fontSize: '14px'
        }
      },
      series: [
        {
          type: "bar",
          data: [alcohol1_avg, alcohol2_avg, alcohol3_avg],
          barWidth: "30%",
        },
      ],
    };

    return option;
  };

  getOption();

  return (
    <>
      <EChartsReact
        option={getOption()}
        className='bar'
      />
    </>
  );
};

export default BarChart;
