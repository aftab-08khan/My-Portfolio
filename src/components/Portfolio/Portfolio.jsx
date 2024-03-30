import React, { useRef } from "react";
import "./Portfolio.scss";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
const items = [
  {
    demo: "https://cashncarry.netlify.app/#",
    id: 1,
    img: "./Screenshot (9).png",
    desc: "Dive into my clothing shop project, where HTML structures, CSS styles, and JavaScript functionalities converge to redefine online fashion retailing. Elevate user experiences, streamline navigation, and showcase the latest trends effortlessly.",
    title: "HTML CSS JAVASCRIPT",
  },
  {
    demo: "https://aurora-grove-omeyr.netlify.app/",
    id: 2,
    img: "./Screenshot (47).png",
    desc: "Experience the great outdoors with Aurora Group Camping! Nestled in the heart of nature, our campgrounds offer an escape from the hustle and bustle of city life. Whether you're a seasoned camper or new to the adventure, we have everything you need for an unforgettable outdoor experience.",
    title: "HTML CSS Javascript",
  },
  {
    demo: "https://tejasengineeringworks.co.in/",
    id: 3,
    img: "./Screenshot (12).png",
    desc: "Empowering businesses with innovative solutions through Next.js. Crafting seamless user experiences and scalable applications for the engineering sector. Let's build the future of technology together.",
    title: "Next Js",
  },
  {
    demo: "https://my-portfolio-seven-pi-59.vercel.app/ ",
    id: 4,
    img: "./Screenshot (45).png",
    desc: "Welcome to my portfolio! I'm a skilled web developer with expertise in Vite, Framer Motion, and React. Explore my projects showcasing innovative designs and seamless user experiences. Contact me to discuss how I can bring your web development ideas to life.",
    title: "Vite",
  },
];
const SingleSection = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="ImageContainer" ref={ref}>
            <img src={item.img}></img>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demo} target="_new">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => {
        return <SingleSection key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Portfolio;
