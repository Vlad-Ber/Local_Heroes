import React from "react";

import EventItem from "./EventItem.js";

function EventItemListView(props){

    return props.errands.map((errand, i) => (

      <EventItem
        key={i}
        title={errand.title}
        description={errand.description}
        type={errand.type}
        status={errand.status}
      />

    ));
}

export default EventItemListView;
