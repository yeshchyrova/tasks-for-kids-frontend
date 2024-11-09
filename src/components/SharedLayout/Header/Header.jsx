import { Box, Button, Flex } from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import React from "react";

export const Header = () => {
  const handleLogout = () => {
    console.log("Logout!");
  };

  const openModal = () => {
    console.log("Open modal!");
  };

  return (
    <Box as="header" bgColor="#D7BFB6">
      <Flex justifyContent={"flex-end"}>
        <Button colorPalette="purple" variant="surface" onClick={openModal}>
          Add new family member
          <GoPlus />
        </Button>
        <Button
          type="button"
          color="purple"
          backgroundColor="transparent"
          variant="solid"
          onClick={handleLogout}
        >
          Logout
          <FaArrowRight />
        </Button>
      </Flex>
    </Box>
  );
};

// const Header = () => {
//   const handleLogout = () => {
//     dispatch(logout())
//   }
//   return (
//     <header>
//       <p>Dashboard</p>
//       <div>
//         <button type="button">Add new family member</button>
//         <button type="button" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Header
