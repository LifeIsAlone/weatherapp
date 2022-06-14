import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Container from "./layout/Container";
import Highlights from "./layout/Highlights";
import Sidebar from "./layout/Sidebar";
import Today from "./layout/Today";
import Week from "./layout/Week";
import Header from "./layout/Header";
import Spinner from "./elements/Spinner";
import SpinnerContainer from "./elements/SpinnerContainer";
import { StyledGlobal, StyledDashboard } from "../styles";
import { themeLight, themeDark } from "../constants";
import { useImageFetch } from "../hooks/useImageFetch";
import { useNightMode } from "../hooks/useNightMode";
import { useTempUnit } from "../hooks/useTempUnit";
import { SEARCH_BY_WORD } from "../api";

const Dashboard = () => {
  return (
    <ThemeProvider>
      <StyledDashboard>
        <Sidebar />
        <Container>
          <Header />
          <Week />
          <Today />
          <Highlights />
        </Container>
      </StyledDashboard>
    </ThemeProvider>
  );
};

export default Dashboard;
