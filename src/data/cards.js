import robertDowneyJr from "../images/robert-downey-jr.png";
import paris from "../images/paris.png";
import tokyo from "../images/tokyo.png";
import washingtonDC from "../images/Washington-D-C.png";
import rome from "../images/rome.png";
import madrid from "../images/madrid.png";
import ottawa from "../images/ottawa.png";
import brasilia from "../images/brasília.png";
import canberra from "../images/canberra.png";
import newDelhi from "../images/new-delhi.png";
import cairo from "../images/Cairo.png";
import berlin from "../images/Berlin.png";
import moscow from "../images/Moscow.png";
import beijing from "../images/Beijing.png";
import mexicoCity from "../images/Mexico-City.png";
import buenosAires from "../images/buenos-aires.png";
import oslo from "../images/Oslo.png";
import stockholm from "../images/Stockholm.png";
import nairobi from "../images/Nairobi.png";
import ankara from "../images/Ankara.png";
import athens from "../images/Athens.png";
import hola from "../images/hola.png";
import gracias from "../images/Gracias.png";
import porFavor from "../images/Por-favor.png";
import adios from "../images/Adios.png";
import bonjour from "../images/Bonjour.png";
import merci from "../images/Merci.png";
import oui from "../images/Oui.png";
import non from "../images/Non.png";

