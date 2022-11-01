import * as functions from "./functions";
import * as constants from "./constants";

export default class BloatedMath {
    constructor() {}

    // Constants.
    static PI: number = constants.PI;

    static BIG_PI: number = constants.BIG_PI;


    static PHI: number = constants.PHI;

    static BIG_PHI: number = constants.BIG_PHI;


    static SILVER_RATIO: number = constants.SILVER_RATIO;

    static BIG_SILVER_RATIO: number = constants.BIG_SILVER_RATIO;


    static SQUARE_ROOT_OF_2: number = constants.SQUARE_ROOT_OF_2;

    static BIG_SQUARE_ROOT_OF_2: number = constants.BIG_SQUARE_ROOT_OF_2;

    static PYTHAGORAS_CONSTANT: number = constants.PYTHAGORAS_CONSTANT;

    static BIG_PYTHAGORAS_CONSTANT: number = constants.BIG_PYTHAGORAS_CONSTANT;


    static SQUARE_ROOT_OF_3: number = constants.SQUARE_ROOT_OF_3;

    static BIG_SQUARE_ROOT_OF_3: number = constants.BIG_SQUARE_ROOT_OF_3;

    static THEODORUS_CONSTANT: number = constants.THEODORUS_CONSTANT;

    static BIG_THEODORUS_CONSTANT: number = constants.BIG_THEODORUS_CONSTANT;


    static SQUARE_ROOT_OF_5: number = constants.SQUARE_ROOT_OF_5;

    static BIG_SQUARE_ROOT_OF_5: number = constants.BIG_SQUARE_ROOT_OF_5;


    static CUBE_ROOT_OF_2: number = constants.CUBE_ROOT_OF_2;

    static BIG_CUBE_ROOT_OF_2: number = constants.BIG_CUBE_ROOT_OF_2;


    static TWELFTH_ROOT_OF_2: number = constants.TWELFTH_ROOT_OF_2;

    static BIG_TWELFTH_ROOT_OF_2: number = constants.BIG_TWELFTH_ROOT_OF_2;


    static SUPERGOLDEN_RATIO: number = constants.SUPERGOLDEN_RATIO;

    static BIG_SUPERGOLDEN_RATIO: number = constants.BIG_SUPERGOLDEN_RATIO;
    
    
    static KEPLER_BOUWKAMP_CONSTANT: number = constants.KEPLER_BOUWKAMP_CONSTANT;
    
    static BIG_KEPLER_BOUWKAMP_CONSTANT: number = constants.BIG_KEPLER_BOUWKAMP_CONSTANT;
    
    
    static WALLIS_CONSTANT: number = constants.WALLIS_CONSTANT;
    
    static BIG_WALLIS_CONSTANT: number = constants.BIG_WALLIS_CONSTANT;
    
    
    static EULER_NUMBER: number = constants.EULER_NUMBER;
    
    static BIG_EULER_NUMBER: number = constants.BIG_EULER_NUMBER;
    
    
    static NATURAL_LOGARITHM_OF_2: number = constants.NATURAL_LOGARITHM_OF_2;
    
    static BIG_NATURAL_LOGARITHM_OF_2: number = constants.BIG_NATURAL_LOGARITHM_OF_2;
    
    
    static LEMNISCATE_CONSTANT: number = constants.LEMNISCATE_CONSTANT;
    
    static BIG_LEMNISCATE_CONSTANT: number = constants.BIG_LEMNISCATE_CONSTANT;
    
    
    static EULER_CONSTANT: number = constants.EULER_CONSTANT;
    
    static BIG_EULER_CONSTANT: number = constants.BIG_EULER_CONSTANT;
    
    
    static OMEGA_CONSTANT: number = constants.OMEGA_CONSTANT;
    
    static BIG_OMEGA_CONSTANT: number = constants.BIG_OMEGA_CONSTANT;
    
    
    static CONWAY_CONSTANT: number = constants.CONWAY_CONSTANT
    
    static BIG_CONWAY_CONSTANT: number = constants.BIG_CONWAY_CONSTANT;
    
    
    static APERY_CONSTANT: number = constants.APERY_CONSTANT;
    
    static BIG_APERY_CONSTANT: number = constants.BIG_APERY_CONSTANT;
    
    
    static UNIVERSAL_PARABOLIC_CONSTANT: number = constants.UNIVERSAL_PARABOLIC_CONSTANT;
    
    static BIG_UNIVERSAL_PARABOLIC_CONSTANT: number = constants.BIG_UNIVERSAL_PARABOLIC_CONSTANT;

    static CONNECTIVE_CONSTANT: number = constants.CONNECTIVE_CONSTANT;

    static BIG_CONNECTIVE_CONSTANT: number = constants.BIG_CONNECTIVE_CONSTANT;


    static LAPLACE_LIMIT: number = constants.LAPLACE_LIMIT;

    static BIG_LAPLACE_LIMIT: number = constants.BIG_LAPLACE_LIMIT;


    static RAMANUJAN_SOLDNER_CONSTANT: number = constants.RAMANUJAN_SOLDNER_CONSTANT;

