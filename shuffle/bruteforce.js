function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {
    console.log(array);

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);
    console.log(i);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
    console.log(copy);
  }

  return copy;
}
