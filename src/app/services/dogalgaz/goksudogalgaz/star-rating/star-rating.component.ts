import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() maxRating: number = 5;
  @Input() currentRating: number = 0;
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();

  stars: string[];

  constructor() {
    this.stars = Array(this.maxRating).fill('☆');
  }

  highlightStars(index: number): void {
    this.stars = this.stars.map((star, i) => (i <= index ? '★' : '☆'));
  }

  resetStars(): void {
    this.stars = this.stars.map(() => '☆');
  }

  setRating(index: number): void {
    this.currentRating = index + 1;
    this.ratingClicked.emit(this.currentRating);
  }
}
