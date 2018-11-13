import React from "react"
import { Link } from "gatsby"
import Intrst from "../images/intrst.gif"
import Crushd from "../images/crushd.gif"
import NeueWeather from "../images/neueweather.gif"
import Resilient from "../images/resilient.gif"
import Seismic from "../images/seismic.gif"
import Silent from "../images/silentdisco.gif"
import Layout from "../components/layout"
import { FaGithub, FaLink, FaCode } from "react-icons/fa"

const portfolioPage = () => (
    <>
    <Layout>
        <div className="scroll-text">
          <p>
            <FaCode />
            –––scroll–––
            <FaCode />
          </p>
        </div>
        <div className="arrows-container">
          <div className="arrow arrow-one" />
          <div className="arrow arrow-two" />
        </div>
        <div className="scroll">
          <h2>Portfolio</h2>
          <div className="portfolio">
            <div className="left">
              <img src={Intrst} alt="Intrst" />
              <p>
                <em>
                  Technologies: Rails, React, Webpack, AWS S3 ActiveStorage
                </em>
              </p>
              <ul>
                <li>
                  Formulated a Javascript algorithm that resizes individual
                  masonry blocks and optimizes their positioning within a
                  masonry grid, depending on image size and available screen
                  width.
                </li>
                <li>
                  I also designed an infinite scroll which initially fills the
                  browser with images and continuously listens for scroll events
                  in order to execute seamless AJAX requests.
                </li>
                <li>
                  A higher order component handles modal functionality which can
                  be passed to other components as needed untilizing the UI
                  slice of state.
                </li>
              </ul>
              <div className="portfolio-links">
                <ul>
                  <li>
                    <a
                      href="https://intrst.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/domobritton/Intrst/tree/master/pinterest"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>
              <img src={Silent} alt="Silent Storm" />
              <p>
                <em>Technologies: Wordpress CMS, jQuery, PHP, HTML5, CSS3</em>
              </p>
              <ul>
                <li>
                  Silent Storm Sound System is a leading wireless headset
                  provider known for creating unique silent disco experiences
                  across America. I built this website in Wordpress, to replace
                  an older site in need of updating.
                </li>
              </ul>
              <div className="portfolio-links">
                <ul>
                  <li>
                    <a
                      href="https://silentdis.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink />
                    </a>
                  </li>
                </ul>
              </div>
              <img src={NeueWeather} alt="NeueWeather" />
              <p>
                <em>
                  Technologies: Node JS, Express, Pusher, Dark Sky API, Axios
                </em>
              </p>
              <ul>
                <li>
                  Built a controller and custom Axios calls in Javascript to
                  implement Pusher, an API normally used for messaging apps, to
                  handle updates to weather data from Dark Sky API in real-time.
                </li>
                <li>
                  Designed an algorithm that manipulates the DOM by creating new
                  divs on the fly and inserting them into their parent div at
                  randomly generated points; to simulate a galaxy of stars in
                  the browser window.
                </li>
                <li>
                  Applied CSS animations with keyframes to generate a
                  “twinkling” effect on stars.
                </li>
              </ul>
              <div className="portfolio-links">
                <ul>
                  <li>
                    <a
                      href="https://neue-weather.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/domobritton/neue-weather"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <img src={Seismic} alt="Seismic Powered Clothing" />
              <p>
                <em>Technologies: Wordpress CMS, jQuery, PHP, HTML5, CSS3</em>
              </p>
              <ul>
                <li>
                  Collaborated VP's of Design and Product to design a new
                  website for their robotic clothing company, focusing on a
                  clean and easy to use experience with forward-thinking CSS and
                  interface design.
                </li>
                <li>
                  Maintained effective communication and planning throughout to
                  ensure that code was pixel perfect to branding guidelines.
                </li>
              </ul>
              <div className="portfolio-links">
                <ul>
                  <li>
                    <a
                      href="https://www.myseismic.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink />
                    </a>
                  </li>
                </ul>
              </div>
              <img src={Resilient} alt="Resilient Leadership" />
              <p>
                <em>Technologies: Wordpress CMS, jQuery, PHP, HTML5, CSS3</em>
              </p>
              <ul>
                <li>
                  This client came to me looking for a new website that would be
                  easy to maintain with the ability to easily add blogging
                  capabilities at a future date.
                </li>
              </ul>
              <div className="portfolio-links">
                <ul>
                  <li>
                    <a
                      href="https://resilientleadership.us/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink />
                    </a>
                  </li>
                </ul>
              </div>
              <img src={Crushd} alt="Crush'd Dating" />
              <p>
                <em>Technologies: MERN stack, Firebase</em>
              </p>
              <ul>
                <li>
                  Utilized Firebase to store compressed video files in the cloud
                  and lazy loading on the client-side to reduce latency.
                </li>
              </ul>
              <div className="portfolio-links">
                <ul>
                  <li>
                    <a
                      href="http://crushd.io/#/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/JOlivier92/Crushd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="right-arrows-container">
          <Link to="/contact">
            <div className="right-arrow right-arrow-one" />
            <div className="right-arrow right-arrow-two" />
          </Link>
        </div>
      </Layout>
    </>
)

export default portfolioPage