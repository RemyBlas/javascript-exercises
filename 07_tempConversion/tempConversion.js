const ftoc = function(f) {
  const c = (f-32) * 5/9;
  const rounded = Math.round(c*10)/10;
  return rounded;
};

const ctof = function(c) {
  const f = c * 9/5 + 32;
  const rounded = Math.round(f*10)/10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
