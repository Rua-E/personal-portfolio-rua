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
import RuaResume from "../../assets/Resume/RESUMEJuly 22.pdf"
import File from "../../assets/Icon/file.svg"


export default function Header() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  
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
       <NavMenu isVisible={menuVisible} toggleFunc={handleMenuToggle} />
      <BackgroundLines />
      <NavMenu />

      <motion.div initial="hidden" animate="visible" variants={blurVariants} transition={{ duration: 1, delay: 0.5 }} className="header--menuBtn">
        {/* <Button icon={MenuIcon} onClick={handleMenuToggle} /> */}
        <h3>
          <a href="https://github.com/Rua-E" target={"_blank"} rel="noopener noreferrer">
            <ScrambleText shuffle delay={0.5}>
              GITHUB
            </ScrambleText>
          </a>
          <span className="header--hash">{"//"}</span>
          <a href="https://www.linkedin.com/in/rua-el-kasheef" target={"_blank"} rel="noopener noreferrer">
            <ScrambleText shuffle delay={1}>
              LINKEDIN
            </ScrambleText>
          </a>
          <span className="header--hash">{"//"}</span>
          <a href="#projects">
            <ScrambleText shuffle delay={1.5}>
              PROJECTS
            </ScrambleText>
          </a>
        </h3>
      </motion.div>

      <motion.div initial="hidden" animate={controls} variants={blurVariants} transition={{ duration: 1, delay: 0.5 }} className="header--top">
        <h3 className="flex items-center gap-1">
          <a href="#tech" >
            <ScrambleText shuffle delay={0.5}>
              TECH
            </ScrambleText>
          </a>
          <span className="header--hash">{"//"}</span>

          <a href="#resume">
            <ScrambleText shuffle delay={1}>
              RESUME
            </ScrambleText>
          </a>
          <a href={RuaResume} target={"_blank"} rel="noopener noreferrer" className="inline-block">
            <img src={File} alt="Resume Icon" style={{ width: '15px', height: '15px', position: 'relative', top: '4.5px', marginLeft: '4px' }} className="inline-block align-middle" ></img>
          </a>
          <span className="header--hash">{"//"}</span>
          <a href="#contact" >
            <ScrambleText shuffle delay={1.5}>
              CONTACT
            </ScrambleText>
          </a>
        </h3>
      </motion.div>

      <motion.div initial="hidden" animate={controls} variants={blurVariants} transition={{ duration: 1, delay: 4 }} className="header--bottom">
        <div>
          <h5>
            <ScrambleText shuffle delay={4} className="highlight">
              intro
            </ScrambleText>{" "}
            <span className="header--hash">{"//"}</span>
          </h5>
          <p className="theme--detail">
            <ScrambleText shuffle delay={4}>
              WELCOME ALL!!! I’m Rua - from ultrasound technologist, to cybsersecurity student, to frontend developer! I’ve finally discovered the work that excites and fulfills me! My mission is to continually learn and grow to be an effective programmer. 
            </ScrambleText>
          </p>
        </div>

        <h3 className="min-w-0">
          <Time delay={4.0} />
        </h3>
      </motion.div>

    <motion.div initial="hidden" animate={controls} variants={blurVariants} transition={{ duration: 1, delay: 4.5 }} className="header--center" onAnimationComplete={() => handleComplete()}>
        <a href="#contact" className="connect--button">
          <Button label="Let’s connect" icon={ArrowUpRightIcon} />
        </a>
    </motion.div>

    <motion.div initial="hidden" animate={controls} variants={blurVariants} transition={{ duration: 1, delay: 2.85 }} className="header--right">
        <h3>
          <span className="header--hash">{"//"}</span>{" "}
          <ScrambleText shuffle delay={2.9}>
            scroll
          </ScrambleText>{" "}
          <span className="header--hash">{"//"}</span>
        </h3>
    </motion.div>

    <motion.div initial="hidden" animate={controls} variants={opacityVariants} transition={{ duration: 2, delay: 2.85 }} className="header--video">
        <video src={headerVideo} autoPlay loop muted></video>
    </motion.div>

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
