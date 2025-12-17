/**
 * Types internes
 */
type TestFn = () => void | Promise<void>;

interface TestCase {
    name: string;
    fn: TestFn;
}

interface TestSuite {
    name: string;
    tests: TestCase[];
}

/**
 * Stockage global des suites
 */
const suites: TestSuite[] = [];
let currentSuite: TestSuite | null = null;

/**
 * Définit une suite de tests
 * @param name Nom de la suite
 * @param fn Fonction contenant les tests
 */
export function describe(name: string, fn: () => void): void {
    const suite: TestSuite = { name, tests: [] };
    suites.push(suite);
    currentSuite = suite;
    fn();
    currentSuite = null;
}

/**
 * Définit un test unitaire
 * @param name Nom du test
 * @param fn Fonction du test
 */
export function test(name: string, fn: TestFn): void {
    if (!currentSuite) {
        throw new Error("test() doit être appelé dans un describe()");
    }
    currentSuite.tests.push({ name, fn });
}

/**
 * API d'assertions
 */
class Expect<T> {
    constructor(private received: T) {
    }

    /**
     * Vérifie l'égalité stricte
     * @param expected Valeur attendue
     */
    toBe(expected: T): void {
        if (!Object.is(this.received, expected)) {
        }
    }
}