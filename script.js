// Power Function
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  if (exponent === 1) {
    return base;
  }

  const result = power(base, Math.floor(exponent / 2));
  if (exponent % 2 === 0) {
    return result * result;
  } else {
    return base * result * result;
  }
}
