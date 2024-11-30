import React from "react";
import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { formatName } from "../../../../helpers/utils";
import { useSelector } from "react-redux";
import { selectChildren } from "../../../../redux/children/children-selectors";

export const SideBar = () => {
  const children = useSelector(selectChildren);
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
