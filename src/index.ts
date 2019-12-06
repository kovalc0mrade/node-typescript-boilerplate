import { app } from './server';
import { shutdown } from './shutdown';

const PORT = Number.parseInt(process.env.PORT || '80', 10);
const server = app.listen(PORT, () => {
  console.log(`Express server listening on port:${PORT}`);
});

process.on('SIGTERM', () => {
  shutdown(server, 0);
});
