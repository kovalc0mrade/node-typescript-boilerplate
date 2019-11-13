import { Server } from 'http';

export const shutdown = (server: Server | null, code: number) => {
  if (server) {
    server.close(() => process.exit(code));
  } else {
    process.exit(code);
  }
};
