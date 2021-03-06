import { Flex, Stack, Spacer } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

const MenuItemStack = ({ handleIsOpen }) => {
	return (
		<Stack align="center" direction="row" color="#FFC857">
			<RouterLink as={Link} to="/" onClick={handleIsOpen}>
				Home
			</RouterLink>
			<RouterLink as={Link} to="/about" onClick={handleIsOpen}>
				About
			</RouterLink>
		</Stack>
	);
};

const BrandStack = () => {
	return (
		<Stack spacing={6} align="center" direction="row" pd={4} m={5}>
			<RouterLink as={Link} to="/">
				<Heading size="4xl" color="#FFC857" fontFamily="Open Sans">
					League Tracker
				</Heading>
			</RouterLink>
		</Stack>
	);
};

const NavBar = ({ handleIsOpen }) => {
	return (
		<Flex
			bg="#084C61"
			flexFlow="column wrap"
			px={4}
			py={4}
			justifyContent="center"
			alignItems="center"
			border="white 5px solid"
		>
			<BrandStack />
			<Spacer />
			<MenuItemStack handleIsOpen={handleIsOpen} />
		</Flex>
	);
};

export default NavBar;
