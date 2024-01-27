import React from "react";

const Home = () => {
  return (
    <>
      <div className='hero border-1 pb-3'>
        <div className='card bg-dark text-white border-0 mx-3'>
          <img
            className='card-img img-fluid'
            src='./assets/myBanner.jpg'
            alt='Card'
            height={500}
          />
          <div className='card-img-overlay d-flex align-items-center'>
            <div className='container'>
              <h5 className='card-title fs-1 text fw-lighter text-dark'>
                New Season Arrivals
              </h5>
              <p className='card-text fs-5 d-none d-sm-block text-dark w-50'>
                Unlock a world of perks with our app-exclusive offers. Enjoy a
                50% discount on your first purchase, and keep an eye out for
                personalized recommendations crafted just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
