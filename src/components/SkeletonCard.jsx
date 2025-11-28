import { Grid, Skeleton } from "@mantine/core";

export default function SkeletonCard({ skeletonCount = 6 }) {
  const skeletonArray = Array.from({ length: skeletonCount });

  return (
    <Grid gutter="lg" px={{ base: "sm", sm: "lg" }}>
      {skeletonArray.map((_, index) => (
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={`skeletCard-${index}`}>
          <Skeleton radius={10} height={200}></Skeleton>
        </Grid.Col>
      ))}
    </Grid>
  );
}
