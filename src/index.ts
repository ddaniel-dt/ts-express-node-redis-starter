import express from 'express';
import log from './log';
import { client } from './database';

export function serve(port: number) {
  return new Promise(resolve => {
    const app = express();

    client.on('error', err => {
      console.log('Error ' + err);
    });

    app.get('/', async (req, res) => {
      res.send({
        api: 'ts-express-node-redis-starter',
      });
    });

    const httpServer = app.listen(port, () => {
      log.info(`Server listening on port ${port}`);
      resolve(httpServer);
    });
  });
}

if (require && require.main === module) {
  const PORT = Number(process.env.PORT) || 8001;
  serve(PORT);
}
