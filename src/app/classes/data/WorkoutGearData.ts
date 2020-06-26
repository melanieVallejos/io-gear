import { Sport } from './Sport';
import { Item } from './Item';


export class WorkoutGearData {
    id: string;
    price: number;
    level: string;
    items: Array<Item>;
    sport: Sport;

  
    constructor(id: string, price: number, level:string, items: Array<Item>, sport: Sport) {
      this.id = id;
      this.price = price;
      this.level = level;
      this.items = items;
      this.sport = sport;
    }
  }
  