import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Sport } from 'src/app/classes/data/Sport';
import {WorkoutGearData} from 'src/app/classes/data/WorkoutGearData';
import { Item } from 'src/app/classes/data/Item';

@Component({
  selector: 'app-workout-gear',
  templateUrl: './workout-gear.page.html',
  styleUrls: ['./workout-gear.page.scss']
})
export class WorkoutGear implements OnInit{

  sport: Sport;
  sportId;
  workoutGear: Array<WorkoutGearData> = [];
  itemsBasic: Array<Item> = [];
  itemsMedium: Array<Item> = [];
  workoutGearLoaded = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(params => {
      this.sportId = params.get('id');
      this.getSportData(this.sportId);
      this.getWorkoutGear();

    });
  }
  ngOnInit() {

  }

  getSportData(sportId: string) {
    // this.sport = new Sport('sport_1', 'Crossfit', 'High Intensity Training');
    // this.itemsBasic.push(new Item('Power Rack', 80, 'wg_abc'), new Item('Olympic Barbell', 50, 'wg_abc'));
    // this.itemsMedium.push(new Item('Power Rack', 80, 'wg_def'), new Item('Olympic Barbell', 50, 'wg_def'), new Item('Gymnastic Rings', 150, 'wg_def'));

  }
  getWorkoutGear() {
    this.workoutGear.push(new WorkoutGearData('wg_abc', 128, 'Beginner', this.itemsBasic, this.sport), new WorkoutGearData('wg_def', 250, 'Intermediate', this.itemsMedium, this.sport));
    this.workoutGearLoaded = true;
    console.log(this.workoutGear);
  }
 

}
