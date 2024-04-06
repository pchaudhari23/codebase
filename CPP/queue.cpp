#include "queue.h"

Queue::Queue(){
	front=INIT;
	rear=INIT;
}
bool Queue::isEmpty(){
	return (front == -1);
}

bool Queue::isFull(){
	return (rear == SIZE-1);
}

bool Queue::add(int ele){
	if(isFull()){
		cout << "queue is full\n";
		return false;
	}else {
		rear++;
		arr[rear]=ele;
		if( front == -1 ){
			front = 0;
		}
		return true;
	}
}

int Queue::del(){
	if(isEmpty()){
		cout << "queue is empty\n";
		return false;
	}else {
		int temp = arr[front];
		arr[front]=0;
		if(front == rear ){
			front=-1;
			rear=-1;
		}else {
			front++;
		}
		return temp;
	}
}

int Queue::peek(){

}




