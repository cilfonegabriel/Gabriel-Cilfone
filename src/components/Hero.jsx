/* eslint-disable */
import { styles } from "../styles";
import myface from "../assets/myface.png";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-5">
          {/* Line Container */}
          <div className="hidden sm:flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 bg-[#915EFF]" />
          </div>

          {/* Text Container */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hello, I'm <span className="text-[#915EFF]">Gabriel Cilfone</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Welcome to my portfolio!<br className="sm:block hidden" />
              I'm a software developer.
            </p>
            <a
              href={resume}
              download="Gabriel_Cilfone_Resume.pdf"
              className="mt-5 inline-block px-6 py-3 bg-[#915EFF] text-white font-bold rounded-lg shadow-lg hover:bg-[#7e4b9e]"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center mt-5 sm:mt-0">
          <img
            src={myface}
            alt="Gabriel Cilfone"
            className="w-[400px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="absolute bottom-32 w-full flex justify-center items-center">
        <a href="#about"></a>
      </div>
    </section>
  );
};

export default Hero;
