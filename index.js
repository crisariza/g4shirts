const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { bulkScript } = require("./bulkscript.js");
const { PORT_API } = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT_API, async () => {
    console.log(`The server is listening at the port ${PORT_API}`);
    bulkScript();
  });
});
