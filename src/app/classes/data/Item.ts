export class Item {
    name: string;
    price: number;
    workoutGearId: string;
  constructor(name: string, price: number, workoutGearId: string) {
      this.name = name;
      this.price = price;
      this.workoutGearId = workoutGearId;
    }
  }