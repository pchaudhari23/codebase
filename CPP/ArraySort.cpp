#include<iostream>
using namespace std;

/*-----------------------------------Bubble sort-----------------------------------------------------------*/
void Bubble (int arr[], int n)
{
int i, j;
for (i=0; i<n-1; i++)
{
for (j=0; j<n-i-1; j++)
{

if (arr[j] > arr[j+1])
{
int temp = arr[j+1];
arr[j+1] = arr[j];
arr[j] = temp;   
}
    
}
}

}

/*-----------------------------------Insertion sort--------------------------------------------------------*/
void Insertion(int arr[],int n)
{
int i,j,key;
for (i=1; i<n; i++)
{
key=arr[i];
j=i-1;
while (j>=0 && arr[j] > key)
{
arr[j + 1] = arr[j]; 
j = j - 1;  
} 
arr[j + 1] = key;  
}
}

/*-----------------------------------Selection sort--------------------------------------------------------*/
void Swap(int *a,int* b)
{
int temp = *a;
*a = *b;
*b = temp;
}


void Selection(int arr[], int n)
{
int i, j, min_idx;
for (i=0; i<n-1; i++)
{
min_idx=i;

for(j=i+1; j<n; j++)
{
if (arr[j] < arr[min_idx])
min_idx=j;
}

Swap(&arr[min_idx],&arr[i]);

}

}

/*-----------------------------------Merge sort------------------------------------------------------------*/
void Merge (int arr[], int low, int mid, int high)
{
int i,j,k;

int nL = mid-low+1;
int nR = high-mid;

int left[nL], right[nR];

for(i=0; i<nL; i++)
{
    left[i]=arr[low+i];
}

for(j=0; j<nR; j++)
{
    right[j]=arr[mid+1+j];  
}

i=0;
j=0;
k=low;

while (i<nL && j<nR)
{
    if (left[i] <= right[j])
    {
        arr[k]=left[i];
        i++;
    }
    
    else
    {
        arr[k]=right[j];
        j++;
    }
    
    k++;
}

while (i<nL)
{
    arr[k]=left[i];
    i++;
    k++;
    
}

while (j<nR)
{
    arr[k]=right[j];
    j++;
    k++;
}


}

void MergeSort(int arr[], int low, int high)
{
int mid;

if (low<high)
{
    mid = (low+high)/2;
    MergeSort(arr,low, mid);
    MergeSort(arr, mid+1, high);
    Merge(arr, low, mid, high);
}

/*else
return;
*/
}

/*-----------------------------------Quick sort------------------------------------------------------------*/
void swap(int* a, int* b)  
{  
    int t = *a;  
    *a = *b;  
    *b = t;  
}  

int Partition(int arr[], int first, int last)
{
    int pivot = arr[last]; 
    int j = first;
    
    for(int i=first; i<last ;i++)
    {
        if (arr[i] <= pivot)
        {
            swap(&arr[i] , &arr[j]);  
            j++;
        }
    }
    
    swap(&arr[j] , &arr[last]);
    return j;
}


void QuickSort(int arr[], int first, int last)
{
int pIndex;

if (first<last)
{
    pIndex = Partition (arr, first, last);
    QuickSort(arr,first,pIndex-1);
    QuickSort(arr,pIndex+1,last);
}

}

/*-----------------------------------Utility functions-----------------------------------------------------*/
void PrintSortedArray(int arr[], int n)
{

cout<<"The sorted array is: [ ";

for (int i=0; i<n; i++)
{
cout<<arr[i]<<" ";
}

cout<<"]"<<endl;

}

/*-----------------------------------Driver code-----------------------------------------------------------*/

int main()
{
int arr[]= {8,2,1,7,3,5,4,6};
int n = sizeof(arr)/sizeof(arr[0]);

cout<<"The array elements are: [ ";

for (int i=0; i<7; i++)
{
cout<<arr[i]<<" ";
}

cout<<"]"<<endl;

int choice;
while(1)
{
cout<<"----------------------------"<<endl;
cout<<"PROGRAM FOR ARRAY SORT"<<endl;
cout<<"----------------------------"<<endl;
cout<<"1. Bubble sort"<<endl;
cout<<"2. Insertion sort"<<endl;
cout<<"3. Selection sort"<<endl;
cout<<"4. Merge sort"<<endl;
cout<<"5. Quick sort"<<endl;
cout<<"6. Exit"<<endl;
cout<<endl;
cout<<"Enter your choice: "<<endl;

cin>>choice;

switch(choice)
{
case 1:
Bubble(arr,n);
PrintSortedArray(arr,n);
break;

case 2:
Insertion(arr,n);
PrintSortedArray(arr,n);
break;

case 3:
Selection(arr,n);
PrintSortedArray(arr,n);
break;

case 4:
MergeSort(arr,0,n-1);
PrintSortedArray(arr,n);
break;

case 5:
QuickSort(arr,0,n-1);
PrintSortedArray(arr,n);
break;

case 6:
exit(0);

default:
cout<<"Invalid choice"<<endl;
cout<<endl;
break;

}

}

return 0;

}

