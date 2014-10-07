// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

	var primitiveCheck = function(ob) 
	{
		if(ob instanceof String || ob instanceof Number || ob instanceof Boolean)
			return ob.valueOf();
		else
			return ob;
	};
	
	obj = primitiveCheck(obj);
	
	var insideObj = false;

	if(typeof obj == "object" && !(obj === null) && !(Array.isArray(obj)))
	{
		insideObj = true;
		var str = "{";
		var first = true;
		for(var k in obj)
		{
			if (!(typeof k == "symbol" || typeof obj[k] == "function" || typeof obj[k] == "undefined" || typeof k == "undefined"))
			{
				if(!first)
				{
					str = str + ','; 
				}
				else
				{
					first = false;
				}
				str = str + '\"' + k + '\"' + ':' + stringifyJSON(obj[k]);
			}

		}
		return str + "}";
	}
	else if (Array.isArray(obj))
	{
		insideObj = true;
		var str = "[";
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
			str = str + stringifyJSON(obj[k]);
		}
		return str + "]";
	}
	else if (typeof obj == "string")
	{
		return '\"' + obj + '\"';
	}
	else if(insideObj)
	{
		return obj;
	}
	else
		return "" + obj;


};
