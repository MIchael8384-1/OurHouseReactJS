import React from "react";
import DonutChart from "react-svg-donut-chart";
import styled from "styled-components";

const H2 = styled.h2`
  margin-top: 3em;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 11.5em;
`;

const H1 = styled.h1`
  margin-top: 7.3em;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 8.5em;
`;

const donutData = [
  { value: 45, stroke: "#4A306E", strokeWidth: 5.5 },
  { value: 55, stroke: "#ED3192", strokeWidth: 6 }
];

const Donut = () => (
  <>
    <H2>Rent due:</H2>
    <H1>12 days</H1>
    <div className="DonutChart">
      <DonutChart data={donutData} spacing={2.3} />
    </div>
  </>
);

export default Donut;
