const generateKey = (length, characters) => {
  let resultKey = '';
  let count = 0;
  if(characters === '') {
    const messageEmptyString = 'Given string is empty';
    return messageEmptyString;
  }
  if(length <= 0) {
    const incorrectKeyLengthMessage = 'Length of key cant be  zero or less than zero';
    return incorrectKeyLengthMessage;
  }
  if(characters.length < 5) {
    const shortStringMessage = 'Minimum 5 characters required to generate key';
    return shortStringMessage;
  } else {
  while(count < length) {
    let randomCharIndex = Math.random() * characters.length;
    resultKey = resultKey + characters.charAt(Math.floor(randomCharIndex));
    count++;
  }
}
  return resultKey;
}
const char = 'abcdefghijklmnopqrstuvwxyz012345678';
const generatedKey =  generateKey(23, char);
document.write(generatedKey);
