/*	Evan Combs
	SDI 0213
	Project 4
*/
var MyLib = function()
{
	//determines if the string is a phone number
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
	//determines if the string is an email address
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
	//determines if the string is a url
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
	//takes a string and capitalizes the first letter in every word
	var TitleCase = function(string)
	{
		var strings = string.split(" ", -1);
		var newString = "";
		for (var i = 0; i < strings.length; i++)
		{
			var r = strings[i].charAt(0);
			var j = strings[i].split(r, 2);
			strings[i] = r.toUpperCase() + j[1];
			newString = newString + strings[i] + " ";
		};	
		return newString;
	};
	//formats a number to a certain number of decimals
	var DecimalPLace = function(number, decimals)
	{
		var num = number;
		var dec = decimals;
		num = num.toFixed(dec);
	};
	//finds if the number1 is greater than or less than number2 and if they are within a certain percentage of each other
	var FuzzyMatch = function(number1, number2, percentage)
	{
		var num1 = number1;
		var num2 = number2;
		var perc = percentage * .01;
		var withinPerc;
		var answer;
	
		if (num1 - num2 < 0)
		{
			withinPerc = num2 * perc;
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
	//finds the smallest value in an array above the provided number
	var SmallestValueAbove = function(array, number)
	{
		var newArray = array;
		var nextNumber;
		newArray.sort();
		for (var i = 0; i < newArray.length; i++)
		{
			if (newArray[i] > number)
			{
				newNumber = newArray[i];
				break;
			}
		}
		return newNumber;
	};
	
	return{
		PhoneNumber: PhoneNumber,
		EmailAddress: EmailAddress,
		url: URL,
		TitleCase: TitleCase,
		DecimalPlace: DecimalPlace,
		FuzzyMatch: FuzzyMatch,
		SmallestValueAbove: SmallestValueAbove
	};
}
