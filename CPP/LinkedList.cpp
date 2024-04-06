#include<iostream>
#include<cstdlib>

using namespace std;

struct node 
{
	int data;
	struct node* link;
};

class List
{
	private:
		struct node* root;    //global variable

	public:
	
		List()
		{
		root = NULL;
		}

//-------------------------------------------------------------------------------------
		bool insertAtBeg(int element)
		{
		struct node *temp;
		temp= new node;
		temp->data = element;
		temp->link = NULL;

		if (root == NULL)
		{
		root=temp;
		}
		else
		{
		temp->link=root; // [right connection]
		root=temp; //[left connection]
		}

			return true;
		}

//-------------------------------------------------------------------------------------				
		bool insertAtEnd(int element)
		{
		struct node* temp;
		temp = new node;
		temp->data = element;
		temp->link = NULL;

		if (root == NULL) //list is empty
		{
		root =temp;
		}
		else
		{
			struct node* p;
			p=root;
			
			while (p ->link != NULL)
			{
				p = p -> link;			
			}
			
			p->link =temp;	
		}

			return true;
		}

//-------------------------------------------------------------------------------------
		bool insertAtPos(int element, int position)
		{
		struct node* temp;
		temp = new node;
		temp->data = element;
		temp->link = NULL;

		struct node* p;
		int i=1;
		int len = length();

		if(position > len)
		{
		cout<<"Invalid location"<<endl;
		cout<<"Currently the list is having "<<len<<" nodes"<<endl;
		return false;
		}

		else if (position == 1)
		{
		insertAtBeg(element);
		return true;
		}

/*		
		else if (position == len+1)  // condition if the position entered is the last
		{
		insertAtEnd(element);
		return true;
		}
*/
		else
		{
		p = root;

		while (i < position-1)        // OR while(++i<position) {p = p->link;} would also work
		{
		p = p->link;
		i++;
		}
        
        
		temp->link = p->link; //[right connection first]
		p->link = temp; //[left connection] 

		}

		return true;
		}

//-------------------------------------------------------------------------------------
		int deleteFromBeg()
		{
		struct node* temp;
		temp = root;
		root = temp->link;
		int result = temp->data;
		delete temp;
		temp->link = NULL;
		return result;

		}

//------------------------------------------------------------------------------------------
		int deleteFromEnd()              //code is same as deleteFromPos see more later
		{
		struct node* p, *q;
		p=root;

		while (p->link != NULL)
		{
		q=p;
		p = p->link;
		}

		int result = p->data;
		q->link = NULL;
		delete p;
		return result;
		}

//-------------------------------------------------------------------------------------
		void deleteFromPos(int position)
		{
		struct node* temp;
        
        int len = length();
		int res;
        
		if (position > length())
		{
		cout<<"Invalid location"<<endl;
		cout<<"Currently the list is having "<<len<<" nodes"<<endl;
		}

		else if (position == 1)
		{
		res = deleteFromBeg();
		cout<< "Item "<<res<<" deleted"<<endl;
		} 
		
		else if (position == len)
		{
		res = deleteFromEnd();
		cout<< "Item "<<res<<" deleted"<<endl;
		}

		else 
		{
			struct node* p = root, *q;
			int i=1;

			while(i< position-1)
			{
				p = p->link;
				i++;
			}
			
			q = p->link;
			p->link = q->link; 
			q->link = NULL;
			int result = q->data;
			delete q;
			cout<< "Item "<<result<<" deleted"<<endl;
		}
		
		}

//-------------------------------------------------------------------------------------
		int length()
		{
			int count = 0;
			struct node* temp;
			temp = root;
			
			while (temp != NULL)
			{
			count ++;
			temp = temp->link;
			}
			
			return count;

		}

//-------------------------------------------------------------------------------------
		void swap(int position)
		{
		struct node* p, *q, *r;
		int i=1;
		p=root;

		while(i< position-1)
		{
		p= p->link;
		i++;
		}

		q= p->link;
		r= q->link;

		q->link = r->link;
		r->link = q;
		p->link = r;

		display();

		}

//-------------------------------------------------------------------------------------
		void sort()
		{
		cout<<"This function is Currently Unavailable.....!!!"<<endl;
		}

