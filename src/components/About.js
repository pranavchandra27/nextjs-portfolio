import React from "react";

const About = () => {
  return (
    <section className="mt-20" id="about">
      <div className="h-1 mb-4 w-20 rounded bg-gradient-to-r from-green-400 to-blue-500" />
      <h2 className="text-xl md:text-3xl mb-2 font-bold text-gray-800 dark:text-gray-50">
        About Me
      </h2>
      <p className="text-gray-500 dark:text-gray-400 md:text-lg max-w-4xl font-light">
        I am a passionate self-taught developer with over four years of
        professional experience in web development and a bachelor's degree in
        mathematics. I specialize in creating dynamic and responsive web
        applications using technologies like React, Node.js, and Tailwind CSS.
        My dedication to continuous learning has led me to explore cutting-edge
        advancements in technology, such as AI and blockchain.
      </p>

      <div className="mt-8">
        <h4 className="font-medium text-lg text-gray-700 dark:text-gray-300">
          Highlights
        </h4>

        <ul className="mt-4 list-disc pl-10 flex flex-col gap-2">
          <li className="font-light max-w-3xl leading-8 text-gray-600 dark:text-gray-400">
            <strong className="font-bold text-gray-700 dark:text-gray-300">Professional Experience:</strong>{" "}
            Developed and maintained several high-traffic web applications,
            improving user engagement by 30%.
          </li>
          <li className="font-light max-w-3xl leading-8 text-gray-600 dark:text-gray-400">
            <strong className="font-bold text-gray-700 dark:text-gray-300">Projects:</strong> Created an
            AI-driven news content creator and a social engagement platform,
            both showcasing unique personalized user experiences.
          </li>
          <li className="font-light max-w-3xl leading-8 text-gray-600 dark:text-gray-400">
            <strong className="font-bold text-gray-700 dark:text-gray-300">Achievements:</strong> Recognized as
            Employee of the Year at Panxora.io, and consistently received top
            performance reviews.
          </li>
          <li className="font-light max-w-3xl leading-8 text-gray-600 dark:text-gray-400">
            <strong className="font-bold text-gray-700 dark:text-gray-300">Technical Skills:</strong> Proficient
            in JavaScript, TypeScript, React, Next.js, Node.js, Express,
            MongoDB, and more.
          </li>
          <li className="font-light max-w-3xl leading-8 text-gray-600 dark:text-gray-400">
            <strong className="font-bold text-gray-700 dark:text-gray-300">Personal Interests:</strong> Beyond
            coding, I immerse myself in topics like automobiles and nature. I
            also enjoy cinema and culinary arts, constantly exploring new
            recipes and techniques.
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="font-medium text-lg">Why Choose Me?</h4>
        <p className="dark:text-gray-400 text-gray-600 md:text-lg mt-4 text-base max-w-4xl">
          My blend of technical skills, creative problem-solving, and passion
          for continuous improvement makes me a valuable asset. I am committed
          to delivering high-quality, innovative solutions that drive business
          success.
        </p>
      </div>
    </section>
  );
};

export default About;
