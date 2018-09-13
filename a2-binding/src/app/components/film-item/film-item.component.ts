import { Film } from './../../shared/models/film.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent {
  @Input() private film : Film;
}