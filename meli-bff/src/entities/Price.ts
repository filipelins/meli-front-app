export class Price {
    public readonly currency: string;
    public readonly amount: string;
    public readonly decimals: string;
    
    constructor(props: Price) {
        Object.assign(this, props)
    }
}