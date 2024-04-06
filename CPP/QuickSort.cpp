#include<iostream>
using namespace std;

void QuickSort(int arr[], int n)
{




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
int arr[7] = {16, 24, 8, 60, 35, 44, 51};
int n=sizeof(arr)/sizeof(arr[0]);

cout<<"The array elements are: [ ";

for (i=0; i<7; i++)
{
cout<<arr[i]<<" ";
}

cout<<"]"<<endl;


QuickSort(arr,n);

PrintSortedArray(arr,n);

return 0;
}
