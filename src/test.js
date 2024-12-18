class ManhattanDistanceSolver {
    constructor() {
        this.results = [];
    }

    calculateDistance(point1, point2) {
        return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
    }

    generatePermutations(arr, startIndex = 0) {
        if (startIndex === arr.length - 1) {
            return [arr.slice()];
        }
        const permutations = [];
        for (let i = startIndex; i < arr.length; i++) {
            [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
            permutations.push(...this.generatePermutations(arr, startIndex + 1));
            [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
        }
        return permutations;
    }

    solveSingleTestCase(customers, office, home) {
        const customerPermutations = this.generatePermutations(customers);
        let minDistance = Infinity;
        for (const perm of customerPermutations) {
            let totalDistance = 0;
            totalDistance += this.calculateDistance(office, perm[0]);
            for (let i = 0; i < perm.length - 1; i++) {
                totalDistance += this.calculateDistance(perm[i], perm[i + 1]);
            }
            totalDistance += this.calculateDistance(perm[perm.length - 1], home);
            minDistance = Math.min(minDistance, totalDistance);
        }

        return minDistance;
    }

    solveAll(testCases) {
        testCases.forEach((testCase, index) => {
            const [N, coordinates] = testCase;
            const office = coordinates[0];
            const home = coordinates[1];
            const customers = coordinates.slice(2);

            const shortestPathDistance = this.solveSingleTestCase(customers, office, home);
            this.results.push(`#${index + 1} ${shortestPathDistance}`);
        });
    }

    printResults() {
        this.results.forEach(result => console.log(result));
    }
}

// Example Usage
const testCases = [
    [
        5,
        [
            [0, 0],   
            [100, 100], 
            [70, 40], [30, 10], [10, 5], [90, 70], [50, 20] 
        ]
    ],
    [
        6,
        [
            [88, 81], [85, 80],
            [19, 22], [31, 15], [27, 29], [30, 10], [20, 26], [5, 14]
        ]
    ],
    [
        10,
        [
            [39, 9], [97, 61],
            [35, 93], [62, 64], [96, 39], [36, 36], [9, 59],
            [59, 96], [61, 7], [64, 43], [43, 58], [1, 36]
        ]
    ]
];

const solver = new ManhattanDistanceSolver();
solver.solveAll(testCases);
solver.printResults();
