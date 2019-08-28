import React from "react";

const TabItem = (props) => {
  const {idx, setSelected, title} = props;
  return (
    <li className="tab-head" id={idx} key={idx} data-idx={idx} onClick={setSelected}>{title}</li>
  )
};

export default TabItem;