		int search(int element)
		{
		cout<<"This function is Currently Unavailable.....!!!"<<endl;
		return 0;
		}

//-------------------------------------------------------------------------------------
		void display()
		{
		struct node* temp;
		temp = root;

		if (temp == NULL)
		{
		 cout<<"List is empty"<<endl;
		}

		else
		{
		
		cout<<"Displaying all the elements"<<endl;
		
		while (temp != NULL)
		{
			cout<< temp->data<< "->" ;
			temp = temp->link;
		}		
			cout<<endl;
		}

		}

//-------------------------------------------------------------------------------------
		void reverse()
		{
		int i, j, k, len;
		int temp;
		struct node *p, *q;
		len= length();

		i=0;
		j=len-1;
		p=q=root;

		while (i<j)
		{
		k=0;
		while(k<j)
		{
		q= q->link;
		k++;
		}

		temp = p->data;
		p->data = q->data;
		q->data = temp;

		i++;
		j--;

		p = p->link;
		q = root;	
		}
		
		display();

		}

};



int main()
{

List sll;

int choice, result, element, position;

while(1)
{
	cout<<"-----------------------------------------"<<endl;
	cout<<"PROGRAM OF SINGLY LINKED LIST FUNCTIONS"<<endl;
	cout<<"-----------------------------------------"<<endl;
	cout<<"1. Insert at begin"<<endl;
	cout<<"2. Insert at end (Append)"<<endl;
	cout<<"3. Insert at position"<<endl;
	cout<<"4. Delete from begin"<<endl;
	cout<<"5. Delete from end"<<endl;
	cout<<"6. Delete from position"<<endl;
	cout<<"7. Find linked list length"<<endl;
	cout<<"8. Swap two nodes"<<endl;
	cout<<"9. Sort the nodes"<<endl;
	cout<<"10. Search an element in the node"<<endl;
	cout<<"11. Display linked list elements"<<endl;
	cout<<"12. Reverse the linked list"<<endl;
	cout<<"13. Exit"<<endl;
	cout<<endl;
	cout<<"Enter your choice: ";

	cin>>choice;

switch(choice)
{
case 1:
cout<<"Enter the element to enter : ";
cin>>element;

if (sll.insertAtBeg(element))
{
cout<<"Insert success"<<endl;
}
break;

case 2:
cout<<"Enter the element to enter : ";
cin>>element;

if (sll.insertAtEnd(element))
{
cout<<"Insert success"<<endl;
}
break;

case 3:
cout<<"Enter the element to enter : ";
cin>>element;
cout<<"Enter the position : ";
cin>>position;


if (sll.insertAtPos(element, position)) 
{
cout<<"Insert success"<<endl;
}
break;

case 4:
result = sll.deleteFromBeg();
cout<< "Item "<<result<<" deleted"<<endl;
break;

case 5:

result = sll.deleteFromEnd();
cout<< "Item "<<result<<" deleted"<<endl;
break;

case 6:
cout<<"Enter the position : ";
cin>>position;

sll.deleteFromPos(position);
break;

case 7:
result = sll.length();
cout<<"The list length is :"<<result<<endl;
break;

case 8:
cout<<"Enter the position to swap:";
cin>>position;
sll.swap(position);
break;

case 9:
sll.sort();
break;

case 10:
cout<<"Enter the element to search : ";
cin>>element;
sll.search(element);
break;

case 11:
sll.display();
break;

case 12:
cout<<"Reversed linked list is: "<<endl;
sll.reverse();
break;

case 13:
exit(0);


default:
cout<<"Enter a valid choice!!!"<<endl;
cout<<endl;
break;

}

}

return 0;
}

