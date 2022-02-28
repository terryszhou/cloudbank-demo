import { Stack, Flex, Text, Heading, Image } from "@chakra-ui/react";
import * as React from "react";
import './App.css';

export const App = () => {
  return (
    <Flex
      bgGradient={"linear(to-b, rgb(25,54,53), rgb(11,32,34))"}
      minHeight={"100vh"}
      flexDir={"column"}
      alignItems={"center"}
      width={"100%"}>
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        textAlign={"center"}
        width={"80%"}>
        <Heading
          fontFamily={"var(--chakra-fonts-mono)"}
          marginTop={"10%"}
          marginBottom={"5%"}
          letterSpacing={"0.5rem"}
          size={"3xl"}
          sx={{
            background: "-webkit-linear-gradient(#d5ad3f, #b96f2e)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent" }}>
          Cloudbank
        </Heading>
        <Stack spacing={5} paddingX={"15%"} color={"#d5ad3f"} opacity={0.9}>
          <Text
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={"md"}>
            A <Text as={"span"} color={"#c74031"}>dark</Text> but <Text as={"span"} color={"#6dd4b2"}>vibrant</Text>{` theme inspired by `}
            <Text
              as={"a"}
              color={"rgb(210,217,224)"}
              fontWeight={"bold"}
              href="https://store.steampowered.com/app/237930/Transistor/"
              letterSpacing={"0.2rem"}
              target={"_blank"}
              _hover={{ textDecoration: "underline" }}>
              TRANSISTOR
            </Text>
            {` by Supergiant Games!`}
          </Text>
          <Text
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={"sm"}>
            (Note: leather coat, muscle bike, and oversized sword not included)
          </Text>
        </Stack>
        <Image
          borderRadius={"5px"}
          boxShadow={"dark-lg"}
          marginY={"5%"}
          src={"/screenshot.png"}
          alt={"screenshot"} />
      </Flex>
    </Flex>
  );
}
