



export const C = {
    quick:
        `
#include <stdio.h>

void swap(int* a, int* b);

// partition function
int partition(int arr[], int low, int high) {
    
    // Choose the pivot
    int pivot = arr[high];
    
    // Index of smaller element and indicates 
    // the right position of pivot found so far
    int i = low - 1;

    // Traverse arr[low..high] and move all smaller
    // elements to the left side. Elements from low to 
    // i are smaller after every iteration
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    
    // Move pivot after smaller elements and
    // return its position
    swap(&arr[i + 1], &arr[high]);  
    return i + 1;
}

// The QuickSort function implementation
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        
        // pi is the partition return index of pivot
        int pi = partition(arr, low, high);

        // recursion calls for smaller elements
        // and greater or equals elements
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

void swap(int* a, int* b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    quickSort(arr, 0, n - 1);
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    
    return 0;
}
        `,
    heap:
        `
    #include <stdio.h>

    // To heapify a subtree rooted with node i
    // which is an index in arr[].
    void heapify(int arr[], int n, int i) {

        // Initialize largest as root
        int largest = i; 

        // left index = 2*i + 1
        int l = 2 * i + 1; 

        // right index = 2*i + 2
        int r = 2 * i + 2;

        // If left child is larger than root
        if (l < n && arr[l] > arr[largest]) {
            largest = l;
        }

        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest]) {
            largest = r;
        }

        // If largest is not root
        if (largest != i) {
            int temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;

            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
        }
    }

    // Main function to do heap sort
    void heapSort(int arr[], int n) {

        // Build heap (rearrange array)
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        // One by one extract an element from heap
        for (int i = n - 1; i > 0; i--) {

            // Move current root to end
            int temp = arr[0]; 
            arr[0] = arr[i];
            arr[i] = temp;

            // Call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }

    // A utility function to print array of size n
    void printArray(int arr[], int n) {
        for (int i = 0; i < n; i++) {
            printf("%d ", arr[i]);
        }
        printf("\n");
    }

    // Driver's code
    int main() {
        int arr[] = {9, 4, 3, 8, 10, 2, 5}; 
        int n = sizeof(arr) / sizeof(arr[0]);

        heapSort(arr, n);

        printf("Sorted array is \n");
        printArray(arr, n);
        return 0;
    }
        `,
    merge:
        `
        #include <stdio.h>
        #include <stdlib.h>

        // Merges two subarrays of arr[].
        // First subarray is arr[l..m]
        // Second subarray is arr[m+1..r]
        void merge(int arr[], int l, int m, int r){
            
            int i, j, k;
            int n1 = m - l + 1;
            int n2 = r - m;

            // Create temp arrays
            int L[n1], R[n2];

            // Copy data to temp arrays L[] and R[]
            for (i = 0; i < n1; i++)
                L[i] = arr[l + i];
            for (j = 0; j < n2; j++)
                R[j] = arr[m + 1 + j];

            // Merge the temp arrays back into arr[l..r
            i = 0;
            j = 0;
            k = l;
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                }
                else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }

            // Copy the remaining elements of L[],
            // if there are any
            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }

            // Copy the remaining elements of R[],
            // if there are any
            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
        }

        // l is for left index and r is right index of the
        // sub-array of arr to be sorted
        void mergeSort(int arr[], int l, int r){
            
            if (l < r) {
                int m = l + (r - l) / 2;

                // Sort first and second halves
                mergeSort(arr, l, m);
                mergeSort(arr, m + 1, r);

                merge(arr, l, m, r);
            }
        }

        // Driver code
        int main(){
            
            int arr[] = {38, 27, 43, 10};
            int arr_size = sizeof(arr) / sizeof(arr[0]);

            mergeSort(arr, 0, arr_size - 1);
            int i;
            for (i = 0; i < arr_size; i++)
                printf("%d ", arr[i]);
            printf("\n");
            
            return 0;
        }
        `,
    selection:
        `
// C program for implementation of selection sort
#include <stdio.h>

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
      
        // Assume the current position holds
        // the minimum element
        int min_idx = i;
        
        // Iterate through the unsorted portion
        // to find the actual minimum
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
              
                // Update min_idx if a smaller element is found
                min_idx = j;
            }
        }
        
        // Move minimum element to its
        // correct position
        int temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("Original array: ");
    printArray(arr, n);
    
    selectionSort(arr, n);
    
    printf("Sorted array: ");
    printArray(arr, n);
    
    return 0;
}
        `,
    insertion:
        `
// C program for implementation of Insertion Sort
#include <stdio.h>

/* Function to sort array using insertion sort */
void insertionSort(int arr[], int n)
{
    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;

        /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

/* A utility function to print array of size n */
void printArray(int arr[], int n)
{
    for (int i = 0; i < n; ++i)
        printf("%d ", arr[i]);
    printf("\n");
}

// Driver method
int main()
{
    int arr[] = { 12, 11, 13, 5, 6 };
    int n = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, n);
    printArray(arr, n);

    return 0;
}

/* This code is contributed by Hritik Shah. */
        `,
    bubble:
        `
// Optimized implementation of Bubble sort
#include <stdbool.h>
#include <stdio.h>

void swap(int* xp, int* yp){
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

// An optimized version of Bubble Sort
void bubbleSort(int arr[], int n){
    int i, j;
    bool swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(&arr[j], &arr[j + 1]);
                swapped = true;
            }
        }

        // If no two elements were swapped by inner loop,
        // then break
        if (swapped == false)
            break;
    }
}

// Function to print an array
void printArray(int arr[], int size){
    int i;
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
}

int main(){
    int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    printf("Sorted array: \n");
    printArray(arr, n);
    return 0;
}
        `,
    counting:
        `
#include <stdio.h>
#include <stdlib.h>

void countSort(int inputArray[], int N) {
  
    // Finding the maximum element of 
    // array inputArray[]
    int M = 0;
    for (int i = 0; i < N; i++)
        if (inputArray[i] > M)
            M = inputArray[i];
    
    // Initializing countArray[] with 0
    int* countArray = (int*)calloc(M + 1, sizeof(int));
    
    // Mapping each element of inputArray[] 
    // as an index of countArray[] array
    for (int i = 0; i < N; i++)
        countArray[inputArray[i]]++;
    
    // Calculating prefix sum at every index
    // of array countArray[]
    for (int i = 1; i <= M; i++)
        countArray[i] += countArray[i - 1];
    
    // Creating outputArray[] from countArray[] array
    int* outputArray = (int*)malloc(N * sizeof(int));
    for (int i = N - 1; i >= 0; i--) {
        outputArray[countArray[inputArray[i]] - 1] = inputArray[i];
        countArray[inputArray[i]]--;
    }
    
    // Copying sorted elements back to inputArray[]
    for (int i = 0; i < N; i++)
        inputArray[i] = outputArray[i];
    
    // Freeing dynamically allocated memory
    free(countArray);
    free(outputArray);
}

// Driver code
int main() {
  
    // Input array
    int inputArray[] = {2,5,3,0,2,3,0,3};
    int N = sizeof(inputArray) / sizeof(inputArray[0]);
    
    // Sorting the array
    countSort(inputArray, N);
    
    // Printing the sorted array
    for (int i = 0; i < N; i++)
        printf("%d ", inputArray[i]);
    
    return 0;
}
        `
}

