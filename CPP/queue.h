#include<iostream>
#include<cstdlib>
using namespace std;

#define SIZE 5
#define INIT -1

class Queue {
	private:
	int arr[SIZE];
	int front;
	int rear;
	public:
	Queue();
	bool isFull();
	bool isEmpty();
	bool add(int ele);
	int del();
	int peek();
};
