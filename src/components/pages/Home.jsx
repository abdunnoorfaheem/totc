import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Banner from "../layouts/Banner";
import Counter from "../layouts/Counter";
import Portal from "../layouts/Portal";
import Service from "../layouts/Service";
import Container from "../Container";
import Heading from "../Heading";
import Material from "../layouts/Material";
import Features from "../layouts/Features";
import ArrivalCourse from "../layouts/ArrivalCourse";
import { DataContext } from "../../context/DataContext";


const Home = () => {

let {products} =useContext(DataContext);

let productData= products || []

console.log(productData)
  

  return (
    <>
      <Banner />
      <Counter />
      <Service />
      <Portal />
 
      <Container>
        <div className="flex flex-wrap py-10 gap-x-5 gap-y-10">
            {
        productData.map((item)=>(
          <div className="w-[24%] ">
            
              <ArrivalCourse ImageSrc={item.thumbnail} headingText={item.title} paragraphText={item.decription} />
            
          </div>
        ))
      }
        </div>
      </Container>

      <Material/>
      <Features/>
    
      
      
    </>
  );
};

export default Home;