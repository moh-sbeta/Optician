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