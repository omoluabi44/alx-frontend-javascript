// export default function divideFunction(numerator, denominator) {
// try{
//     if(denominator === 0){
//          throw new Error('cannot divide by 0');
//     }
//     return numerator / denominator;

// }}
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  } else {
    return numerator / denominator;
  }
}
