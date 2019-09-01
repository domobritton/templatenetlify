import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'
import Code from '../components/code'
import Anime from 'react-anime'
import Layout from '../components/layout'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Title = styled.h2`
  font-size: 2.62671rem;
  color: #ef4135;
`

const Paragraph = styled.p`
  font-size: 0.95rem;
  color: #ffffff;
  line-height: 1.5;
`

const DownLoad = styled.div`
  width: 230px;
  padding: 8px 15px;
  border: 1px solid #78c4c4;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 50px;
`

const DownLoadBtn = styled.a`
  color: #78c4c4;
  font-size: 1rem;
  text-decoration: none;
`

const aboutPage = () => (
  <>
    <Layout>
      <div className="code">
        <Code />
      </div>
      <div className="about">
        <Container>
          <div className="left">
            <Anime
              opacity={[0, 1]}
              translateY={'-1em'}
              delay={(e, i) => i * 500}
            >
              <Title>About Me</Title>
              <Paragraph>
                I thrive at the intersection of creativity and tech innovation—
                contributing ideas that are not often explored and are outside
                the box to add value to any project. My skills are broad: from
                ux to design, front end to back end development. Working with a
                team of people from diverse backgrounds, experiences, and skills
                are what excites me most about software development.
              </Paragraph>
              <Paragraph>
                When I am not in front of my mac, I am enjoying quality time
                with my family at the ocean, or on the trail in Marin.
              </Paragraph>
              <DownLoad>
                <DownLoadBtn
                  href="https://drive.google.com/file/d/1zXCDOc7GPU-3GmhqvwYTeqoWnX7P04yW/view?usp=shDownLoadBtnring"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download My Resume
                </DownLoadBtn>
              </DownLoad>
            </Anime>
          </div>
          <div className="right">
            <Image />
          </div>
          <div className="right-arrows-container">
            <Link to="/skills">
              <div className="right-arrow right-arrow-one" />
              <div className="right-arrow right-arrow-two" />
            </Link>
          </div>
        </Container>
      </div>
    </Layout>
  </>
)

export default aboutPage
