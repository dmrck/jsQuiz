function isOnlyLetters(S) {
  return /^[A-Za-z]+$/.test(S);
}

function solution(S) {
  if (S.length > 200000 || !isOnlyLetters(S)) return "S is not correct format";

  let alphabet = "zyxwvutsrqponmlkjihgfedcba";
  for (let index = 0; index < alphabet.length; index++) {
    if (
      S.indexOf(alphabet[index]) > -1 &&
      S.indexOf(alphabet[index].toUpperCase()) > -1
    ) {
      return alphabet[index].toUpperCase();
    }
  }
  return "NO";
}
