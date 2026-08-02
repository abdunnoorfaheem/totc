import React from "react";
import Container from "../Container";
import Image from "../Image";
import ServiceOne from "../../assets/serviceOne.png";
import ServiceTwo from "../../assets/serviceTwo.png";
import ServiceThree from "../../assets/serviceThree.png";

const Service = () => {
  return (
    <>
      <section>
        <Container>
          <div className="py-25 text-center">
            <h4 className="text-4xl font-bold font-poppins text-[#2F327D]">
              All-In-One <span className="text-[#00CBB8]">Cloud Software.</span>
            </h4>
            <p className="w-171.25 text-xl font-normal text-[#696984] m-auto mt-5">
              TOTC is one powerful online software suite that combines all the
              tools needed to run a successful school or office.
            </p>
          </div>
          <div className="py-30 border">
            <div className="md:flex justify-between mb-5">
              <div className="px-13.5 pt-30.5 pb-12.5 shadow-box rounded-[20px] relative md:w-[32%] border  /">
               <div className="text-center">
                 <Image imgSrc={ServiceOne} imgAlt={"service-image"} className={" absolute  top-0 left-[50%] -translate-1/2"}/>
                <h5 className="text-[#2F327D] text-3xl font-medium font-poppins w-85.75 text-center mb-6 m-auto">
                  Online Billing, Invoicing, & Contracts
                </h5>
                <p className="text-[#696984] text-[20px] font-poppins font-normal w-85.25  m-auto">
                  Simple and secure control of your organization’s financial and
                  legal transactions. Send customized invoices and contracts
                </p>
               </div>
              </div>
              <div className="px-13.5 pt-30.5 pb-12.5 shadow-box rounded-[20px] relative md:w-[32%] border /">
               <div className="text-center">
                 <Image imgSrc={ServiceTwo} imgAlt={"service-image"} className={" absolute  top-0 left-[50%] -translate-1/2"}/>
                <h5 className="text-[#2F327D] text-3xl font-medium font-poppins w-85.75 text-center mb-6 m-auto">
                  Online Billing, Invoicing, & Contracts
                </h5>
                <p className="text-[#696984] text-[20px] font-poppins font-normal w-85.25  m-auto">
                  Simple and secure control of your organization’s financial and
                  legal transactions. Send customized invoices and contracts
                </p>
               </div>
              </div>
              <div className="px-13.5 pt-30.5 pb-12.5 shadow-box rounded-[20px] relative md:w-[32%] border /">
               <div className="text-center">
                 <Image imgSrc={ServiceThree} imgAlt={"service-image"} className={" absolute  top-0 left-[50%] -translate-1/2"}/>
                <h5 className="text-[#2F327D] text-3xl font-medium font-poppins w-85.75 text-center mb-6 m-auto">
                  Online Billing, Invoicing, & Contracts
                </h5>
                <p className="text-[#696984] text-[20px] font-poppins font-normal w-85.25  m-auto">
                  Simple and secure control of your organization’s financial and
                  legal transactions. Send customized invoices and contracts
                </p>
               </div>
              </div>
              
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Service;