export const Cplus = {
    quick:
        `
#include <iostream>
#include <vector>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
  
    // choose the pivot
    int pivot = arr[high];
  
    // undex of smaller element and indicates 
    // the right position of pivot found so far
    int i = low - 1;

    // Traverse arr[low..high] and move all smaller
    // elements on left side. Elements from low to 
    // i are smaller after every iteration
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    
    // move pivot after smaller elements and
    // return its position
    swap(arr[i + 1], arr[high]);  
    return i + 1;
}

// the QuickSort function implementation
void quickSort(vector<int>& arr, int low, int high) {
  
    if (low < high) {
      
        // pi is the partition return index of pivot
        int pi = partition(arr, low, high);

        // recursion calls for smaller elements
        // and greater or equals elements
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    vector<int> arr = {10, 7, 8, 9, 1, 5};
    int n = arr.size();
    quickSort(arr, 0, n - 1);
  
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
        `,
    heap:
        `
// C++ program for implementation of Heap Sort using vector

#include <bits/stdc++.h>
using namespace std;

// To heapify a subtree rooted with node i
// which is an index in arr[].
void heapify(vector<int>& arr, int n, int i){

    // Initialize largest as root
    int largest = i;

    // left index = 2*i + 1
    int l = 2 * i + 1;

    // right index = 2*i + 2
    int r = 2 * i + 2;

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest != i) {
        swap(arr[i], arr[largest]);

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// Main function to do heap sort
void heapSort(vector<int>& arr){
    int n = arr.size();

    // Build heap (rearrange vector)
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // One by one extract an element from heap
    for (int i = n - 1; i > 0; i--) {

        // Move current root to end
        swap(arr[0], arr[i]);

        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

// A utility function to print vector of size n
void printArray(vector<int>& arr){
    for (int i = 0; i < arr.size(); ++i)
        cout << arr[i] << " ";
    cout << "\n";
}

// Driver's code
int main(){
    vector<int> arr = { 9, 4, 3, 8, 10, 2, 5 };

    // Function call
    heapSort(arr);

    cout << "Sorted array is \n";
    printArray(arr);
}
        `,
    merge:
        `
        #include <bits/stdc++.h>
        using namespace std;

        // Merges two subarrays of arr[].
        // First subarray is arr[left..mid]
        // Second subarray is arr[mid+1..right]
        void merge(vector<int>& arr, int left, 
                            int mid, int right){
                                
            int n1 = mid - left + 1;
            int n2 = right - mid;

            // Create temp vectors
            vector<int> L(n1), R(n2);

            // Copy data to temp vectors L[] and R[]
            for (int i = 0; i < n1; i++)
                L[i] = arr[left + i];
            for (int j = 0; j < n2; j++)
                R[j] = arr[mid + 1 + j];

            int i = 0, j = 0;
            int k = left;

            // Merge the temp vectors back 
            // into arr[left..right]
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                }
                else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }

            // Copy the remaining elements of L[], 
            // if there are any
            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }

            // Copy the remaining elements of R[], 
            // if there are any
            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
        }

        // begin is for left index and end is right index
        // of the sub-array of arr to be sorted
        void mergeSort(vector<int>& arr, int left, int right){
            
            if (left >= right)
                return;

            int mid = left + (right - left) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }

        // Driver code
        int main(){
            
            vector<int> arr = {38, 27, 43, 10};
            int n = arr.size();

            mergeSort(arr, 0, n - 1);
            for (int i = 0; i < arr.size(); i++)
                cout << arr[i] << " ";
            cout << endl;
            
            return 0;
        }
        `,
    selection:
        `
// C++ program to implement Selection Sort
#include <bits/stdc++.h>
using namespace std;

void selectionSort(vector<int> &arr) {
    int n = arr.size();

    for (int i = 0; i < n - 1; ++i) {

        // Assume the current position holds
        // the minimum element
        int min_idx = i;

        // Iterate through the unsorted portion
        // to find the actual minimum
        for (int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[min_idx]) {

                // Update min_idx if a smaller
                // element is found
                min_idx = j; 
            }
        }

        // Move minimum element to its
        // correct position
        swap(arr[i], arr[min_idx]);
    }
}

void printArray(vector<int> &arr) {
    for (int &val : arr) {
        cout << val << " ";
    }
    cout << endl;
}

int main() {
    vector<int> arr = {64, 25, 12, 22, 11};

    cout << "Original array: ";
    printArray(arr); 

    selectionSort(arr);

    cout << "Sorted array: ";
    printArray(arr);

    return 0;
}
        `,
    insertion:
        `
// C++ program for implementation of Insertion Sort
#include <iostream>
using namespace std;

/* Function to sort array using insertion sort */
void insertionSort(int arr[], int n)
{
    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;

        /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

/* A utility function to print array of size n */
void printArray(int arr[], int n)
{
    for (int i = 0; i < n; ++i)
        cout << arr[i] << " ";
    cout << endl;
}

// Driver method
int main()
{
    int arr[] = { 12, 11, 13, 5, 6 };
    int n = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, n);
    printArray(arr, n);

    return 0;
}

/* This code is contributed by Hritik Shah. */
        `,
    bubble:
        `
#include <bits/stdc++.h>
using namespace std;

// An optimized version of Bubble Sort 
void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    bool swapped;
  
    for (int i = 0; i < n - 1; i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
      
        // If no two elements were swapped, then break
        if (!swapped)
            break;
    }
}

// Function to print a vector
void printVector(const vector<int>& arr) {
    for (int num : arr)
        cout << " " << num;
}

int main() {
    vector<int> arr = { 64, 34, 25, 12, 22, 11, 90 };
    bubbleSort(arr);
    cout << "Sorted array: \n";
    printVector(arr);
    return 0;
}
        `,
    counting:
        `
#include <iostream>
#include <vector>
using namespace std;

vector<int> countsort(vector<int>& arr) {
    int n = arr.size();

    // find the maximum element
    int maxval = 0;
    for (int i = 0; i < n; i++)
        maxval = max(maxval, arr[i]);

    // create and initialize count array
    vector<int> count(maxval + 1, 0);

    // count frequency of each element
    for (int i = 0; i < n; i++)
        count[arr[i]]++;

    // compute prefix sum
    for (int i = 1; i <= maxval; i++)
        count[i] += count[i - 1];

    // build output array
    vector<int> ans(n);
    for (int i = n - 1; i >= 0; i--) {
        ans[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return ans;
}

int main() {
    vector<int> arr = {2,5,3,0,2,3,0,3};
    vector<int> sorted = countsort(arr);

    for (int x : sorted)
        cout << x << " ";

    return 0;
}
        `
}

