import { Stack, Button, Link, Circle, Tooltip, Flex, Text, Heading, Image, Box, HStack, VStack, IconButton } from "@chakra-ui/react";
import * as React from "react";

import { SiVisualstudiocode } from "react-icons/si";

export const App = () => {
  const colorArray = [
    "#1e1e1ea3", "#343434", "#5e5e65", "#b96f2e",
    "#d5ad3f", "#c74031", "#6dd4b28c", "#6dd4b2", "#b6f69d",
  ];

  return (
    <Flex
      bgGradient={"linear(to-b, rgb(11,32,34), rgb(25,54,53))"}
      minHeight={"100vh"}
      flexDir={"column"}
      alignItems={"center"}
      width={"100%"}>
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        textAlign={"center"}
        width={"80%"}>
        <Box
          boxShadow={"0 0 40px 30px #6dd4b2"}
          height={1}
          position={"fixed"}
          top={-1}
          width={"100%"} />
        <VStack
          marginY={"5%"}
          spacing={5}>
          <Link
            display={"flex"}
            href={"https://github.com/terryszhou/cloudbank-demo"}
            justifyContent={"center"}
            target={"_blank"}>
            <Image
              alt={"cloudbank logo"}
              cursor={"pointer"}
              filter={"drop-shadow(0 0 5px #1e1e1ea3)"}
              src={"/cloudbank.png"}
              width={"20%"}
              transition={"100ms ease-in-out"}
              _hover={{ transform: "scale(1.1)" }} />
          </Link>
          <Heading
            color={"rgb(210,217,224)"}
            fontFamily={"var(--chakra-fonts-mono)"}
            letterSpacing={"0.5rem"}
            fontSize={"5vw"}
            textShadow={"0 0 5px #6dd4b2"}>
            Cloudbank
          </Heading>
          <Text
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={{ base: "sm", lg: "md" }}
            sx={{
              background: "-webkit-linear-gradient(#d5ad3f, #b96f2e)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent" }}>
            by Terry S. Zhou
          </Text>
        </VStack>
        <Stack
          color={"#d5ad3f"}
          paddingX={"15%"}
          spacing={5}
          sx={{
            background: "-webkit-linear-gradient(#d5ad3f, #b96f2e)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent" }}>
          <Text
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={{ base: "xs", lg: "md" }}>
            {`A dark but vibrant theme inspired by `}
            <Text
              as={"a"}
              color={"rgb(210,217,224)"}
              fontWeight={"bold"}
              href="https://store.steampowered.com/app/237930/Transistor/"
              letterSpacing={"0.2rem"}
              target={"_blank"}
              textShadow={"0 0 2px #6dd4b2"}
              _hover={{ textDecoration: "underline" }}>
              TRANSISTOR
            </Text>
            {` by Supergiant Games!`}
          </Text>
          <Text
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={{ base: "xs", lg: "sm" }}>
            (Note: leather coat, muscle bike, and oversized sword not included)
          </Text>
        </Stack>
        <Image
          borderRadius={"5px"}
          boxShadow={"0 0 10px #6dd4b2"}
          // boxShadow={"dark-lg"}
          marginY={"5%"}
          src={"/screenshot.png"}
          alt={"screenshot"} />
        <Stack marginY={"4%"} spacing={5} alignItems={"center"}>
          <Text
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={{ base: "xl", lg: "2xl"}}
            fontWeight={"bold"}
            sx={{
              background: "-webkit-linear-gradient(#d5ad3f, #b96f2e)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent" }}>
              Download Color Theme Now!
          </Text>
          <Tooltip hasArrow label={"Visual Studio Code"}>
            <IconButton
              alt={"Visual Studio Download"}
              as={"a"}
              bgColor={"#6dd4b2"}
              boxShadow={"0 0 5px #6dd4b2"}
              color={"black"}
              fontSize={"3xl"}
              href={"https://www.google.com"}
              icon={<SiVisualstudiocode />}
              rounded={"full"}
              size={"lg"}
              target={"_blank"}
              width={"fit-content"}
              _hover={{
                bgColor: "white",
                color: "rgb(58,129,202)"
              }} />
          </Tooltip>
        </Stack>
        <Stack marginY={"4%"} spacing={5}>
          <Text
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={{ base: "xl", lg: "2xl"}}
            fontWeight={"bold"}
            sx={{
              background: "-webkit-linear-gradient(#d5ad3f, #b96f2e)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent" }}>
              Color Palette
          </Text>
          <HStack spacing={5}>
            {colorArray.map(color => <PaletteCircle color={color} /> )}
          </HStack>
        </Stack>
        <Button
          as={"a"}
          backgroundColor={"transparent"}
          border={"1px solid goldenrod"}
          color={"goldenrod"}
          cursor={"pointer"}
          filter={"drop-shadow(0 0 5px goldenrod)"}
          fontFamily={"var(--chakra-fonts-mono)"}
          fontSize={{ base: "sm", md: "md", lg: "xl" }}
          marginTop={"2%"}
          marginBottom={"10%"}
          padding={"1.5rem"}
          href={"https://www.terryszhou.com"}
          target={"_blank"}
          _focus={{ boxShadow: "none" }}
          _hover={{ backgroundColor: "goldenrod", color: "inherit" }}>
          See My Other Work
        </Button>
        <Box
          boxShadow={"0 0 20px 10px #6dd4b2"}
          height={1}
          position={"fixed"}
          bottom={-1}
          width={"100%"} />
      </Flex>
    </Flex>
  );
}

export const PaletteCircle = ({ color }) => (
  <Tooltip hasArrow label={color}>
    <Circle
      bgColor={color}
      cursor={"pointer"}
      boxShadow={`0 0 2px ${color}`}
      size={{ base: "15px", lg: "30px" }}
      transition={"100ms ease-in-out"}
      _hover={{
        transform: "scale(1.2)"
      }}
    />
  </Tooltip>
);
