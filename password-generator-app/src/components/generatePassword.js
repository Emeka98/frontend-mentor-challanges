export const generatePassword = (params) => {
  let alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

  const totalLength = params.length;
  const symbolCount = params.getSymbols ? Math.min(Math.floor(params.length / 4), 3)  : 0; 
  const numberCount = params.getNumber ? Math.min(Math.floor(params.length / 4), 3) : 0; 
  const lowerCaseCount = params.getLowerCase ? Math.min(Math.floor(params.length / 20 ), 2) : 0;
  const upperCaseCount = params.getUpperCase ? Math.min(Math.floor(params.length / 2), 3) : 0
  const letterCount = totalLength - symbolCount - numberCount - lowerCaseCount - upperCaseCount;



  let password = '';

  for (let i = 0; i < lowerCaseCount; i++) {
    const randomIndex = getRandomNumber(alphabet.length);
    password += alphabet[randomIndex];
  }

  for (let i = 0; i < letterCount; i++) {
    const randomIndex = getRandomNumber(alphabet.length);
    password += alphabet[randomIndex];
  }

  for(let i = 0 ; i < upperCaseCount ; i++){
    const randomIndex = getRandomNumber(alphabet.length);
    password += alphabet[randomIndex].toUpperCase()
  }

  for (let i = 0; i < numberCount; i++) {
    const randomIndex = getRandomNumber(10);
    password += randomIndex.toString();
  }


  if (params.getSymbols) {
    const symbolSet = ['!', '@', '#', '$', '%', '^', '&', '*'];
    for (let i = 0; i < symbolCount; i++) {
      const randomIndex = getRandomNumber(symbolSet.length);
      password += symbolSet[randomIndex];
    }
  }

  // Mixed
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  return password;
};


const replaceCharAtIndex = (str, index, replacement) => {
  return str.slice(0, index) + replacement + str.slice(index + 1);
};

// Get Random Number Function
const getRandomNumber = (number) => {
  const randomNumber = Math.floor(Math.random() * number);
  return randomNumber;
};

