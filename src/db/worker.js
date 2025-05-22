  import { PGlite } from '@electric-sql/pglite';
  import { worker } from '@electric-sql/pglite/worker';
  import { live } from '@electric-sql/pglite/live';

  worker({
    async init(options) {
      return new PGlite({
        // Register the 'live' extension to support cross-tab change detection & subscriptions
        extensions: { live },
         // IndexedDB for persistent storage in the browser
        dataDir: 'idb://patient-db',
      });
    },
  });
