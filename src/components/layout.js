import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './layout.scss'

// import { Transition } from './transitions';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Domonic Adams Portfolio'
            }, {
              name: 'keywords',
              content: 'webdev, front-end, back-end, full stack, software dev, domonic adams, software engineer'
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="layout">
        {/* <Transition> */}
          {children}
        {/* </Transition> */}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


