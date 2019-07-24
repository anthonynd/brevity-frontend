import React from 'react';
import { get } from 'axios';

class SummaryViewer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { summaries: {} };

    console.log(props.location.state);

    if (props.location.state && props.location.state.summaries) {
      this.state = { summaries: props.location.state.summaries };
      console.log("redirected to", this.state);
      console.log("props location state", props.location.state);
    } else {
      get("http://localhost:8080/summaries").then(res => {
        this.setState({ summaries: { "Summary": res.data[0] } });
        console.log("standalone", this.state);
        this.forceUpdate();
      });
    }

    // if (!props.location.state || Object.entries(props.location.state.data).length === 0) {
    // } else {
    // }
  }

  render() {
    // const { summary } = props.location.state ? props.location.state : "";
    const summaries = this.state.summaries;

    // return (
    //   <div>
    //     <p>{this.state.summary}</p>
    //   </div>
    // );

    // Multiple summaries
    return Object.entries(summaries).map(([name, summary]) => {
      return (
        <div key={name}>
          <h5>{name}</h5>
          <p>{summary}</p>
        </div>
      );
    });
  }
}

export default SummaryViewer;