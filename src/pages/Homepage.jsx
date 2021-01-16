import React from "react";
import { GlobalStyles } from "../components/GlobalStyles";
import { Layout } from "../components/Layout";
import { TitleSection } from "../sections/Title";
import { DetailsSection } from "../sections/practices/Details";
import { Footer } from "../sections/Footer";

export const Homepage = (props) => (
  <Layout>
    <GlobalStyles />
    <TitleSection />
    <DetailsSection />
    <Footer />
  </Layout>
);
