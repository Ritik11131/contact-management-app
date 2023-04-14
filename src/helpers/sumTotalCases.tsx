export const sumTotalCases = (arr:any) => {
    const monthlyTotals:any = {};
    for (const date in arr) {
        const [month, day, year] = date.split('/');
        const total = arr[date];
        const monthYear = `${month}/${year}`;

        if (!monthlyTotals[monthYear]) {
            monthlyTotals[monthYear] = total;
        } else {
            monthlyTotals[monthYear] += total;
        }
    }
    return monthlyTotals;
}