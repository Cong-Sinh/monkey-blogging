import React from "react";
import { auth } from "../firebase/firebase-config";
import { signOut } from "firebase/auth";
import styled from "styled-components";
import Header from "../components/layout/Header";
import HomeBanner from "../module/home/HomeBanner";
import Layout from "../components/layout/Layout";
import HomeFeature from "../module/home/HomeFeature";
import HomeNewest from "../module/home/HomeNewest";

const HomePageStyles = styled.div``;

const HomePage = () => {
  return (
    <HomePageStyles>
      <Layout></Layout>
      <HomeBanner></HomeBanner>
      <HomeFeature></HomeFeature>
      <HomeNewest></HomeNewest>
    </HomePageStyles>
  );
};

export default HomePage;
