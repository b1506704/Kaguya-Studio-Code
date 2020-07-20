import React from 'react';
export default class Live2DModels extends React.Component {    
      
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render(){
    
    return (
      <div>            
      <div id="live2d-widget" className="live2d-widget-container">
        <div className="live2d-widget-dialog-container">
          <div className="live2d-widget-dialog">Nani??</div>
        </div>
        <canvas id="live2dcanvas" width={400} height={800} />
      </div>
    </div>
  )
    
  };
}
