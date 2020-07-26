let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];


//filtering functions
const filterThisByThatIncludes = (thisItem,thatItem) => {
  const filteredList = thisItem.filter(word => {
    return thatItem.includes(word);
  })
  return filteredList;
};

const filterThisByThatExact = (thisItem,thatItem) => {
  const filteredList = thisItem.filter(word => {
    return thatItem === word;
  })
  return filteredList;
};

//exercise functions 

//how many words there are in this string?
const stringWordsToArray = (string) => {
  return string.split(' '); 
}

    //Test
    //console.log(stringWordsToArray(story));



//exclude "unnecessary" words from string and return as array

const filterStringToBetterWords = string => {
  const filterOfString = stringWordsToArray(string).filter(word => {
    return !unnecessaryWords.includes(word);
  })
  return filterOfString;
}

    //Test
    //console.log(filterStringToBetterWords(story).length);



// output overusedWords from string as array
const overusedWordsInBetterWordsString = string => {
  return filterThisByThatIncludes(filterStringToBetterWords(string),overusedWords);
};

    // test
    //console.log(overusedWordsInBetterWordsString(story).length);



/// output count of each overusedWords in list as array
const countEachOverusedWord = (array,checkItems) => {
  let countList = [];
  for (let i=0; i < checkItems.length; i++) {
    if (array.includes(checkItems[i])) {
      countList.push([checkItems[i]],[filterThisByThatExact(array,checkItems[i]).length]);
    } else
      return countList.push('error');
  }
//  return countList;
    console.log(`Overused Words:`);
    for (i = 0; i < countList.length; i = i+2) {
      console.log(`    ${countList[i]}: ${countList[i+1]}`);
      }
      return '';
}

    //test
    //console.log(countEachOverusedWord(filterStringToBetterWords(story),overusedWords));


//how many sentences there are in this string?
const stringSentenceCount = (string) => {
  return string.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|").length;
};



//combine betterWords into a string
const betterWordsString = string => {
  const joinedString = filterStringToBetterWords(string).join(' ');
  return joinedString;
}

    //test
    //console.log(betterWordsString(story));




// Combine functions and log to console
const stringAnalyze = (string) => {
  console.log('String Analysis Results:');
  console.log('');
  console.log(`Total Word Count: ${stringWordsToArray(string).length}`);
  console.log(`Count (w/o unnecessary): ${filterStringToBetterWords(string).length}`);
  console.log(`Sentence Count: ${stringSentenceCount(string)}`);
  console.log(`Overused Words Count: ${overusedWordsInBetterWordsString(string).length}`);
  console.log(countEachOverusedWord(overusedWordsInBetterWordsString(string),overusedWords));
  console.log('');
  console.log(betterWordsString(string));

  return '';
}

console.log(stringAnalyze(story));




