function quickSort(arr: number[], lo: number, hi: number) {
    if(lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);
    quickSort(arr, lo, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let pivotIdx = lo - 1;
    for(let i = lo; i < hi; ++i) {
        if(arr[i] <= pivot) {
            pivotIdx++;
            const old = arr[i];
            arr[i] = arr[pivotIdx];
            arr[pivotIdx] = old;
        }
    }

    ++pivotIdx;
    arr[hi] = arr[pivotIdx];
    arr[pivotIdx] = pivot;

    return pivotIdx;
}

export default function quick_sort(arr: number[]): void {
    quickSort(arr, 0, arr.length - 1);
}
