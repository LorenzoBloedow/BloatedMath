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
        return functions.parity(n)
    }

}