import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <Button colorScheme="teal" onClick={() => navigate("/map")}>
          Go to Map
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;