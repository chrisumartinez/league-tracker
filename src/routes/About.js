import { Flex } from "@chakra-ui/react";
import { bgColor } from "../components/color";
import { Text, Box, Heading } from "@chakra-ui/react";

export const About = () => {
	return (
		<Flex
			display="flex"
			direction="column"
			alignItems="center"
			justifyContent="center"
			bg={bgColor}
			border="5px green solid"
			h="100%"
		>
			<Flex
				border="5px red solid"
				flexDir="column"
				justifyContent="center"
				alignItems="center"
			>
				<Heading size="2xl" color="#FFC857" fontFamily="Open Sans">
					About:
				</Heading>
				<Text>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining
					essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum
					passages, and more recently with desktop publishing software
					like Aldus PageMaker including versions of Lorem Ipsum.
				</Text>
			</Flex>
		</Flex>
	);
};
