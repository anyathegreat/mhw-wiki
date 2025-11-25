import { RouterProvider } from "react-router/dom";
import { MantineProvider } from "@mantine/core";
import { Provider as ReduxProvider } from "react-redux";

import { router } from "./router";
import { store } from "./store";

import "@mantine/core/styles.css";

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
