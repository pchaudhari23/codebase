#include "stack.h"

Stack::Stack(){
	top=INIT;
}

bool Stack::isFull(){
	return (top == SIZE-1);
}

bool Stack::isEmpty(){
	return (top == -1 );
}

bool Stack::push(int ele){
	if(isFull()){
		cout << "stack is full\n";
		return false;
	}else {
		top++;
		arr[top]=ele;
	}
	return true;
}

int Stack::pop(){
	int temp;
	if(isEmpty()){
		cout << "stack is empty\n";
		return false;
	}else {
		temp = arr[top];
		top--;
	}	
	return temp;	
}

int Stack::peek(){
	int temp;
	if(isEmpty()){
		cout << "stack is empty\n";
		return false;
	}else {
		temp = arr[top];
	}	
	return temp;	
}























