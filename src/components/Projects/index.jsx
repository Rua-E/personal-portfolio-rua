import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"


import SKINSTRIC from "../../assets/Images/SKINSTRIC_AL_IMAGE.png"
import ultraverse from "../../assets/Images/Ultraverse.png"
import Brainwave from "../../assets/Images/Brainwave.png"

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const works = [
    {
      client: "FrontEnd Simplified",
      year: "2025",
      img: SKINSTRIC,
      title: "SKINSTRIC AI.",
      detail: "A AI website that allows you to either capture a live selfie from your device, or download an image and analyze it using an AI algorithm.",
      url: "https://internship-skinstric-ai-ruae.vercel.app/"
    },
    {
      client: "Personal Project",
      year: "2024",
      img: Brainwave,
      title: "Brainwave.",
      detail: "A vibrant website with smooth animations making for a great user interface and user experience that also attractive on mobile. Utilized React.Js and Tailwind CSS as well as a bento box layout.",
      url: "https://brainwave-clone-git-main-rua-el-kasheefs-projects.vercel.app/",
    },
    {
      client: "FrontEnd Simplified",
      year: "2024",
      img: ultraverse,
      title: "ULTRAVERSE (internship).",
      detail: "Converted a static single-page application built with  HTML, CSS, JavaScript and React into a dynamic, interactive and user friendly interface by integrating animations, transitions and carousels.Handled API requests utilizing Axios to fetch data and displayed it with the use of a skeleton loader pagination and dynamic routing. Effectively worked in a virtual team and collaborative  environment using Git version control and Github.",
      url: "https://rua-el-kasheef-internship.vercel.app/"
    },
  ]

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="projects--grid--title">
          <h5 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h5>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              )
            })}
          </div>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1 }} onAnimationComplete={() => handleComplete()} className="projects--grid--detail">
          <p className="theme--detail">
            <ScrambleText delay={1}>Discover a curated portfolio of projects where each line of code tells a story of problem-solving, creativity, and technical finesse.</ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
