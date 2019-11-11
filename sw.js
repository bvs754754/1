'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","css/style2.css"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
