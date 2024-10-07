import { Box, Image, Heading, Text, Button, Stack } from "@chakra-ui/react";

const ArticleCard = ({ title, description, imageUrl }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="lg"
    >
      <Image src={imageUrl} alt={title} borderRadius="md" />
      <Stack spacing="3">
        <Heading size="md">{title}</Heading>
        <Text fontWeight="700px" color={"textGray"} noOfLines={3}>{description}</Text>
        <Button color={"textGray"} rounded="full">
          Read More
        </Button>
      </Stack>
    </Box>
  );
};

export default ArticleCard;
