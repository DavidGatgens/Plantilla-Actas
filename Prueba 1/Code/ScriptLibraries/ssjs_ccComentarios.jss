function xxxxxxx(){}

function rendered_EditComentario(){
	var doc:NotesDocument=database.getDocumentByID(comentario.getNoteID());
	if(doc!=null){
		if (doc.getItemValueString("Autor")==@UserName()){
			return true;
		}else{
			return true;
		}
	}else{
		return true;
	}	

}

function rendered_DeleteComentario(){
	var doc:NotesDocument=database.getDocumentByID(comentario.getNoteID());
	if(doc!=null){
		if (doc.getItemValueString("Autor")==@UserName()){
			return true;
		}else{
			return true;
		}
	}else{
		return true;
	}

}



function delete_Comentario(){
	var docEliminar:NotesDocument=database.getDocumentByID(comentario.getNoteID());
	if(docEliminar!=null){
		//docEliminar.removePermanently(true)
		docEliminar.replaceItemValue("DeletedDocument","S");
		docEliminar.save(true,false);
	}
	
}

function btnSalvar_Comentario(){
	try{
		var document = database.createDocument();
		if(null != document){
			document.appendItemValue('form', 'Comentarios');
			document.appendItemValue('IDDocumentoAsociado', compositeData.IDDocumento);
			document.appendItemValue('Comentarios', getComponent("inputNewComments").getValue());
			//getComponent("inputNewComments").getValue());
			document.computeWithForm(true,false);
			
			document.save()
		}
	}catch(e){
		print('Error: ' + e);
		return;
	}
	var c = getComponent("dialogNewComentario")
	c.hide()
	
			//document.save();
}


	