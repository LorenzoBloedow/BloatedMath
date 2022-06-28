import * as functions from "./functions.js";
import * as constants from "./constants.js";

export default class BloatedMath {
    constructor() {}

    // Constants.
    static PI = constants.PI;

    static BIG_PI = constants.BIG_PI;


    static PHI = constants.PHI;

    static BIG_PHI = constants.BIG_PHI;


    static SILVER_RATIO = constants.SILVER_RATIO;

    static BIG_SILVER_RATIO = constants.BIG_SILVER_RATIO;


    static SQUARE_ROOT_OF_2 = constants.SQUARE_ROOT_OF_2;

    static BIG_SQUARE_ROOT_OF_2 = constants.BIG_SQUARE_ROOT_OF_2;

    static PYTHAGORAS_CONSTANT = constants.PYTHAGORAS_CONSTANT;

    static BIG_PYTHAGORAS_CONSTANT = constants.BIG_PYTHAGORAS_CONSTANT;


    static SQUARE_ROOT_OF_3 = constants.SQUARE_ROOT_OF_3;

    static BIG_SQUARE_ROOT_OF_3 = constants.BIG_SQUARE_ROOT_OF_3;

    static THEODORUS_CONSTANT = constants.THEODORUS_CONSTANT;

    static BIG_THEODORUS_CONSTANT = constants.BIG_THEODORUS_CONSTANT;


    static SQUARE_ROOT_OF_5 = constants.SQUARE_ROOT_OF_5;

    static BIG_SQUARE_ROOT_OF_5 = constants.BIG_SQUARE_ROOT_OF_5;


    static CUBE_ROOT_OF_2 = constants.CUBE_ROOT_OF_2;

    static BIG_CUBE_ROOT_OF_2 = constants.BIG_CUBE_ROOT_OF_2;


    static TWELFTH_ROOT_OF_2 = constants.TWELFTH_ROOT_OF_2;

    static BIG_TWELFTH_ROOT_OF_2 = constants.BIG_TWELFTH_ROOT_OF_2;


    static SUPERGOLDEN_RATIO = constants.SUPERGOLDEN_RATIO;

    static BIG_SUPERGOLDEN_RATIO = constants.BIG_SUPERGOLDEN_RATIO;
    
    
    static KEPLER_BOUWKAMP_CONSTANT = constants.KEPLER_BOUWKAMP_CONSTANT;
    
    static BIG_KEPLER_BOUWKAMP_CONSTANT = constants.BIG_KEPLER_BOUWKAMP_CONSTANT;
    
    
    static WALLIS_CONSTANT = constants.WALLIS_CONSTANT;
    
    static BIG_WALLIS_CONSTANT = constants.BIG_WALLIS_CONSTANT;
    
    
    static EULER_NUMBER = constants.EULER_NUMBER;
    
    static BIG_EULER_NUMBER = constants.BIG_EULER_NUMBER;
    
    
    static NATURAL_LOGARITHM_OF_2 = constants.NATURAL_LOGARITHM_OF_2;
    
    static BIG_NATURAL_LOGARITHM_OF_2 = constants.BIG_NATURAL_LOGARITHM_OF_2;
    
    
    static LEMNISCATE_CONSTANT = constants.LEMNISCATE_CONSTANT;
    
    static BIG_LEMNISCATE_CONSTANT = constants.BIG_LEMNISCATE_CONSTANT;
    
    
    static EULER_CONSTANT = constants.EULER_CONSTANT;
    
    static BIG_EULER_CONSTANT = constants.BIG_EULER_CONSTANT;
    
    
    static OMEGA_CONSTANT = constants.OMEGA_CONSTANT;
    
    static BIG_OMEGA_CONSTANT = constants.BIG_OMEGA_CONSTANT;
    
    
    static CONWAY_CONSTANT = constants.CONWAY_CONSTANT
    
    static BIG_CONWAY_CONSTANT = constants.BIG_CONWAY_CONSTANT;
    
    
    static APERY_CONSTANT = constants.APERY_CONSTANT;
    
    static BIG_APERY_CONSTANT = constants.BIG_APERY_CONSTANT;
    
    
    static UNIVERSAL_PARABOLIC_CONSTANT = constants.UNIVERSAL_PARABOLIC_CONSTANT;
    
    static BIG_UNIVERSAL_PARABOLIC_CONSTANT = constants.BIG_UNIVERSAL_PARABOLIC_CONSTANT;
    

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
        return functions.parity(n)
    }

}