export const Csharp = {
    quick:
        `
using System;

class GfG {

    // partition function
    static int partition(int[] arr, int low, int high) {
        
        // choose the pivot
        int pivot = arr[high];
        
        // index of smaller element and indicates 
        // the right position of pivot found so far
        int i = low - 1;

        // traverse arr[low..high] and move all smaller
        // elements to the left side. Elements from low to 
        // i are smaller after every iteration
        for (int j = low; j <= high - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        
        // move pivot after smaller elements and
        // return its position
        swap(arr, i + 1, high);  
        return i + 1;
    }

    // swap function
    static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // The QuickSort function implementation
    static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            
            // pi is the partition return index of pivot
            int pi = partition(arr, low, high);

            // recursion calls for smaller elements
            // and greater or equals elements
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    static void Main(string[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        int n = arr.Length;

        quickSort(arr, 0, n - 1);
        foreach (int val in arr) {
            Console.Write(val + " "); 
        }
    }
}
        `,
    heap:
        `
        using System;

        class GfG {
            // To heapify a subtree rooted with node i
            // which is an index in arr[].
            static void Heapify(int[] arr, int n, int i) {
            
                // Initialize largest as root
                int largest = i;
            
                // left index = 2*i + 1
                int l = 2 * i + 1; 
            
                // right index = 2*i + 2
                int r = 2 * i + 2; 

                // If left child is larger than root
                if (l < n && arr[l] > arr[largest]) {
                    largest = l;
                }

                // If right child is larger than largest so far
                if (r < n && arr[r] > arr[largest]) {
                    largest = r;
                }

                // If largest is not root
                if (largest != i) {
                    int temp = arr[i]; // Swap
                    arr[i] = arr[largest];
                    arr[largest] = temp;

                    // Recursively heapify the affected sub-tree
                    Heapify(arr, n, largest);
                }
            }

            // Main function to do heap sort
            static void HeapSortArray(int[] arr) {
                int n = arr.Length;

                // Build heap (rearrange array)
                for (int i = n / 2 - 1; i >= 0; i--) {
                    Heapify(arr, n, i);
                }

                // One by one extract an element from heap
                for (int i = n - 1; i > 0; i--) {
                
                    // Move current root to end
                    int temp = arr[0]; 
                    arr[0] = arr[i];
                    arr[i] = temp;

                    // Call max heapify on the reduced heap
                    Heapify(arr, i, 0);
                }
            }

            // A utility function to print array of size n
            static void PrintArray(int[] arr) {
                foreach (int value in arr) {
                    Console.Write(value + " ");
                }
                Console.WriteLine();
            }

            // Driver's code
            public static void Main(string[] args) {
                int[] arr = {9, 4, 3, 8, 10, 2, 5};
                HeapSortArray(arr);
                Console.WriteLine("Sorted array is ");
                PrintArray(arr);
            }
        }
        `,
    merge:
        `
        using System;

        class GfG {

            // Merges two subarrays of arr[].
            // First subarray is arr[l..m]
            // Second subarray is arr[m+1..r]
            static void merge(int[] arr, int l, int m, int r){
                
                // Find sizes of two
                // subarrays to be merged
                int n1 = m - l + 1;
                int n2 = r - m;

                // Create temp arrays
                int[] L = new int[n1];
                int[] R = new int[n2];
                int i, j;

                // Copy data to temp arrays
                for (i = 0; i < n1; ++i)
                    L[i] = arr[l + i];
                for (j = 0; j < n2; ++j)
                    R[j] = arr[m + 1 + j];

                // Merge the temp arrays

                // Initial indexes of first
                // and second subarrays
                i = 0;
                j = 0;

                // Initial index of merged
                // subarray array
                int k = l;
                while (i < n1 && j < n2) {
                    if (L[i] <= R[j]) {
                        arr[k] = L[i];
                        i++;
                    }
                    else {
                        arr[k] = R[j];
                        j++;
                    }
                    k++;
                }

                // Copy remaining elements
                // of L[] if any
                while (i < n1) {
                    arr[k] = L[i];
                    i++;
                    k++;
                }

                // Copy remaining elements
                // of R[] if any
                while (j < n2) {
                    arr[k] = R[j];
                    j++;
                    k++;
                }
            }

            // Main function that sorts arr[l..r] using merge()
            static void mergeSort(int[] arr, int l, int r){
                
                if (l < r) {

                    // Find the middle point
                    int m = l + (r - l) / 2;

                    // Sort first and second halves
                    mergeSort(arr, l, m);
                    mergeSort(arr, m + 1, r);

                    // Merge the sorted halves
                    merge(arr, l, m, r);
                }
            }

            // Driver code
            public static void Main(String[] args){
                
                int[] arr = {38, 27, 43, 10};
                mergeSort(arr, 0, arr.Length - 1);
                int n = arr.Length;
                for (int i = 0; i < n; ++i)
                    Console.Write(arr[i] + " ");
                Console.WriteLine();
            }
        }
        `,
    selection:
        `
// C# program for implementation
// of Selection Sort
using System;

class GfG {

    static void selectionSort(int[] arr){
        int n = arr.Length;
        for (int i = 0; i < n - 1; i++) {

            // Assume the current position holds
            // the minimum element
            int min_idx = i;

            // Iterate through the unsorted portion
            // to find the actual minimum
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[min_idx]) {

                    // Update min_idx if a smaller element
                    // is found
                    min_idx = j;
                }
            }

           // Move minimum element to its
           // correct position
           int temp = arr[i];
           arr[i] = arr[min_idx];
           arr[min_idx] = temp;         
        }
    }

    static void printArray(int[] arr){
        foreach(int val in arr){
            Console.Write(val + " ");
        }
        Console.WriteLine();
    }

    public static void Main(){
        int[] arr = { 64, 25, 12, 22, 11 };

        Console.Write("Original array: ");
        printArray(arr);

        selectionSort(arr);

        Console.Write("Sorted array: ");
        printArray(arr);
    }
}
        `,
    insertion:
        `
// C# program for implementation of Insertion Sort
using System;

class InsertionSort {
    /* Function to sort array using insertion sort */
    void sort(int[] arr) {
        int n = arr.Length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;

            /* Move elements of arr[0..i-1], that are
               greater than key, to one position ahead
               of their current position */
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    /* A utility function to print array of size n */
    static void printArray(int[] arr) {
        int n = arr.Length;
        for (int i = 0; i < n; ++i)
            Console.Write(arr[i] + " ");

        Console.WriteLine();
    }

    // Driver method
    public static void Main() {
        int[] arr = { 12, 11, 13, 5, 6 };

        InsertionSort ob = new InsertionSort();
        ob.sort(arr);

        printArray(arr);
    }
}

/* This code is contributed by Hritik Shah. */
        `,
    bubble:
        `
// Optimized C# implementation of Bubble sort
using System;

class GFG {
  
    // An optimized version of Bubble Sort
    static void bubbleSort(int[] arr, int n){
        int i, j, temp;
        bool swapped;
        for (i = 0; i < n - 1; i++) {
            swapped = false;
            for (j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    
                    // Swap arr[j] and arr[j+1]
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }

            // If no two elements were
            // swapped by inner loop, then break
            if (swapped == false)
                break;
        }
    }

    // Function to print an array
    static void printArray(int[] arr, int size){
        int i;
        for (i = 0; i < size; i++)
            Console.Write(arr[i] + " ");
        Console.WriteLine();
    }

    // Driver method
    public static void Main(){
        int[] arr = { 64, 34, 25, 12, 22, 11, 90 };
        int n = arr.Length;
        bubbleSort(arr, n);
        Console.WriteLine("Sorted array:");
        printArray(arr, n);
    }
}
        `,
    counting:
        `
using System;
using System.Collections.Generic;

class GfG {
    public static List<int> countsort(int[] arr) {
        int n = arr.Length;

        // find the maximum element
        int maxval = 0;
        for (int i = 0; i < n; i++)
            maxval = Math.Max(maxval, arr[i]);

        // create and initialize count array
        int[] count = new int[maxval + 1];

        // count frequency of each element
        for (int i = 0; i < n; i++)
            count[arr[i]]++;

        // compute prefix sum
        for (int i = 1; i <= maxval; i++)
            count[i] += count[i - 1];

        // build output array
        int[] ans = new int[n];
        for (int i = n - 1; i >= 0; i--) {
            int val = arr[i];
            ans[count[val] - 1] = val;
            count[val]--;
        }

        // convert to List<int>
        List<int> result = new List<int>();
        foreach (int x in ans)
            result.Add(x);

        return result;
    }

    static void Main() {
        int[] arr = {2,5,3,0,2,3,0,3};
        List<int> sorted = countsort(arr);

        foreach (int x in sorted)
            Console.Write(x + " ");
    }
}
        `
}

