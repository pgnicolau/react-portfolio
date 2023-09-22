import React, { useContext } from 'react'
import './Footer.css'
import { Fade } from 'react-reveal'
import emoji from 'react-easy-emoji'
import StyleContext from '../../contexts/StyleContext'

export default function Footer () {
  const { isDark } = useContext(StyleContext)
  return (
	<Fade bottom duration={1000} distance="5px">
	  <div className="footer-div">
		{/*<p className={isDark ? "dark-mode footer-text" : "footer-text"}>*/}
		{/*  {emoji("Made by Saad Pasta | Modified by Gabriela Nicolau")}*/}
		{/*</p>*/}
		<p className={isDark ? 'dark-mode footer-text' : 'footer-text'}>
		  Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.
		</p>
	  </div>
	</Fade>
  )
}
