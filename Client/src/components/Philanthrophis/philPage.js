import React from "react";
import Headphil from "./headphil";
export const Page = () => {
  return (
    <div>
      <Headphil />
      <div className="flex flex-col items-center my-10 mt-[5rem]">
        <div className="text-3xl font-bold mb-5 p-3">Welcome Philanthropist</div>
        <p className="text-2xl text-gray-700 mb-3">
          Th world is dedicated to spreading kindness and making the world a
          better place.
        </p>
        <div className="w-3/4 bg-white rounded-lg shadow-xl mt-[2rem]">
          <p className="text-gray-700 mb-10 text-2xl mt-8">
            A kind-hearted individual dedicated to making the world a better 
            place. In today's world, non-government organizations (NGOs) play 
            critical role in addressing a wide range of pressing social and
            environmental issues. They work tirelessly to improve communities,
            protect the environment, and make the world a better place for all.
            However, many NGOs face significant challenges in securing the
            funding they need to carry out their important work. This is where
            philanthropists like you come in.
          </p>
          <p className="text-gray-700 mb-10 text-2xl">
            By bridging the gap between you and NGOs, our platform
            offers a unique opportunity to make a real difference in the world.
            you can support organizations that align with their
            values and goals, and NGOs can secure the funding they need to carry
            out their important work. In this way, our platform serves as a
            powerful tool for making a positive impact and bringing about
            meaningful change.
          </p>
        </div>
        </div>
      </div>
  );
};
export default Page;
