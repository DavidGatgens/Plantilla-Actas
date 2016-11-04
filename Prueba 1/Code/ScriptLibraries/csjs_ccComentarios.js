function xxxxxxx(){}

function validarIngresoComentarios(){
	var msg="";
	if(!validaCampoTexto(dojo.byId("#{id:inputNewComments}")))msg= msg + "Comentarios.\n";

	if(msg!=""){
		alert("Debe incluir los siguientes Datos: \n" + msg);
		return false;
	}
	
}