const cards = {
  languageLearning: [
    { question: "What does \"Hola\" mean in spanish?", answer: "Hello", category: "language", image: hola },
    { question: "What does \"Gracias\" mean in spanish?", answer: "Thank you", category: "language", image: gracias },
    { question: "What does \"Por favor\" mean in spanish?", answer: "Please", category: "language", image: porFavor },
    { question: "What does \"Adiós\" mean in spanish?", answer: "Goodbye", category: "language", image: adios },
    { question: "What does \"Bonjour\" mean in french?", answer: "Hello", category: "language", image: bonjour },
    { question: "What does \"Merci\" mean in french?", answer: "Thank you", category: "language", image: merci },
    { question: "What does \"Oui\" mean in french?", answer: "Yes", category: "language", image: oui },
    { question: "What does \"Non\" mean in french?", answer: "No", category: "language", image: non },
    { question: "What does \"Ciao\" mean in italian?", answer: "Hello/Goodbye", category: "language" },
    { question: "What does \"Guten Tag\" mean in german?", answer: "Good day", category: "language" },
    { question: "What does \"Arigato\" mean in japanese?", answer: "Thank you", category: "language" },
    { question: "What does \"Konnichiwa\" mean in japanese?", answer: "Hello", category: "language" },
    { question: "What does \"Sayonara\" mean in japanese?", answer: "Goodbye", category: "language" },
    { question: "What does \"Namaste\" mean in hindi?", answer: "Hello", category: "language" },
    { question: "What does \"Shukran\" mean in arabic?", answer: "Thank you", category: "language" },
    { question: "What does \"Annyeong\" mean in korean?", answer: "Hello", category: "language" },
    { question: "What does \"Zdravstvuyte\" mean in russian?", answer: "Hello", category: "language" },
    { question: "What does \"Salaam\" mean in arabic?", answer: "Peace/Hello", category: "language" },
    { question: "What does \"Tschüss\" mean in german?", answer: "Bye", category: "language" },
    { question: "What does \"Grazie\" mean in italian?", answer: "Thank you", category: "language" }
  ],

  firefighting: [
    { question: "What does RECEO stand for?", answer: "Rescue, Exposures, Confinement, Extinguishment, Overhaul", category: "fire"},
    { question: "What are the 18 Watch Out Situations?", answer: "Situations that increase wildfire danger", category: "fire" },
    { question: "What are the 10 Standard Firefighting Orders?", answer: "Rules for safe wildfire operations", category: "fire" },
    { question: "What does LCES stands for?", answer: "Lookouts, Communications, Escape Routes, Safety Zones", category: "fire" },
    { question: "What is a safety zone?", answer: "Area safe from fire without shelter", category: "fire" },
    { question: "What is a fire shelter?", answer: "Emergency protection from heat/flames", category: "fire" },
    { question: "What is an escape route?", answer: "Path to safety zone", category: "fire" },
    { question: "What is a lookout?", answer: "Person watching fire behavior", category: "fire" },
    { question: "What does PPE stand for?", answer: "Personal Protective Equipment", category: "fire" },
    { question: "What is the fire triangle?", answer: "Heat, Fuel, Oxygen", category: "fire" },
    { question: "What is backburning?", answer: "Burning fuel ahead of fire", category: "fire" },
    { question: "What is a hotspot?", answer: "Area still burning after main fire", category: "fire" },
    { question: "What does ICS stand for?", answer: "Incident Command System", category: "fire" },
    { question: "What is overhaul?", answer: "Checking for hidden fire", category: "fire" },
    { question: "What is a wildland fire?", answer: "Fire in vegetation areas", category: "fire" },
    { question: "What is containment?", answer: "Stopping fire spread", category: "fire" },
    { question: "What is a fireline?", answer: "Cleared strip to stop fire", category: "fire" },
    { question: "What is a spot fire?", answer: "New fire from embers", category: "fire" },
    { question: "What is situational awareness?", answer: "Understanding fire conditions", category: "fire" },
    { question: "What is mop-up?", answer: "Extinguishing remaining embers", category: "fire" }
  ],

  computerScienceTrivia: [
    { question: "What does CPU stands for?", answer: "Central Processing Unit", category: "cs"},
    { question: "What does RAM stands for?", answer: "Random Access Memory", category: "cs" },
    { question: "What numbers does binary use?", answer: "0 and 1", category: "cs" },
    { question: "What does HTML stands for?", answer: "HyperText Markup Language", category: "cs" },
    { question: "What does CSS stands for?", answer: "Cascading Style Sheets", category: "cs" },
    { question: "What is an algorithm?", answer: "Step-by-step procedure", category: "cs" },
    { question: "What is a variable?", answer: "Stores data", category: "cs" },
    { question: "What is a loop?", answer: "Repeats code", category: "cs" },
    { question: "What is Git?", answer: "Version control system", category: "cs" },
    { question: "What is React?", answer: "JavaScript UI library", category: "cs" },
    { question: "What is debugging?", answer: "Fixing errors", category: "cs" },
    { question: "What is an API?", answer: "Interface for communication", category: "cs" },
    { question: "What is JSON?", answer: "Data format", category: "cs" },
    { question: "What is a database?", answer: "Stores data", category: "cs" },
    { question: "What is encryption?", answer: "Securing data", category: "cs" },
    { question: "What is a function?", answer: "Reusable code block", category: "cs" },
    { question: "What is an array?", answer: "List of values", category: "cs" },
    { question: "What is a bug?", answer: "Error in code", category: "cs" },
    { question: "What is a compiler?", answer: "Translates code", category: "cs" },
    { question: "What is open source?", answer: "Publicly available code", category: "cs" }
  ],

  geographyQuiz: [
    { question: "What is the Capital of France?", answer: "Paris", category: "geo", image: paris },
    { question: "What is the Capital of Japan?", answer: "Tokyo", category: "geo", image: tokyo },
    { question: "What is the Capital of USA?", answer: "Washington D.C.", category: "geo", image: washingtonDC },
    { question: "What is the Capital of Italy?", answer: "Rome", category: "geo", image: rome },
    { question: "What is the Capital of Spain?", answer: "Madrid", category: "geo", image: madrid },
    { question: "What is the Capital of Canada?", answer: "Ottawa", category: "geo", image: ottawa },
    { question: "What is the Capital of Brazil?", answer: "Brasília", category: "geo", image: brasilia },
    { question: "What is the Capital of Australia?", answer: "Canberra", category: "geo", image: canberra },
    { question: "What is the Capital of India?", answer: "New Delhi", category: "geo", image: newDelhi },
    { question: "What is the Capital of Egypt?", answer: "Cairo", category: "geo", image: cairo },
    { question: "What is the Capital of Germany?", answer: "Berlin", category: "geo", image: berlin },
    { question: "What is the Capital of Russia?", answer: "Moscow", category: "geo", image: moscow },
    { question: "What is the Capital of China?", answer: "Beijing", category: "geo", image: beijing },
    { question: "What is the Capital of Mexico?", answer: "Mexico City", category: "geo", image: mexicoCity },
    { question: "What is the Capital of Argentina?", answer: "Buenos Aires", category: "geo", image: buenosAires },
    { question: "What is the Capital of Norway?", answer: "Oslo", category: "geo", image: oslo },
    { question: "What is the Capital of Sweden?", answer: "Stockholm", category: "geo", image: stockholm },
    { question: "What is the Capital of Kenya?", answer: "Nairobi", category: "geo", image: nairobi },
    { question: "What is the Capital of Turkey?", answer: "Ankara", category: "geo", image: ankara },
    { question: "What is the Capital of Greece?", answer: "Athens", category: "geo", image: athens }
  ],

  fruitOrVegetable: [
    { question: "Is a Tomato a fruit or a vegetable?", answer: "Fruit", category: "food"},
    { question: "Is a Carrot a fruit or a vegetable?", answer: "Vegetable", category: "food" },
    { question: "Is a Cucumber a fruit or a vegetable?", answer: "Fruit", category: "food" },
    { question: "Is a Potato a fruit or a vegetable?", answer: "Vegetable", category: "food" },
    { question: "Is a Pumpkin a fruit or a vegetable?", answer: "Fruit", category: "food" },
    { question: "Is a Spinach a fruit or a vegetable?", answer: "Vegetable", category: "food" },
    { question: "Is a Pepper a fruit or a vegetable?", answer: "Fruit", category: "food" },
    { question: "Is an Onion a fruit or a vegetable?", answer: "Vegetable", category: "food" },
    { question: "Is a Strawberry a fruit or a vegetable?", answer: "Fruit", category: "food" },
    { question: "Is a Broccoli a fruit or a vegetable?", answer: "Vegetable", category: "food" },
    { question: "Is an Eggplant a fruit or a vegetable?", answer: "Fruit", category: "food" },
    { question: "Is a Lettuce a fruit or a vegetable?", answer: "Vegetable", category: "food" },
    { question: "Is a Zucchini a fruit or a vegetable?", answer: "Fruit", category: "food" },
    { question: "Is a Garlic a fruit or a vegetable?", answer: "Vegetable", category: "food" },
    { question: "Is an Apple a fruit or a vegetable?", answer: "Fruit", category: "food" },
    { question: "Is a Corn a fruit or a vegetable?", answer: "Vegetable", category: "food" },
    { question: "Is an Avocado a fruit or a vegetable?", answer: "Fruit", category: "food" },
    { question: "Is Peas a fruit or a vegetable?", answer: "Vegetable", category: "food" },
    { question: "Is a Banana a fruit or a vegetable?", answer: "Fruit", category: "food" },
    { question: "Is Celery a fruit or a vegetable?", answer: "Vegetable", category: "food" }
  ],

  headsUp: [
    { question: "You’re Colonel Mustard in the conservatory with the lead pipe", answer: "Clue", category: "game" },
    { question: "Wizard boy with a lightning scar", answer: "Harry Potter", category: "game" },
    { question: "Blue hedgehog who runs fast", answer: "Sonic", category: "game" },
    { question: "Plumber who saves a princess", answer: "Mario", category: "game" },
    { question: "Superhero with a shield and stars", answer: "Captain America", category: "game" },
    { question: "Green ogre who lives in a swamp", answer: "Shrek", category: "game" },
    { question: "Pirate with a black pearl ship", answer: "Jack Sparrow", category: "game" },
    { question: "Toy cowboy with a pull string", answer: "Woody", category: "game" },
    { question: "Mouse who loves cheese and cartoons", answer: "Mickey Mouse", category: "game" },
    { question: "Yellow sponge under the sea", answer: "SpongeBob", category: "game" },
    { question: "Detective with a deerstalker hat", answer: "Sherlock Holmes", category: "game" },
    { question: "Princess with glass slippers", answer: "Cinderella", category: "game" },
    { question: "Man who snaps half the universe", answer: "Thanos", category: "game" },
    { question: "Robot who says ‘I’ll be back’", answer: "Terminator", category: "game" },
    { question: "Archaeologist with a whip", answer: "Indiana Jones", category: "game" },
    { question: "Superhero from Wakanda", answer: "Black Panther", category: "game" },
    { question: "Space smuggler with a Wookiee", answer: "Han Solo", category: "game" },
    { question: "Vampire who sparkles", answer: "Edward Cullen", category: "game" },
    { question: "Teenage web-slinging hero", answer: "Spider-Man", category: "game" },
    { question: "Dog detective with a mystery van", answer: "Scooby-Doo", category: "game" }
  ],

    literallyAnything: [
    { question: "How many days in a year?", answer: "365", category: "random"},
    { question: "What is the fastest land animal?", answer: "Cheetah", category: "random" },
    { question: "What is the largest ocean?", answer: "Pacific", category: "random" },
    { question: "What is the square root of 64?", answer: "8", category: "random" },
    { question: "What is the primary gas we breathe?", answer: "Oxygen", category: "random" },
    { question: "What planet is known as the Red Planet?", answer: "Mars", category: "random" },
    { question: "How many continents are there in the world?", answer: "7", category: "random" },
    { question: "What is H2O?", answer: "Water", category: "random" },
    { question: "What's the opposite of hot?", answer: "Cold", category: "random" },
    { question: "5 x 6 equals what?", answer: "30", category: "random" },
    { question: "What is the first month of the year?", answer: "January", category: "random" },
    { question: "What's the color of the sky?", answer: "Blue", category: "random" },
    { question: "How many hours in a day?", answer: "24", category: "random" },
    { question: "What animal that barks?", answer: "Dog", category: "random" },
    { question: "What's the device to call people?", answer: "Phone", category: "random" },
    { question: "What do bees make?", answer: "Honey", category: "random" },
    { question: "Frozen water is?", answer: "Ice", category: "random" },
    { question: "Largest mammal in the world is?", answer: "Blue Whale", category: "random" },
    { question: "Shape with 3 sides?", answer: "Triangle", category: "random" },
    { question: "What do plants need?", answer: "Sunlight", category: "random" }
  ],

  guessTheCelebrity: [
    { question: "Who is the pop star known for 'Shake It Off'?", answer: "Taylor Swift", category: "celeb" },
    { question: "Actor who played Iron Man?", answer: "Robert Downey Jr.", category: "celeb", image: robertDowneyJr },
    { question: "Who's the famous basketball player #23 Bulls?", answer: "Michael Jordan", category: "celeb" },
    { question: "Who's the singer of 'Thriller'?", answer: "Michael Jackson", category: "celeb" },
    { question: "Who played the wizard in Lord of the Rings?", answer: "Gandalf (Ian McKellen)", category: "celeb" },
    { question: "Who's the Pirate Jack Sparrow actor?", answer: "Johnny Depp", category: "celeb" },
    { question: "Who's the Barbie actress 2023?", answer: "Margot Robbie", category: "celeb" },
    { question: "Who's the Spider-Man actor of the Marvel Cinematic Universe?", answer: "Tom Holland", category: "celeb" },
    { question: "Who's the rock wrestler turned actor?", answer: "Dwayne Johnson", category: "celeb" },
    { question: "Who's the rapper married to Beyoncé?", answer: "Jay-Z", category: "celeb" },
    { question: "Who's the Tesla and SpaceX CEO?", answer: "Elon Musk", category: "celeb" },
    { question: "Oprah Winfrey is a famous?", answer: "TV Host", category: "celeb" },
    { question: "Who's the actor who played Captain America?", answer: "Chris Evans", category: "celeb" },
    { question: "Who's the actor who played Harry Potter?", answer: "Daniel Radcliffe", category: "celeb" },
    { question: "Who's the actress who played Wonder Woman?", answer: "Gal Gadot", category: "celeb" },
    { question: "Who's the actor who played Batman in the Dark Knight?", answer: "Christian Bale", category: "celeb" },
    { question: "Famous talk show host Ellen", answer: "Ellen DeGeneres", category: "celeb" },
    { question: "Who's the singer of 'Rolling in the Deep'?", answer: "Adele", category: "celeb" },
    { question: "MrBeast is known for?", answer: "YouTube Challenges", category: "celeb" },
    { question: "Who's the soccer star from Argentina?", answer: "Lionel Messi", category: "celeb" }
  ],

  whatsThisDog: [
    { question: "What's the name of the small dog with big ears from Mexico called?", answer: "Chihuahua", category: "dog" },
    { question: "What's the name of the large fluffy white rescue dog?", answer: "Samoyed", category: "dog" },
    { question: "What's the name of the fast racing dog?", answer: "Greyhound", category: "dog" },
    { question: "What's the name of the police dog breed?", answer: "German Shepherd", category: "dog" },
    { question: "What's the name of the wrinkly face guard dog?", answer: "Bulldog", category: "dog" },
    { question: "What's the name of the golden friendly family dog?", answer: "Golden Retriever", category: "dog" },
    { question: "What's the name of the spotted firehouse dog?", answer: "Dalmatian", category: "dog" },
    { question: "What's the name of the sled pulling snow dog?", answer: "Husky", category: "dog" },
    { question: "What's the name of the tiny fluffy purse dog?", answer: "Pomeranian", category: "dog" },
    { question: "What's the name of the curly hair hypoallergenic dog?", answer: "Poodle", category: "dog" },
    { question: "What's the name of the long body short legs dog?", answer: "Dachshund", category: "dog" },
    { question: "What's the name of the big mountain rescue dog?", answer: "Saint Bernard", category: "dog" },
    { question: "What's the name of the dog that looks like a wolf?", answer: "Alaskan Malamute", category: "dog" },
    { question: "What's the name of the hunter dog with long ears?", answer: "Beagle", category: "dog" },
    { question: "What's the name of the black and white herding dog?", answer: "Border Collie", category: "dog" },
    { question: "What's the name of the huge gentle giant dog?", answer: "Great Dane", category: "dog" },
    { question: "What's the name of the water rescue curly dog?", answer: "Portuguese Water Dog", category: "dog" },
    { question: "What's the name of the Australian cattle herding dog?", answer: "Australian Shepherd", category: "dog" },
    { question: "What's the name of the famous royal corgi breed?", answer: "Corgi", category: "dog" },
    { question: "What's the name of the muscular guard dog?", answer: "Rottweiler", category: "dog" }
  ]
};

export default cards;