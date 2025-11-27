import { NavLink as RouterNavLink } from "react-router";
import { Box, Divider, NavLink, Burger, Group } from "@mantine/core";
import { IconDashboard, IconDatabase } from "@tabler/icons-react";

const navigationItems = [
  { icon: <IconDashboard size={18} />, label: "Главная", path: "/" },
  { icon: <IconDatabase size={18} />, label: "Монстры", path: "/monsters" },
];

export default function Sidebar({ opened, toggle }) {
  return (
    <Box>
      <Group h="59" justify="space-between" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
      <Divider />

      {navigationItems.map((item) => (
        <NavLink key={item.path} component={RouterNavLink} to={item.path} label={item.label} px="md" />
      ))}
    </Box>
  );
}
