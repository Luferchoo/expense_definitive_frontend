export interface Expense {
    name: string;
    description: string;
    amount: number;
    timestamp: Date;
}

export interface ListExpenses {
    result: Expense[];
}
