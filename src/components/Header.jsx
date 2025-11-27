import { useMemo } from "react";
import { Box, Breadcrumbs, Burger, Group, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { Link, useMatches } from "react-router";

export default function Header({ opened, toggle }) {
  const matches = useMatches();

  const crumbs = useMemo(
    () =>
      matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match) => {
          // console.log(match);
          const crumbGenerator = match.handle.crumb;

          return {
            title: typeof crumbGenerator === "function" ? crumbGenerator(match.data || match.params) : crumbGenerator,
            href: match.pathname,
          };
        }),
    [matches],
  );

  const items = crumbs.map((item, index) => {
    const isLast = index === crumbs.length - 1;
    const isLink = item.href && !isLast;
    return (
      <Text
        key={index}
        component={isLink ? Link : "span"}
        to={item.href}
        td={isLink ? "underline" : "none"}
        c={isLast ? "blue" : "dimmed"}
        fw={isLast ? 500 : 400}
      >
        {item.title}
      </Text>
    );
  });

  return (
    <Group h="100%" px="md" justify="space-between">
      <Group h="100%" gap="xs">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        <Box visibleFrom="sm">
          <Breadcrumbs separator={<IconChevronRight size={16} />} mt={4}>
            {items}
          </Breadcrumbs>
        </Box>
      </Group>

      <Group gap="xs" visibleFrom="sm">
        Што-то с чем-то
      </Group>
    </Group>
  );
}
