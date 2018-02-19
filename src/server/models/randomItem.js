const fs = require("fs");
const mockData = __dirname + "/MOCK_DATA.json";

const randomGen = function(range) {
  return Math.floor(Math.random() * range);
};

const readData = function(filePath) {
  try {
    const contents = fs.readFileSync(filePath);
    return JSON.parse(contents);
  } catch (error) {
    console.error(error);
  }
};

const randomPick = function() {
  const list = readData(mockData);
  const idx = randomGen(list.length);
  return list[idx];
};

module.exports = randomPick;
