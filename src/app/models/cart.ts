
export interface ICart {
    name: string;
    unit_amount: {
        currency_code: 'EUR';
        value: string;
    },
    quantity: number;
}