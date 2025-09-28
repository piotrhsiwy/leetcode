#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

void ListFree(struct ListNode* l){
    if(l == NULL){
        return;
    }
    while(l->next != NULL){
        struct ListNode* temp = l->next;
        free(l);
        l = temp;
    }
    free(l);
}

struct ListNode* ListPush(struct ListNode* l, int val){
    struct ListNode* newNode = malloc(sizeof(struct ListNode));
    newNode->val = val;
    newNode->next = l;
    return newNode;
}

int ListComp(struct ListNode* l1, struct ListNode* l2){
    if(l1 == NULL || l1 == NULL){
        return 1;
    }
    while(l1->next != NULL && l2->next != NULL){
        if(l1->val != l2->val){
            return 1;
        }
        l1=l1->next;
        l2=l2->next;
    }
    if(l1->next == NULL && l2->next == NULL){
        return 0;
    } else{
        return 1;
    }
}

struct ListNode* ListReverse_rec(struct ListNode* rev, struct ListNode* l){
    if(l->next == NULL){
        return ListPush(rev, l->val);
    }
    return ListPush(ListReverse_rec(rev, l->next), l->val);
}

struct ListNode* ListReverse(struct ListNode* l){
    if(l == NULL){
        return l;
    }
    if(l->next == NULL){
        return ListPush(NULL, l->val);
    }
    return ListReverse_rec(NULL, l);
}

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    if(l1 == NULL || l2 == NULL){
        return NULL;
    }
    int carry = 0;
    struct ListNode* l = NULL;
    while(true){
        int sum = l1->val + l2->val + carry;
        if(sum >= 10){
           carry = 1; 
           sum -= 10;
        } else{
            carry = 0;
        }
        l = ListPush(l, sum);
        l1 = l1->next;
        l2 = l2->next;
        if(l1 == NULL && l2 != NULL){
            if(carry){
                l = ListPush(l, l2->val + carry);
                l2 = l2->next;
            }
            while(l2 != NULL){
                l = ListPush(l, l2->val);
                l2 = l2->next;
            }
            struct ListNode* rev = ListReverse(l);
            ListFree(l);
            return rev;
        } else if(l1 != NULL && l2 == NULL){
            if(carry){
                l = ListPush(l, l1->val + carry);
                l1 = l1->next;
            }
            while(l1 != NULL){
                l = ListPush(l, l1->val);
                l1 = l1->next;
            }
            struct ListNode* rev = ListReverse(l);
            ListFree(l);
            return rev;
        } else if(l1 == NULL && l2 == NULL){
            struct ListNode* rev = ListReverse(l);
            ListFree(l);
            return rev;
        }
    }
}

int main(int argc, char* argv[]){
    struct ListNode* l1 = ListPush(NULL, 3);
    l1 = ListPush(l1, 4);
    l1 = ListPush(l1, 2);
    struct ListNode* l2 = ListPush(NULL, 4);
    l2 = ListPush(l2, 6);
    l2 = ListPush(l2, 5);
    struct ListNode* l3 = ListPush(NULL, 8);
    l3 = ListPush(l3, 0);
    l3 = ListPush(l3, 8);
    struct ListNode* result = addTwoNumbers(l1, l2);
    int ret = ListComp(result, l3);
    ListFree(l1);
    ListFree(l2);
    ListFree(l3);
    ListFree(result);
    return ret; 
}
