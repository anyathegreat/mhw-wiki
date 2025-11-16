import { useParams } from "react-router";

export default function MonsterDetails() {
  const { id } = useParams();

  return <div>Монстр с ID: {id}</div>;
}
