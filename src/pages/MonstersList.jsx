import { monstersList } from "../moxkData";
import { Grid } from "@mantine/core";

import MonsterCard from "../components/MonsterCard";

export default function MonstersList() {
  return (
    <Grid gutter="lg" px={{ base: "sm", sm: "lg" }}>
      {monstersList.map((item) => (
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={item.id}>
          <MonsterCard name={item.name} id={item.id} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
