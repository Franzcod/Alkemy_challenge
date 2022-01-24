const server = require("./src/app.js");
const { conn } = require("./src/db.js");


const PORT = process.env.PORT || 7700;
// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  // se crea objeto para usar bulkCreate
  

  server.listen(PORT, () => {
    console.log(" Server in port   >  ", PORT); // eslint-disable-line no-console
  });
});