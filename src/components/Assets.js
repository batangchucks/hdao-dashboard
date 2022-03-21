import React from "react";

class Assets extends React.Component {
  render() {
    return (
      <div>
        {/* HDAO Assets */}
        <section class="Treasury bg-green-100 rounded md:mx-24 lg:mx-32 m-4 p-4">
          <h1 class="font-bungee font-bold text-3xl text-center md:text-left">
            HDAO Assets
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-5 lg:gap-2 p-5">
            {/* Investments */}
            <div class="flex flex-wrap text-base rounded-xl p-2">
              <div class="Card-1 bg-yellow-300 rounded-md p-2 w-full md:inline-flex">
                <div class="md:ml-2 flex-col inline-flex w-full">
                  <p class="font-play uppercase text-2xl text-center md:text-left">
                    HDAO Investments
                  </p>
                  <div class="overflow-auto rounded-lg shadow-md">
                    <table class="w-full divide-y divide-gray-200 text-center">
                      <thead class="bg-gray-50">
                        <tr class="">
                          <th>Project</th>
                          <th>Investment Ratio</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                          <td>Project X</td>
                          <td>0.22%</td>
                          <td>$5390 USDC</td>
                        </tr>
                        <tr>
                          <td>Project Y</td>
                          <td>0.22%</td>
                          <td>$2900 USDC</td>
                        </tr>
                        <tr>
                          <td>Project Z</td>
                          <td>0.22%</td>
                          <td>$2430 USDC</td>
                        </tr>
                        <tr>
                          <td>Project X</td>
                          <td>0.22%</td>
                          <td>$5390 USDC</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Treasury */}
            <div class="flex flex-wrap text-base rounded-xl p-2">
              <div class="Card-1 bg-yellow-300 rounded-md p-2 w-full md:inline-flex">
                <div class="md:ml-2 flex-col inline-flex w-full">
                  <p class="font-play uppercase text-2xl text-center md:text-left">
                    HDAO Treasury
                  </p>
                  <div class="overflow-auto rounded-lg shadow-md">
                    <table class="w-full divide-y divide-gray-200 text-center">
                      <thead class="bg-gray-50">
                        <tr class="">
                          <th>Project</th>
                          <th>Investment Ratio</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                          <td>Project X</td>
                          <td>0.22%</td>
                          <td>$5390 USDC</td>
                        </tr>
                        <tr>
                          <td>Project Y</td>
                          <td>0.22%</td>
                          <td>$2900 USDC</td>
                        </tr>
                        <tr>
                          <td>Project Z</td>
                          <td>0.22%</td>
                          <td>$2430 USDC</td>
                        </tr>
                        <tr>
                          <td>Project X</td>
                          <td>0.22%</td>
                          <td>$5390 USDC</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Assets;
