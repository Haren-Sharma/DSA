//
const arr=[7,1,5,3,6,4]

function maxProfit(prices){
    if(prices.length===0 || prices.length===1) return 0
    let min_price=Infinity , max_profit=-Infinity,profit
    for(let i=1;i<prices.length;i++){
        if(prices[i-1]<min_price) min_price=prices[i-1]
        profit=(prices[i]-min_price)<0 ? 0 :prices[i]-min_price
        max_profit=Math.max(profit,max_profit)
    }
    return max_profit
}

console.log(maxProfit(arr))