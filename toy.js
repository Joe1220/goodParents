function howManyGifts(maxBudget, gifts) {
  let result = 0;
  gifts.sort((a, b) => a - b);
  if(maxBudget <= 0) return 0;
  for(var i = 0; i < gifts.length; i += 1){
    if(result + gifts[i] < maxBudget){
      result += gifts[i]
    } else {
      return i;
    }
  }
}

console.log(howManyGifts(20, [13, 2, 4, 6, 1]));