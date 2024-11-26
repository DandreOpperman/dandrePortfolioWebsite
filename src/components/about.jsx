export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Dandre Opperman.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a highly enthusiastic, energetic and creative individual, with
            a passion for learning looking to kick start my career in software
            development. Recently, I made the change from healthcare to tech,
            completing a software development bootcamp. Learning the
            fundamentals of full stack web development has only increased my
            passion for technology.
            <br />
            <br />
            Having worked full time whilst studying my A-Levels, including
            working abroad for years, and months of triple 12-hour night shifts,
            I can say confidently that I enjoy working hard and studying hard.
            If you are looking to hire someone who not only works hard, thrives
            under pressure, and is highly adaptable but also has exceptional
            interpersonal skills, I believe I would be an ideal candidate.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              View my Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Dandre.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