export const Java = {
    quick:
        `
import java.util.Arrays;

class GfG {

    // partition function
    static int partition(int[] arr, int low, int high) {
        
        // choose the pivot
        int pivot = arr[high];
        
        // index of smaller element and indicates 
        // the right position of pivot found so far
        int i = low - 1;

        // traverse arr[low..high] and move all smaller
        // elements to the left side. Elements from low to 
        // i are smaller after every iteration
        for (int j = low; j <= high - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        
        // Move pivot after smaller elements and
        // return its position
        swap(arr, i + 1, high);  
        return i + 1;
    }

    // swap function
    static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // the QuickSort function implementation
    static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            
            // pi is the partition return index of pivot
            int pi = partition(arr, low, high);

            // recursion calls for smaller elements
            // and greater or equals elements
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        int n = arr.length;
      
        quickSort(arr, 0, n - 1);
        
        for (int val : arr) {
            System.out.print(val + " ");  
        }
    }
}
        `,
    heap:
        `
        #include <stdio.h>

        // To heapify a subtree rooted with node i
        // which is an index in arr[].
        void heapify(int arr[], int n, int i) {

            // Initialize largest as root
            int largest = i; 

            // left index = 2*i + 1
            int l = 2 * i + 1; 

            // right index = 2*i + 2
            int r = 2 * i + 2;

            // If left child is larger than root
            if (l < n && arr[l] > arr[largest]) {
                largest = l;
            }

            // If right child is larger than largest so far
            if (r < n && arr[r] > arr[largest]) {
                largest = r;
            }

            // If largest is not root
            if (largest != i) {
                int temp = arr[i];
                arr[i] = arr[largest];
                arr[largest] = temp;

                // Recursively heapify the affected sub-tree
                heapify(arr, n, largest);
            }
        }

        // Main function to do heap sort
        void heapSort(int arr[], int n) {

            // Build heap (rearrange array)
            for (int i = n / 2 - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }

            // One by one extract an element from heap
            for (int i = n - 1; i > 0; i--) {

                // Move current root to end
                int temp = arr[0]; 
                arr[0] = arr[i];
                arr[i] = temp;

                // Call max heapify on the reduced heap
                heapify(arr, i, 0);
            }
        }

        // A utility function to print array of size n
        void printArray(int arr[], int n) {
            for (int i = 0; i < n; i++) {
                printf("%d ", arr[i]);
            }
            printf("\n");
        }

        // Driver's code
        int main() {
            int arr[] = {9, 4, 3, 8, 10, 2, 5}; 
            int n = sizeof(arr) / sizeof(arr[0]);

            heapSort(arr, n);

            printf("Sorted array is \n");
            printArray(arr, n);
            return 0;
        }
        `,
    merge:
        `
        import java.io.*;

        class GfG {

            // Merges two subarrays of arr[].
            // First subarray is arr[l..m]
            // Second subarray is arr[m+1..r]
            static void merge(int arr[], int l, int m, int r){
                
                // Find sizes of two subarrays to be merged
                int n1 = m - l + 1;
                int n2 = r - m;

                // Create temp arrays
                int L[] = new int[n1];
                int R[] = new int[n2];

                // Copy data to temp arrays
                for (int i = 0; i < n1; ++i)
                    L[i] = arr[l + i];
                for (int j = 0; j < n2; ++j)
                    R[j] = arr[m + 1 + j];

                // Merge the temp arrays

                // Initial indices of first and second subarrays
                int i = 0, j = 0;

                // Initial index of merged subarray array
                int k = l;
                while (i < n1 && j < n2) {
                    if (L[i] <= R[j]) {
                        arr[k] = L[i];
                        i++;
                    }
                    else {
                        arr[k] = R[j];
                        j++;
                    }
                    k++;
                }

                // Copy remaining elements of L[] if any
                while (i < n1) {
                    arr[k] = L[i];
                    i++;
                    k++;
                }

                // Copy remaining elements of R[] if any
                while (j < n2) {
                    arr[k] = R[j];
                    j++;
                    k++;
                }
            }

            // Main function that sorts arr[l..r] using
            // merge()
            static void mergeSort(int arr[], int l, int r){
                
                if (l < r) {

                    // Find the middle point
                    int m = l + (r - l) / 2;

                    // Sort first and second halves
                    mergeSort(arr, l, m);
                    mergeSort(arr, m + 1, r);

                    // Merge the sorted halves
                    merge(arr, l, m, r);
                }
            }

            // Driver code
            public static void main(String args[]){
                
                int arr[] = {38, 27, 43, 10};
                
                mergeSort(arr, 0, arr.length - 1);
                
                int n = arr.length;
                for (int i = 0; i < n; ++i)
                    System.out.print(arr[i] + " ");
                System.out.println();
            }
        }
        `,
    selection:
        `
// Java program for implementation of Selection Sort
import java.util.Arrays;

class GfG {

    static void selectionSort(int[] arr){
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
          
            // Assume the current position holds
            // the minimum element
            int min_idx = i;

            // Iterate through the unsorted portion
            // to find the actual minimum
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[min_idx]) {
                  
                    // Update min_idx if a smaller element
                    // is found
                    min_idx = j;
                }
            }

            // Move minimum element to its
            // correct position
            int temp = arr[i];
            arr[i] = arr[min_idx];
            arr[min_idx] = temp;           
        }
    }

    static void printArray(int[] arr){
        for (int val : arr) {
            System.out.print(val + " ");
        }
        System.out.println();
    }
  
    public static void main(String[] args){
        int[] arr = { 64, 25, 12, 22, 11 };

        System.out.print("Original array: ");
        printArray(arr);

        selectionSort(arr);

        System.out.print("Sorted array: ");
        printArray(arr);
    }
}
        `,
    insertion:
        `
// Java program for implementation of Insertion Sort
public class InsertionSort {
    /* Function to sort array using insertion sort */
    void sort(int arr[])
    {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;

            /* Move elements of arr[0..i-1], that are
               greater than key, to one position ahead
               of their current position */
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    /* A utility function to print array of size n */
    static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");

        System.out.println();
    }

    // Driver method
    public static void main(String args[])
    {
        int arr[] = { 12, 11, 13, 5, 6 };

        InsertionSort ob = new InsertionSort();
        ob.sort(arr);

        printArray(arr);
    }
}

/* This code is contributed by Hritik Shah. */
        `,
    bubble:
        `
// Optimized java implementation of Bubble sort
import java.io.*;

class GFG {
    
    // An optimized version of Bubble Sort
    static void bubbleSort(int arr[], int n){
        int i, j, temp;
        boolean swapped;
        for (i = 0; i < n - 1; i++) {
            swapped = false;
            for (j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    
                    // Swap arr[j] and arr[j+1]
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }

            // If no two elements were
            // swapped by inner loop, then break
            if (swapped == false)
                break;
        }
    }

    // Function to print an array
    static void printArray(int arr[], int size){
        int i;
        for (i = 0; i < size; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    // Driver program
    public static void main(String args[]){
        int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
        int n = arr.length;
        bubbleSort(arr, n);
        System.out.println("Sorted array: ");
        printArray(arr, n);
    }
}
        `,
    counting:
        `
import java.util.ArrayList;

class GfG {
    public static ArrayList<Integer> countsort(int arr[]) {
        int n = arr.length;

        // find the maximum element
        int maxval = 0;
        for (int i = 0; i < n; i++)
            if (arr[i] > maxval) maxval = arr[i];

        // create and initialize count array
        int[] count = new int[maxval + 1];

        // count frequency of each element
        for (int i = 0; i < n; i++)
            count[arr[i]]++;

        // compute prefix sum
        for (int i = 1; i <= maxval; i++)
            count[i] += count[i - 1];

        // build output array
        int[] ans = new int[n];
        for (int i = n - 1; i >= 0; i--) {
            ans[count[arr[i]] - 1] = arr[i];
            count[arr[i]]--;
        }

        // convert to ArrayList
        ArrayList<Integer> result = new ArrayList<>();
        for (int x : ans)
            result.add(x);

        return result;
    }

    public static void main(String[] args) {
        int arr[] = {2,5,3,0,2,3,0,3};
        ArrayList<Integer> sorted = countsort(arr);

        for (int x : sorted)
            System.out.print(x + " ");
    }
}
        `
}

