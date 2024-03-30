import { useRef, useEffect, useState } from "react";
import "./Services.scss";
import { animate, motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const variants = {
  initial: { x: -500, y: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const BoxData = [
  {
    title: "HTML",
    desc: "./IMG_5341-removebg-preview.png",
  },
  {
    title: "CSS",
    desc: "./css-removebg-preview.png",
  },
  {
    title: "JAVASCRIPT",
    desc: "./IMG_5340-removebg-preview.png",
  },
  {
    title: "REACT",
    desc: "./IMG_5357-removebg-preview.png",
  },
];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 738);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people"></img>
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Business.
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        {isMobile ? (
          <Slider>
            {BoxData.map((e, index) => (
              <div key={index} className="box">
                <h2>{e.title}</h2>
                <img src={e.desc} alt={e.title} />
              </div>
            ))}
          </Slider>
        ) : (
          BoxData.map((e, index) => (
            <motion.div key={index} className="box">
              <h2>{e.title}</h2>
              <img src={e.desc} alt={e.title} />
            </motion.div>
          ))
        )}
      </motion.div>
    </motion.div>
  );
};

export default Services;
