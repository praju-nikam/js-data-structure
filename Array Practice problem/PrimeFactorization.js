/*  Extend the Prime Factorization Program to store all the Prime Factors of a
    number n into an array and finally display the output.
*/
function primeFactors(num) {
    const primes = [];
    for (let factor = 2; factor <= num; factor++) {
        while ((num % factor) === 0) {
            primes.push(factor);
            num /= factor;
        }
    }
    return primes;
}
console.log("Prime factors are: ", primeFactors(30));