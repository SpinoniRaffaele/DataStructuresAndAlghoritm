export class TripleStep {

  public tripleStep(n: number) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 4;
    return this.tripleStep(n - 1) + this.tripleStep(n - 2) + this.tripleStep(n - 3);
  }

  public tripleStepIterative(n: number): number {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 4;
    let cache = [1, 2, 4];
    let totalPossibilities = 7;
    for (let counter = 3; counter < n; counter++) {
      totalPossibilities = cache[counter - 1] + cache[counter - 2] + cache[counter - 3];
      cache.push(totalPossibilities);
    }
    return totalPossibilities;
  }

  public tripleStepIterativeOptimized(n: number): number {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 4;
    let first = 1;
    let second = 2;
    let third = 4;
    let totalPossibilities = 7;
    for (let counter = 3; counter < n; counter++) {
      totalPossibilities = first + second + third;
      first = second;
      second = third;
      third = totalPossibilities;
    }
    return totalPossibilities;
  }
}

const test = () => {
  const dynamicProgramming = new TripleStep();
  console.log(dynamicProgramming.tripleStepIterativeOptimized(6));
};

test();