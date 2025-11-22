import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { MantineProvider } from "@mantine/core";
import { Provider as ReduxProvider } from "react-redux";

import MonstersList from "@/pages/MonstersList";
import MonsterDetails from "@/pages/MonsterDetails";
import HomePage from "@/pages/HomePage";
import AppLayout from "@/layouts/AppLayout";

import { store } from "./store";

import "@mantine/core/styles.css";

const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "monsters",
        handle: { crumb: "Монстры" },
        children: [
          { index: true, Component: MonstersList },
          { path: ":id", Component: MonsterDetails, handle: { crumb: ({ id }) => `Монстр ${id}` } },
        ],
      },
    ],
    handle: { crumb: "Главная" },
  },
]);

function App() {
  return (
    <ReduxProvider store={store}>
      <MantineProvider defaultColorScheme="dark">
        <RouterProvider router={router}></RouterProvider>
      </MantineProvider>
    </ReduxProvider>
  );
}

export default App;
