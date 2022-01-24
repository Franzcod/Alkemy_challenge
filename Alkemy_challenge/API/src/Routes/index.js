const { Router } = require("express");
const operationRoute = require("./operations");
const userRoute = require("./Register");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


router.use("/operations", operationRoute);
router.use("/user", userRoute);

module.exports = router;