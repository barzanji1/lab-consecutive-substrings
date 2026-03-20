function consecutiveSubstrings(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    let current = "";

    for (let j = i; j < str.length; j++) {
      current += str[j];
      result.push(current);
    }
  }

  return result;
}

module.exports = consecutiveSubstrings;