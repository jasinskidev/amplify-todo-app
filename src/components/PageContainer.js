import React from 'react'
import Head from 'next/head';
import { Container, Text } from "@chakra-ui/react"
export const PageContainer = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Container>
        <Text align="center" fontSize="5xl" py={10}>
          {pageTitle}
        </Text>
        {children}
      </Container>
    </>
  )
}
