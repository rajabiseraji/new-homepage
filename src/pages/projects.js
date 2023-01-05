import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import * as styles from "../components/ui.css"
import SEOHead from "../components/head"
import { Box, Container, Heading, Text, Link, Flex } from "../components/ui"
import ChevronRight from "../components/chevron-right"
import ProjectList from "../components/project-list"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects(props) {

  const image = getImage(props.data.file)
  const testImg = {...props.data.file.childImageSharp, alt: "shit"};
  const projects = {
    "content": [
        {
          "heading": "Never pay for a homepage again",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "id": "d5c29148-7985-5885-8d7b-bf9c1f6c693d",
          "image": testImg
        },
        {
          "heading": "Automate everything",
          "text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "id": "260ea8d5-7c2e-521a-8a1c-5c95ca7e3450",
          "image": testImg
        }
      ],
      "heading": "Get started in minutes and make it your own",
      "text": "Everything you need to start creating a homepage today"
  }

  console.log(props.data);
  
  return (
    <Layout>
      <Box paddingY={4}>
        <Container>
          <Flex variant="column">
            {/* <Heading variant="superHeading" className={styles.heading}>
              Hello world
            </Heading>
            <Heading as="h1">Supposed to be projects</Heading> */}
            {/* <Flex variant="column" gap={0}>
              <Text variant="lead" className={styles.text}>
                Even more hello dear world
              </Text>
              <Link to="/" className={styles.link}>
                <span>Back to home</span>
                <ChevronRight className={styles.linkChevron} />
              </Link>
            </Flex> */}
            <ProjectList
              {...projects}
            />
            <GatsbyImage image={image} />
          </Flex>
        </Container>
      </Box>
    </Layout>
  )
}
export const Head = (props) => {
  // const { projects } = props.data
  return <SEOHead title="Projects Page" />
}

export const projectsQuery = graphql`
{
  file(extension: {eq: "png"}) {
    id
    url
    childImageSharp {
      gatsbyImageData
      id
    }
    relativePath
  }
}
`




