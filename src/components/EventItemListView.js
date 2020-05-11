import React, { useState } from "react";

import styled from "styled-components"

import EventItemList from "./EventItemList.js";

function EventItemListView(props){

  const [parameter, setParameter] = useState("all");

  return (
    <div>
      <ParameterButtonsWrapper>
        <ParameterButton active={parameter === "all" ? true : false} onClick={() => { setParameter("all") } }>
            All
        </ParameterButton>
        <ParameterButton active={parameter === "waiting" ? true : false} onClick={() => { setParameter("waiting") } }>
          Waiting
        </ParameterButton>
        <ParameterButton active={parameter === "inProgress" ? true : false} onClick={() => { setParameter("inProgress") } }>
          In progress
        </ParameterButton>
        <ParameterButton active={parameter === "done" ? true : false} onClick={() => { setParameter("done") } }>
          Done
        </ParameterButton>
      </ParameterButtonsWrapper>
      <EventItemList errands={parameter === "all" ? props.errands : props.errands.filter(errand => errand.status === parameter)}/>
    </div>
  );
}

const ParameterButtonsWrapper = styled.div`
  display: flex; 
  justify-content: space-between;
  padding-top: 0px;
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
