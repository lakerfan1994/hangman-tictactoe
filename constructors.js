var dog = {
    name: 'Pluto',
    talk: function () {
        console.log('Woof!');
    }
}


dog.thinksOfNumber = function(){
	console.log(`I am thinking of a number, that number is ${Math.random()}`);
}

dog.talk();
dog.thinksOfNumber();


function Dog(name, breed){
	this.name = name;
	this.breed = breed;
	this.thinksOfNumber = function(){
		console.log(`I, ${this.name} am thinking of a number, that number is ${Math.random()}`);
	}	
}

let napoleon = new Dog('Napoleon', 'golden retriever');

napoleon.thinksOfNumber();



function VideoGame(name, rating, isItWorth){
	this.name = name;
	this.rating = rating;
	this.isItWorth = isItWorth;
	this.obviousQuote = function(){
		console.log('yup, this is a video game');
	}
}

VideoGame.prototype.console = 'PC';



let leagueOfLegends = new VideoGame('leagueOfLegends', 10, true);

console.log(leagueOfLegends.console);

