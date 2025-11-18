import { Stack } from "@mantine/core";
import { Link } from "react-router";

export default function MonstersList() {
  return (
    <Stack>
      <Link to="1">Монстер 1</Link>
      <Link to="2">Монстер 2</Link>
    </Stack>
  );
}
