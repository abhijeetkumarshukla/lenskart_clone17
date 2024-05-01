import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const TopNavbar = () => {
  return (
    <Flex position={'relative'}
    zIndex={2}
      bg="#FFFFFF"
      mt="0.9%"
      display={["none", "none", "none", "flex"]}
      justifyContent={"space-between"}
    >
      <Box display="flex" w={"70%"} fontFamily="sans-serif" ml="2.4%">
        <NavLink>
          {" "}
          <Text fontSize="70%" color="#000042">
            Do More, Be More
          </Text>
        </NavLink>
        <Text fontSize="100%" mt="-0.8%" p="0.4%">
          |
        </Text>
        <NavLink to="">
          <Text fontSize="63%" color="#000042" p="">
            Tryin3D
          </Text>
        </NavLink>
        <Text fontSize="100%" mt="-0.8%" p="0.4%">
          |
        </Text>
        <NavLink>
          <Text fontSize="71%" color="#000042">
            StoreLocator
          </Text>
        </NavLink>
        <Text fontSize="100%" mt="-0.8%" p="0.4%">
          |
        </Text>
        <NavLink>
          <Text fontSize="71%" color="#000042">
            Singapore
          </Text>
        </NavLink>
        <Text fontSize="100%" mt="-0.8%" p="0.4%">
          |
        </Text>
        <NavLink>
          <Text fontSize="71%" color="#000042">
            UAE
          </Text>
        </NavLink>
        <Text fontSize="100%" mt="-0.8%" p="0.4%">
          |
        </Text>
        <NavLink>
          <Text fontSize="71%" color="#000042">
            John Jacobs
          </Text>
        </NavLink>
        <Text fontSize="100%" mt="-0.8%" p="0.4%">
          |
        </Text>
        <NavLink>
          <Text fontSize="71%" color="#000042">
            Aqualens
          </Text>
        </NavLink>
        <Text fontSize="100%" mt="-0.8%" p="0.4%">
          |
        </Text>
        <NavLink>
          <Text fontSize="71%" color="#000042">
            Cobrowsing
          </Text>
        </NavLink>
        <Text fontSize="100%" mt="-0.8%" p="0.4%">
          |
        </Text>
        <NavLink>
          <Text fontSize="71%" color="#000042">
            Engineering Blog
          </Text>
        </NavLink>
        <Text fontSize="100%" mt="-0.8%" p="0.4%">
          |
        </Text>
        <NavLink>
          <Text fontSize="71%" color="#000042">
            Lenskart Franchise
          </Text>
        </NavLink>
      </Box>
      <Box mr={"3%"}>
        <NavLink to={"/contact"}>
          {" "}
          <Text fontSize="74%" color="#000042">
            Contact Us
          </Text>{" "}
        </NavLink>
      </Box>
    </Flex>
  );
};

export default TopNavbar;

 