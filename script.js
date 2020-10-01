var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var first = names[i].charAt(0).toUpperCase();

  if (firstLetter === 'J') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}