import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getMonster } from "@/store/monster/slice";
import { Skeleton, Stack } from "@mantine/core";

export default function MonsterDetails() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const monster = useSelector((state) => state.monster.item);
  const { loading } = useSelector((state) => state.monster);

  useEffect(() => {
    dispatch(getMonster(id));
  }, [id, dispatch]);

  if (loading) {
    return (
      <Stack>
        <Skeleton height={35} mt={25} width="30%" />
        <div>
          <Skeleton height={12} width="70%" radius="xl" />
          <Skeleton height={12} mt={5} width="70%" radius="xl" />
          <Skeleton height={12} mt={5} width="70%" radius="xl" />
        </div>
      </Stack>
    );
  }

  return (
    <>
      <div>
        <h2>{monster.name}</h2>
        <p>{monster.description}</p>
      </div>
    </>
  );
}
