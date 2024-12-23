#include<iostream>
using namespace std;

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

void PrintSortedArray(int arr[], int n)
{
cout<< "The sorted array is: [ ";
for (int i=0; i<n; i++)
{
cout<<arr[i]<<" ";
}
cout<<"]"<<endl;
}



int main()
{
int i;
int arr[] = {16, 24, 8, 60, 35, 44, 51};
int n=sizeof(arr)/sizeof(arr[0]);

cout<<"The array elements are: [ ";

for (i=0; i<7; i++)
{
cout<<arr[i]<<" ";
}

cout<<"]"<<endl;


MergeSort(arr,0,n-1);

PrintSortedArray(arr,n);

return 0;
}
