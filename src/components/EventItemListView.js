import React from "react";

import EventItem from "./EventItem.js";

function EventItemListView(props){

    return props.errands.map((errand, i) => (

      <EventItem
        key={i}
        fullView={false}
        errand={errand}
      />

    ));
}

export default EventItemListView;
