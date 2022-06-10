import React from "react";

const NewRules = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="hero min-h-screen bg-[#020b12]">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={require(`../assets/back.png`)}
              className="max-w-sm rounded-lg shadow-2xl"
              alt="Hungry Shark Card"
            />
            <div>
              <h1 className="text-5xl font-bold text-orange-700">
                HUNGRY SHARKS
              </h1>
              <p className="py-6 text-2xl">
                You don't have to swim faster than the Shark! Just faster than
                the person you're with...
              </p>
            </div>
          </div>
        </div>
      </div>

{/* Put the two inner divs in the same column*/}
<div className="flex flex-col justify-center items-center">
    
    <div className="flex flex-row justify-center items-center mb-10">    
    {/*  */}
      <div class="card card-side bg-black shadow-xl w-[600px] mx-5">
        <figure>
          <img
            src={require(`../assets/HS.png`)}
            alt="Hungry Shark Card"
            style={{ width: "200px" }}
          />
        </figure>
        <div class="card-body flex flex-col justify-center items-center">
          <h2 class="card-title text-orange-600 text-3xl">Hungry Shark</h2>
          <h2>Click the button to watch on Jetflix app.</h2>
        </div>
      </div>

      <div class="card card-side bg-black shadow-xl w-[600px] mx-5">
        <div class="card-body flex flex-col justify-center items-center">
          <h2 class="card-title text-orange-600 text-3xl">Sacrificial Goat</h2>
          <h2>Play this card when you draw a Hungry Shark to avoid being eaten. </h2>
          <h1>If you have one, it will be automatically played for you.</h1>
        </div>
        <figure>
          <img
            src={require(`../assets/SG.png`)}
            alt="Movie"
            style={{ width: "200px" }}
          />
        </figure>
      </div>
      {/*  */}



      </div>
      </div>

    </>
  );
};

export default NewRules;