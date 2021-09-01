class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function middleNode(head: ListNode | null): ListNode | null {
    let sp = head;
    let fp = head;

    while (fp && fp.next) {
        fp = fp.next.next;
        sp = sp.next;
    }
    return sp;
};

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    let current = head;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

function isPalindrome(head: ListNode | null): boolean {
    if (!head) {
        return null;
    }

    let middle = middleNode(head);
    let reverse = reverseList(middle);

    while (reverse) {
        if (reverse.val != head.val) {
            return false;
        }
        reverse = reverse.next;
        head = head.next;
    }
    return true;
};