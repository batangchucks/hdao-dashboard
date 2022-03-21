import React from "react";

class Milestone extends React.Component {
  render() {
    return (
      <div>
        {/* HDAO Milestones */}
        <section class="Milestones bg-green-100 rounded md:mx-24 lg:mx-32 m-4 md:mt-20 p-4">
          <h1 class="font-bungee font-bold text-3xl text-center md:text-left">
            HDAO MILESTONES
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-5 lg:gap-2 p-5">
            <div class="flex p-2 flex-wrap">
              <div class="Card-1 bg-yellow-300 rounded-md p-2 w-full text-center justify-center flex-wrap md:inline-flex">
                <img
                  class="bg-white rounded-full h-24 w-24 justify-center"
                  src="https://res.cloudinary.com/daljbo1q0/image/upload/v1647269020/hdao-dashboard/graduationcap_1_cumw3d.png"
                ></img>
                <div class="md:ml-2 text-center justify-center md:flex-col">
                  <p class="font-play font-bold text-3xl text-center justify-center">
                    Scholars
                  </p>
                  <p class="font-press-start font-bold text-3xl md:text-5xl text-center justify-center">
                    1000
                  </p>
                </div>
              </div>
            </div>
            <div class="flex p-2">
              <div class="Card-1 bg-yellow-300 rounded-md p-2 w-full text-center justify-center flex-wrap md:inline-flex">
                <img
                  class="bg-white rounded-full h-24 w-24 justify-center"
                  src="https://res.cloudinary.com/daljbo1q0/image/upload/v1647341230/hdao-dashboard/meal_rc3bvd.png"
                ></img>
                <div class="md:ml-2 text-center justify-center md:flex-col">
                  <p class="font-play font-bold text-2xl text-center justify-center">
                    Meals Provided
                  </p>
                  <p class="font-press-start font-bold text-3xl md:text-5xl text-center justify-center">
                    1200
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Milestone;
