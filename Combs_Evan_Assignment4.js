var PhoneNumber = function(phoneNumber)
{
	if (phoneNumber.indexOf("-") === 3 && phoneNumber.lastIndexOf("-") === 7 && phoneNumber.length === 12)
	{
		return true;
	}
	else
	{
		return false;
	};
};
//console.log(PhoneNumber("000-000-0000"));

var EmailAddress = function(address)
{
	if (address.indexOf("@") < address.indexOf("."))
	{
		return true;
	}
	else
	{
		return false;
	};
};
//console.log(EmailAddress("edcombs@gmail.com"));

var URL = function(url)
{	
	if (url.startsWith("http://") || url.startsWith("https://"))
	{
		return true;
	}
	else
	{
		return false;
	};
};
//console.log(URL("http://adasdaa"));
//console.log(URL("https://aasdads"));
//console.log(URL("dhttp://"));

var TitleCase = function(string)
{
	var strings = string.split(" ", -1);
	var newString = "";
	//console.log(string)
	//console.log(strings);
	for (var i = 0; i < strings.length; i++)
	{
		var r = strings[i].charAt(0);
		//console.log(r);
		var j = strings[i].split(r, 2);
		//console.log(j);
		strings[i] = r.toUpperCase() + j[1];
		//console.log(strings[i]);
		newString = newString + strings[i] + " ";
		//console.log(newString);
	};	
	return newString;
};
//console.log(TitleCase("hello world"));

var StringSeperators = function(string)
{

};

var Decimal = function(number, decimals)
{

};

var FuzzyMatch = function(number, percentage)
{

};

var TimeDifference = function(time1, time2)
{

};

var StringToNumber = function(string)
{

};

var SmallestValue = function(array)
{

};

var TotalValue = function(array)
{

};

var ShortByKey = function(object, key)
{

};
