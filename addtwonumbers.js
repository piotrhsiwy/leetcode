export function ListFromArray(arr){
    console.log(`array is ${arr}, length: ${arr.length}`);
    let prev;
    let next = new ListNode(0, null);
    const head = next;
    for(let i = 0; i < arr.length; i++){
        next.val = arr[i];
        prev = next;
        next = new ListNode(0, null);
        prev.next = next;
    }
    prev.next = null;
    return head;
}

export function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

function displayList(l){
    let i = 0;
    while(l != null){
        console.log(`element ${i}: ${l.val}`); 
        l = l.next;
        i++;
    }
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export var addTwoNumbers = function(l1, l2) {
    let c1 = l1;
    let c2 = l2;
    displayList(c1);
    displayList(c2);
    let prev;
    let next;
    if(!c1){
        if(!c2){
            return new ListNode(0, null);
        }
        return c2;
    } else{
        if(!c2){
            return c1;
        }
        next = new ListNode(0, null);
    }
    console.log(`prev is ${prev}`);
    console.log(`next is ${next}`);
    console.log(`c1 is ${c1.val}, ${c1.next}`);
    console.log(`c2 is ${c2.val}, ${c2.next}`);
    let head = next;
    let carry = 0;
    while(true){
        if(!c1 && !c2){
            console.log('nothing left');
        }
        let sum = c1 ? 
            (c2 ? c1.val+c2.val+carry : c1.val + carry)
            : (c2 ? c2.val+carry : -1)
        if(sum == -1 && carry == 0){
            prev.next = null;
            break;
        } else if(sum == -1 && carry != 0){
            sum = carry;
        }
        carry = 0;
        if(sum >= 10){
            sum = sum-10;
            carry = 1;
        }
        next.val=  sum;
        console.log(`sum is ${sum}`);

        prev = next;
        next = new ListNode(0, null);
        prev.next = next;
        c1 = c1 ? c1.next : c1;
        c2 = c2 ? c2.next : c2;
        console.log(`prev is ${prev}`);
        console.log(`next is ${next}`);
        console.log(`c1 is ${c1}`);
        console.log(`c2 is ${c2}`);
    } 
    displayList(head);
    return head;
};
