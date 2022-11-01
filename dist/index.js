import * as functions from "./functions";
import * as constants from "./constants";
export default class BloatedMath {
    constructor() { }
    // Methods.
    static isPrime(n) {
        return functions.isPrime(n);
    }
    static isComposite(n) {
        return functions.isComposite(n);
    }
    static isOdd(n) {
        return functions.isOdd(n);
    }
    static isEven(n) {
        return functions.isEven(n);
    }
    static parity(n) {
        return functions.parity(n);
    }
    static divisorCount(n) {
        return functions.divisorCount(n);
    }
    static isHighlyComposite(n) {
        return functions.isHighlyComposite(n);
    }
    static divisors(n) {
        return functions.divisors(n);
    }
    static multiples(n, amount) {
        return functions.multiples(n, amount);
    }
    static fibonacciSequence(n) {
        return functions.fibonacciSequence(n);
    }
    static isFibonacciNumber(n) {
        return functions.isFibonacciNumber(n);
    }
    static greatestCommonDivisor(numbers) {
        return functions.greatestCommonDivisor(numbers);
    }
    static leastCommonMultiple(numbers) {
        return functions.leastCommonMultiple(numbers);
    }
    static recamanSequence(n) {
        return functions.recamanSequence(n);
    }
    static circleArea(radius) {
        return functions.circleArea(radius);
    }
    static quadraticFormula(a, b, c) {
        return functions.quadraticFormula(a, b, c);
    }
    static lazyCaterer(n, mode = "formula") {
        return functions.lazyCaterer(n, mode);
    }
    static lookAndSaySequence(n) {
        return functions.lookAndSaySequence(n);
    }
    static average(numbers) {
        return functions.average(numbers);
    }
}
// Constants.
BloatedMath.PI = constants.PI;
BloatedMath.BIG_PI = constants.BIG_PI;
BloatedMath.PHI = constants.PHI;
BloatedMath.BIG_PHI = constants.BIG_PHI;
BloatedMath.SILVER_RATIO = constants.SILVER_RATIO;
BloatedMath.BIG_SILVER_RATIO = constants.BIG_SILVER_RATIO;
BloatedMath.SQUARE_ROOT_OF_2 = constants.SQUARE_ROOT_OF_2;
BloatedMath.BIG_SQUARE_ROOT_OF_2 = constants.BIG_SQUARE_ROOT_OF_2;
BloatedMath.PYTHAGORAS_CONSTANT = constants.PYTHAGORAS_CONSTANT;
BloatedMath.BIG_PYTHAGORAS_CONSTANT = constants.BIG_PYTHAGORAS_CONSTANT;
BloatedMath.SQUARE_ROOT_OF_3 = constants.SQUARE_ROOT_OF_3;
BloatedMath.BIG_SQUARE_ROOT_OF_3 = constants.BIG_SQUARE_ROOT_OF_3;
BloatedMath.THEODORUS_CONSTANT = constants.THEODORUS_CONSTANT;
BloatedMath.BIG_THEODORUS_CONSTANT = constants.BIG_THEODORUS_CONSTANT;
BloatedMath.SQUARE_ROOT_OF_5 = constants.SQUARE_ROOT_OF_5;
BloatedMath.BIG_SQUARE_ROOT_OF_5 = constants.BIG_SQUARE_ROOT_OF_5;
BloatedMath.CUBE_ROOT_OF_2 = constants.CUBE_ROOT_OF_2;
BloatedMath.BIG_CUBE_ROOT_OF_2 = constants.BIG_CUBE_ROOT_OF_2;
BloatedMath.TWELFTH_ROOT_OF_2 = constants.TWELFTH_ROOT_OF_2;
BloatedMath.BIG_TWELFTH_ROOT_OF_2 = constants.BIG_TWELFTH_ROOT_OF_2;
BloatedMath.SUPERGOLDEN_RATIO = constants.SUPERGOLDEN_RATIO;
BloatedMath.BIG_SUPERGOLDEN_RATIO = constants.BIG_SUPERGOLDEN_RATIO;
BloatedMath.KEPLER_BOUWKAMP_CONSTANT = constants.KEPLER_BOUWKAMP_CONSTANT;
BloatedMath.BIG_KEPLER_BOUWKAMP_CONSTANT = constants.BIG_KEPLER_BOUWKAMP_CONSTANT;
BloatedMath.WALLIS_CONSTANT = constants.WALLIS_CONSTANT;
BloatedMath.BIG_WALLIS_CONSTANT = constants.BIG_WALLIS_CONSTANT;
BloatedMath.EULER_NUMBER = constants.EULER_NUMBER;
BloatedMath.BIG_EULER_NUMBER = constants.BIG_EULER_NUMBER;
BloatedMath.NATURAL_LOGARITHM_OF_2 = constants.NATURAL_LOGARITHM_OF_2;
BloatedMath.BIG_NATURAL_LOGARITHM_OF_2 = constants.BIG_NATURAL_LOGARITHM_OF_2;
BloatedMath.LEMNISCATE_CONSTANT = constants.LEMNISCATE_CONSTANT;
BloatedMath.BIG_LEMNISCATE_CONSTANT = constants.BIG_LEMNISCATE_CONSTANT;
BloatedMath.EULER_CONSTANT = constants.EULER_CONSTANT;
BloatedMath.BIG_EULER_CONSTANT = constants.BIG_EULER_CONSTANT;
BloatedMath.OMEGA_CONSTANT = constants.OMEGA_CONSTANT;
BloatedMath.BIG_OMEGA_CONSTANT = constants.BIG_OMEGA_CONSTANT;
BloatedMath.CONWAY_CONSTANT = constants.CONWAY_CONSTANT;
BloatedMath.BIG_CONWAY_CONSTANT = constants.BIG_CONWAY_CONSTANT;
BloatedMath.APERY_CONSTANT = constants.APERY_CONSTANT;
BloatedMath.BIG_APERY_CONSTANT = constants.BIG_APERY_CONSTANT;
BloatedMath.UNIVERSAL_PARABOLIC_CONSTANT = constants.UNIVERSAL_PARABOLIC_CONSTANT;
BloatedMath.BIG_UNIVERSAL_PARABOLIC_CONSTANT = constants.BIG_UNIVERSAL_PARABOLIC_CONSTANT;
BloatedMath.CONNECTIVE_CONSTANT = constants.CONNECTIVE_CONSTANT;
BloatedMath.BIG_CONNECTIVE_CONSTANT = constants.BIG_CONNECTIVE_CONSTANT;
BloatedMath.LAPLACE_LIMIT = constants.LAPLACE_LIMIT;
BloatedMath.BIG_LAPLACE_LIMIT = constants.BIG_LAPLACE_LIMIT;
BloatedMath.RAMANUJAN_SOLDNER_CONSTANT = constants.RAMANUJAN_SOLDNER_CONSTANT;
BloatedMath.BIG_RAMANUJAN_SOLDNER_CONSTANT = constants.BIG_RAMANUJAN_SOLDNER_CONSTANT;
BloatedMath.GLAISHER_KINKELIN_CONSTANT = constants.GLAISHER_KINKELIN_CONSTANT;
BloatedMath.BIG_GLAISHER_KINKELIN_CONSTANT = constants.BIG_GLAISHER_KINKELIN_CONSTANT;
BloatedMath.CATALAN_CONSTANT = constants.CATALAN_CONSTANT;
BloatedMath.BIG_CATALAN_CONSTANT = constants.BIG_CATALAN_CONSTANT;
BloatedMath.DOTTIE_NUMBER = constants.DOTTIE_NUMBER;
BloatedMath.BIG_DOTTIE_NUMBER = constants.BIG_DOTTIE_NUMBER;
BloatedMath.MEISSEL_MERTENS_CONSTANT = constants.MEISSEL_MERTENS_CONSTANT;
BloatedMath.BIG_MEISSEL_MERTENS_CONSTANT = constants.BIG_MEISSEL_MERTENS_CONSTANT;
BloatedMath.GOLDEN_ANGLE = constants.GOLDEN_ANGLE;
BloatedMath.BIG_GOLDEN_ANGLE = constants.BIG_GOLDEN_ANGLE;
BloatedMath.PLASTIC_NUMBER = constants.PLASTIC_NUMBER;
BloatedMath.BIG_PLASTIC_NUMBER = constants.BIG_PLASTIC_NUMBER;
BloatedMath.FEIGENBAUM_CONSTANT = constants.FEIGENBAUM_CONSTANT;
BloatedMath.BIG_FEIGENBAUM_CONSTANT = constants.BIG_FEIGENBAUM_CONSTANT;
BloatedMath.FRANSEN_ROBINSON_CONSTANT = constants.FRANSEN_ROBINSON_CONSTANT;
BloatedMath.BIG_FRANSEN_ROBINSON_CONSTANT = constants.BIG_FRANSEN_ROBINSON_CONSTANT;
BloatedMath.WEIERSTRASS_CONSTANT = constants.WEIERSTRASS_CONSTANT;
BloatedMath.BIG_WEIERSTRASS_CONSTANT = constants.BIG_WEIERSTRASS_CONSTANT;
BloatedMath.ROBBINS_CONSTANT = constants.ROBBINS_CONSTANT;
BloatedMath.BIG_ROBBINS_CONSTANT = constants.BIG_ROBBINS_CONSTANT;
BloatedMath.DEVICCI_TESSERACT_CONSTANT = constants.DEVICCI_TESSERACT_CONSTANT;
BloatedMath.BIG_DEVICCI_TESSERACT_CONSTANT = constants.BIG_DEVICCI_TESSERACT_CONSTANT;
BloatedMath.LOCHS_CONSTANT = constants.LOCHS_CONSTANT;
BloatedMath.BIG_LOCHS_CONSTANT = constants.BIG_LOCHS_CONSTANT;
BloatedMath.PORTER_CONSTANT = constants.PORTER_CONSTANT;
BloatedMath.BIG_PORTER_CONSTANT = constants.BIG_PORTER_CONSTANT;
BloatedMath.MAGIC_ANGLE = constants.MAGIC_ANGLE;
BloatedMath.BIG_MAGIC_ANGLE = constants.BIG_MAGIC_ANGLE;
