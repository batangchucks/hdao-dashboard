import React from "react";

class Growth extends React.Component {
  render() {
    return (
      <div>
        {/* Growth */}
        <section class="Social bg-green-100 rounded md:mx-24 lg:mx-32 m-4 md:mt-20 p-4">
          <h1 class="font-bungee font-bold text-3xl text-center md:text-left">
            HDAO SOCIAL
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-1 md:gap-5 lg:gap-2 p-5">
            <div class="flex p-2">
              <div class="Card-1 bg-yellow-300 rounded-md p-2 w-full text-center justify-center flex-wrap md:inline-flex">
                <img
                  class="bg-white rounded-full h-24 w-24 justify-center"
                  src="https://res.cloudinary.com/daljbo1q0/image/upload/v1647269020/hdao-dashboard/fb-icon_hmaj16.png"
                ></img>
                <div class="md:ml-2 text-center justify-center md:flex-col">
                  <p class="font-play font-bold text-2xl text-center justify-center">
                    Facebook Likes
                  </p>
                  <p class="font-press-start font-bold text-3xl md:text-5xl text-center justify-center">
                    10000
                  </p>
                </div>
              </div>
            </div>
            <div class="flex p-2">
              <div class="Card-1 bg-yellow-300 rounded-md p-2 w-full text-center justify-center flex-wrap md:inline-flex">
                <img
                  class="bg-white rounded-full h-24 w-24 justify-center"
                  src="https://res.cloudinary.com/daljbo1q0/image/upload/v1647269021/hdao-dashboard/twitter-icon_wblebw.png"
                ></img>
                <div class="md:ml-2 text-center justify-center md:flex-col">
                  <p class="font-play font-bold text-2xl text-center justify-center">
                    Twitter Followers
                  </p>
                  <p class="font-press-start font-bold text-3xl md:text-5xl text-center justify-center">
                    10000
                  </p>
                </div>
              </div>
            </div>
            <div class="flex p-2">
              <div class="Card-1 bg-yellow-300 rounded-md p-2 w-full text-center justify-center flex-wrap md:inline-flex">
                <img
                  class="bg-white rounded-full h-24 w-24 justify-center"
                  src="https://res.cloudinary.com/daljbo1q0/image/upload/v1647269020/hdao-dashboard/discord-icon_okqyhu.png"
                ></img>
                <div class="md:ml-2 text-center justify-center md:flex-col">
                  <p class="font-play font-bold text-2xl text-center justify-center">
                    Discord Members
                  </p>
                  <p class="font-press-start font-bold text-3xl md:text-5xl text-center justify-center">
                    50000
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

export default Growth;
