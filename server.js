import app from './app';
// import { PORT } from './env';
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
  console.log(`"CTRL + Clique" em http://localhost:${PORT}`);
});
