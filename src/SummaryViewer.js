import React from 'react';

function SummaryViewer(props) {
  const { summary } = props.location.state ? props.location.state : "";

  return (
    <div>
      <p>{summary}</p>
    </div>
  );

  // // Multiple summaries
  // return Object.entries(props.summaries).map(([name, summary]) => {
  //   return (
  //     <div key={name}>
  //       <h5>{name}</h5>
  //       <p>{summary}</p>
  //     </div>
  //   );
  // });


}

export default SummaryViewer;