//! Object Destructuring & Spread

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "season one": [
            {
                episode_title: 'Simpsons Roasting on an Open Fire',
                aired: '1989-12-17'
            },
            {
                episode_title: 'Bart the Genius',
                aired: '1990-01-01'
            },
        ],
        "season two" : [/*... */],
        "season three" : [/*... */]
    },
    currently_running: true,
    characters: [
        'Homer','Marge','Bart','Lisa','Maggie'
    ]
};

/* 
*   Syntax:
    keyword { keyName, keyName } = object;
*/
const { characters, seasons } = theSimpsons;
// console.log(characters);
// console.log(seasons);

characters.push('Meo');
// console.log(theSimpsons);
characters[5] = "Moe";
// console.log(theSimpsons);

/* 
*   Custom Keys
    const { oldKey: newVariable } = object;
        - creating a new variable based off value in object key
        - This doesn't change the original object
*/

const { currently_running: on_air } = theSimpsons;
console.log(on_air);

console.log(Object.keys(theSimpsons));

/* 
!   Spread with Objects
    - denoted with "..."
    - pulls keys/value pairs from one object and copies the results into another object.
*/

const simpsonsCharacters = {
    simpsonsHouse: ['Homer','Marge','Bart','Lisa','Maggie'],
    moesTavern: ['Moe','Barney']
}

const generalLocations = {
    park: 'statue',
    beach: 'dock',
    lake: '3-eyed fish'
}

const locations = {
    ...simpsonsCharacters,
    dmv: ['Patty', 'Selma'],
    ...generalLocations
}

console.log(locations);
