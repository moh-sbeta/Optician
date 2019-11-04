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

});

/* search function */ 

function search(data, keyWord){
	// feature to add a filter to search as a button scrolldown button  with hover event 
	for(var i=0 ; i< data.length ; i++){
		console.log(data[i])
		for (var key in data){
			console.log(key)
			if (keyWord === data[i]["info"]["lastName"] || keyWord === data[i]["info"]["phoneNo"]){
				//function to display 
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