import React from 'react';

import ReactPlayer from 'react-player';

class VideoContainer extends React.Component {
  render() {
    return (
      <div style={{marginTop: '120px'}}>
        <ReactPlayer width="100%" height="70vh" url="https://www.youtube.com/watch?v=09F3Za2qIgQ" />
      </div>
    )
  }
}

export default VideoContainer;