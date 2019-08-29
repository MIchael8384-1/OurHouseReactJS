import React from "react";
import DonutChart from "react-svg-donut-chart";
import styled from "styled-components";

const H3 = styled.h3`
  margin-top: 5em;
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 12.5em;
`;

const H4 = styled.h4`
  margin-top: 12em;
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 15em;
`;

const donutData = [
  { value: 45, stroke: "#4A306E", strokeWidth: 5.5 },
  { value: 55, stroke: "#ED3192", strokeWidth: 6 }
];

const Donut = () => (
  <>
    <H3>Rent due:</H3>
    <H4>12 days</H4>
    <div className="DonutChart">
      <DonutChart data={donutData} spacing={2.3} />
    </div>
  </>
);

export default Donut;
