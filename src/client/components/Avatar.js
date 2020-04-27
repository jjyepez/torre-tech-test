import React from 'react';

export default function Avatar(props) {
   return (
      <div
         style={{
            padding: 5,
            backgroundImage: `url(${props.imgSrc})`,
            backgroundSize: 'cover',
            width: 56,
            height: 64,
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            backgroundPosition: 'center'
         }}
      ></div>
   )
}
