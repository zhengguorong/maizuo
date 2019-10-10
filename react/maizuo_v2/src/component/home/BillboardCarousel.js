/**
 * Created by zhengguorong on 16/6/29.
 */
import React from 'react';
import ImagePlaceholder from '../common/ImagePlaceholder';
import ReactSwipe from 'react-swipe';

function BillboardCarousel(props) {
  const { billboards = [] } = props;
  return (
    <ReactSwipe
      key={billboards.length}
      className="carousel"
      swipeOptions={{ continuous: true, auto: 3000 }}
    >
      {billboards.map((billboard, i) => (
        <div key={i}>
          <ImagePlaceholder
            src={billboard.imgUrl}
            placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"
          />
        </div>
      ))}
    </ReactSwipe>
  );
}

export default BillboardCarousel;
