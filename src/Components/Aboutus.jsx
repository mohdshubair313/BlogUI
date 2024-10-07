import { Box, Text, Image, Flex, Heading, Button } from '@chakra-ui/react'
import React from 'react'

const Aboutus = () => {
  return (
    <Box width="100%" height="467px" bgGradient="linear(to-r, grayLinear1, grayLinear2)">
  <Flex justify="center" align="center" height="100%">
    <Image
      width="384px"
      height="468px"
      src="/AboutImg.png"
      alt="About Image"
    />
    <Box textAlign="center" ml={{ base: 4, md: 10 }}>
      <Heading as="h1" size="2xl" lineHeight="1.5" fontWeight="bold" color="secondary">
        About Us
      </Heading>
      <Text mt={4} fontSize="lg" color={"textGray"} >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
      </Text>
      <Button
        mt={6}
        size="lg"
        colorScheme="red"
        borderRadius="full"
      >
        Learn More
      </Button>
    </Box>
  </Flex>
</Box>

  )
}

export default Aboutus