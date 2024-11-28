import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Box, Collapsible } from "@chakra-ui/react";
import { useChildren } from "../../../../hooks/useChildren";

export const SideBar = () => {
  const { children } = useChildren();

  useEffect(() => {
    console.log("Children is here: ", children);
  }, [children]);

  const formatName = (name) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  return (
    <Box
      position="fixed"
      zIndex={10}
      height="100%"
      width="300px"
      bgColor="#666666"
      left={0}
    >
      <NavLink to="/parent">Home</NavLink>
      <NavLink to="/confirmation">Need confirmation</NavLink>
      <div>
        <p>Stats: </p>
        {children.map((child) => (
          <li key={child.id}>
            <NavLink to={"/stats/" + child.id}>
              {formatName(child.name)}
            </NavLink>
          </li>
        ))}
      </div>
      {/* <Collapsible.Root>
        <Collapsible.Trigger>Statistics</Collapsible.Trigger>
        <Collapsible.Content>
          {children.map((child) => (
            <NavLink to={"/stats/" + child.id}>
              {formatName(child.name)}
            </NavLink>
          ))}
        </Collapsible.Content>
      </Collapsible.Root> */}
      <NavLink to={"/settings"}>Settings</NavLink>
    </Box>
  );
};
