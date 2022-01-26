const {User} = require('../db.js')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const {generarJWT} = require('../helpers/jwt');

async function registerUser(req, res){
    

    try {
        // Get user input
        const { name, email, password } = req.body;
    
        // Validate user input
        if (!(email && password && name)) {
          res.status(400).send("All input is required");
        }
    
        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ 
            where : { email: email }
         });
    
        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
        }
    
        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);
    
        // Create user in our database
        let newUser = await User.create({
          name,
          email: email.toLowerCase(), // sanitize: convert email to lowercase
          password: encryptedPassword,
        });

        // console.log(newUser.id)
        
    
        // Create token
        const token = await generarJWT(newUser.id);

        // console.log('token register >>', token);
        // save user token
        newUser.token = token;
    
        // return new user
        res.status(201).json({
            "User Data": newUser,
            "Token": token
        });

      } catch (err) {
        console.log(err);
      }

}


async function loginUser(req, res){
    
    // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({where : { email }});

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      console.log('user created >>', user['dataValues']);
      const payload =  user.id

      const token = generarJWT(payload);
      // console.log('token login >>', token);

      // save user token
      // user.token = token;

      // user
      res.status(200).send({
        "User Data": user,
        "Token": token
      });
    }
    else {
        res.status(400).json({"error":"Email or Password is incorrect"});
    }

  } catch (err) {
    console.log(err);
  }
}

const renewToken = async (req, res = response) => {

  const uid = req.uid;
  // console.log('user en renew >>', uid);


  // Generar un nuevo token
  const token = await generarJWT(uid.uid);

  // console.log('token >>', token);
  // Obtener el usuario para obtener los datos
  const usuario = await User.findOne({where: {id: uid.uid}});


  // res.json({
  //     ok: true,
  //     usuario,
  //     token
  // });

  res.status(200).json({
    "User Data": usuario,
    "Token": token
  });
}



module.exports = {
    registerUser,
    loginUser,
    renewToken
}