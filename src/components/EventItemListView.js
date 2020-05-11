import React, { useState } from "react";

import styled from "styled-components"

import EventItemList from "./EventItemList.js";

function EventItemListView(props){

  const [parameter, setParameter] = useState("all");

  const getAllErrands = () => {
    setParameter("all")
  }
  const getWaitingErrands = () => {
    setParameter("waiting")
  }
  const getInProgressErrands = () => {
    setParameter("inProgress")
  }
  const getDoneErrands = () => {
    setParameter("done")
  }
  
  return (
    <div>
      <ParameterButtonsWrapper>
        <ParameterButton active={parameter === "all" ? true : false} onClick={getAllErrands}>All</ParameterButton>
        <ParameterButton active={parameter === "waiting" ? true : false} onClick={getWaitingErrands}>Waiting</ParameterButton>
        <ParameterButton active={parameter === "inProgress" ? true : false} onClick={getInProgressErrands}>In progress</ParameterButton>
        <ParameterButton active={parameter === "done" ? true : false} onClick={getDoneErrands}>Done</ParameterButton>
      </ParameterButtonsWrapper>
      <EventItemList errands={parameter === "all" ? props.errands : props.errands.filter(errand => errand.status === parameter)}/>
    </div>
  );
}

const ParameterButtonsWrapper = styled.div`
  display: flex; 
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
`;

const ParameterButton = styled.button`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: ${props => props.active ? "700" : "500"}; 
  opacity: ${props => props.active ? "1" : "0.5"}
`;

export default EventItemListView;
