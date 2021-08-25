function maxProfit(prices: number[]): number {
    let max_profit: number = 0;
    let current_min: number = prices[0];

    for (let i = 1; i < prices.length; i++) {
        let price : number = prices[i]
        max_profit = Math.max(max_profit, price - current_min)
        current_min = Math.min(current_min, price)
    }
    return max_profit;
};