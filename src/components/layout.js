import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import './layout.scss'

// import { Transition } from './transitions';
const Wrapper = styled("div")``

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
              content: 'Domonic Adams Portfolio',
            },
            {
              name: 'keywords',
              content:
                'webdev, front-end, back-end, full stack, software dev, domonic adams, software engineer',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Wrapper>
          <Global
            styles={css`
              h2, h3, p, li {
                margin: 0;
                padding: 0;
                margin-bottom: 1.45rem;
                font-family: Quicksand, -apple-system, BlinkMacSystemFont, Roboto, Oxygen,
                  Ubuntu, Cantarell, Droid Sans, sans-serif;
                font-weight: 400;
                letter-spacing: 0.25rem;
                text-rendering: optimizeLegibility;
                line-height: 1.1;
              }
            `}
          />
          {/* <Transition> */}
          {children}
          {/* </Transition> */}
        </Wrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
