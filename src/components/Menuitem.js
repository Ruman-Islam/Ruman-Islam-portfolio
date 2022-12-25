import React from "react";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItem = ({ item: { icon, key, routeName, route } }) => {
  const { pathname } = useLocation();

  return (
    <Menu.Item key={key}>
      <div className="h-full flex items-center">
        <FontAwesomeIcon
          icon={icon}
          className="w-5"
          style={{
            color: `${pathname === route ? "#54B689" : "white"}`,
          }}
        />
        <NavLink
          style={{ color: `${pathname === route ? "#54B689" : "white"}` }}
          to={route}
        >
          {routeName}
        </NavLink>
      </div>
    </Menu.Item>
  );
};

export default MenuItem;
