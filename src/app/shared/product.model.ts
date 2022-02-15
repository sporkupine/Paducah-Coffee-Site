export class Product {
  constructor(
    public name: string,
    public price: number,
    public imagePath: string,
    public favorite?: boolean
  ) {}
}
