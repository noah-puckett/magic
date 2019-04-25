import randomAnswer from '../src/function.js';
import getRandomInt from '../src/qunitfunction.js';

const test = QUnit.test;

test('math int returns same value as getrandomint', (assert) => {
    //Arrange
    let expected = Math.floor(Math.random() * 1);
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getRandomInt(1);

    //Assert
    assert.equal(result, expected);
});


// function randomAnswer() {
//     //declare MAX value to be the LENGTH of my ARRAY (so that I don't have an off-by-one error,
//     //and if my array length changes the MAX value is still the length of the ARRAY)
//     const max = randomAnswerArray.length;
    
//     //answer = ARRAY[INDEX NUMBER is RANDOM INT with MAX as ARRAY LENGTH]
//     const answer = randomAnswerArray[getRandomInt(max)];
//     return answer;

//     const randomAnswerArray = ['It is certain', 'It is decidedly so', 'Without a doubt',
//     'Yes - definitely', 'You may rely on it', 'As I see it, yes', 'Most likely',
//     'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 
//     'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 
//     'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good',
//     'Very doubtful'];

// //function below takes MAX value and returns RANDOM INTEGER NUMBER
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// //ok FIRST, when I make randomAnswer here I DON'T need to give it arguments, though I feel weird
// //not doing that
// function randomAnswer() {
//     //declare MAX value to be the LENGTH of my ARRAY (so that I don't have an off-by-one error,
//     //and if my array length changes the MAX value is still the length of the ARRAY)
//     const max = randomAnswerArray.length;
    
//     //answer = ARRAY[INDEX NUMBER is RANDOM INT with MAX as ARRAY LENGTH]
//     const answer = randomAnswerArray[getRandomInt(max)];
//     return answer;
// }

// export default randomAnswer;


