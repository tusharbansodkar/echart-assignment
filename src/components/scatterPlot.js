import React from "react";
import EChartsReact from "echarts-for-react";
import '../styles/scatterPlot.css';

const ScatterPlot = ({ data }) => {

  const getOption = () => {
    let dataSet = [];

    // getting data for displaying on chart
    data.forEach((item) => {
      dataSet.push([item["Color intensity"], item["Hue"]]);
    });

    const option = {
      title: {
        text: "Scatter plot",
      },
      tooltip: {
        trigger: "item",
        axisPointer: {
          type: "cross",
        },
      },
      xAxis: {
        name: "Color Intensity",
        nameLocation: "middle",
        nameGap: "30",
        nameTextStyle: {
          color: 'black',
          fontSize: '14px'
        },
        axisPointer: {
          show: "true",
        },
      },
      yAxis: {
        name: "Hue",
        nameLocation: "middle",
        nameGap: "20",
        nameTextStyle: {
          color: 'black',
          fontSize: '14px'
        }
      },
      series: [
        {
          type: "scatter",
          data: dataSet,
          symbolSize: 6,
        },
      ]
    
    };

    return option;

    
  };

  

  return (
    <>
      <EChartsReact 
      option={getOption()}
      className='scatter'
      />
    </>
  );
};

export default ScatterPlot;
