import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, facilis
          temporibus! Quis, ullam placeat? Perspiciatis, ratione! Repudiandae
          suscipit ipsam et pariatur id quibusdam earum laudantium, nesciunt
          officia dolorum eum nostrum neque totam dolor iste inventore unde
          labore rerum dolore illum ipsum ad repellendus iure? Animi nostrum
          sunt aliquid error porro.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          molestiae quam magni nemo velit temporibus amet, qui commodi cum atque
          voluptate veniam, perspiciatis libero officiis numquam eligendi,
          laboriosam harum ipsa consequatur maxime? Pariatur dignissimos
          exercitationem harum quas illum saepe dolore, tempore, nostrum
          blanditiis velit, eveniet magni dolores adipisci praesentium odio.
        </p>
      </div>
    </div>
  );
};

export default About;
