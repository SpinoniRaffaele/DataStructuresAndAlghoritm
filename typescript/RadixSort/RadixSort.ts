export class RadixSort {
  public radixSort(arr: number[], maxValue: number): number[] {
    const result = [];
    for (let i = 0; i < maxValue; i++) {
      result.push(...arr.filter(elem => elem === i));
    }
    return result;
  }
}