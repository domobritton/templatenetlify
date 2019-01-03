import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { FaPhone } from "react-icons/fa"
import Map from '../components/map'
import Anime from 'react-anime'

const contactPage = () => (
    <>
    <Layout>
      <div className="map">
        <Map />
      </div>
      <div className="contact">
      <Anime opacity={[0, 1]} translateY={'0.1em'} delay={(e, i) => i * 500}>
        <h2>Contact Me</h2>
        <p>
          I am actively seeking new front-end developer opportunities in the San
          Francisco Bay Area.
          <br />
          I'd love to connect and learn about your product and culture.
        </p>
        <p>
          <em>@ </em>
          <a href="mailto:webmaster@example.com">dom@domadams.me</a>
        </p>
        <p>
          <FaPhone /> 415.686.9140
        </p>
        </Anime> 
      </div>
      <div className="right-arrows-container">
        <Link to="/">
          <div className="right-arrow right-arrow-one" />
          <div className="right-arrow right-arrow-two" />
        </Link>
      </div>
    </Layout>
    </>
)

export default contactPage 