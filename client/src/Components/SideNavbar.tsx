import { Menu, rem } from "@mantine/core";
import {
  IconBrandSuperhuman,
  IconLogout,
  IconHome2,
  IconMovie,
} from "@tabler/icons-react";
import classes from "./SideNavbar.module.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  toggleNavbar: () => void;
};

function SideNavBar(props: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(0);

  const checkLoc = (pathname: string) => {
    if (location.pathname === pathname) {
      return true;
    }
    return false;
  };

  const menuData = [
    {
      leftSection: <IconHome2 style={{ width: rem(18), height: rem(18) }} />,
      name: "Home",
      pathname: "/",
      onClick: () => navigate("/"),
    },
    {
      leftSection: <IconMovie style={{ width: rem(18), height: rem(18) }} />,
      name: "Movies",
      pathname: "/movies",
      onClick: () => navigate("/movies"),
    },
    {
      leftSection: (
        <IconBrandSuperhuman style={{ width: rem(18), height: rem(18) }} />
      ),
      name: "Manage Catalog",
      pathname: "/manage-catalog",
      onClick: () => navigate("/manage-catalog"),
    },
  ];

  return (
    <Menu shadow="md" width={200}>
      {menuData.map((item, index) => (
        <Menu.Item
          key={index}
          className={classes.link}
          data-active={
            checkLoc(item.pathname) && index === active ? active : undefined
          }
          leftSection={item.leftSection}
          onClick={() => {
            item.onClick();
            setActive(index);
            if (window.innerWidth < 770) {
              props.toggleNavbar();
            }
          }}
        >
          {item.name}
        </Menu.Item>
      ))}
      <Menu.Item
        className={classes.link}
        leftSection={<IconLogout style={{ width: rem(18), height: rem(18) }} />}
        onClick={() => {
          console.log("Logout");
        }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
}

export default SideNavBar;
