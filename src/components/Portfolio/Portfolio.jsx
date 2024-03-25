import React, { useRef } from "react";
import "./Portfolio.scss";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
const items = [
  {
    demo: "https://cashncarry.netlify.app/#",
    id: 1,
    img: "public/Screenshot (9).png",
    desc: "Dive into my clothing shop project, where HTML structures, CSS styles, and JavaScript functionalities converge to redefine online fashion retailing. Elevate user experiences, streamline navigation, and showcase the latest trends effortlessly.",
    title: "HTML CSS JAVASCRIPT",
  },
  {
    demo: "#",
    id: 2,
    img: "https://images.unsplash.com/photo-1707408538977-7522b6090b27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    desc: "gbsnh rg ergrreijgtbw hijtry tio tr vbfdbfiogerter vvdsfwjrwergo crigdfodfv wfjiwewejie",
    title: "HTML CSS Javascript",
  },
  {
    demo: "https://tejasengineeringworks.co.in/",
    id: 3,
    img: "public/Screenshot (12).png",
    desc: "Empowering businesses with innovative solutions through Next.js. Crafting seamless user experiences and scalable applications for the engineering sector. Let's build the future of technology together.",
    title: "Next Js",
  },
  {
    demo: "#",
    id: 4,
    img: "https://images.unsplash.com/photo-1682686580849-3e7f67df4015?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    desc: "gbsnh rg ergrreijgtbw hijtry tio tr vbfdbfiogerter vvdsfwjrwergo crigdfodfv wfjiwewejie",
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
