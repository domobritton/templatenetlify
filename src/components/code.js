import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Code = () => ( 
    <StaticQuery 
        query={graphql`
      query {
        mapImage: file(relativePath: { eq: "code.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `}
    render = {data => <Img fluid = {data.mapImage.childImageSharp.fluid}/>} 
            />
        )        
export default Code