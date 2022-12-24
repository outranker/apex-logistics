import React from "react";
import styled from "styled-components";
import "./index.module.css";
const WavyShape = () => {
  return (
    <ShapeWrapper>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#002bdc"></stop>
            <stop offset="95%" stop-color="#32ded4"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,600 C 0,600 0,200 0,200 C 90.48803827751195,151.55980861244018 180.9760765550239,103.11961722488039 283,126 C 385.0239234449761,148.8803827751196 498.58373205741634,243.08133971291863 590,261 C 681.4162679425837,278.91866028708137 750.688995215311,220.555023923445 829,181 C 907.311004784689,141.444976076555 994.6602870813397,120.69856459330143 1098,127 C 1201.3397129186603,133.30143540669857 1320.6698564593303,166.6507177033493 1440,200 C 1440,200 1440,600 1440,600 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="0.53"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#002bdc"></stop>
            <stop offset="95%" stop-color="#32ded4"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,600 C 0,600 0,400 0,400 C 98.55502392344502,418.17224880382776 197.11004784689004,436.34449760765546 281,426 C 364.88995215310996,415.65550239234454 434.11483253588506,376.79425837320576 528,349 C 621.8851674641149,321.20574162679424 740.4306220095693,304.4784688995215 861,337 C 981.5693779904307,369.5215311004785 1104.1626794258373,451.2918660287081 1201,470 C 1297.8373205741627,488.7081339712919 1368.9186602870814,444.35406698564594 1440,400 C 1440,400 1440,600 1440,600 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
    </ShapeWrapper>
  );
};

const ShapeWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border: 1px solid purple;
`;
export default WavyShape;
