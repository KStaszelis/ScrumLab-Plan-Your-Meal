import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import AboutAuthor from "./AboutAuthor";
import PageFooter from "./PageFooter";
import CallToAction from "./CallToAction";
import Form from "./Form";
import InProgress from "./InProgress"

const MainPage = () => {
  return (
      <div>
        <Header/>
        <Carousel/>

        <CallToAction/>
        <InProgress/>
        <Form/>
        <AboutAuthor/>
        <PageFooter/>
      </div>
  );
};

export default MainPage;
