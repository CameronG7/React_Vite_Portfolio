import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Project } from "./projects/Project";

export const Portfolio = () => {
  return(
    <div className="h-96 carousel carousel-vertical rounded-box min-h-screen">
  <div className="carousel-item h-full">
    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
  </div>
</div>
//   <div className="carousel w-full">
//  <Project/>
//   <div id="slide2" className="carousel-item relative w-full">
//     <img src="src/assets/secondCollab.png" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a> 
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   {/* <div id="slide3" className="carousel-item relative w-full">
//     <img src="src/assets/rps-cottonbro-studio-6153741.jpg" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle">❮</a> 
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div>  */}
//   {/* <div id="slide4" className="carousel-item relative w-full">
//     <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide3" className="btn btn-circle">❮</a> 
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div> */}
// </div>
)
}
