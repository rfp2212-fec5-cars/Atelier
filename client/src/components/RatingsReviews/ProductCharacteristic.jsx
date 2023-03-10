import React from 'react';

var ProductCharacteristic = ({ type, info }) => {
  let left, middle, right;
  if (type === 'Comfort' || type === 'Quality') {
    left = 'poor';
    middle = '';
    right = 'perfect';
  } else {
    left = 'too small';
    middle = 'perfect';
    right = 'too large';
  }
  //the length of the whole 3 bar is 250px
  //we minus 8 because if info.value is 5, 定位符的最左侧指向bar的尾端，而不是我们想看到的定位符中间,8是实验来的
  let moving = (info.value / 5) * 250 - 8;
  return (
    <div className='characteristic'>
      <div>{type}</div>
      <div>
        <div className='pointer' style={{ marginLeft: `${moving + 'px'}` }}>▼</div>
        <div className='leftbar'></div>
        <div className='middlebar'></div>
        <div className='rightbar'></div>
      </div>

      <div className='producttext'>
        <div className='bar-text'>{left}</div>
        <div className='bar-text'>{middle}</div>
        <div className='bar-text'>{right}</div>
      </div>
    </div>

  );
};
export default ProductCharacteristic;