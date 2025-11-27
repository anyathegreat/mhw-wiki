import { Title, Text } from "@mantine/core";

export default function HomePage() {
  return (
    <div>
      <Title order={1} mb="lg">
        Добро пожаловать в MH:Wilds Wiki
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Здесь вы руководства и полезную информацию.
      </Text>
    </div>
  );
}
