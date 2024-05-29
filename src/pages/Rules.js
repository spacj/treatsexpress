import React from 'react';

const Rules = () => {
  return (
    <div id="rules">
      <h3 className="pt-6 pb-3 text-center text-2xl"><span className="bibbi">Our Policies</span></h3>
      <div className="flex justify-content-center items-center min-h-[10vh] w-full"><h4 className="w-80 text-center font-light py-3 px-2">In order to guarantee the best experience both for you and us we have some policies that we ask you to read. <br/> Inquiring us means accepting our terms and conditions</h4></div>

      <div className="rule flex flex-row w-[100vw] bg-[#f57af19a]">
        <div className="rule-text w-[60%] text-white p-2">
         <h3 className="bordino mb-2">1. Let us know!</h3>
         <p>Provide us specifics about what our transporters will bring around, this helps to make burocracy faster and to choose the best shipping method</p>
        </div>
        <img className="w-[40%]" />
      </div>

      <div className="rule flex flex-row w-[100vw]">
       <img className="w-[40%]" />
       <div className="rule-text w-[60%] p-2">
         <h3 className="bordino mb-2">1. Let us know!</h3>
         <p>Provide us specifics about what our transporters will bring around, this helps to make burocracy faster and to choose the best shipping method</p>
        </div>
        </div>
        <div className="rule flex flex-row w-[100vw] bg-[#f57af19a] ">
          <div className="rule-text w-[60%] p-2 text-white">
           <h3 className="bordino mb-2">1. Let us know!</h3>
           <p>Provide us specifics about what our transporters will bring around, this helps to make burocracy faster and to choose the best shipping method</p>
          </div>
          <img className="w-[40%]" />
        </div>

        <div className="rule flex flex-row w-[100vw]">
         <img className="w-[40%]" />
         <div className="rule-text w-[60%] p-2">
           <h3 className="bordino mb-2">1. Let us know!</h3>
           <p>Provide us specifics about what our transporters will bring around, this helps to make burocracy faster and to choose the best shipping method</p>
          </div>
          </div>
    </div>
  );
};

export default Rules;
