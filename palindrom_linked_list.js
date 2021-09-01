var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function middleNode(head) {
    var sp = head;
    var fp = head;
    while (fp && fp.next) {
        fp = fp.next.next;
        sp = sp.next;
    }
    return sp;
}
;
function reverseList(head) {
    var prev = null;
    var current = head;
    while (current) {
        var next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
;
function isPalindrome(head) {
    if (!head) {
        return null;
    }
    var middle = middleNode(head);
    var reverse = reverseList(middle);
    while (reverse) {
        if (reverse.val != head.val) {
            return false;
        }
        reverse = reverse.next;
        head = head.next;
    }
    return true;
}
;
//# sourceMappingURL=palindrom_linked_list.js.map