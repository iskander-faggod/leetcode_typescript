function maxProfit(prices) {
    var max_profit = 0;
    var current_min = prices[0];
    for (var i = 1; i < prices.length; i++) {
        var price = prices[i];
        max_profit = Math.max(max_profit, price - current_min);
        current_min = Math.min(current_min, price);
    }
    return max_profit;
}
;
//# sourceMappingURL=max_profit.js.map