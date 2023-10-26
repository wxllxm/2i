const numberPairs = (theNumber, theArray) => {
  let pairsCount = 0;

  theArray.forEach((arrayNum, index) => {
    for (let i = 1; i < theArray.length; i++) {
      if (arrayNum + theArray[i] == theNumber) {
        console.log(
          `${arrayNum} & ${theArray[i]} equal the magic number of ${theNumber}. Adding to pair count.`
        );

        theArray.splice(index, 1);
        theArray.splice(theArray[i], 1);
        pairsCount += 1;
        console.log(`Numbers left... ${theArray}`);
      }
    }
  });

  console.log(`Total pair count: ${pairsCount}`);
};

const myNumber = 42;
const myArray = [1, 1, 10, 32, 41];

numberPairs(myNumber, myArray);
