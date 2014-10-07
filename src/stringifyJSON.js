// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	var str = "{";
	var first = true;
	for(var k in obj)
	{
		if(!first)
		{
			str = str + ','; 
		}
		else
		{
			first = false;
		}
		
		str = str + '\"' + k + '\"' + ':' ;
		
		if(typeof obj[k] == "object")
		{
			str = str + stringifyJSON(obj[k]);
		}
		else if(typeof obj[k] == "string")
		{
			str = str + '\"' + obj[k] + '\"';
		}
		else
		{
			str = str + obj[k];
		}
	}
	console.log(str);
  return str + "}";
};
