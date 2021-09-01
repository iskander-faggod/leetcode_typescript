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