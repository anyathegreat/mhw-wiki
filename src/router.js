import { createBrowserRouter } from "react-router";

import MonstersList from "@/pages/MonstersList";
import MonsterDetails from "@/pages/MonsterDetails";
import HomePage from "@/pages/HomePage";
import AppLayout from "@/layouts/AppLayout";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createBrowserRouter(
  [
    {
      Component: AppLayout,
      children: [
        { index: true, Component: HomePage },
        {
          path: "monsters",
          handle: { crumb: "Монстры" },
          children: [
            { index: true, Component: MonstersList },
            { path: "not-found", Component: NotFoundPage, handle: { crumb: "Not Found" } },
            {
              path: ":id",
              Component: MonsterDetails,
              handle: { crumb: ({ id }) => `Монстр ${id}` },
            },
          ],
        },
        {
          path: "*",
          Component: NotFoundPage,
          handle: { crumb: "NotFound" },
        },
      ],
      handle: { crumb: "Главная" },
    },
  ],
  { basename: "/mhw-wiki" },
);
