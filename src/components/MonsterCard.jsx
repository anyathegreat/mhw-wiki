import { Card, Divider, Image, Text } from "@mantine/core";
import { Link } from "react-router";

export default function MonsterCard({ name, id }) {
  return (
    <Card component={Link} to={`${id}`} padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://i.pinimg.com/originals/66/26/da/6626da28392aaec8b4140bad76517049.png"
          fit="contain"
          height={160}
          alt={name}
        />
        <Divider />
      </Card.Section>

      <Text ta="center" size="md" mt="sm">
        {name}
      </Text>
    </Card>
  );
}
