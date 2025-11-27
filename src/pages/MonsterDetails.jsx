import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getMonster } from "@/store/monster/slice";

export default function MonsterDetails() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const monster = useSelector((state) => state.monster.item);

  useEffect(() => {
    dispatch(getMonster(id));
  }, [id, dispatch]);

  return (
    <>
      <div>Монстр с ID: {id}</div>
      <div>
        <h2>{monster.name}</h2>
        <p>{monster.description}</p>
      </div>
    </>
  );
}
