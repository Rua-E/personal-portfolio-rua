import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import ScrambleText from "../ScrambleText"
import InteractiveMarquee from "../InteractiveMarquee"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
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

  const positionVariant = {
    hidden: { x: "100%" },
    visible: {
      x: "60px",
      transition: {
        ease: [0.5, 1, 0.89, 1],
        duration: 1,
        delay: 0,
      },
    },
  }

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section className="about" id="about">
      <BackgroundLines light />
      <div ref={ref} className="about--grid">
        <div className="about--bio">
          <h2>
            <ParaWriting stagger={0.08} text={"Passionate and driven software engineer with a "} sec={"deep enthusiasm for web development."} />
          </h2>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1.5 }} className="about--title">
          <h5 className="theme--text--dark">
            <ScrambleText shuffle delay={1.5}>
              02
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={1.5}>
              about
            </ScrambleText>
          </h5>
        </motion.div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 2 }} onAnimationComplete={() => handleComplete()} className="about--detail">
          <p className="theme--detail--dark">
            <ScrambleText delay={2}>I relish in the challenge of creating beautiful, responsive, user-friendly interfaces. My goal is to always use clean-code as I continue to navigate and aspire to master the ever growing complex frameworks in the world of web development. After a very successful 10-year career as a Diagnostic Medical Sonographer, and in the course of doing my Associated Degree in Cybersecurity I stumbled upon the fascinating field of software development. Finally, something that captivates me and COMMANDS my attention. Everything about software development fits so perfectly with my many of my skills and ignites a passion in my I have been looking for my whole professional life! Cheers to discovering our callings! </ScrambleText>
          </p>
        </motion.div>

        <motion.div initial="hidden" animate={controls} variants={positionVariant} className="about--marquee">
          <h1 draggable="false">
            <InteractiveMarquee wheelFactor={0} speed={1.3}>
              <span>ABOUT Rua El-kasheef</span>
              <span>ABOUT Rua El-kasheef</span>
              <span>ABOUT Rua El-kasheef</span>
              <span>ABOUT Rua El-kasheef</span>
              <span>ABOUT Rua El-kasheef</span>
            </InteractiveMarquee>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
