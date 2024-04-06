#include "stack.h"

int main(){
	Stack ob1;
	int choice, ret, ele;
	while(1) {
	cout << "1--> push  2--> pop  3--> peek 4--> exit\n";
	cout << "enter choice=";
	cin >> choice;

	switch(choice){
		case 1:
			cout << "enter ele";
			cin >> ele;
			if(ob1.push(ele)){
				cout << "success\n";
			}
			break;

		case 2:	
			if(ret = ob1.pop()){
				cout << "poped item="<<ret<<endl;
			}
			break;
		case 3:
			if(ret=ob1.peek()){
				cout << "top item="<<ret<< endl;
			}			
			break;
		case 4:

			exit(0);
	
	}
	}

}
