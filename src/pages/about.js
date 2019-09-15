import React from 'react'
import { Link } from 'gatsby'
import Image from "../components/image"
import Code from "../components/code"
import Anime from 'react-anime'

import Layout from '../components/layout'

const aboutPage = () => (
  <>
  <Layout>
      <div className="code">
        <Code />
      </div>
      <div className="about">
        <div className="left">
        <Anime opacity={[0, 1]} translateY={'-1em'} delay={(e, i) => i * 500}>
          <h2>About Me</h2>
          <p>
            I thrive at the intersection of creativity and tech innovation—
            contributing ideas that are not often explored and are outside the
            box to add value to any project. My skills are broad: from ux to
            design, front end to back end development. Working with a team of
            people from diverse backgrounds, experiences, and skills are what
            excites me most about software development.
          </p>
          <p>
            When I am not in front of my mac, I am enjoying quality time with my
            family at the ocean, or on the trail in Marin.
          </p>
          <div className="download-btn">
            <a
              href="https://drive.google.com/file/d/11bh7FJVzuLwF5S4Gy8syqDA7uaOGk5gC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
            
              Download My Resume
            </a>
          </div>
          </Anime>
        </div>
        <div className="right">
          <Image />
        </div>
      </div>
      <div className="right-arrows-container">
        <Link to="/skills" title="Skills Page">
          <div className="right-arrow right-arrow-one" />
          <div className="right-arrow right-arrow-two" />
        </Link>
      </div>
    </Layout>
    </>
)

export default aboutPage
