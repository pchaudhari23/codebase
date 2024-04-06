#include<iostream>
using namespace std;

/*-----------------------------------Linear search(iterative)----------------------------------------------*/
int Linear(int a[], int n, int number)
{
for (int i=0; i<n; i++)
{
	if (a[i] == number)
	return i;
}
return -1;
}

/*-----------------------------------Linear search(recursive)----------------------------------------------*/
int LinearRecursive(int a[], int index, int number)
{
if (index < 0)
return -1;

if (a[index] == number)
return index;

else 
return LinearRecursive(a, index-1, number);
}

/*-----------------------------------Binary search(iterative)----------------------------------------------*/
void Binary(int a[], int n, int number)         //Binary search algorithm works on sorted arrays only
{
int first = 0;
int last = n-1;
int mid;

while (first <= last)
{
    mid = (first+last)/2;

if (number < a[mid])
{
    last = mid-1;
}

else if (number > a[mid])
{
    first = mid+1;
}
    
else if (number == a[mid])
{
	cout<<"Element found at index : "<<mid<<endl;
	break;
}

    if (first > last)
    cout<<"Element not found!!!"<<endl; 
}   

}


/*-----------------------------------Binary search(recursive)----------------------------------------------*/
int BinaryRecursive(int a[], int first, int  last, int number)     //Binary search algorithm works on sorted arrays only
{
    if (first > last)
    return -1;
 
    int mid = (first + last)/2;
    
    if (number == a[mid])
    return mid;
    
    else if (number < a[mid])
    return BinaryRecursive(a, first, mid-1, number);
    
    else    // (number > a[mid])
    return BinaryRecursive(a, mid+1, last, number);


}

/*-----------------------------------Driver code-----------------------------------------------------------*/
int main()
{
int i, n;

cout<<"Enter the size of array : ";
cin>>n;
int a[n];

cout<<"Enter array elements (enter sorted for binary search):"<<endl;

for (i=0; i<n; i++)
{
cin>>a[i];
}

cout<<"The array elements are: [ ";

for(i=0; i<n; i++)
{
cout<<a[i]<<" ";
}

cout<<"]"<<endl;

int choice, number, index;

while(1)
{
cout<<"----------------------------"<<endl;
cout<<"PROGRAM FOR ARRAY SEARCH"<<endl;
cout<<"----------------------------"<<endl;
cout<<"1. Linear search (iterative)"<<endl;
cout<<"2. Linear search (recursive)"<<endl;
cout<<"3. Binary search (iterative)"<<endl;
cout<<"4. Binary search (recursive)"<<endl;
cout<<"5. Exit"<<endl;
cout<<endl;
cout<<"Enter your choice: ";

cin>>choice;

switch (choice)
{

case 1:
cout<<"Enter the number you want to search: ";
cin>>number;
index = Linear(a,n,number);
(index==-1)?cout<<"Element not found"<<endl : cout<<"Element found at index "<<index<<endl;
break;

case 2:
cout<<"Enter the number you want to search: ";
cin>>number;
index = LinearRecursive(a,n,number);
(index==-1)?cout<<"Element not found"<<endl : cout<<"Element found at index "<<index<<endl;
break;

case 3:
cout<<"Enter the number you want to search: ";
cin>>number;
Binary(a,n,number);
break;

case 4:
cout<<"Enter the number you want to search: ";
cin>>number;
index = BinaryRecursive(a,0,n-1,number);
(index==-1)?cout<<"Element not found"<<endl : cout<<"Element found at index "<<index<<endl;
break;

case 5:
exit(0);

default:
cout<<"Invalid choice"<<endl;
cout<<endl;
break;

}

}

return 0;

}

