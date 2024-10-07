import { Box, Button, SimpleGrid, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import ArticleCard from "../Components/Articles";

const articlesData = [
  {
    title: "Grilled Tomatoes at Home",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry...",
    imageUrl: "/Article1.png",
  },
  {
    title: "Snacks for Travel",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry...",
    imageUrl: "/Article2.png",
  },
  {
    title: "Post-workout Recipes",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry...",
    imageUrl: "/Article3.png",
  },
  {
    title: "How to Grill Corn",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry...",
    imageUrl: "/Article4.png",
  },
  {
    title: "Crunchwrap Supreme",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry...",
    imageUrl: "/Article5.png",
  },
  {
    title: "Broccoli Cheese Soup",
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry...",
    imageUrl: "/Article6.png",
  },
  
];

const MultipleArticles = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setPage((prevPage) => (prevPage + 1) % Math.ceil(articlesData.length / itemsPerPage));
  };

  const displayedArticles = articlesData.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <Box mb={"120px"}>
      <Flex justifyContent="space-between">
        <Heading>Latest Articles</Heading>
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing="40px" mt={4}>
        {displayedArticles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
          />
        ))}
      </SimpleGrid>

      <Flex justifyContent="center" mt={8}>
        <Button onClick={handleNext} >
        {'<'}  1  2 {'>'}
        </Button>
      </Flex>
    </Box>
  );
};

export default MultipleArticles;
