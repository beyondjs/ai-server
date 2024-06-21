import { Server } from '@beyond-js/api-server/main';

const server = new Server();
server.start('@beyond-js/ai-tools/routes');
