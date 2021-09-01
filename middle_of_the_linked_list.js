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
//# sourceMappingURL=middle_of_the_linked_list.js.map