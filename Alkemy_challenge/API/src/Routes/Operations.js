const { Router } = require("express");
const { getOperations,getOperationsById, postOperation, deleteOperationsById , updatePost} = require("../Controllers/operationsControlles");
const auth = require("../middlewares/auth");


const router = Router();


// path base ==>> /api/operations

router.get("/", auth ,getOperations);

router.get("/:id", auth ,getOperationsById);

router.delete("/", auth ,deleteOperationsById);

router.put("/", auth ,updatePost);

router.post("/", auth , postOperation);



module.exports = router;