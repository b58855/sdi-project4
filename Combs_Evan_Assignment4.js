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

var DecimalPLace = function(number, decimals)
{
	var num = number;
	var dec = decimals;
	//console.log(dec);
	num = num.toFixed(dec);
	//console.log(num);
};
//DecimalPlace(4.53222, 2);

var FuzzyMatch = function(number1, number2, percentage)
{
	var num1 = number1;
	//console.log(num1);
	var num2 = number2;
	//console.log(num2);
	var perc = percentage * .01;
	//console.log(perc);
	var withinPerc;
	var answer;
	
	if (num1 - num2 < 0)
	{
		withinPerc = num2 * perc;
		//console.log("within " + withinPerc);
		if (num2 - num1 <= withinPerc)
		{
			answer = num1 + " is less than " + num2 + " and they are within " + percentage + "% of each other.";		
		}
		else
		{
			answer = num1 + " is less than " + num2 + " and they are not within " + percentage + "% of each other.";
		}
	}
	else if (num1 - num2 > 0)
	{
		withinPerc = num1 * perc;
		//console.log("within " + withinPerc);
		if (num1 - num2 <= withinPerc)
		{
			answer = num1 + " is greater than " + num2 + " and they are within " + percentage + "% of each other.";
		}
		else
		{
			answer = num1 + " is greater than " + num2 + " and they are not within " + percentage + "% of each other.";
		}
	}
	else
	{
		answer = num1 + " is equal to " + num2 + ".";
	}
	
	return answer;
};

var SmallestValueAbove = function(array, number)
{
	//console.log(array);
	//console.log(number);
	var newArray = array;
	//console.log(newArray);
	var nextNumber;
	newArray.sort();
	//console.log(newArray);
	for (var i = 0; i < newArray.length; i++)
	{
		if (newArray[i] > number)
		{
			newNumber = newArray[i];
			break;
		}
	}
	//console.log(newNumber);
	return newNumber;
};
//var array = [18,32,47,19,38,25];
//SmallestValueAbove(array, 33);
