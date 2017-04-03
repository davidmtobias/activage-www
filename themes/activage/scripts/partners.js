//Mi custom plugin tag used in deployment sites por Partners

hexo.extend.tag.register('partners', function (args) {
	//Desc es solo descriptiva para tener info en el .md
	var partner_id = args[0];
	var text = args[2]
  var consortium = hexo.config.consortium;
  var partner = "";
  for (var i in consortium){
  	if(consortium[i][0]==partner_id){
  		var p_foto = "<img src='/images/consortium/logos/"+consortium[i][6]+"'/>";
  		var p_name = "<span class='name'>"+consortium[i][1]+"</span>";
  		var p_text = "<span class='text'>"+text+"</span>";
  		partner = "<div class='partner_bin'><a href='"+consortium[i][5]+"'>"+p_name+p_text+"</a></div>";
  		break;
  	}
  }
  return partner;
});


/**
 * Recibe un string on el suguiente formato partner_name#url#descripcion
 */
hexo.extend.tag.register('partners_generic', function (args) {
  //Desc es solo descriptiva para tener info en el .md
  var partner = "";
  var p_name = "<span class='name'>"+args[0].split("#")[0]+"</span>";
  var p_text = "<span class='text'>"+args[0].split("#")[2]+"</span>";
  partner = "<div class='partner_bin'><a href='"+args[0].split("#")[1]+"'>"+p_name+p_text+"</a></div>";
  
  return partner;
});