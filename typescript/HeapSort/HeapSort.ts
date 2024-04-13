export class HeapSort {
  sort(arr: number[]) {

    for (let i = Math.round(arr.length / 2 - 1); i >= 0; i--) {
      this.heapifyDown(arr, arr.length, i);
    }
    let lengthToBeHeapified = arr.length;
    while (lengthToBeHeapified > 0) {
      this.heapifyDown(arr, lengthToBeHeapified);
      this.swap(0, lengthToBeHeapified - 1, arr);
      lengthToBeHeapified--;
    }
  }

  private heapifyDown(arr: number[], length: number, position: number = 0) {
    while ((position * 2 + 1) < length) {
      const [higherChildrenPos, higherChildren] = this.getHigherChildren(position, arr, length);
      if (arr[position] < higherChildren) {
        this.swap(position, higherChildrenPos, arr);
      }
      position = higherChildrenPos;
    }
  }

  private getLeft(pos: number, arr: number[]) {
    const newPos = pos * 2 + 1;
    if (newPos > arr.length) {
      throw new Error();
    }
    return arr[newPos];
  }

  private getRight(pos: number, arr: number[]): number {
    const newPos = pos * 2 + 2;
    if (newPos > arr.length) {
      throw new Error();
    }
    return arr[newPos];
  }

  private getHigherChildren(pos: number, arr: number[], length: number): number[] {
    const leftPos = pos * 2 + 1;
    const rightPos = pos * 2 + 2;

    const left = this.getLeft(pos, arr);
    if (rightPos > length - 1) {
      return [leftPos, left];
    }
    const right = this.getRight(pos, arr);
    return left > right ? [leftPos, left] : [rightPos, right];
  }

  private swap(pos1: number, pos2 : number, arr: number[]): void {
    const temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
  }
}