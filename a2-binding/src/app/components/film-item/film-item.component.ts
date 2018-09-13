import { Film } from './../../shared/models/film.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent {
  @Input() private film : Film;
  @Output() private deleteFilm: EventEmitter<Film> = new EventEmitter<Film>();

  onClickDeleteFilm() {
    this.deleteFilm.emit(this.film)
  }
}
