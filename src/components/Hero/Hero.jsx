import "./Hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      straggerChildren: 0.1,
      duration: 1.2,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",

    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        {/* <div className="flex"> */}
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Aftab Khan</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            src="./scroll.png"
            variants={textVariants}
            animate="scrollButton"
          ></motion.img>
        </motion.div>
        <motion.div
          className="slidingText"
          variants={sliderVariants}
          animate="animate"
          initial="initial"
        >
          Web Developer Content Creator
        </motion.div>
        {/* </div> */}

        <div className="heroImage">
          <img src="public/hero1-removebg.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
