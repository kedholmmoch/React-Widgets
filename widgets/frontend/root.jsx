import React from "react";
import Clock from "./clock";
import Tabs from "./tabs";
import Weather from "./weather";

const Root = () => {
  const contents = [
    {
      title: 'First Tab',
      content: 'This is content'
    },
    {
      title: 'Second Tab',
      content: 'Alex is content'
    },
    {
      title: 'Third Tab',
      content: 'Kevin is content'
    },
  ];
  return (
    <div>
      <Clock />
      <Weather />
      <Tabs content={contents} />
    </div>
  )
};

export default Root;