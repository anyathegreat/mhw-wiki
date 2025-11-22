import { getMonster } from "@/store/monster/slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

export default function MonsterDetails() {
  const dispatch = useDispatch();

  const monster = useSelector((state) => state.monster.item);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMonster(id));
  }, [dispatch]);

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
