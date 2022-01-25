const jwt = require('jsonwebtoken');


const generarJWT = ( uid ) => {

    return new Promise( (resolve, reject) => {



        const payload =  {uid} ;

        jwt.sign( payload , process.env.TOKEN_KEY, { 
            expiresIn: '1d'
        }, (err, token) => {

            if( err ) {
                console.log(err);
                reject('Error al generar el token');
            } else {
                resolve(token);
            }

        });

    });

}


module.exports = {
    generarJWT
}