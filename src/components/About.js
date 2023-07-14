import React from "react";

const About = () => {
  return (
    <section className="mt-10" id="about">
      <div className="h-1.5 mb-10 w-20 rounded bg-gradient-to-r from-green-400 to-blue-500" />
      <h2 className="md:text-6xl text-3xl md:mb-10 mb-2 font-semibold text-gray-50">
        About Me
      </h2>
      <p className="text-gray-400 md:text-xl text-base md:font-medium max-w-4xl">
        I am a self-taught developer who exhibits a strong passion for
        continuous learning and a relentless pursuit of valuable knowledge. With
        over four years of professional experience in web development and
        possessing a bachelor's degree in mathematics, I actively engage in
        exploring the latest advancements in technology. My intellectual
        curiosity extends beyond the realm of coding as I enjoy immersing myself
        in topics such as automobiles and other areas of personal interest.
        Furthermore, I find solace in the world of cinema and appreciate the
        wonders of nature. Additionally, I take pleasure in the culinary arts
        and find joy in the act of cooking.
      </p>
    </section>
  );
};

export default About;
