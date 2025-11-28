import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mantine/core";

import { getMonsters } from "@/store/monsters/slice";
import { selectMonstersList } from "@/store/monsters/selector";
import MonsterCard from "@/components/MonsterCard";
import SkeletonCard from "@/components/SkeletonCard";

export default function MonstersList() {
  const dispatch = useDispatch();

  const monsters = useSelector(selectMonstersList);
  const { loading } = useSelector((state) => state.monsters);

  useEffect(() => {
    dispatch(getMonsters());
  }, [dispatch]);

  if (loading) return <SkeletonCard skeletonCount={30} />;

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
