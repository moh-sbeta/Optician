// the random function that we used to generate data
var random = function random(type){
	return function(max){

		switch (type) {
			case "deg":
				return Math.floor(Math.random() * max) +" °" // to get percentage insite our data 
			case " digit":
				return Math.random() * max  // to get percentage insite our data 
	
			default:
					return Math.floor(Math.random() * max) // basic case number 
	
		}	
	}	
}
var randomUserFirstName = function (){
	var firstNameTab = [ "Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"]
	return firstNameTab[random()(20)] 
}
var randomUserLastName = function(){
	var lastNameTab = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig"]
	return lastNameTab[random()(20)] 	
}
var randomEmail = function(){
	var provider = ["@gmail","@yahoo","@hotmail","@icloud"]
	var domaine = [".com",".fr",".net",".org"]
	var separator = ["-","_","."]
	return randomUserFirstName() + separator[random()(separator.length)] + randomUserLastName() + provider[random()(provider.length)] + domaine[random()(domaine.length)]

}
var randomDate = function (){
	var month = random()(13)
	var monthTab = [1,3,5,7,8,10,12] // index month 31 day
	var years = 1919 + random()(100) // to start from min of 1919
	if(month === 2){
		return  random()(30) + " / " + month +" / "+ years // to generate  correct number of feb month 
	}
	if (monthTab.indexOf(month) !== -1){
		return  random()(32) + " / " + month +" / "+ years // to generate max coorect number of month that hold 31 days
	}
	return  random()(31) + " / " + month +" / "+ years // to generate max coorect number of month that hold 30 days
}


var dataObj = function (objName,attr){

	var obj ={}
	obj[objName] = {}

	for( key in attr ){ 
		obj[objName][key] = attr[key]
	}

	return obj //row genertaor 
}
var generateData = function() {
	var result = []
	for (var i = 0 ; i< 10 ; i++ ){
		var attrInfo = {
			"first Name": randomUserFirstName() ,
			"lastName"	:randomUserLastName() , 
			"email"		:randomEmail() ,
			"date"		: randomDate(),
			"phoneNo"	: random()(10000000000),
		}
		var left = {
			"SPH" : random("number")(20), // +20.00 to -35.00
			"CYL" : random("number")(6),// +6.00 to -6.00
			"AXIS": random("deg")(180), // deg
			"PD"  :	random("number")(40), // from 25 to 40
			"ADD" : random("number")(5) // 0 +4 // degit 0.00 to 4.00
		}
		var right = {
			"SPH" : random("number")(20),
			"CYL" : random("number")(6) ,
			"AXIS": random("deg")(180),
			"PD"  :	random("number")(20),
			"ADD" : random("number")(5)
		}
		var leftObj  = dataObj("left",left)
		var rightObj = dataObj("right",right)
		var userInfo = dataObj("info",attrInfo)
		var rowObj = { "info": userInfo["info"] , "right":rightObj["right"] ,"left": leftObj["left"] }
		result.push(rowObj)
	}
	return result
}

var tabData = generateData()

$('a#create').click(function(){
	$('#save').show()
	$('div#details').show();
	$('div#patientSheet').show();
	$('div#listClient').remove(); // to remove the client list

	//console.log(tabData) // test
})

