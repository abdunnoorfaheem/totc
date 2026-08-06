import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrivalCourse from "../layouts/ArrivalCourse";
import Banner from "../layouts/Banner";
import Counter from "../layouts/Counter";
import Portal from "../layouts/Portal";
import Service from "../layouts/Service";
import Container from "../Container";
import Heading from "../Heading";
import Material from "../layouts/Material";

const Home = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    async function viewData() {
      try {
        let dataAll = await axios.get("https://dummyjson.com/products");
        setData(dataAll.data.products);
      } catch (error) {
        console.error("Data fetching error:", error);
      }
    }
    viewData();
  }, []); 

  return (
    <>
      <Banner />
      <Counter />
      <Service />
      <Portal />

      <Container>
        <Heading
          Tag="h3"
          className="text-[44px] font-semibold font-poppins text-[#2F327D] py-10 text-center"
        >
          Arrival Courses
        </Heading>

        <div className="flex flex-wrap gap-6 justify-center">
          {data.map((item) => (
            <div className="w-full md:w-[23%]" key={item.id}>
              <ArrivalCourse
                ImageSrc={item.thumbnail}
                headingText={item.title}
                paragraphText={item.description}
              />
            </div>
          ))}
        </div>
      </Container>
      <Material/>
    </>
  );
};

export default Home;