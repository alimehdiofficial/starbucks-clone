import * as React from 'react'
import { motion } from 'framer-motion'
import { mix } from '@popmotion/popcorn'
import './ContentPlaceholder.css'
import { Link } from 'react-router-dom'

export const Word = ({ link }) => <Link className='word'>{link}</Link>

const Paragraph = ({ link1, link2, link3, link4, link5, link6 }) => (
  <div className='paragraph'>
    <Word link={link1} />
    <Word link={link2} />
    <Word link={link3} />
    <Word link={link4} />
    <Word link={link5} />
    <Word link={link6} />
  </div>
)

export const ContentPlaceholder = ({
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
}) => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className='contentPlaceholder'
  >
    <Paragraph
      link1={link1}
      link2={link2}
      link3={link3}
      link4={link4}
      link5={link5}
      link6={link6}
    />
  </motion.div>
)
