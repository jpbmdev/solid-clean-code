type Size = "" | "S" | "M" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  toStringBad() {
    if (this.name.length <= 0) throw new Error("name is empty");
    if (this.price <= 0) throw new Error("price is zero");
    if (this.size.length <= 0) throw new Error("size is empty");

    return `${this.name} (${this.price}), ${this.size}`;
  }

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key])).length <= 0)
            throw Error(`${key} is empty`);
          break;
        case "number":
          if (<number>(<unknown>this[key]) <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${key} is not valid`);
      }
    }
    return true;
  }

  toStringGood() {
    if (!this.isProductReady) return;
    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("Blue large Pants", 10, "M");
  console.log(bluePants.toStringGood());
})();
