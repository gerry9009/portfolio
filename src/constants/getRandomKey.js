let listOfKeys = [];
const getRandomKey = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var randomKey = "";
  for (let i = 0; i <= 15; i++) {
    randomKey += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  if (listOfKeys.includes(randomKey)) {
    return getRandomKey();
  } else {
    listOfKeys.push(randomKey);
    return randomKey;
  }
};

export default getRandomKey;
