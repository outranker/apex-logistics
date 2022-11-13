import * as React from "react";
import StyledBackgroundSection from "../components/StyledBackgroundSection";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100%",
  display: "inline-block",
};
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <StyledBackgroundSection />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
