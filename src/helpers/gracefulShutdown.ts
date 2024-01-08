import client from '~/libs/redis';
import { Server } from 'http';

export const gracefulShutdownInterruption = (event: string, server: Server) => code => {

  console.log('Caught ' + `${event}` + `${code}` + ' gracefully shutting down');

  setTimeout(() => {
    server.close(async () => {
      if (client.isOpen || client.isReady) {
        client.disconnect();
      }
      process.exit(code);
    });
  }, 1000);

};

export const gracefulShutdownException = (event: string) => code => {
  console.log('Caught ' + `${event}` + `${code}` + ' gracefully shutting down');
};
