import React, { Component } from "react";

import EventItem from "./EventItem.js";

class EventItemListView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      requests: [
        "Maria helped Lisa carry a sofa",
        "Maria helped Lisa carry a sofa",
        "Maria helped Lisa carry a sofa",
        "Maria helped Lisa carry a sofa",
      ],
      title: ["Event", "Event", "Event", "Event"],
    };
  }

  render() {
    return this.state.requests.map((desc, i) => (
      <EventItem key={i} title={this.state.title[i]} description={desc} />
    ));
  }
}

export default EventItemListView;