$('a#save').click(function() {
	var searchItem = $('#searchInput').val();
	$('body').append('<div id="savedMessage">Data saved</div>');
	$('div#patientSheet').hide();
	$('div#details').hide();
	

	setTimeout(function() {
		$('div#savedMessage').remove();
	},2500);

		var firstNameUpdated   = $('#firstNameInput').val()
		var lastNameUpdated    = $('#lastNameInput').val()
		var dateOfBirthUpdated = $('#dateOfBirthInput').val()
		var phoneNumberUpdated = $('#phoneNumberInput').val() // add to data 
		var emailUpdated 	   = $('#emailInput').val()

		var RSPHUpdated =	$('#R-SPH').val()
		var RCYLUpdated =	$('#R-CYL').val()
		var RAXUpdated =	$('#R-AX').val()
		var RPDUpdated =	$('#R-PD').val()
		var RAddUpdated =	$('#R-Addition').val()

		var LSPHUpdated =	$('#L-SPH').val()
		var LCYLUpdated =	$('#L-CYL').val()
		var LAXUpdated =	$('#L-AX').val()
		var LPDUpdated =	$('#L-PD').val()
		var LAddUpdated =	$('#L-Addition').val()


		/*var indexRow= search(tabData,searchItem)
		var row = tabData[indexRow]*/

		var obj = { "info": {"first Name": firstNameUpdated ,"lastName": lastNameUpdated,"email":emailUpdated,"date":dateOfBirthUpdated,"phoneNo": phoneNumberUpdated} ,
	 				"right":{"SPH": RSPHUpdated, "CYL": RCYLUpdated, "AXIS": RAXUpdated, "PD": RPDUpdated, "ADD": RAddUpdated},
	 				"left": {"SPH": LSPHUpdated, "CYL": LCYLUpdated, "AXIS": LAXUpdated, "PD": LPDUpdated, "ADD": LAddUpdated} 
				}

		tabData.unshift(obj)
		console.log(tabData)
		
})
var clicked = 0
$('#update').click(function() {

	$('#save').hide()
	$('div#patientSheet').hide("");
	$('div#details').hide("");


		$('body').append('<div id ="listClient"></div>')
		for(var i = 0; i< tabData.length ; i++){
			//console.log(tabData[i]["info"]["first Name"])
			$('#listClient').append('<div id= displayDetails'+i+'></div>')
			$('#displayDetails'+i).append('<div classname ="name">'+ tabData[i]["info"]["first Name"] +'</div>')
			$('#displayDetails'+i).append('<div classname ="lastName">'+ tabData[i]["info"]["lastName"] + '</div>')
			$('#displayDetails'+i).append('<div classname ="email">'+ tabData[i]["info"]["email"] + '</div>')
			$('#displayDetails'+i).append('<div classname ="date">'+ tabData[i]["info"]["date"] + '</div>')
			$('#displayDetails'+i).append('<div classname ="phone">'+ tabData[i]["info"]["phoneNo"] + '</div>')
			$('#displayDetails'+i).append('<hr>')

	}

}) 


$('#searchBtn').click(function() {
	$('div#listClient').remove()
	$('a#save').show()

	var searchItem = $('#searchInput').val();
	//call the function search that return false whene not found and i whene we found keyword searched !
	
	if(typeof (search(tabData,searchItem)) === "number"){

		var index = search(tabData,searchItem)
		console.log(index)

		//not the best solution 
		$('#firstNameInput').attr('value',tabData[index]["info"]["first Name"])
		$('#lastNameInput').attr('value',tabData[index]["info"]["lastName"])
		$('#dateOfBirthInput').attr('value',tabData[index]["info"]["date"])
		$('#phoneNumberInput').attr('value',tabData[index]["info"]["phoneNo"]) // add to data 
		$('#emailInput').attr('value',tabData[index]["info"]["email"])

		$('#R-SPH').attr('value',tabData[index]["right"]["SPH"])
		$('#R-CYL').attr('value',tabData[index]["right"]["CYL"])
		$('#R-AX').attr('value',tabData[index]["right"]["AXIS"])
		$('#R-PD').attr('value',tabData[index]["right"]["PD"])
		$('#R-Addition').attr('value',tabData[index]["right"]["ADD"])

		$('#L-SPH').attr('value',tabData[index]["left"]["SPH"])
		$('#L-CYL').attr('value',tabData[index]["left"]["CYL"])
		$('#L-AX').attr('value',tabData[index]["left"]["AXIS"])
		$('#L-PD').attr('value',tabData[index]["left"]["PD"])
		$('#L-Addition').attr('value',tabData[index]["left"]["ADD"])
		$('div#details').show();
		$('div#patientSheet').show();

		/// 
	}else{
		alert('not match found !')
	}

});

/* search function */ 

function search(data, keyWord){
	// feature to add a filter to search as a button scrolldown button  with hover event 
	// if we have time we will add regular expression 
	for(var i=0 ; i< data.length ; i++){
		//console.log("--"+i,data[i])
		var rowObj = data[i]
		for (var key in rowObj){
			//console.log(key)
			if (keyWord === data[i]["info"]["lastName"] || keyWord == data[i]["info"]["phoneNo"]){
				//function to display 
				console.log("founed !")
				return i	
			}
			//data['info']["lastName"] === keyWord
		}

	}
	return false
	
}

