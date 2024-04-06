#include "queue.h"

int main(){
	Queue ob1;
	int choice, ret, ele;
	while(1) {
	cout << "1--> add  2--> del  3--> peek 4--> exit\n";
	cout << "enter choice=";
	cin >> choice;

	switch(choice){
		case 1:
			cout << "enter ele";
			cin >> ele;
			if(ob1.add(ele)){
				cout << "success\n";
			}
			break;

		case 2:	
			if(ret = ob1.del()){
				cout << "deleted item="<<ret<<endl;
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
