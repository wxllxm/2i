const numberPairs = (theNumber, theArray) => {
  let pairsCount = 0;

  //Changed outer loop so I have control over the indexing after removing elements from the array.
  //I noticed for some reason the index started at 1, this has been changed to 0.
  for (let i = 0; i < theArray.length; i++) {
    for (let j = i + 1; j < theArray.length; j++) {
      if (theArray[i] + theArray[j] === theNumber) {
        console.log(
          `${theArray[i]} & ${theArray[j]} equal the magic number of ${theNumber}. Adding to pair count.`
        );

        pairsCount += 1;

        //Using the same loop types make it easier to read. 'i & j' and not 'index & theArray[i]'.
        theArray.splice(j, 1);
        theArray.splice(i, 1);

        console.log(`Numbers left... ${theArray}`);

        //I didnt break out of the first loop in v1. I think this is why it was not removing the correct elements from the array.
        break;
      }
    }
  }

  console.log(`Total pair count: ${pairsCount}`);
};

const myNumber = 42;
const myArray = [1, 1, 10, 32, 41];

numberPairs(myNumber, myArray);

/**
 *
 * This function loops through the array. Takes 'i' and sees if it equals 'the magic number' when getting added to 'j' from the inner loop.
 * If this is true, then the pair count is +1'd and the numbers are removed from the array.
 * Rinse and repeat until all pairs are found.
 * Volia.
 */
