var clients = [
{info:{
		firstName: "xxx",
		lastName: "xxx",
		dateOfbirth: "xxx",
		phoneNo: "xxx",
		eMail: "xxx",
	},
	right: {
		sph: "xxx1",
		cyl: "xxx1",
		ax: "xxx1",
		pd: "xxx1",
		add: "xxx1"
	},
	left: {
		sph: "xxx",
		cyl: "xxx",
		ax: "xxx",
		pd: "xxx",
		add: "xxx"
	},
	dateRx: "xxx" }
]
var random = function random(type){
	return function(max){

		switch (type) {
			case "percentage":
				return Math.floor(Math.random() * max) +" %" // to get percentage insite our data 
			case " digit":
				return Math.floor(Math.random() * max) +" %" // to get percentage insite our data 
	
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
	var monthTab = [1,3,5,7,8,10,12] // index month
	var years = 1919 + random()(100) // to start from min of 1919
	if(month === 2){
		return  random()(30) + " / " + month +" / "+ years // to generate  correct number of feb month 
	}
	if (monthTab.indexOf(month) !== -1){
		return  random()(32) + " / " + month +" / "+ years // to generate max coorect number of month that hold 31 days
	}
	return  random()(31) + " / " + month +" / "+ years // to generate max coorect number of month that hold 30 days
}

// the data generator function retun an object that will uses our keys right and left data 
//var attr = ["SPH","CYL","AXIS","PD","ADD"]

var dataObj = function (objName,attr){

	var obj ={}
	obj[objName] = {}

	for( key in attr ){ 
		obj[objName][key] = attr[key]
	}

	return obj
}
var attrInfo = {
	"first Name": randomUserFirstName() ,
	"lastName"	:randomUserLastName() , 
	"email"	:randomEmail() ,
	"date"	: randomDate() 
}


var eyes = {
	"SPH" : random("number")(20),
	"CYL" : random("number")(20) ,
	"AXIS": random("percentage")(20),
	"PD"  :	random("number")(20),
	"ADD" : random("number")(20)
}
var leftObj  = dataObj("left",eyes)
var rightObj = dataObj("right",eyes)
var userInfo = dataObj("info",attrInfo) // we can add user id

var rowObj = { "info": userInfo["info"] , "right":rightObj["right"] ,"left": leftObj["left"] }

var data = function() {
	var result = []
	for (var i = 0 ; i< 10 ; i++ ){
		var attrInfo = {
			"first Name": randomUserFirstName() ,
			"lastName"	:randomUserLastName() , 
			"email"	:randomEmail() ,
			"date"	: randomDate() 
		}
		var eyes = {
			"SPH" : random("number")(20),
			"CYL" : random("number")(20) ,
			"AXIS": random("percentage")(20),
			"PD"  :	random("number")(20),
			"ADD" : random("number")(20)
		}
		var leftObj  = dataObj("left",eyes)
		var rightObj = dataObj("right",eyes)
		var userInfo = dataObj("info",attrInfo)
		var rowObj = { "info": userInfo["info"] , "right":rightObj["right"] ,"left": leftObj["left"] }
		result.push(rowObj)
	}
	return result
}

$('a#create').click(function(){
	//$('a#create').css('display','contents')
	$('div#details').show();
	$('div#patientSheet').show();

})

$('a#save').click(function() {

	// todo : push the new inputs to data variable or obj !!
	$('div#patientSheet').hide();
	$('div#details').hide();
	$('body').append('<div id="savedMessage">Data saved</div>');
	setTimeout(function() {
		$('div#savedMessage').remove();
	},3*1000);
})

$('a#update').click(function() {
	// if statement : if the client already existes : search whether the client exists or not
	
	$('div#details').show();
	$('div#patientSheet').show();

}) 

$('#searchBtn').click(function() {

	var searchItem = $('#searchInput').val();
	//call the function search that return false whene not found and i whene we found keyword searched !
	
	if(typeof (search(clients,searchItem)) ==="number"){
		var index = search(clients,searchItem)

		//we can fuckin optimize tha shit !! but we don't have time  : todo !!
		$('#firstNameInput').attr('value',clients[index]["info"]["firstName"])
		$('#lastNameInput').attr('value',clients[index]["info"]["lastName"])
		$('#dateOfBirthInput').attr('value',clients[index]["info"]["dateOfbirth"])
		$('#phoneNumberInput').attr('value',clients[index]["info"]["phoneNo"])
		$('#emailInput').attr('value',clients[index]["info"]["eMail"])

		$('#R-SPH').attr('value',clients[index]["right"]["sph"])
		$('#R-CYL').attr('value',clients[index]["right"]["cyl"])
		$('#R-AX').attr('value',clients[index]["right"]["ax"])
		$('#R-PD').attr('value',clients[index]["right"]["pd"])
		$('#R-Addition').attr('value',clients[index]["right"]["add"])

		$('#L-SPH').attr('value',clients[index]["left"]["sph"])
		$('#L-CYL').attr('value',clients[index]["left"]["cyl"])
		$('#L-AX').attr('value',clients[index]["left"]["ax"])
		$('#L-PD').attr('value',clients[index]["left"]["pd"])
		$('#L-Addition').attr('value',clients[index]["left"]["add"])
		$('div#details').show();
		$('div#patientSheet').show();
	}

});

/* search function */ 

function search(data, keyWord){
	// feature to add a filter to search as a button scrolldown button  with hover event 
	
	// if we have time we will add regular expression 
	for(var i=0 ; i< data.length ; i++){
		console.log(data[i])
		for (var key in data){
			console.log(key)
			if (keyWord === data[i]["info"]["lastName"] || keyWord === data[i]["info"]["phoneNo"]){
				//function to display 
				console.log("founed !")
				return i
				
			}else{
				console.log("not found !! ")
				return false
			}
			//data['info']["lastName"] === keyWord
		}
	}
	
}

/*var clients = [
{info:{
		firstName: xxx,
		lastNAme: xxx,
		dateOfbirth: xxx,
		phoneNo: xxx,
		eMail: xxx,
	},
	right: {
		sph: xxx,
		cyl: xxx,
		ax: xxx,
		pd: xxx,
		add: xxx
	},
	left: {
		sph: xxx,
		cyl: xxx,
		ax: xxx,
		pd: xxx,
		add: xxx
	},
	dateRx: xxx }
]*/
