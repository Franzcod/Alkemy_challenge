const { Router } = require("express");
const {registerUser, loginUser, renewToken} = require("../Controllers/userControllers");
const  verifyToken  = require('../middlewares/auth');
// path base ==>> /api/user


const router = Router();


router.post("/register", registerUser);

router.post("/login", loginUser);

// Revalidar Token
router.get('/renew', verifyToken, renewToken);

module.exports = router;