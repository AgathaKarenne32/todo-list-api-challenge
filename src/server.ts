/*import App from "./app";
import { envs } from "./envs";
import {
  ExampleRoutes
} from "./routes";

const app = new App(
  [
    ExampleRoutes.bind(),
    // Add more routes here
  ],
  envs.PORT,
);

app.listen();*/

import './envs';
import { app } from './app';

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
