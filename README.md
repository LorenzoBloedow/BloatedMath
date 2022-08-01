# BloatedMath
Extensive JavaScript Math Library Written In TypeScript.

## Usage (ES Modules)
You can either import 'main.ts', which will import a class containing all constants and functions as static fields or you can import each function/constant as needed from the files 'functions.ts' and 'constants.ts', respectively.

## Functions
There are 19 functions as of v1.0.0

```javascript
isPrime(n: number): boolean

isComposite(n: number): boolean

isOdd(n: number): boolean | null

isEven(n: number): boolean | null

parity(n: number): string | null

divisorCount(n: number): number

isHighlyComposite(n: number): boolean

divisors(n: number): number[]

multiples(n: number, amount: number): number[]

fibonacciSequence(n: number): number[]

isFibonacciNumber(n: number): boolean

greatestCommonDivisor(numbers: number[]) : number | null | undefined

leastCommonMultiple(numbers: number[]): number | null

recamanSequence(n: number): number | number[] | null

circleArea(radius: number): number | null

quadraticFormula(a: number, b: number, c: number): number[] | number | null | undefined

lazyCaterer(n: number, mode: string = "formula"): number | number[] | null

lookAndSaySequence(n: number): number[] | number | null

average(numbers: number[]): number | null
```

## Constants
There are 38 constants and 38 'BIG' constants as of v1.0.0

```javascript
PI: number = 3.14;

BIG_PI: number = 3.141_592_653_589_793;


PHI: number = 1.61;

BIG_PHI: number = 1.618_033_988_749_894;


SILVER_RATIO: number = 2.41;

BIG_SILVER_RATIO: number = 2.414_213_562_373_095;


SQUARE_ROOT_OF_2: number = 1.41;

BIG_SQUARE_ROOT_OF_2: number = 1.414_213_562_373_095;

PYTHAGORAS_CONSTANT: number = 	1.41;

BIG_PYTHAGORAS_CONSTANT: number = 1.414_213_562_373_095;


SQUARE_ROOT_OF_3: number = 1.73;

BIG_SQUARE_ROOT_OF_3: number = 1.732_050_807_568_877;

THEODORUS_CONSTANT: number = 1.73;

BIG_THEODORUS_CONSTANT: number = 1.732_050_807_568_877;


SQUARE_ROOT_OF_5: number = 2.23;

BIG_SQUARE_ROOT_OF_5: number = 2.236_067_977_499_789;


CUBE_ROOT_OF_2: number = 1.25;

BIG_CUBE_ROOT_OF_2: number = 1.259_921_049_894_873;


TWELFTH_ROOT_OF_2: number = 1.05;

BIG_TWELFTH_ROOT_OF_2: number = 1.059_463_094_359_295;


SUPERGOLDEN_RATIO: number = 1.46;

BIG_SUPERGOLDEN_RATIO: number = 1.465_571_231_876_768;


KEPLER_BOUWKAMP_CONSTANT: number = 0.11;

BIG_KEPLER_BOUWKAMP_CONSTANT: number = 0.114_942_044_853_296;


WALLIS_CONSTANT: number = 2.09;

BIG_WALLIS_CONSTANT: number = 2.094_551_481_542_326;


EULER_NUMBER: number = 2.71;

BIG_EULER_NUMBER: number = 2.718_281_828_459_045;


NATURAL_LOGARITHM_OF_2: number = 0.69;

BIG_NATURAL_LOGARITHM_OF_2: number = 0.693_147_180_559_945;


LEMNISCATE_CONSTANT: number = 2.62;

BIG_LEMNISCATE_CONSTANT: number = 2.622_057_554_292_119;


EULER_CONSTANT: number = 0.57;

BIG_EULER_CONSTANT: number = 0.577_215_664_901_532;


OMEGA_CONSTANT: number = 0.56;

BIG_OMEGA_CONSTANT: number = 0.567_143_290_409_783;


CONWAY_CONSTANT: number = 1.30;

BIG_CONWAY_CONSTANT: number = 1.303_577_269_034_296;


APERY_CONSTANT: number = 1.20;

BIG_APERY_CONSTANT: number = 1.202_056_903_159_594;


UNIVERSAL_PARABOLIC_CONSTANT: number = 2.29;

BIG_UNIVERSAL_PARABOLIC_CONSTANT: number = 2.295_587_149_392_638;


CONNECTIVE_CONSTANT: number = 1.84;

BIG_CONNECTIVE_CONSTANT: number = 1.847_759_065_022_573;


LAPLACE_LIMIT: number = 0.66;

BIG_LAPLACE_LIMIT: number = 0.662_743_419_349_181;


RAMANUJAN_SOLDNER_CONSTANT: number = 1.45;

BIG_RAMANUJAN_SOLDNER_CONSTANT: number = 1.451_369_234_883_381;


GLAISHER_KINKELIN_CONSTANT: number = 1.28;

BIG_GLAISHER_KINKELIN_CONSTANT: number = 1.282_427_129_100_622;


CATALAN_CONSTANT: number = 0.91;

BIG_CATALAN_CONSTANT: number = 0.915_965_594_177_219;


DOTTIE_NUMBER: number = 0.73;

BIG_DOTTIE_NUMBER: number = 0.739_085_133_215_160;


MEISSEL_MERTENS_CONSTANT: number = 0.26;

BIG_MEISSEL_MERTENS_CONSTANT: number = 0.261_497_212_847_642;


GOLDEN_ANGLE: number = 2.39;

BIG_GOLDEN_ANGLE: number = 2.399_963_229_728_653;


PLASTIC_NUMBER: number = 1.32;

BIG_PLASTIC_NUMBER: number = 1.324_717_957_244_746;


FEIGENBAUM_CONSTANT: number = 2.50;

BIG_FEIGENBAUM_CONSTANT: number = 2.502_907_875_095_892;


FRANSEN_ROBINSON_CONSTANT: number = 2.80;

BIG_FRANSEN_ROBINSON_CONSTANT: number = 2.807_770_242_028_519;


WEIERSTRASS_CONSTANT: number = 0.47;

BIG_WEIERSTRASS_CONSTANT: number = 0.474_949_379_987_920;


ROBBINS_CONSTANT: number = 0.66;

BIG_ROBBINS_CONSTANT: number = 0.661_707_182_267_176;


DEVICCI_TESSERACT_CONSTANT: number = 1.00;

BIG_DEVICCI_TESSERACT_CONSTANT: number = 1.007_434_756_884_279;


LOCHS_CONSTANT: number = 0.97;

BIG_LOCHS_CONSTANT: number = 0.970_270_114_392_033;


PORTER_CONSTANT: number = 1.46;

BIG_PORTER_CONSTANT: number = 1.467_078_079_433_975;


MAGIC_ANGLE: number = 0.95;

BIG_MAGIC_ANGLE: number = 0.955_316_618_124_509;
```

## Important
If you're looking for highly performant algorithms, **this is not the library.** The algorithms I wrote are my terrible interpretations of the problem, which are probably pretty bad in Big-O notation. This is just a fun side project with no consideration for performance whatsoever.
