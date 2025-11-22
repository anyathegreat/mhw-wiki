import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mantine/core";

import { getMonsters } from "@/store/monsters/slice";
import { selectMonstersList } from "@/store/monsters/selector";
import MonsterCard from "@/components/MonsterCard";

export default function MonstersList() {
  const dispatch = useDispatch();
  const monsters = useSelector(selectMonstersList);

  useEffect(() => {
    dispatch(getMonsters());
  }, [dispatch]);

  return (
    <Grid gutter="lg" px={{ base: "sm", sm: "lg" }}>
      {monsters.map((item) => (
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={item.id}>
          <MonsterCard name={item.name} id={item.id} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