export const Js = {
    quick:
        `
// partition function
function partition(arr, low, high)
{

    // choose the pivot
    let pivot = arr[high];

    // index of smaller element and indicates
    // the right position of pivot found so far
    let i = low - 1;

    // traverse arr[low..high] and move all smaller
    // elements to the left side. Elements from low to
    // i are smaller after every iteration
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    // move pivot after smaller elements and
    // return its position
    swap(arr, i + 1, high);
    return i + 1;
}

// swap function
function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// the QuickSort function implementation
function quickSort(arr, low, high)
{
    if (low < high) {

        // pi is the partition return index of pivot
        let pi = partition(arr, low, high);

        // recursion calls for smaller elements
        // and greater or equals elements
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}


// Driver Code
let arr = [ 10, 7, 8, 9, 1, 5 ];
let n = arr.length;

// call QuickSort on the entire array
quickSort(arr, 0, n - 1);
for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i] + " ");
}
        `,
    heap:
        `
        // To heapify a subtree rooted with node i
        // which is an index in arr[].
        function heapify(arr, n, i) {

            // Initialize largest as root
            let largest = i;
            
            // left index = 2*i + 1
            let l = 2 * i + 1; 
            
            // right index = 2*i + 2
            let r = 2 * i + 2; 

            // If left child is larger than root
            if (l < n && arr[l] > arr[largest]) {
                largest = l;
            }

            // If right child is larger than largest so far
            if (r < n && arr[r] > arr[largest]) {
                largest = r;
            }

            // If largest is not root
            if (largest !== i) {
                let temp = arr[i]; // Swap
                arr[i] = arr[largest];
                arr[largest] = temp;

                // Recursively heapify the affected sub-tree
                heapify(arr, n, largest);
            }
        }

        // Main function to do heap sort
        function heapSort(arr) {
            let n = arr.length;

            // Build heap (rearrange array)
            for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }

            // One by one extract an element from heap
            for (let i = n - 1; i > 0; i--) {
            
                // Move current root to end
                let temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;

                // Call max heapify on the reduced heap
                heapify(arr, i, 0);
            }
        }

        // A utility function to print array of size n
        function printArray(arr) {
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i] + " ");
            }
            console.log();
        }

        // Driver's code
        let arr = [9, 4, 3, 8, 10, 2, 5];
        heapSort(arr);
        console.log("Sorted array is ");
        printArray(arr);
        `,
    merge:
        `
        function merge(arr, left, mid, right) {
        const n1 = mid - left + 1;
        const n2 = right - mid;

        // Create temp arrays
        const L = new Array(n1);
        const R = new Array(n2);

        // Copy data to temp arrays L[] and R[]
        for (let i = 0; i < n1; i++)
            L[i] = arr[left + i];
        for (let j = 0; j < n2; j++)
            R[j] = arr[mid + 1 + j];

        let i = 0, j = 0;
        let k = left;

        // Merge the temp arrays back into arr[left..right]
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy the remaining elements of L[], if there are any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        // Copy the remaining elements of R[], if there are any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    function mergeSort(arr, left, right) {
        if (left >= right)
            return;

        const mid = Math.floor(left + (right - left) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }


    // Driver code
    const arr = [38, 27, 43, 10];
    mergeSort(arr, 0, arr.length - 1);
    console.log(arr.join(" "));
        `,
    selection:
        `
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
    
        // Assume the current position holds
        // the minimum element
        let min_idx = i;
        
        // Iterate through the unsorted portion
        // to find the actual minimum
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
            
                // Update min_idx if a smaller element is found
                min_idx = j;
            }
        }
        
        // Move minimum element to its
        // correct position
        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
}

function printArray(arr) {
    for (let val of arr) {
        process.stdout.write(val + " ");
    }
    console.log();
}

// Driver function 
const arr = [64, 25, 12, 22, 11];

console.log("Original array: ");
printArray(arr);

selectionSort(arr);

console.log("Sorted array: ");
printArray(arr);
        `,
    insertion:
        `
// Javascript program for insertion sort 

// Function to sort array using insertion sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

// A utility function to print array of size n
function printArray(arr) {
    console.log(arr.join(" "));
}

// Driver method
let arr = [12, 11, 13, 5, 6];

insertionSort(arr);
printArray(arr);

// This code is contributed by Hritik Shah.
        `,
    bubble:
        `
// Optimized javaScript implementation
// of Bubble sort
function bubbleSort(arr, n){
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++){
        swapped = false;
        for (j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }
}

// Function to print an array 
function printArray(arr, size){
  var i;
  for (i = 0; i < size; i++)
      console.log(arr[i] + " ");
}

// Driver program
var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
var n = arr.length;
bubbleSort(arr, n);
console.log("Sorted array: ");
printArray(arr, n);
        `,
    counting:
        `
class GfG {
    static countsort(arr) {
        let n = arr.length;

        // find the maximum element
        let maxval = Math.max(...arr);

        // create and initialize count array
        let count = Array(maxval + 1).fill(0);

        // count frequency of each element
        for (let i = 0; i < n; i++)
            count[arr[i]]++;

        // compute prefix sum
        for (let i = 1; i <= maxval; i++)
            count[i] += count[i - 1];

        // build output array
        let ans = Array(n);
        for (let i = n - 1; i >= 0; i--) {
            let val = arr[i];
            ans[count[val] - 1] = val;
            count[val]--;
        }

        return ans;
    }
}

// Driver code
let arr = [2,5,3,0,2,3,0,3];
let sorted = GfG.countsort(arr);
console.log(...sorted);
        `
}

