import React from 'react';

import ReactPlayer from 'react-player';

class VideoContainer extends React.Component {
  render() {
    return (
      <div style={{marginTop: '120px'}}>
        <ReactPlayer width="100%" height="70vh" url="https://www.youtube.com/watch?v=_BUjR7dpbLU&list=RDQM9zOLFcIl-Nw&index=2" />
      </div>
    )
  }
}

export default VideoContainer;