    static BIG_RAMANUJAN_SOLDNER_CONSTANT: number = constants.BIG_RAMANUJAN_SOLDNER_CONSTANT;


    static GLAISHER_KINKELIN_CONSTANT: number = constants.GLAISHER_KINKELIN_CONSTANT;

    static BIG_GLAISHER_KINKELIN_CONSTANT: number = constants.BIG_GLAISHER_KINKELIN_CONSTANT;


    static CATALAN_CONSTANT: number = constants.CATALAN_CONSTANT;

    static BIG_CATALAN_CONSTANT: number = constants.BIG_CATALAN_CONSTANT;


    static DOTTIE_NUMBER: number = constants.DOTTIE_NUMBER;

    static BIG_DOTTIE_NUMBER: number = constants.BIG_DOTTIE_NUMBER;


    static MEISSEL_MERTENS_CONSTANT: number = constants.MEISSEL_MERTENS_CONSTANT;

    static BIG_MEISSEL_MERTENS_CONSTANT: number = constants.BIG_MEISSEL_MERTENS_CONSTANT;


    static GOLDEN_ANGLE: number = constants.GOLDEN_ANGLE;

    static BIG_GOLDEN_ANGLE: number = constants.BIG_GOLDEN_ANGLE;


    static PLASTIC_NUMBER: number = constants.PLASTIC_NUMBER;

    static BIG_PLASTIC_NUMBER: number = constants.BIG_PLASTIC_NUMBER;
    

    static FEIGENBAUM_CONSTANT: number = constants.FEIGENBAUM_CONSTANT;

    static BIG_FEIGENBAUM_CONSTANT: number = constants.BIG_FEIGENBAUM_CONSTANT;
    
    
    static FRANSEN_ROBINSON_CONSTANT: number = constants.FRANSEN_ROBINSON_CONSTANT;
    
    static BIG_FRANSEN_ROBINSON_CONSTANT: number = constants.BIG_FRANSEN_ROBINSON_CONSTANT;
    
    
    static WEIERSTRASS_CONSTANT: number = constants.WEIERSTRASS_CONSTANT;
    
    static BIG_WEIERSTRASS_CONSTANT: number = constants.BIG_WEIERSTRASS_CONSTANT;
    
    
    static ROBBINS_CONSTANT: number = constants.ROBBINS_CONSTANT;
    
    static BIG_ROBBINS_CONSTANT: number = constants.BIG_ROBBINS_CONSTANT;
    
    
    static DEVICCI_TESSERACT_CONSTANT: number = constants.DEVICCI_TESSERACT_CONSTANT;
    
    static BIG_DEVICCI_TESSERACT_CONSTANT: number = constants.BIG_DEVICCI_TESSERACT_CONSTANT;
    
    
    static LOCHS_CONSTANT: number = constants.LOCHS_CONSTANT;
    
    static BIG_LOCHS_CONSTANT: number = constants.BIG_LOCHS_CONSTANT;
    
    
    static PORTER_CONSTANT: number = constants.PORTER_CONSTANT;
    
    static BIG_PORTER_CONSTANT: number = constants.BIG_PORTER_CONSTANT;
    
    
    static MAGIC_ANGLE: number = constants.MAGIC_ANGLE;
    
    static BIG_MAGIC_ANGLE: number = constants.BIG_MAGIC_ANGLE;

    // Methods.
    static isPrime(n: number): boolean {
        return functions.isPrime(n);
    }

    static isComposite(n: number): boolean {
        return functions.isComposite(n);
    }

    static isOdd(n: number): boolean {
        return functions.isOdd(n);
    }

    static isEven(n: number): boolean {
        return functions.isEven(n);
    }

    static parity(n: number): string {
        return functions.parity(n);
    }

    static divisorCount(n: number): number {
        return functions.divisorCount(n);
    }

    static isHighlyComposite(n: number): boolean {
        return functions.isHighlyComposite(n);
    }

    static divisors(n: number): number[] {
        return functions.divisors(n);
    }

    static multiples(n: number, amount: number): number[] {
        return functions.multiples(n, amount);
    }

    static fibonacciSequence(n: number): number[] {
        return functions.fibonacciSequence(n);
    }

    static isFibonacciNumber(n: number): boolean {
        return functions.isFibonacciNumber(n);
    }

    static greatestCommonDivisor(numbers: number[]) : number | null | undefined {
        return functions.greatestCommonDivisor(numbers);
    }

    static leastCommonMultiple(numbers: number[]): number | null {
        return functions.leastCommonMultiple(numbers);
    }

    static recamanSequence(n: number): number | number[] | null {
        return functions.recamanSequence(n);
    }

    static circleArea(radius: number): number | null {
        return functions.circleArea(radius);
    }

    static quadraticFormula(a: number, b: number, c: number): number[] | number | null | undefined {
        return functions.quadraticFormula(a, b, c);
    }
    
    static lazyCaterer(n: number, mode: string = "formula"): number | number[] | null {
        return functions.lazyCaterer(n, mode);
    }

    static lookAndSaySequence(n: number): number[] | number | null {
        return functions.lookAndSaySequence(n);
    }

    static average(numbers: number[]): number | null {
        return functions.average(numbers);
    }
}