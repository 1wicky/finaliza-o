const jwt = require("jsonwebtoken")
const jwtConfig = require("./config/jwt")
const dotenv = require('dotenv');
dotenv.config()
const Usuario = require("./models/Usuario");

function validaToken(req,res, next){
    try {
        let token = req.headers['authorization'].split(" ")[1];
        let decoded = jwt.verify(token,jwtConfig.secret);
        req.usuario = decoded;
        console.log(req.usuario)
        let usuario = Usuario.findOne({where:{id : req.usuario.id},attributes:{exclude:["senha"]}});
        if(usuario === null){
          res.status(404).json({'msg':"Usuário não encontrado!"});
        }
    
      } catch(err){
        res.status(401).json({"msg":"Não foi possível autenticar!"});
      }
        
}

module.exports=validaToken
