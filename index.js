function shout(string) {
    return string.toUpperCase();
    // todo
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout() {
    console.log('HELLO');
  }
  function logWhisper() {
    console.log('hello')
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!";
    } else if (string === "Let's have dinner together!"){
        return "I would love to!";
    }
    else {
        return "YES INDEED!"
    }
}