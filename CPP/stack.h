#include<iostream>
#include<cstdlib>

using namespace std;

#define SIZE 5
#define INIT -1

class Stack{
	private:
		int arr[SIZE];
		int top;
	public:
		Stack();
		bool push(int ele);
		int pop();
		bool isFull();
		bool isEmpty();
		int peek();
};




