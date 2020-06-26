import { Component, OnInit } from '@angular/core';
import { Sport } from '../classes/data/Sport';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  sports: Observable<Sport[]>;
  constructor(
    private router: Router,
    private sportService: SportService
  ) {
  }
  ngOnInit() {
    this.sports = this.sportService.sports;
    console.log(this.sports);
  }


  // getSports() {
  //   this.sports.push(new Sport('sport_1', 'Crossfit', 'High Intensity Training'), new Sport('sport_2', 'Yoga and Pilates', 'Physical and Mental Discipline'), new Sport('sport_3', 'Functional', 'Function is purpose'))
  // }
 
  goToSportGear(sport: Sport) {
    console.log(sport);
    this.router.navigate(['/home/workout-gear/' + sport.id]);
  }
}
