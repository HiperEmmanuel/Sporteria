var db=require('../dbconnection'); //reference of dbconnection.js

var cliente={

getAllClientes:function(callback){

return db.query("SELECT * FROM sporteria.`cliente.datos`;",callback);

},
getClienteById:function(id,callback){
return db.query("select * from sporteria.`cliente.datos` where referido_por=?",[id],callback);
},
addCliente:function(cliente,callback){
	db.query("Insert into sporteria.`cliente.datos` values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[cliente.CURP,cliente.idCasino,cliente.correo,cliente.nombre,cliente.apellido1,cliente.apellido2,cliente.sexo,cliente.celular,cliente.banco,cliente.nCuenta,cliente.nClave,cliente.fecha_registro,cliente.referido_por,cliente.status]);
	return db.query("Insert into sporteria.`cliente.rutas` values(?,?,?,?)",[cliente.CURP,cliente.identificacion,cliente.confirmacionCasino,cliente.fecha_modificacion],callback);
},
statusCliente:function(id,callback){
 //return db.query("update sporteria.`cliente.datos` set status=? where CURP=?",[cliente.status,id],callback);
},
updateCliente:function(id,cliente,callback){
 db.query("update sporteria.`cliente.rutas` set CURP=?,identificacion=?,confirmacionCasino=?,fecha_modificacion=? where CURP=?",[cliente.CURP,cliente.identificacion,cliente.confirmacionCasino,cliente.fecha_modificacion,id]);
 return db.query("update sporteria.`cliente.datos` set CURP=?,idCasino=?,correo=?,nombre=?,apellido1=?,apellido2=?,sexo=?,celular=?,banco=?,nCuenta=?,nClave=?,fecha_registro=?,referido_por=?,status=? where CURP=?",[cliente.CURP,cliente.idCasino,cliente.correo,cliente.nombre,cliente.apellido1,cliente.apellido2,cliente.sexo,cliente.celular,cliente.banco,cliente.nCuenta,cliente.nClave,cliente.fecha_registro,cliente.referido_por,cliente.status,id],callback);
}

};
module.exports=cliente;