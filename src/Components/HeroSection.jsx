import React from "react";
import { Box, Flex, Text, Image, Heading, Button } from "@chakra-ui/react";

function HeroSection() {
  return (
    <Flex>
       {/* Left Side - Text and Truck Logo */}
       <Box ml={20} flex="1" textAlign={{ base: "center", md: "left" }}>
        <Image
          src="/image.png"  // Update path accordingly
          alt="Food Truck Logo"
          mb={{ base: 4, md: 8 }}
          objectFit="contain"
          width="107px" height="83px"top="33px" left="100px"
        />
        <Heading fontWeight="700px" lineHeight="69px" size="2xl" width="345px" height="207px" top="227px" left="100px" as="h1" color="secondary">
          Discover the <Text as="span" color="primary">Best</Text> Food and Drinks
        </Heading>
        <Text size="16.44" width={345} height={55} top={460} left={100} color="textGray">
          Naturally made Healthcare Products for the better care & support of your body.
        </Text>
        <Button
        width="190px" height="63px" top="14px" right="34px" left="34px" bottom="14px" gap="7px" borderRadius="34px"
          color="white" bg="primary" 
        > 
          Explore Now!
        </Button>
      </Box>

      {/* Right Side - Pizza Image */}
      <Box position="relative" flex="1" mt={{ base: 8, md: 0 }}>
  {/* Pizza Image (Background) */}
  <Image
    src="/pizzalanding.png"  // Update path accordingly
    alt="Delicious Pizza"
    width="100%"
    height="100%"
    objectFit="cover"
    borderRadius="lg"
  />

  {/* Red Design Overlay */}
  <Image
    src="/bg-pizza.png"  // Update path accordingly
    alt="Design Overlay"
    width="100%"
    height="100%"
    objectFit="cover"
    position="absolute"
    top="0"
    left="0"
    borderRadius="lg"
  />
</Box>

    </Flex>
  );
}

export default HeroSection;
