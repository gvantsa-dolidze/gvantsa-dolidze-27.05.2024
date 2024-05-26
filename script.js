// First example
const rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
alert("Second color of rainbow is - " + rainbowColors[1]);

//Second example
const favoriteActors = [
    {
        firstName: 'Johnny',
        lastName: 'Depp',
        age: 60,
        movieName: 'Murder on the Orient Express'
    },
    {
        firstName: 'Alan',
        lastName: 'Rickman',
        age: 69,
        movieName: 'Gambit'
    },
    {
        firstName: 'Jackie',
        lastName: 'Chan',
        age: 70,
        movieName: 'Rush Hour'
    },
    {
        firstName: 'Mads',
        lastName: 'Mikkelsen',
        age: 58,
        movieName: 'Hannibal'
    },
    {
        firstName: 'Angelina',
        lastName: 'Jolie',
        age: 48,
        movieName: 'Maleficent'
    },
    {
        firstName: 'Jensen',
        lastName: 'Ackles',
        age: 46,
        movieName: 'Supernatural'
    },
    {
        firstName: 'Tom',
        lastName: 'Cruise',
        age: 61,
        movieName: 'Top Gun: Maverick'
    },
    {
        firstName: 'Keanu',
        lastName: 'Reeves',
        age: 59,
        movieName: 'The matrix'
    },
    {
        firstName: 'Lana',
        lastName: 'Parrilla',
        age: 46,
        movieName: 'Once Upon a Time'
    },
    {
        firstName: 'Jennifer',
        lastName: 'Lopez',
        age: 54,
        movieName: 'Monster-in-Law'
    }
];

function consolePrint() {
    for (let i = 0; i < favoriteActors.length; i++) {
        if (favoriteActors[i].age <= 35) {
            console.log(favoriteActors[i].firstName, favoriteActors[i].lastName);
        } else if (favoriteActors[i].age > 40) {
            console.log(favoriteActors[i].firstName, favoriteActors[i].lastName + " - " + favoriteActors[i].age + " years old.");
        } else {
            console.log("Can't found...");
        }
    }
};

