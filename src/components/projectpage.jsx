import React from "react";
import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  Button,
  Center,
  HStack,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import colors from "../colors";
import "../App.css";
import { CloseIcon } from "@chakra-ui/icons";

const ProjectPage = ({
  projectName,
  projectDescription,
  projectTimeline,
  pdfLink,
}) => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Box w="100%" bgColor={colors.primaryblack} p={5}>
      <Box
        w="100%"
        height="auto"
        bgColor={colors.secondaryblack}
        borderRadius="15px"
        borderWidth="1px"
        borderColor="#2f2f2f"
        justifyContent="center"
      >
        <Center w="100%" pt={5}>
        <IconButton
          colorScheme='blackAlpha'
          aria-label='Call Segun'
          isRound={true}
          size='sm'
          icon={<CloseIcon />}
          onClick={() => navigate("/")}
          _hover={{
            backgroundColor: "white", 
            textColor: "black"
          }}
        />
        </Center>
        <HStack
          w="100%"
          p={10}
          justifyContent="space-between"
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <Text
            className="h1"
            fontSize={{ base: "30", md: "40px" }}
            color={colors.primarywhite}
            textAlign="left"
            alignSelf="flex-start" // Align to the top left
            width="200vw"
            mr={{ base: "0", md: "60px", lg:"400px" }}
          >
            {projectName}
          </Text>
          <Text
            fontSize="lg"
            color={colors.primarywhite}
            textAlign="right"
            alignSelf="flex-start"
          >
            {projectDescription}
          </Text>
        </HStack>
        <Text pl={10} fontSize="lg" color={colors.secondarywhite} textAlign="left">{projectTimeline}</Text>
        <Center height="1000px" pt="10">
        <iframe
          src={pdfLink}
          width="90%"
          height="100%"
          title="PDF Viewer"
          style={{ border: 'none' }}
        />
        </Center>
        
      </Box>    
    </Box>
  );
};

export default ProjectPage;
