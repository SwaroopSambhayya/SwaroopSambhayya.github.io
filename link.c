/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>
struct node{
    int data;
    struct node* link;
};
typedef struct node* NODE;
NODE insert(int item,NODE first){
    NODE temp=(NODE)malloc(sizeof(struct node));
    if(first==  NULL){
        first->data=item;
        first->link=NULL;
        return first;
    }
    temp->data=item;
    temp->link=first;
    return temp;
    
}
void display(NODE first){
    NODE cur;
    cur=first;
    while(cur!=NULL){
        printf("%d",cur->data);
        cur=cur->link;
    }
}

int main()
{
 NODE first=NULL;
 int ch,item;
 while(1){
     printf("Enter 1.insert 2.display");
     scanf("%d",&ch);
     switch(ch){
         case 1:printf("Enter the item\n");
                scanf("%d",&item);
                first=insert(item,first);
                break;
        case 2:display(first);
                break;
        case 3:exit(0);        
     }
 }
 

    return 0;
}
