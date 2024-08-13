function getUniqueElements(array1, array2) {

    const combinedArray = [...array1, ...array2];


    const uniqueElementsSet = new Set(combinedArray);

 
    const uniqueElementsArray = Array.from(uniqueElementsSet);

    return uniqueElementsArray;
}


const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const uniqueElements = getUniqueElements(array1, array2);
console.log(uniqueElements); 
