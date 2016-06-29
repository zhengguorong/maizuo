/**
 * Created by zhengguorong on 16/6/29.
 */
import React from 'react';
import ReactSwipe from 'react-swipe';

class BillboardCarousel extends React.Component {
  render() {
    return (
      <ReactSwipe className="carousel" swipeOptions={{continuous: true}}>
        <div>PANE 1</div>
        <div>PANE 2</div>
        <div>PANE 3</div>
      </ReactSwipe>
    );
  }
}

export default BillboardCarousel;