export const Ts = {
    quick:
        `
// partition function
function partition(arr, low, high)
{

    // choose the pivot
    let pivot = arr[high];

    // index of smaller element and indicates
    // the right position of pivot found so far
    let i = low - 1;

    // traverse arr[low..high] and move all smaller
    // elements to the left side. Elements from low to
    // i are smaller after every iteration
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    // move pivot after smaller elements and
    // return its position
    swap(arr, i + 1, high);
    return i + 1;
}

// swap function
function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// the QuickSort function implementation
function quickSort(arr, low, high)
{
    if (low < high) {

        // pi is the partition return index of pivot
        let pi = partition(arr, low, high);

        // recursion calls for smaller elements
        // and greater or equals elements
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}


// Driver Code
let arr = [ 10, 7, 8, 9, 1, 5 ];
let n = arr.length;

// call QuickSort on the entire array
quickSort(arr, 0, n - 1);
for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i] + " ");
}
        `,
    heap:
        `
        // To heapify a subtree rooted with node i
        // which is an index in arr[].
        function heapify(arr, n, i) {

            // Initialize largest as root
            let largest = i;
            
            // left index = 2*i + 1
            let l = 2 * i + 1; 
            
            // right index = 2*i + 2
            let r = 2 * i + 2; 

            // If left child is larger than root
            if (l < n && arr[l] > arr[largest]) {
                largest = l;
            }

            // If right child is larger than largest so far
            if (r < n && arr[r] > arr[largest]) {
                largest = r;
            }

            // If largest is not root
            if (largest !== i) {
                let temp = arr[i]; // Swap
                arr[i] = arr[largest];
                arr[largest] = temp;

                // Recursively heapify the affected sub-tree
                heapify(arr, n, largest);
            }
        }

        // Main function to do heap sort
        function heapSort(arr) {
            let n = arr.length;

            // Build heap (rearrange array)
            for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }

            // One by one extract an element from heap
            for (let i = n - 1; i > 0; i--) {
            
                // Move current root to end
                let temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;

                // Call max heapify on the reduced heap
                heapify(arr, i, 0);
            }
        }

        // A utility function to print array of size n
        function printArray(arr) {
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i] + " ");
            }
            console.log();
        }

        // Driver's code
        let arr = [9, 4, 3, 8, 10, 2, 5];
        heapSort(arr);
        console.log("Sorted array is ");
        printArray(arr);
        `,
    merge:
        `
        function merge(arr, left, mid, right) {
        const n1 = mid - left + 1;
        const n2 = right - mid;

        // Create temp arrays
        const L = new Array(n1);
        const R = new Array(n2);

        // Copy data to temp arrays L[] and R[]
        for (let i = 0; i < n1; i++)
            L[i] = arr[left + i];
        for (let j = 0; j < n2; j++)
            R[j] = arr[mid + 1 + j];

        let i = 0, j = 0;
        let k = left;

        // Merge the temp arrays back into arr[left..right]
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy the remaining elements of L[], if there are any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        // Copy the remaining elements of R[], if there are any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    function mergeSort(arr, left, right) {
        if (left >= right)
            return;

        const mid = Math.floor(left + (right - left) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }


    // Driver code
    const arr = [38, 27, 43, 10];
    mergeSort(arr, 0, arr.length - 1);
    console.log(arr.join(" "));
        `,
    selection:
        `
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
    
        // Assume the current position holds
        // the minimum element
        let min_idx = i;
        
        // Iterate through the unsorted portion
        // to find the actual minimum
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
            
                // Update min_idx if a smaller element is found
                min_idx = j;
            }
        }
        
        // Move minimum element to its
        // correct position
        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
}

function printArray(arr) {
    for (let val of arr) {
        process.stdout.write(val + " ");
    }
    console.log();
}

// Driver function 
const arr = [64, 25, 12, 22, 11];

console.log("Original array: ");
printArray(arr);

selectionSort(arr);

console.log("Sorted array: ");
printArray(arr);
        `,
    insertion:
        `
// Javascript program for insertion sort 

// Function to sort array using insertion sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

// A utility function to print array of size n
function printArray(arr) {
    console.log(arr.join(" "));
}

// Driver method
let arr = [12, 11, 13, 5, 6];

insertionSort(arr);
printArray(arr);

// This code is contributed by Hritik Shah.
        `,
    bubble:
        `
// Optimized javaScript implementation
// of Bubble sort
function bubbleSort(arr, n){
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++){
        swapped = false;
        for (j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }
}

// Function to print an array 
function printArray(arr, size){
  var i;
  for (i = 0; i < size; i++)
      console.log(arr[i] + " ");
}

// Driver program
var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
var n = arr.length;
bubbleSort(arr, n);
console.log("Sorted array: ");
printArray(arr, n);
        `,
    counting:
        `
class GfG {
    static countsort(arr) {
        let n = arr.length;

        // find the maximum element
        let maxval = Math.max(...arr);

        // create and initialize count array
        let count = Array(maxval + 1).fill(0);

        // count frequency of each element
        for (let i = 0; i < n; i++)
            count[arr[i]]++;

        // compute prefix sum
        for (let i = 1; i <= maxval; i++)
            count[i] += count[i - 1];

        // build output array
        let ans = Array(n);
        for (let i = n - 1; i >= 0; i--) {
            let val = arr[i];
            ans[count[val] - 1] = val;
            count[val]--;
        }

        return ans;
    }
}

// Driver code
let arr = [2,5,3,0,2,3,0,3];
let sorted = GfG.countsort(arr);
console.log(...sorted);
        `
}

