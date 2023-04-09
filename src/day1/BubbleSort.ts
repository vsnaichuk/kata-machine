// swap the elements in the first and second index provided
function swap(arr: number[], first: number, second: number) {
   let temp = arr[first]
    arr[first] = arr[second]
    arr[second] = temp
}

export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; ++i) {
    for (let k = 0; k < arr.length - 1 - i; ++k) {
      if (arr[k] > arr[k + 1]) {
        swap(arr, k, k+1)
      }
    }
  }
}
