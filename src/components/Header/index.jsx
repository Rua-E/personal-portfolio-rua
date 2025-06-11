import React from 'react'
import ScrambleText from '../ScrambleText'
import NavMenu from '../NavMenu'
import BackgroundLines from '../BackgroundLines'
import Button from '../Button'

// import MenuIcon from "../../assets/Icon/menu.svg"

export default function Header() {
  
  const handleMenuToggle = () => {
    console.log("toggle")
    setMenuVisible((prev) => !prev)
  }
  
  return (
    <div>
      <NavMenu isVisible={menuVisible} toggleFunc={handleMenuToggle}/>
      <BackgroundLines/>
      <NavMenu/>

      <motion.div>
        <Button icon={MenuIcon} onClick={{handleMenuToggle}}/>
      </motion.div>


      <motion.div>
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

    </div>
  )
}