export const PHP = {
    quick:
        `
<?php

function quickSort($array) {
    $length = count($array);

    if ($length <= 1) {
        return $array;
    } else {
        $pivot = $array[0];
        $left = $right = array();

        for ($i = 1; $i < $length; $i++) {
            if ($array[$i] < $pivot) {
                $left[] = $array[$i];
            } else {
                $right[] = $array[$i];
            }
        }

        return array_merge(
            quickSort($left), 
            array($pivot), 
            quickSort($right)
        );
    }
}

// Driver code
$array = array(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5);
$sortedArray = quickSort($array);

echo "Original Array: " . implode(", ", $array) . "\n";
echo "Sorted Array: " . implode(", ", $sortedArray);

?>
        `,
    heap:
        `
        <?php

        // To heapify a subtree rooted with node i
        // which is an index in arr[].
        function heapify(&$arr, $n, $i) {
        
            // Initialize largest as root
            $largest = $i; 
        
            // left index = 2*i + 1
            $l = 2 * $i + 1;
        
            // right index = 2*i + 2
            $r = 2 * $i + 2; 

            // If left child is larger than root
            if ($l < $n && $arr[$l] > $arr[$largest]) {
                $largest = $l;
            }

            // If right child is larger than largest so far
            if ($r < $n && $arr[$r] > $arr[$largest]) {
                $largest = $r;
            }

            // If largest is not root
            if ($largest != $i) {
                $temp = $arr[$i]; // Swap
                $arr[$i] = $arr[$largest];
                $arr[$largest] = $temp;

                // Recursively heapify the affected sub-tree
                heapify($arr, $n, $largest);
            }
        }

        // Main function to do heap sort
        function heapSort(&$arr) {
            $n = count($arr);

            // Build heap (rearrange array)
            for ($i = intval($n / 2) - 1; $i >= 0; $i--) {
                heapify($arr, $n, $i);
            }

            // One by one extract an element from heap
            for ($i = $n - 1; $i > 0; $i--) {
            
                // Move current root to end
                $temp = $arr[0]; 
                $arr[0] = $arr[$i];
                $arr[$i] = $temp;

                // Call max heapify on the reduced heap
                heapify($arr, $i, 0);
            }
        }

        // A utility function to print array of size n
        function printArray($arr) {
            foreach ($arr as $value) {
                echo $value . " ";
            }
            echo "\n";
        }

        // Driver's code
        $arr = [9, 4, 3, 8, 10, 2, 5];
        heapSort($arr);
        echo "Sorted array is:\n";
        printArray($arr);
        ?>
        `,
    merge:
        `
<?php

// Function to merge two subarrays
function merge(&$arr, $left, $middle, $right) {
    
    $leftArrayLength = $middle - $left + 1;
    $rightArrayLength = $right - $middle;

    // Create temporary arrays
    $leftArray = array_slice($arr, $left, $leftArrayLength);
    $rightArray = array_slice($arr, $middle + 1, $rightArrayLength);

    // Merge the temporary arrays
    // back into the main array
    $i = 0;
    $j = 0;
    $k = $left;
    
    while ($i < $leftArrayLength 
        && $j < $rightArrayLength) {
        if ($leftArray[$i] <= $rightArray[$j]) {
            $arr[$k] = $leftArray[$i];
            $i++;
        } else {
            $arr[$k] = $rightArray[$j];
            $j++;
        }
        $k++;
    }

    // Copy any remaining elements
    // of the left array
    while ($i < $leftArrayLength) {
        $arr[$k] = $leftArray[$i];
        $i++;
        $k++;
    }

    // Copy any remaining elements
    // of the right array
    while ($j < $rightArrayLength) {
        $arr[$k] = $rightArray[$j];
        $j++;
        $k++;
    }
}

// Function to perform merge sort
function mergeSort(&$arr, $left, $right) {
    if ($left < $right) {
        
        // Find the middle point
        $middle = $left + (int)(($right - $left) / 2);

        // Sort the first and second halves
        mergeSort($arr, $left, $middle);
        mergeSort($arr, $middle + 1, $right);

        // Merge the sorted halves
        merge($arr, $left, $middle, $right);
    }
}

// Function to print an array
function printArray($arr) {
    foreach ($arr as $value) {
        echo $value . " ";
    }
    echo "\n";
}

// Driver code
$arr = [38, 27, 43, 10, 12, 11, 13, 5, 6, 7];

echo "Given array is: ";
printArray($arr);

mergeSort($arr, 0, count($arr) - 1);

echo "Sorted array is:";
printArray($arr);

?>
        `,
    selection:
        `
<?php

function selectionSort(&$arr) {
    $n = count($arr);
    for ($i = 0; $i < $n - 1; $i++) {
      
        // Assume the current position holds
        // the minimum element
        $min_idx = $i;
        
        // Iterate through the unsorted portion
        // to find the actual minimum
        for ($j = $i + 1; $j < $n; $j++) {
            if ($arr[$j] < $arr[$min_idx]) {
              
                // Update min_idx if a smaller element is found
                $min_idx = $j;
            }
        }
        
        // Move minimum element to its
        // correct position
        $temp = $arr[$i];
        $arr[$i] = $arr[$min_idx];
        $arr[$min_idx] = $temp;
    }
}

function printArray($arr) {
    foreach ($arr as $val) {
        echo $val . " ";
    }
    echo "\n";
}

$arr = [64, 25, 12, 22, 11];

echo "Original array: ";
printArray($arr);

selectionSort($arr);

echo "Sorted array: ";
printArray($arr);

?>
        `,
    insertion:
        `
<?php 
// PHP program for insertion sort

// Function to sort an array using insertion sort
function insertionSort(&$arr, $n)
{
    for ($i = 1; $i < $n; $i++)
    {
        $key = $arr[$i];
        $j = $i - 1;

        // Move elements of arr[0..i-1],
        // that are greater than key, to 
        // one position ahead of their 
        // current position
        while ($j >= 0 && $arr[$j] > $key)
        {
            $arr[$j + 1] = $arr[$j];
            $j = $j - 1;
        }
        
        $arr[$j + 1] = $key;
    }
}

// A utility function to print an array of size n
function printArray(&$arr, $n)
{
    for ($i = 0; $i < $n; $i++)
        echo $arr[$i] . " ";
    echo "\n";
}

// Driver Code
$arr = array(12, 11, 13, 5, 6);
$n = sizeof($arr);
insertionSort($arr, $n);
printArray($arr, $n);

// This code is contributed by Hritik Shah.
?>
        `,
    bubble:
        `
<?php 
// PHP Optimized implementation
// of Bubble sort
function bubbleSort(&$arr)
{
    $n = sizeof($arr);

    // Traverse through all array elements
    for($i = 0; $i < $n; $i++)
    {
        $swapped = False;

        // Last i elements are already
        // in place
        for ($j = 0; $j < $n - $i - 1; $j++)
        {
            
            // Traverse the array from 0 to
            // n-i-1. Swap if the element 
            // found is greater than the
            // next element
            if ($arr[$j] > $arr[$j+1])
            {
                $t = $arr[$j];
                $arr[$j] = $arr[$j+1];
                $arr[$j+1] = $t;
                $swapped = True;
            }
        }

        // If no two elements were swapped
        // by inner loop, then break
        if ($swapped == False)
            break;
    }
}
        
// Driver code
$arr = array(64, 34, 25, 12, 22, 11, 90); 
$len = sizeof($arr);
bubbleSort($arr);

echo "Sorted array: \n";

for($i = 0; $i < $len; $i++)
    echo $arr[$i]." ";
    
// This code is contributed by ChitraNayal.
?>
        `,
    counting:
        `
$ar = array(7, 2, 0, 3, 8, 0, 12, 7, 6, 7);
$count = array();
foreach ($ar as $v) {
    $count[$v] = isset($count[$v]) ? $count[$v] + 1 : 1;
}
$sorted = array();
$min = min($ar);
$max = max($ar);
for ($i=$min; $i<=$max; $i++) {
    if (isset($count[$i])) {
        for ($j=0; $j<$count[$i]; $j++) {
            $sorted[] = $i;
        }
    }
}
        `
}

