const instructorWithLongestName = function(instructors) {
  let longestName = '';
  for (const instructor of instructors) {
    if (instructor['name'].length > longestName.length) {
      longestName = instructor['name'];
    }
  }
  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiaha", course: "Web"},
  {name: "Donald", course: "Web"},
  {name: "Jeremiahbb", course: "Web"},
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));