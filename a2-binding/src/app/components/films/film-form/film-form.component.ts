import { Film } from './../../../shared/models/film.model';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent{
  filmToCreate = new Film()
  @Output() createFilm : EventEmitter<Film> = new EventEmitter<Film>()

  onClickCreateFilm() {
    this.createFilm.emit(this.filmToCreate)
    this.filmToCreate = new Film();
  }

}
