import { Flex, Avatar, Heading, Stack, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const auth = useAuth();
  return (
    <Flex
      as="nav"
      w="100vw"
      h="60px"
      bgColor="#FEEBC8"
      align="center"
      justify="space-between"
      px="32px"
    >
      <Flex>
        <Link to="/">
          <Heading>logicl</Heading>
        </Link>
      </Flex>

      <Link to="/explore">
        <Button backgroundColor="teal.100" w="100px">
          Explore
        </Button>
      </Link>

      <Stack direction="row" spacing="16px" align="center">
        <Link to={auth.user ? "/share" : "/auth"}>
          <AddIcon boxSize={6} />
        </Link>
        <Link to={auth.user ? "/profile" : "/auth"}>
          <Avatar
            boxSize={8}
            bgColor="#000"
            src={auth.user ? auth.user.photoUrl : ""}
          />
        </Link>
      </Stack>
    </Flex>
  );
};

export default NavBar;
