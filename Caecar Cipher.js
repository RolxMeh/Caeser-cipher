function rot13(str) {
  
  const obj = {
  A: 'N',
  B: 'O',
  C: 'P',
  D: 'Q',
  E: 'R',
  F: 'S',
  G: 'T',
  H: 'U',
  I: 'V',
  J: 'W',
  K: 'X',
  L: 'Y',
  M: 'Z',
  N: 'A',
  O: 'B',
  P: 'C',
  Q: 'D',
  R: 'E',
  S: 'F',
  T: 'G',
  U: 'H',
  V: 'I',
  W: 'J',
  X: 'K',
  Y: 'L',
  Z: 'M'
};

  let decodedStr = ""
  for (let i=0; i < str.length; i++) {
    const char = str[i];
    if (/[A-Z]/.test(char)) {
      decodedStr += obj[char];
    } else {
      decodedStr += char;
    }
  }
  return decodedStr;
}

console.log(rot13('SERR PBQR PNZC'));
