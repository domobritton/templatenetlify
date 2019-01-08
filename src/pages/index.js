import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Code from '../components/code'
import Particles from '../components/particles'
import Anime from 'react-anime'

const IndexPage = () => (
  <>
    <Layout>
      <div className="code"><Code /></div>
      <Particles />
      <div className="index">
      <Anime opacity={[0, 1]} translateY={'-1em'} delay={(e, i) => i * 500}>
        <h2>Hi, I'm Domonic.</h2>
        <h3>Full Stack Web Developer.</h3>
        <p>Ruby / Javascript / React / Redux / Rails / Wordpress</p>
        <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }} />
        <div className="social-links">
          <ul>
            <li>
              <a
                href="https://github.com/domobritton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/domonicbrittonadams/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-btn">
          <Link to="/contact">Contact Me</Link>
        </div>
        </Anime>
      </div>
      <div className="right-arrows-container">
        <Link to="/about">
          <div className="right-arrow right-arrow-one" />
          <div className="right-arrow right-arrow-two" />
        </Link>
      </div>
    </Layout>
  </>
);

export default IndexPage
