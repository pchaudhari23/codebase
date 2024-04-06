#include<iostream>
#include<cstdlib>

using namespace std;

void insert(struct node **p, int ele);
void inOrder(struct node *p );
void preOrder(struct node *p );
void postOrder(struct node *p );
struct node {
	struct node *left;
	int data;
	struct node *right;
};

int main(){
	struct node *root=NULL;
	int ele, choice;
	while(1){
	cout << "1->insert 2->inOrder 3->preOrder\n";
	cout << "4-->postOrder 5->exit\n";
	cout << "enter choice=";
	cin  >> choice;
	switch(choice){
		case 1:
			cout << "enter element=";				   cin >> ele;
			insert(&root, ele);
			break;

		case 2:
			cout << "----inOrder-----\n";
			inOrder(root);
			cout << endl;
			break;			
		case 3:
			cout << "----preOrder-----\n";
			preOrder(root);
			cout << endl;
			break;			

		case 4:
			cout << "----postOrder-----\n";
			postOrder(root);
			cout << endl;
			break;			
		case 5:
			exit(0);
	}
	}
}
void inOrder(struct node *p){
	if(p!=NULL){
		inOrder(p->left);
		cout << p->data << " ";
		inOrder(p->right);
	}

}
void preOrder(struct node *p){
	if(p!=NULL){
		cout << p->data << " ";
		preOrder(p->left);
		preOrder(p->right);
	}

}
void postOrder(struct node *p){
	if(p!=NULL){
		postOrder(p->left);
		postOrder(p->right);
		cout << p->data << " ";
	}
}
void insert(struct node **p, int ele){
	struct node *temp;
	if(*p==NULL)
	{
		temp = new node;
		temp->data =ele;
		temp->left = NULL;
		temp->right = NULL;
		*p=temp;
	}else {
		if(ele < ((*p)->data)){
			insert( &((*p)->left) , ele);
		}else {
			insert( &((*p)->right), ele);	
		}
	}
}





