import "./style.css"

import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import ScrambleText from '../ScrambleText'
import NavMenu from '../NavMenu'
import BackgroundLines from '../BackgroundLines'
import Button from '../Button'
import Time from '../Time'
import TextWriting from '../TextWriting'

import MenuIcon from "../../assets/Icon/menu.svg"
import headerVideo from "../../assets/headerVideo.webm"
import ArrowUpRightIcon from "../../assets/Icon/arrow-up-right.svg"


export default function Header() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [menuVisible, setMenuVisible] = useState(false)
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

  const nameVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        duration: 1.5,
        delay: 2.85,
      },
    },
  }

  const opacityVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  
  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  }

  const handleMenuToggle = () => {
    console.log("toggle")
    setMenuVisible((prev) => !prev)
  }
  
  return (
    <header ref={ref}>
      <NavMenu isVisible={menuVisible} toggleFunc={handleMenuToggle}/>
      <BackgroundLines/>
      <NavMenu/>

{/* FIRST ELEMENT */}
      <motion.div initial="hidden" animate="visible" variant={blurVariants} transition={{ duration: 1, delay: 0.5 }} className="header--menuBtn">
        <Button icon={MenuIcon} onClick={{handleMenuToggle}}/>
      </motion.div>

      <motion.div initial="hidden" animate={controls} variant={blurVariants} transition={{ duration: 1, delay: 0.5 }} className="header--top">
        <h3>
          <a href="/" target={"_blank"} rel="noopener noreferrer">
            <ScrambleText shuffle delay={0.5}> 
              GITHUB
            </ScrambleText>
          </a>
          <span className='header--hash'>{"//"}</span>
          <a href="/" target={"_blank"} rel="noopener noreferrer">
            <ScrambleText shuffle delay={1}> 
              LINKEDIN
            </ScrambleText>
          </a>
          <span className='header--hash'>{"//"}</span>
          <a href="/" target={"_blank"} rel="noopener noreferrer">
            <ScrambleText shuffle delay={1.5}> 
              RESUME
            </ScrambleText>
          </a>
        </h3>
      </motion.div>

{/* SECOND ELEMENT - Intro/Location/Time/Date */}
      <motion.div initial="hidden" animate={controls} variants={blurVariants} transition={{ duration: 1, delay: 4 }} className="header--bottom">
        <div>
          <h3>
            <ScrambleText shuffle delay={4}>
              intro
            </ScrambleText>{" "}
            <span className="header--hash">{"//"}</span>
          </h3>
          <p className="theme--detail">
            <ScrambleText shuffle delay={4}>
              WELCOME ALL!!! I’m Rua, I relish in the challenge of creating beautiful, responsive, user-friendly interfaces. My goal is to always use clean-code as I continue to navigate and aspire to master the ever growing complex frameworks in the world of web development. After a very successful 10-year career as a Diagnostic Medical Sonographer, and in the course of doing my Associated Degree in Cybersecurity I stumbled upon the fascinating field of software development. Finally, something that captivates me and COMMANDS my attention. Everything about software development fits so perfectly with my many of my skills and ignites a passion in my I have been looking for my whole professional life! Cheers to discovering our callings!  
            </ScrambleText>
          </p>
        </div>

        <h3>
          <Time delay={4.0} />
        </h3>
      </motion.div>

{/* THIRD ELEMENT */}
    <motion.div initial="hidden" animate={controls} variants={blurVariants} transition={{ duration: 1, delay: 4.5 }} className="header--center" onAnimationComplete={() => handleComplete()}>
        <a href="#contact" className="connect--button">
          <Button label="Let’s connect" icon={ArrowUpRightIcon} />
        </a>
    </motion.div>

{/* FOURTH ELEMENT */}
    <motion.div initial="hidden" animate={controls} variants={blurVariants} transition={{ duration: 1, delay: 2.85 }} className="header--right">
        <h3>
          <span className="header--hash">{"//"}</span>{" "}
          <ScrambleText shuffle delay={2.9}>
            scroll
          </ScrambleText>{" "}
          <span className="header--hash">{"//"}</span>
        </h3>
    </motion.div>

{/* FIFTH ELEMENT */}
    <motion.div initial="hidden" animate={controls} variants={opacityVariants} transition={{ duration: 2, delay: 2.85 }} className="header--video">
        <video src={headerVideo} autoPlay loop muted></video>
    </motion.div>

{/* SIXTH ELEMENT */}
    <h1 className="header--name">
        <TextWriting controls={controls} text={"Rua El-kasheef"} noblink />
        <br />
        <TextWriting controls={controls} delay={1.65} text={"Frontend"} noblink />{" "}
        <motion.div initial="hidden" animate={controls} variants={nameVariants} className="header--name--sec">
          <TextWriting controls={controls} delay={2.85} text={"Developer"} noblink />
          <div className="header--name--border">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div>
      </h1>

    </header>
  )
}
