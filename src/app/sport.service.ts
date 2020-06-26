import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Sport } from './classes/data/Sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  // currentSport = this.socket.fromEvent<Sport>('sport');
  sports = this.socket.fromEvent<Sport[]>('sports');

  constructor(
    private socket: Socket
  ) { }

  getSport(id: string) {
    this.socket.emit('getSport', id);
  }

  newSport(sport) {
    console.log(sport);
    sport.id = this.sportId();
    this.socket.emit('addSport', {sport});
  }

  editSport(sport: Sport) {
    this.socket.emit('editSport', sport);
  }

  private sportId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
