import * as React from "react"
import { graphql } from "gatsby"
import { Container, Box, Kicker, Heading } from "./ui"
import * as styles from "./benefit-list.css"

import Feature from "./feature"

export default function FeatureList(props) {
  return (
    <Container width="fullbleed">
      <Box background="muted" radius="large">
        <Box center paddingY={5} className={styles.benfitListHeading}>
          <Heading className={styles.benfitListHeading}>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          {/* {props.text && <Text>Web Development - AR/VR/XR - Hardware Design</Text>} */}
        </Box>
        {props.content.map((feature, i) => (
          <Feature key={feature.id} {...feature} flip={Boolean(i % 2)} />
        ))}
      </Box>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    kicker
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
