import React from 'react';

export default function MobileSingleFeature3() {
  return (
    <div className='MobileSingleFeature MobileSingleFeature3'>
      <div className='MobileFeatureImageFrame'>
        <div className='MobileFeatureImage'></div>
      </div>

      <div className='MobileFeatureDescriptionWrap'>
        <h4 className='MobileFeatureTitle'>Hladna Predjela</h4>

        <p className='MobileFeatureText'>
          Lorem ipsum dolor sit amet, his alia sanctus id, eam ea quis error. Eu
          mei aeque dissentiunt, mei an wisi elaboraret, cu nam utamur torquatos
          dissentiet.{' '}
        </p>

        <a href='http://localhost:3000/menu'>
          <button className='MobileFeatureButton'>
            <h6 className='MobileFeatureButtonText'>Jelovnik</h6>
            <div className='MobileFeatureButtonTextUnderline'></div>
          </button>
        </a>
      </div>
    </div>
  );
}
