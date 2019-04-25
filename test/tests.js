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
