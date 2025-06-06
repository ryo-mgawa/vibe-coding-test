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
  "あさの光で / ねこがのびのび / あくびして",
  "みどりの葉っぱ / そよ風と踊る / しずかな午後",
  "ちいさな足音 / とことこ歩く / ねこのさんぽ",
  "やわらかな / 毛玉がゆらゆら / ゆめのなか",
  "おひさまが / ほほえんでいる / あたたかい日",
  "しっぽを / ふりふりしながら / ごきげんねこ",
  "ゆうやけ空に / ねこがじっと / みつめてる",
  "ちいさな肉球 / ぽんぽん歩いて / かわいいね",
  "すやすや眠る / ねこのねがお / やすらかな時",
  "みずたまり / のぞきこむねこ / ふしぎそう",
  "あおい空と / しろい雲がね / うたってる",
  "ぽかぽか陽だまり / ねこがごろごろ / きもちいい",
  "かぜのうた / みみをすませて / きいてみよう",
  "よるの星が / きらきら光る / ねこのまなざし",
  "はなびらが / ひらりと舞って / はるがきた",
  "ねこのあくび / おおきくひろがる / へいわな時",
  "みちばたの / ちいさなはなに / きづいたよ",
  "ぬくもりを / つたえるまなざし / やさしいね",
  "そらのいろ / きょうはどんな / きもちかな",
  "ねこがくるり / ひなたでまわって / たのしそう",
  "ふわふわ雲 / ねこのしっぽみたい / やわらかそう",
  "ささやく風 / ねこのみみに / そっととどく",
  "ゆめのなかで / ねこがかけてく / みどりのはら",
  "あたたかな / てのひらのうえ / ねこがねむる",
  "つきあかり / てらすねこの / よるのさんぽ",
  "ちいさな鈴 / りんりん鳴らして / あそんでる",
  "みずのおと / ちょろちょろ流れて / すずしいね",
  "ねこのひげ / ぴんと立ってる / げんきなしるし",
  "やわらかな / こころがふれて / あたたかい",
  "はるかぜに / ねこのけがゆれて / きれいだな",
  "しずかな夜 / ねこがみあげる / ほしぞらを",
  "ちいさな足で / そっと歩いて / やさしいね",
  "おはなのかおり / ねこがくんくん / きになるね",
  "ゆうひが / ねこをてらして / きんいろに",
  "こころの / おくでひびく / すてきなうた",
  "ねこのめが / きらきら光って / たのしそう",
  "みどりいろ / くさのうえで / ごろんとね",
  "やさしい雨 / ぽつぽつ降って / しずかな日",
  "ねこのなき声 / にゃーんとひびく / かわいいね",
  "あさつゆが / きらめいてる / あたらしい日",
  "ちいさな手 / そっとなでると / ごろごろね",
  "そよかぜが / ねこのほほを / やさしくなでる",
  "ひかりと影 / あそんでいるよ / ねこといっしょ",
  "ゆめいろの / そらをながめて / ほっとする",
  "ねこのしっぽ / くるくるまわって / げんきだね",
  "あたたかな / きもちがつたわる / しあわせな時",
  "ちいさな命 / だいじにそだてよう / みんなで",
  "ねこのあんよ / とことこ歩いて / どこいくの",
  "やわらかな / ひざしがさして / うれしいね",
  "ねこがのぞく / まどのむこうに / なにがある",
  "しあわせは / ちいさなことに / かくれてる",
];

const catImages = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
  "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1570018144715-43110363d70a?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1560743173-567a3b5658b1?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1559235038-1b0faffe9bab?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://images.unsplash.com/photo-1545529468-42764ef8c85f?w=400&h=400&fit=crop&crop=center&auto=format",
  "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/07/13/10/20/kittens-3535404_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/02/03/19/24/cat-623523_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/03/28/16/23/kitten-3269848_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3593319_960_720.jpg",
  "https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_960_720.jpg",
];

function App() {
  const [currentPoem, setCurrentPoem] = useState<string>("");
  const [currentImage, setCurrentImage] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [, setImageError] = useState<boolean>(false);

  const readPoem = () => {
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    const randomImage = catImages[Math.floor(Math.random() * catImages.length)];

    setCurrentPoem(randomPoem);
    setCurrentImage(randomImage);
    setImageError(false);
    setIsVisible(true);
  };

  const resetPoem = () => {
    setIsVisible(false);
    setCurrentPoem("");
    setCurrentImage("");
    setImageError(false);
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
                  onError={() => setImageError(true)}
                  fallbackSrc="https://via.placeholder.com/300x300/E2E8F0/718096?text=🐱"
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
