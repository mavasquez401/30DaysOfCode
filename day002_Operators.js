solve = (mealCost, tip, tax) => {
    let tipPercent = (tip * mealCost)/100
    let taxPercent = (tax * mealCost)/100
    let totalCost = (mealCost + tipPercent + taxPercent).toFixed(0)
    console.log(totalCost);
    
    return 
}

solve(100, 15.532, 8.25);