export const Python = {
    quick:
        `
# partition function
def partition(arr, low, high):
    
    # choose the pivot
    pivot = arr[high]
    
    # index of smaller element and indicates 
    # the right position of pivot found so far
    i = low - 1
    
    # traverse arr[low..high] and move all smaller
    # elements to the left side. Elements from low to 
    # i are smaller after every iteration
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            swap(arr, i, j)
    
    # move pivot after smaller elements and
    # return its position
    swap(arr, i + 1, high)
    return i + 1

# swap function
def swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]

# the QuickSort function implementation
def quickSort(arr, low, high):
    if low < high:
        
        # pi is the partition return index of pivot
        pi = partition(arr, low, high)
        
        # recursion calls for smaller elements
        # and greater or equals elements
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)

if __name__ == "__main__":
    arr = [10, 7, 8, 9, 1, 5]
    n = len(arr)

    quickSort(arr, 0, n - 1)
    
    for val in arr:
        print(val, end=" ")
        `,
    heap:
        `
        # Python program for implementation of heap Sort

        # To heapify a subtree rooted with node i
        # which is an index in arr[].
        def heapify(arr, n, i):
            
            # Initialize largest as root
            largest = i 
            
            #  left index = 2*i + 1
            l = 2 * i + 1 
            
            # right index = 2*i + 2
            r = 2 * i + 2  

            # If left child is larger than root
            if l < n and arr[l] > arr[largest]:
                largest = l

            # If right child is larger than largest so far
            if r < n and arr[r] > arr[largest]:
                largest = r

            # If largest is not root
            if largest != i:
                arr[i], arr[largest] = arr[largest], arr[i]  # Swap

                # Recursively heapify the affected sub-tree
                heapify(arr, n, largest)

        # Main function to do heap sort
        def heapSort(arr):
            
            n = len(arr) 

            # Build heap (rearrange array)
            for i in range(n // 2 - 1, -1, -1):
                heapify(arr, n, i)

            # One by one extract an element from heap
            for i in range(n - 1, 0, -1):
            
                # Move root to end
                arr[0], arr[i] = arr[i], arr[0] 

                # Call max heapify on the reduced heap
                heapify(arr, i, 0)

        def printArray(arr):
            for i in arr:
                print(i, end=" ")
            print()

        # Driver's code
        arr = [9, 4, 3, 8, 10, 2, 5] 
        heapSort(arr)
        print("Sorted array is ")
        printArray(arr)
        `,
    merge:
        `
        def merge(arr, left, mid, right):
        n1 = mid - left + 1
        n2 = right - mid

        # Create temp arrays
        L = [0] * n1
        R = [0] * n2

        # Copy data to temp arrays L[] and R[]
        for i in range(n1):
            L[i] = arr[left + i]
        for j in range(n2):
            R[j] = arr[mid + 1 + j]
            
        i = 0  
        j = 0  
        k = left  

        # Merge the temp arrays back
        # into arr[left..right]
        while i < n1 and j < n2:
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        # Copy the remaining elements of L[],
        # if there are any
        while i < n1:
            arr[k] = L[i]
            i += 1
            k += 1

        # Copy the remaining elements of R[], 
        # if there are any
        while j < n2:
            arr[k] = R[j]
            j += 1
            k += 1

    def mergeSort(arr, left, right):
        if left < right:
            mid = (left + right) // 2

            mergeSort(arr, left, mid)
            mergeSort(arr, mid + 1, right)
            merge(arr, left, mid, right)

    # Driver code
    if __name__ == "__main__":
        arr = [38, 27, 43, 10]
    
        mergeSort(arr, 0, len(arr) - 1)
        for i in arr:
            print(i, end=" ")
        print()
        `,
    selection:
        `
# Python program for implementation of Selection
# Sort

def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
      
        # Assume the current position holds
        # the minimum element
        min_idx = i
        
        # Iterate through the unsorted portion
        # to find the actual minimum
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
              
                # Update min_idx if a smaller element is found
                min_idx = j
        
        # Move minimum element to its
        # correct position
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

def print_array(arr):
    for val in arr:
        print(val, end=" ")
    print()

if __name__ == "__main__":
    arr = [64, 25, 12, 22, 11]
    
    print("Original array: ", end="")
    print_array(arr)
    
    selection_sort(arr)
    
    print("Sorted array: ", end="")
    print_array(arr)
        `,
    insertion:
        `
# Python program for implementation of Insertion Sort

# Function to sort array using insertion sort
def insertionSort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        # Move elements of arr[0..i-1], that are
        # greater than key, to one position ahead
        # of their current position
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

# A utility function to print array of size n
def printArray(arr):
    for i in range(len(arr)):
        print(arr[i], end=" ")
    print()

# Driver method
if __name__ == "__main__":
    arr = [12, 11, 13, 5, 6]
    insertionSort(arr)
    printArray(arr)

    # This code is contributed by Hritik Shah.
        `,
    bubble:
        `
# Optimized Python program for implementation of Bubble Sort
def bubbleSort(arr):
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n):
        swapped = False

        # Last i elements are already in place
        for j in range(0, n-i-1):

            # Traverse the array from 0 to n-i-1
            # Swap if the element found is greater
            # than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if (swapped == False):
            break

# Driver code to test above
if __name__ == "__main__":
    arr = [64, 34, 25, 12, 22, 11, 90]

    bubbleSort(arr)

    print("Sorted array:")
    for i in range(len(arr)):
        print("%d" % arr[i], end=" ")
        `,
    counting:
        `
def countsort(arr):
    n = len(arr)

    # find the maximum element
    maxval = max(arr)

    # create and initialize count array
    count = [0] * (maxval + 1)

    # count frequency of each element
    for num in arr:
        count[num] += 1

    # compute prefix sum
    for i in range(1, maxval + 1):
        count[i] += count[i - 1]

    # build output array
    ans = [0] * n
    for i in range(n - 1, -1, -1):
        val = arr[i]
        ans[count[val] - 1] = val
        count[val] -= 1

    return ans


if __name__ == "__main__":
    arr = [2,5,3,0,2,3,0,3]
    sortedArr = countsort(arr)
    print(*sortedArr)
        `
}
