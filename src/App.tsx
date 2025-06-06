import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  Center,
} from "@chakra-ui/react";

const poems = [
  "きょうの空は / きみのこころを / うつしてる",
  "ふわふわと / 風がつたえる / たいせつなこと",
  "ひなたで / ねこがまどろむ / しあわせな時",
  "やさしい / こころが響く / きれいな音",
  "そらにある / ひかりがそっと / てらしてる",
  "きもちを / つたえることば / みつけたよ",
];

const catImages = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=400&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop&crop=center",
];

function App() {
  const [currentPoem, setCurrentPoem] = useState<string>("");
  const [currentImage, setCurrentImage] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const readPoem = () => {
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    const randomImage = catImages[Math.floor(Math.random() * catImages.length)];

    setCurrentPoem(randomPoem);
    setCurrentImage(randomImage);
    setIsVisible(true);
  };

  const resetPoem = () => {
    setIsVisible(false);
    setCurrentPoem("");
    setCurrentImage("");
  };

  return (
    <Container maxW="container.md" py={8}>
      <Center minH="100vh">
        <VStack spacing={8} w="full">
          <Heading as="h1" size="2xl" color="purple.600" textAlign="center">
            猫の詩
          </Heading>

          {!isVisible ? (
            <Button
              size="lg"
              colorScheme="purple"
              borderRadius="full"
              px={8}
              py={6}
              fontSize="xl"
              onClick={readPoem}
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.2s"
            >
              詩を読む
            </Button>
          ) : (
            <VStack spacing={6}>
              <Box
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="lg"
                maxW="300px"
              >
                <Image
                  src={currentImage}
                  alt="かわいい猫"
                  w="full"
                  h="300px"
                  objectFit="cover"
                />
              </Box>

              <Box
                bg="purple.50"
                p={6}
                borderRadius="xl"
                boxShadow="md"
                maxW="400px"
                textAlign="center"
              >
                <Text
                  fontSize="lg"
                  lineHeight="2"
                  color="purple.800"
                  fontWeight="medium"
                  whiteSpace="pre-line"
                >
                  {currentPoem}
                </Text>
              </Box>

              <Button
                colorScheme="gray"
                variant="outline"
                borderRadius="full"
                onClick={resetPoem}
                _hover={{ bg: "gray.50" }}
              >
                もう一度
              </Button>
            </VStack>
          )}
        </VStack>
      </Center>
    </Container>
  );
}

export default App;
