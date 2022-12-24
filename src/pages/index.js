import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import * as styles from "./index.module.css";
import { theme, GlobalStyles } from "../styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Header from "../components/Header";
import CurvyShape from "../components/CurvyShape";
import WavyShape from "../components/WavyShape";

const IndexPage = ({ data }) => {
  // const logoImage = getImage(data.mdx.frontmatter.hero_image);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <HeroWrapper>
          <Header />
          <Main>
            <section>
              <div></div>
              <div></div>
            </section>
          </Main>
        </HeroWrapper>

        <footer>
          <ul>
            <li>Footer 1</li>
            <li>Footer 2</li>
            <li>Footer 3</li>
            <li>Footer 4</li>
            <li>Footer 5</li>
          </ul>
        </footer>
      </Wrapper>
    </ThemeProvider>
  );
};

export default IndexPage;

const Wrapper = styled.div``;

const Hero = styled.div`
  position: relative;
  height: 100vh;
`;

const HeroWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #0093e9;
  background-image: linear-gradient(180deg, #0093e9 0%, #80d0c7 100%);
`;

const Main = styled.main`
  height: 100%;
  width: 100%;
`;

export const Head = () => <title>Apex Logistics | Uychi</title>;
