import React from 'react';
export default class Live2DModels extends React.Component {
    
      
  render(){
    return (
        <div>            
            <div id="live2d-widget" class="live2d-widget-container">
                <div class="live2d-widget-dialog-container">
                    <div class="live2d-widget-dialog">Nani??</div>
                </div>
                <canvas id="live2dcanvas" width="400" height="800"></canvas>
            </div>
        </div>
    )
  };
}
