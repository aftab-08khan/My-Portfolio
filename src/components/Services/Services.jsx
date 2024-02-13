import { useRef } from "react";
import "./Services.scss";
import { animate, motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useRef, use } from "react";
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
    title: "brand1",
    desc: "It seems like your request is a bit vague. Could you please provide more details or clarify what specific content yous information, advice, creative writing, or anything else.",
  },
  {
    title: "brand2",
    desc: "It seems like your request is a bit vague. Could you please provide more details or clarify what specific content yous information, advice, creative writing, or anything else.",
  },
  {
    title: "brand3",
    desc: "It seems like your request is a bit vague. Could you please provide more details or clarify what specific content yous information, advice, creative writing, or anything else.",
  },
  {
    title: "brand4",
    desc: "It seems like your request is a bit vague. Could you please provide more details or clarify what specific content yous information, advice, creative writing, or anything else.",
  },
];
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
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
          <img src="/people.webp"></img>
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
        {/* Check viewport width and render carousel only if width <= 738px */}
        {window.innerWidth <= 738 ? (
          <Slider>
            {BoxData.map((e, index) => (
              <div key={index} className="box">
                <h2>{e.title}</h2>
                <p>{e.desc}</p>
                <button>Go</button>
              </div>
            ))}
          </Slider>
        ) : (
          // Render individual brand cards without carousel
          BoxData.map((e, index) => (
            <motion.div
              key={index}
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>{e.title}</h2>
              <p>{e.desc}</p>
              <button>Go</button>
            </motion.div>
          ))
        )}
      </motion.div>
    </motion.div>
  );
};

export default Services;
