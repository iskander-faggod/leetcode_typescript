var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function addTwoNumbers(l1, l2) {
    var p1 = l1;
    var p2 = l2;
    var a, b, carry = 0;
    var result = new ListNode(0);
    var currentNode = result;
    while (p1 || p2) {
        a = p1 != null ? p1.val : 0;
        b = p2 != null ? p2.val : 0;
        if (a + b + carry > 9) {
            currentNode.next = new ListNode(a + b + carry - 10);
            currentNode = currentNode.next;
            carry = 1;
        }
        else {
            currentNode.next = new ListNode(a + b + carry);
            currentNode = currentNode.next;
            carry = 0;
        }
        if (p1) {
            p1 = p1.next;
        }
        if (p2) {
            p2 = p2.next;
        }
    }
    if (carry)
        currentNode.next = new ListNode(carry);
    return result.next;
}
//# sourceMappingURL=add_two_numbers.js.map