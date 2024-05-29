import React from 'react';
import Carousel from './components/CardCarouselFigo';



const Services = () => {
  return (
    <div id="services">

     <div className="whitebg">
       <h3 className="pt-6 pb-3 text-center text-2xl"><span className="bibbi">Worldwide Goods Transport</span></h3>
       <p className="pb-6 px-4 text-center font-light">Reserve a courier that will directly take care of your parcel for its whole trip by travelling with it and applying strict handling procedures.
        <br/> We offer daily and overnight deliveries, call us and we'll find the fastest way together.
       </p>
       <div className="flex justify-content-center items-center bg-[#f57af19a] min-h-[10vh] w-full"><h4 className="w-80 text-center text-white font-bold">OUR COURIERS CAN LEAVE UP TO 20 MINUTES AFTER THE FIRST CONTACT!</h4></div>

       <Carousel />
     </div>
     <div>
      <h3 className="pt-6 pb-6 text-center text-2xl"><span className="bibbi">Human and Pets Transport</span></h3>
      <p className="pb-6 px-4 text-center font-light">Need someone to take care of your kids during a flight? You want for an old dear relative to travel always safe and take care of? Or maybe you just miss your pet and want to see it for a couple of days?
       <br/><br/> TreatsExpress' transporters will find a way to satisfy any request you have in the fastest way always placing at the first place the passenger comfort and wellness
      </p>
     </div>
     <div className="flex justify-content-center items-center bg-[#f57af19a] min-h-[10vh] w-full"><h4 className="w-80 text-center text-white font-bold">OUR COURIERS CAN LEAVE UP TO 20 MINUTES AFTER THE FIRST CONTACT!</h4></div>
     <div className="bgMi py-16">
       <div className="bg-[#ffffff90]">
        <h3 className="pt-6 pb-6 text-center text-2xl"><span className="bibbi">Let's find it!</span></h3>
        <p className="pb-6 px-4 text-center font-light">Our team is based in Milano, Italy and has lots of connections everywhere around the world, that's why we can find and provide you whatever you need and whenever you need.
         <br/> <br/>  It's not only about the search and the pick up of rare products but also a complete support to find professionals of every kind during your trips</p>
       </div>

     </div>

    </div>
  );
};

export default Services;
