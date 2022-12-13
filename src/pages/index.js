import * as React from "react";
import { ThemeProvider } from "styled-components";
import * as styles from "./index.module.css";
import { theme, GlobalStyles } from "../styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  // const logoImage = getImage(data.mdx.frontmatter.hero_image);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <header className={styles.headerheader}>
          {/* <img alt="Apex Logistics Uychi Logo" src={logoImage} */}
          <nav>
            <ul>
              <li>Services</li>
              <li>Contacts</li>
              <li>Header 3</li>
              <li>Header 4</li>
            </ul>
          </nav>
        </header>
        <main className={styles.mainContainer}>
          <section className={styles.hero}>
            <div className={styles.heroLeftSide}></div>
            <div className={styles.heroRightSide}></div>
          </section>
        </main>
        <footer>
          <ul>
            <li>Footer 1</li>
            <li>Footer 2</li>
            <li>Footer 3</li>
            <li>Footer 4</li>
            <li>Footer 5</li>
          </ul>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Apex Logistics | Uychi</title>;
