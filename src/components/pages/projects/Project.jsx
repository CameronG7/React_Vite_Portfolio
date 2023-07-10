import React from "react";
import { useState } from "react";

import { useMediaQuery } from "react-responsive";



export const Project = (props) => {

  return(
    
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://user-images.githubusercontent.com/122588135/228051187-c4fcc27b-4c28-42aa-aa6d-4ebebd7e46a0.png" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
   
  
  )

}