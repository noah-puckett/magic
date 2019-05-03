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

function returnSecond(array) {
    let string = '';
    for(let i = 0; i < array.length; i++) {
        let arrayIndex = array[i];
        string += arrayIndex;
    }
    return string;
}

test('for loop grabs array index', (assert) => {
    //test the LOGIC in your function

    //arrange
    //make vars, grab DOM elements, etc.
    const array = ['array index zero ', 'array index one ', 'array index two ', 'array index three ', 'array index four ', 'BUTTS'];
    

    const expected = 'array index zero array index one array index two array index three array index four BUTTS';

    //act
    //CALL your function

    const result = returnSecond(array);
    
    //assert
    assert.equal(expected, result);
});