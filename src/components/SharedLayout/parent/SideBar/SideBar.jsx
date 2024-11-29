import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Box, Collapsible, Flex } from "@chakra-ui/react";
import { useChildren } from "../../../../hooks/useChildren";
import { formatName } from "../../../../helpers/utils";

export const SideBar = () => {
  const { children } = useChildren();



  return (
    <Flex
      position="fixed"
      zIndex={10}
      height="100%"
      width="250px"
      background="#b4abab"
      left={0}
      direction="column"
    >
      <NavLink to="/parent">Home</NavLink>
      <NavLink to="/confirmation">Need confirmation</NavLink>
      <div>
        <p>Stats: </p>
        {children.map(({id, name}) => (
          <li key={id}>
            <NavLink to={`/stats/${id}`}>
              {formatName(name)}
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
    </Flex>
  );
};
