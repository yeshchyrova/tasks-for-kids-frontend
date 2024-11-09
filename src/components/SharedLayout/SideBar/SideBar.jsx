import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Collapsible } from "@chakra-ui/react";
import { TEMP_USER_DATA } from "../../../App";



export const SideBar = () => {
  const dashboardUrl = `/${TEMP_USER_DATA.id}/${TEMP_USER_DATA.childId}/tasks`;
  return (
    <Box
      position="fixed"
      zIndex={10}
      height="100%" 
      width="300px"
      bgColor="#666666"
      left={0}
    >
      <NavLink to={dashboardUrl}>Home</NavLink>
      <NavLink to={"/" + TEMP_USER_DATA.id + "/confirmation"}>
        Need confirmation
      </NavLink>
      <Collapsible.Root>
        <Collapsible.Trigger>Statistics</Collapsible.Trigger>
        <Collapsible.Content>
          <NavLink to={"/" + TEMP_USER_DATA.childId + "/stats"}>
            Child name 1
          </NavLink>
          <NavLink to={"/" + TEMP_USER_DATA.childId2 + "/stats"}>
            Child name 2
          </NavLink>
        </Collapsible.Content>
      </Collapsible.Root>
      <NavLink to={"/" + TEMP_USER_DATA.id + "/settings"}>Settings</NavLink>
    </Box>
  );
};
