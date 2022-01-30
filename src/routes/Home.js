import { Flex } from "@chakra-ui/react";
import { bgColor } from "../components/color";

export const Home = () => {
	return (
		<Flex bg={bgColor}>
			<h1>Hello, This is Home.</h1>
		</Flex>
	);
};
