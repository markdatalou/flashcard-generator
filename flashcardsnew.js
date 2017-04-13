// Flashcard application

inquirer = require("inquirer");

// START Function will:



// set up basic object array to store basic cards

// var basic = [{
// 	front: front,
// 	back: back,
// 	}
// ];
// var cloze = [{
// 	text: text,
// 	close: close,
// 	partial: partial
// 	}
// ];

// START Function will:
// 1. Display Welcome to FlashCards message
// 2. Prompt user to select BasicCards or ClozeCards 
// 2.1 If basicCard selected call basicCard function
// 2.2 If clozeCard selected call closeCard function


var start = function(){
	console.log("WELCOME TO THE FLASHCARDS APP")
	inquirer.prompt([
		{
	    type: 'list',
	    name: 'cardType',
	    message: 'Select the flashcard type',
	    paginated: true,
	    choices: ['basicCard', 'clozeCard']
	  	}
	  ]).then(function(answer){
			console.log(answer.cardType);
			if (answer.cardType === "basicCard"){
				// call BASICCARD Function
				basicCard();
			}
			else if (answer.cardType === "clozeCard")
			{
				console.log("user chose clozeCard");
				clozeCard();
			}
		})
	}

// 3. BASICCARD Function
// 3.1 Get text for Front of card
// 3.2 Get text for back of card
// 3.3 Print Front of card
// 3.4 Print Back of card
// 3.5 Save card to array in an object
var basicCard = function(){
	inquirer.prompt([
		{
			type: 'text',
			name: 'front',
			message: '\n enter text for front of card:______',
		}, 
		{
			type: 'text',
			name: 'back',
			message: '\n enter answer for back of card:______'
		}
		]).then(function(answer){
			console.log("\n front of card: " + answer.front)
			console.log("\n back of card: " + answer.back)
			// push card to basic array
			// basic.push()
		})

	}
// 4. CLOZECARD Function
// 4.1 Get full text for clozeCard
// 4.2 Get close text for clozeCard
// 4.3 Get word placement for partial
// 4.4 Call getPartial function

var clozeCard = function() {
	inquirer.prompt([
		{
			type: 'text',
			name: 'fullText',
			message: 'enter the full text of the statement'
		}, 
		{
			type: 'text',
			name: 'cloze',
			message: 'enter the number of words to remove from beginning of text',
		},
	//	{
	//		type: 'text',
	//		name: 'partial',
	//		message: 'enter the number of words to delete from beginning of full text',
	//	}
		]).then(function(answer){
			
			fullText = answer.fullText;
			cloze = answer.cloze;  // this is the number of words to remove from start of text
			numDel = answer.partial;
			var workspace = fullText.split(" ");
			console.log("workspace is : " + workspace);
			console.log(workspace[0]);
			
			// get lenght of workspace 
			words = workspace.length;
			console.log(words);	

			// loop thru work space array
			var partial1 = [];
		 for (i=cloze; i<workspace.length; i++){
		 		partial1 = partial1 + " " + workspace[i];
		 		//console.log("for loop partial text is: " + partial1);
		 	}

		 	console.log("Partial text is: " + partial1);
			console.log("fullText is: " + fullText);
			return;
					
		})

	}


	


// START Function
start();