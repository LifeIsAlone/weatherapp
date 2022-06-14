import React from "react";
import Container from "./layout/Container";
import Highlights from "./layout/Highlights";
import Sidebar from "./layout/Sidebar";
import Today from "./layout/Today";
import Week from "./layout/Week";
import Header from "./layout/Header";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Container>
        <Header />
        <Week />
        <Today />
        <Highlights />
      </Container>
    </>
  );
};

export default Dashboard;
