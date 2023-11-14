const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

let [first, second, third] = data.lists.map(([_, arr]) => arr); //destructured data.list to extract arrays

const result = [];

const extractBiggest = () => {
  if (first.length > 0 || second.length > 0 || third.length > 0) {
    //checking if arrays have elements remaining
    // Finding the last element of each array or assigning -Infinity if array is empty
    const firstLast = first.length > 0 ? first[first.length - 1] : -Infinity;
    const secondLast =
      second.length > 0 ? second[second.length - 1] : -Infinity;
    const thirdLast = third.length > 0 ? third[third.length - 1] : -Infinity;
    // Comparing the last elements and pushing the largest into the result array while removing it from its original array
    //.push() is used to add the largest element (extracted based on comparison) to the result array.
    //.pop() is used to extract the last element from the arrays first, second, or third based on comparison within the extractBiggest() function.
    if (firstLast >= secondLast && firstLast >= thirdLast) {
      result.push(first.pop());
    } else if (secondLast >= firstLast && secondLast >= thirdLast) {
      result.push(second.pop());
    } else {
      result.push(third.pop());
    }
  }
};

// Loop to run the extraction process 15 times
for (let i = 0; i < 15; i++) {
  extractBiggest();
}

// Logging the final array of extracted values
console.log(result);

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);

//additional comments:
//.push(): This method is used to add one or more elements to the end of an array and returns the new length of the array. It mutates the original array by adding elements to its end.
//.pop(): This method removes the last element from an array and returns that element. It also mutates the original array by removing the last element.
