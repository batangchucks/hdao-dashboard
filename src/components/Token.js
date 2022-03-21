import React from "react";

class Token extends React.Component {
  render() {
    return (
      <div>
        {/* HDAO TOKEN */}
        <section class="Token bg-green-100 rounded md:mx-24 lg:mx-32 m-4 p-4">
          <h1 class="font-bungee font-bold text-3xl text-center md:text-left">
            HDAO TOKEN
          </h1>
          {/* Token Info */}
          <span class="mt-5 ml-4 flex items-end font-bold font-play text-7xl w-full">
            <img src="https://res.cloudinary.com/daljbo1q0/image/upload/v1647269020/hdao-dashboard/hdao_token_2_2_aejhrn.png"></img>
            1.25 <span class="text-xl">USD</span>
          </span>
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-rows-2 lg:grid-flow-col gap-2 md:gap-3 lg:gap-2 flex-wrap  p-5">
            <div class="row-span-4">
              <div class="flex flex-wrap  rounded-xl p-2">
                <div class="Card-1 bg-yellow-300 rounded-md p-2 w-full lg:max-h-96 text-center justify-center lg:inline-flex">
                  <img
                    class="bg-white rounded-md w-full justify-center"
                    src="https://www.pngkey.com/png/full/431-4311003_chart-upward-upward-chart.png"
                  ></img>
                </div>
              </div>
              <div class="p-2">Price change over 24 hours</div>
            </div>
            <div class="col-span-1">
              <div class="flex  rounded-xl p-2">
                <div class="Card-2 bg-yellow-300 rounded-md p-2 w-full md:inline-flex">
                  <div class="md:ml-2 flex-col inline-flex">
                    <p class="font-play uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl">
                      Circulating Supply
                    </p>
                    <p class="font-press-start font-bold text-lg sm:text-xl lg:text-3xl -tracking-24">
                      5000000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1">
              <div class="flex  rounded-xl p-2">
                <div class="Card-1 bg-yellow-300 rounded-md p-2 w-full md:inline-flex">
                  <div class="md:ml-2 flex-col inline-flex">
                    <p class="font-play uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl">
                      Market Cap
                    </p>
                    <p class="font-press-start font-bold text-lg sm:text-xl lg:text-3xl -tracking-24">
                      5000000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1">
              <div class="flex  rounded-xl p-2">
                <div class="Card-1 bg-yellow-300 rounded-md p-2 w-full md:inline-flex">
                  <div class="md:ml-2 flex-col inline-flex">
                    <p class="font-play uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl">
                      Fully Diluted Supply
                    </p>
                    <p class="font-press-start font-bold text-lg sm:text-xl lg:text-3xl -tracking-24">
                      5000000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Holders and Staking */}
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-5 lg:gap-2 p-5">
            <div class="flex  rounded-xl p-2">
              <div class="Card-1 bg-yellow-300 rounded-md p-2 w-full flex-wrap md:inline-flex">
                <div class="md:ml-2 flex-col inline-flex">
                  <p class="font-play uppercase text-lg sm:text-lg lg:text-3xl">
                    Token holders over time
                  </p>
                  <p class="font-press-start font-bold text-lg sm:text-xl lg:text-3xl -tracking-24">
                    66000000
                  </p>
                  <img
                    class="bg-white"
                    src="https://www.pngkey.com/png/full/431-4311003_chart-upward-upward-chart.png"
                  ></img>
                </div>
              </div>
            </div>
            <div class="flex  rounded-xl p-2">
              <div class="Card-1 bg-yellow-300 rounded-md p-2 w-full md:inline-flex">
                <div class="md:ml-2 flex-col inline-flex">
                  <p class="font-play uppercase text-lg sm:text-xl lg:text-3xl">
                    Percent staking
                  </p>
                  <p class="font-press-start font-bold text-lg sm:text-xl lg:text-3xl -tracking-24">
                    30%
                  </p>
                  <img
                    class="bg-white"
                    src="https://www.pngkey.com/png/full/431-4311003_chart-upward-upward-chart.png"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Token;
