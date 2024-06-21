const BEE = require('@beyond-js/bee');

BEE('http://localhost:3000', { inspect: 4000 });

bimport('@beyond-js/ai-server/main').catch(exc => console.error(exc.stack));
