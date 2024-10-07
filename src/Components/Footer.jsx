import { Box, Grid, Text, Heading, Link, VStack, HStack, Image, Divider, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="grayLinear1" py={6} px={4}>
      <Grid templateColumns={{ base: "1fr", md: "auto 1fr 1fr" }} gap={6} alignItems="center">
        {/* Left Section: Contact Us with Logo */}
        <Flex direction="row" align="start">
          <Image src="/image.png" alt="Food Truck" width="100px" height="100px" mr={4} />
          <VStack align="start" spacing={1}>
            <Heading size="sm" mb={1}>Contact Us</Heading>
            <Text color="textGray" fontSize="sm">Lorem Ipsum Pvt Ltd. 5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</Text>
            <Text color="textGray" fontSize="sm">example2020@gmail.com</Text>
            <Text color="textGray" fontSize="sm">(904) 443-0343</Text>
          </VStack>
        </Flex>

        {/* Center Section: More Links */}
        <VStack align="start" spacing={1}>
          <Heading size="sm" mb={1}>More</Heading>
          <Link color="textGray" href="#" fontSize="sm">About Us</Link>
          <Link color="textGray" href="#" fontSize="sm">Products</Link>
          <Link color="textGray" href="#" fontSize="sm">Career</Link>
          <Link color="textGray" href="#" fontSize="sm">Contact Us</Link>
        </VStack>

        {/* Right Section: Social Links */}
        <VStack align="start" spacing={1}>
          <Heading size="sm" mb={1}>Social Links</Heading>
          <HStack spacing={3}>
            <Link href="#"><Image src="/insta.png" alt="Instagram" boxSize={5} /></Link>
            <Link href="#"><Image src="/x.png" alt="Twitter" boxSize={5} /></Link>
            <Link href="#"><Image src="/facebook.png" alt="Facebook" boxSize={5} /></Link>
          </HStack>
        </VStack>
      </Grid>

      {/* Divider & Footer Bottom */}
      <Divider my={4} />
      <Box textAlign="center">
        <Text color="textGray" fontSize="xs">© 2022 Food Truck Example</Text>
      </Box>
    </Box>
  );
};

export default Footer;
