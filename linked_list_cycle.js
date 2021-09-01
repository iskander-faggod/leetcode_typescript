var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function hasCycle(head) {
    if (!head) {
        return false;
    }
    var slow = head;
    var fast = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            return true;
        }
    }
    return false;
}
;
//# sourceMappingURL=linked_list_cycle.js.map