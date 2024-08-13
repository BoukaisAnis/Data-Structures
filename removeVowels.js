function removeVowels(input) {
    
    const vowels = /[aeiouAEIOU]/g;
   
    return input.replace(vowels, '');
}


const originalString = "The gentle rustling of leaves filled the air as a cool breeze swept through the forest. Sunlight filtered through the canopy, casting dappled shadows on the forest floor. A small stream wound its way between the trees, its water sparkling in the morning light. Birds chirped softly, creating a peaceful melody that echoed through the woods. The scene was serene, a perfect moment of nature’s tranquility, untouched by the rush of the outside world.";
const stringWithoutVowels = removeVowels(originalString);
console.log(stringWithoutVowels);

