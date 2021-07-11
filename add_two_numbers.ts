class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let p1: ListNode = l1;
    let p2: ListNode = l2;
    let a, b, carry: number = 0;
    let result: ListNode = new ListNode(0);
    let currentNode = result;

    while (p1 || p2) {
        a = p1 != null ? p1.val : 0;
        b = p2 != null ? p2.val : 0;

        if (a + b + carry > 9) {
            currentNode.next = new ListNode(a + b + carry - 10)
            currentNode = currentNode.next;
            carry = 1;
        } else {
            currentNode.next = new ListNode(a + b + carry)
            currentNode = currentNode.next
            carry = 0;
        }

        if (p1){
            p1 = p1.next;
        }

        if (p2){
            p2 = p2.next;
        }
    }

    if (carry) currentNode.next = new ListNode(carry)
    return result.next
}