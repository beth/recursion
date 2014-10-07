// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  
  	var look = function(list)
  	{
  		var found = false;
  		var classNames = list.classList;
  		var childNodes = list.childNodes;
  		for(var i in classNames)
  		{
  			if(classNames[i] == className)
  				found = true;
  		}
  		if (found)
  		{
  			nodeArr.push(list);
  		}
  		if(childNodes!= undefined)
  		{
  			for(var j in childNodes)
  			{
  				look(childNodes[j]);
  			}
  		}
  	};
  	
  var nodeArr = [];
  var body = document.body;
  look(body);

  	
  	return nodeArr;
};
