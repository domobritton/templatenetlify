import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Code from '../components/code'
import WordCloud from "../components/wordcloud"
import Anime from 'react-anime'


const skillsPage = () => (
    <>
    <Layout>
      <div className="code"><Code /></div>
    <div className="skills">
    <Anime opacity={[0, 1]} translateY={'0.1em'} delay={(e, i) => i * 500}>
      <h2>Skills & Experience</h2>
      <p>
        In my experience as a freelancer, and working for agencies, I have
        obtained an eye for detail and appreciation for great design. I also have experience
        integrating with and developing server-side, as well as knowing how to
        efficiently project manage and work with clients and colleagues
        successfully.
      </p>
        </Anime>
      <div className="skills-flex">
    <div className="left">
    <Anime opacity={[0, 1]} easing='easeInElastic' delay={(e, i) => i * 1250}>
      <p>
        I now specialise in front-end development, but my knowledge of multiple
        fields allows me to work on a project with the full scope in mind;
        simplifying the process of our working together and producing a more
        cohesive experience for your users.
      </p>
      <p>
        Would you like to know more about me? Please check out my
        <a
          href="https://www.linkedin.com/in/domonicbrittonadams/"
          target="_blank"
          rel="noopener noreferrer"
          >
          {" "}
          LinkedIn{" "}
        </a>
        profile, or{" "}
        <a
          href="https://github.com/domobritton"
          target="_blank"
          rel="noopener noreferrer"
          >
          {" "}
          Contact me{" "}
        </a>{" "}
        directly.
      </p>
      </Anime>
      </div>
      <div className="right">
      <WordCloud />
      </div>
    </div>
      <div className="right-arrows-container">
        <Link to="/portfolio">
          <div className="right-arrow right-arrow-one" />
          <div className="right-arrow right-arrow-two" />
        </Link>
          </div>
      </div>
  </Layout>
    </>
)

export default skillsPage 