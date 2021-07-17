import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";

export default function Sydney(){
    return(
        <Box borderRadius="4px" overflow="hidden">
            <Image src="/cities.oceania/sydney.jpg" h="170px" w="100%"/>
            <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                <Flex direction="column">
                    <Heading fontSize="xl" fontWeight="500">Sydney</Heading>
                    <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Australia</Text>
                </Flex>
                <Image src="/cities.oceania/australia.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
            </Flex>
        </Box>
    )
}