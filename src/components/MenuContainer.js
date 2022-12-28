import React from "react";
import { Menu } from "antd";
import MenuItem from "./Menuitem";
import { menuItems } from "../data/data";

const MenuContainer = () => {
  return (
    <Menu  width={200} theme="dark" className="menu-style" style={{ width: 250 }} mode="inline">
      {menuItems?.map((item) => (
        <MenuItem key={item?.key} item={item} />
      ))}
    </Menu>
  );
};

export default MenuContainer;
