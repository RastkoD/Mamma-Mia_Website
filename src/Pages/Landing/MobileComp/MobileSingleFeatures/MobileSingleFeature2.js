import React from 'react';

export default function MobileSingleFeature2() {
  return (
    <div className='MobileSingleFeature MobileSingleFeature2'>
      <div className='MobileFeatureImageFrame'>
        <div className='MobileFeatureImage'></div>
      </div>

      <div className='MobileFeatureDescriptionWrap'>
        <h4 className='MobileFeatureTitle'>Pica Majstori</h4>

        <p className='MobileFeatureText'>
          Naši pica majstori su završili obuku u prestižnoj Scoula Italiana
          Pizzoli. Pice se peku u najboljim pica pećima iz Italije.
        </p>

        <a href='http://localhost:3000/ourstory'>
          <button className='MobileFeatureButton'>
            <h6 className='MobileFeatureButtonText'>O nama</h6>
            <div className='MobileFeatureButtonTextUnderline'></div>
          </button>
        </a>
      </div>
    </div>
  );
}
