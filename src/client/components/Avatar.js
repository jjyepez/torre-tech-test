import React, { Suspense } from 'react';

export default function Avatar(props) {

   let height = props.height || 60;
   let width = props.width || 50;

   return (
      <Suspense fallback={<div>LOAD</div>}>
         <div
            className="Avatar"
            style={{
               backgroundColor: 'rgba(100,100,100,.5)',
               backgroundImage: `url(${props.imgSrc})`,
               backgroundSize: 'cover',
               clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
               backgroundPosition: 'center',
               padding: 5,
               width: width,
               height: height
            }}
         />
      </Suspense>
   )
}
