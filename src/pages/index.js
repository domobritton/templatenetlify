import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Code from '../components/code'
import Particles from '../components/particles'
import Anime from 'react-anime'
import styled from '@emotion/styled'
// import { css, jsx } from '@emotion/core'

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  z-index: -1;
`

const Page = styled.div`
  background: #252627fb;
  padding-top: 200px;
  margin: 0 auto;
  padding-left: 10%;
  padding-right: 10%;
  width: 100vw;
  height: 100vh;
`

const Title = styled.h2`
  font-size: 2.62671rem;
  color: #ef4135;
`

const Subtitle = styled.h3`
  letter-spacing: 0.2rem;
  font-size: 1.38316rem;
  color: #ffffff;
`

const Paragraph = styled.p`
  font-size: 0.95rem;
  color: #ffffff;
  line-height: 1.5;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-position: outside;
  list-style-image: none;
  list-style: none;
`

const ListItem = styled.li`
  font-size: 0.95rem;
  color: #ffffff;
  line-height: 1.5;
  display: inline-block;
`

const SocialLinks = styled.div``

const Social = styled.a`
  margin-right: 1rem;
  color: #8d8d8d;

  &:hover: {
    color: #ef4135;
  }
`

const ContactBtn = styled.div`
  width: 140px;
  padding: 8px 15px;
  border: 1px solid #ef4135;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

const IndexPage = () => (
  <>
    <Layout>
      <BackgroundImage>
        <Code />
      </BackgroundImage>
      <Particles />
      <Page>
        <Container>
          <Anime opacity={[0, 1]} translateY={'-1em'} delay={(e, i) => i * 500}>
            <Title>Hi, I'm Domonic.</Title>
            <Subtitle>Full Stack Software Engineer.</Subtitle>
            <Paragraph>
              Javascript / React / GraphQL / Redux / Ruby / Rails
            </Paragraph>
            <div style={{ maxWidth: 300, marginBottom: '1.45rem' }} />
            <SocialLinks>
              <List>
                <ListItem>
                  <Social
                    href="https://github.com/domobritton"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub style={{width: 35, height: 35}} />
                  </Social>
                </ListItem>
                <ListItem>
                  <Social
                    href="https://www.linkedin.com/in/domonicbrittonadams/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin style={{width: 35, height: 35}} />
                  </Social>
                </ListItem>
              </List>
            </SocialLinks>
            <ContactBtn>
              <Link to="/contact">Contact Me</Link>
            </ContactBtn>
          </Anime>
          <div className="right-arrows-container">
            <Link to="/about">
              <div className="right-arrow right-arrow-one" />
              <div className="right-arrow right-arrow-two" />
            </Link>
          </div>
        </Container>
      </Page>
    </Layout>
  </>
)

export default IndexPage
