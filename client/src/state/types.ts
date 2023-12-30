export interface ExpensesByCategory {
    salaries: number;
    supplies: number;
    services: number;
}

export interface Month {
    id:string;
    month: string;
    revenue: number;
    expenses: number;

    nonOperatingExpenses: number;
    operatingExpenses: number;
}
export interface Day {
    id:string;
    date: string;
    revenue: number;
    expenses: number;


}

export interface GetKpisResponse {
    id: string;
    _id: string;
    __v: number;
    totalProfit: number;

    totalRevenue: number;
    totalExpenses: number;
    expensesByCategory: ExpensesByCategory[];
    monthlyData: Array<Month>;
    createdAt: string;
    updatedAt: string;
}
export interface GetProductsResponse {
    id: string;
    _id: string;
    __v: number;
    price: number;
    expense: number;
    transactions: number;
    createdAt: string;
    updatedAt: string;

}