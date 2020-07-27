import React from 'react';

export default class Live2DModels extends React.Component {    
      
  constructor(props) {
    super(props);
    this.state = {
      dialog: '',
    };
  }
  render(){
    
    return (
      <div>            
      <div id="live2d-widget">
        <div className="live2d-widget-dialog-container">
          <div className="live2d-widget-dialog"></div>
        </div>
        <canvas id="live2dcanvas" width={400} height={800} />
      </div>
    </div>
  )
    
  };
}
