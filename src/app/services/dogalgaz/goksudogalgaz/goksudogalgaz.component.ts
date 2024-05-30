import { Component } from '@angular/core';

@Component({
  selector: 'app-goksudogalgaz',
  templateUrl: './goksudogalgaz.component.html',
  styleUrl: './goksudogalgaz.component.css'
})
export class GoksudogalgazComponent {
  onRatingClicked(rating: number) {
    console.log(`User selected ${rating} stars.`);
    // You can add more logic here, such as sending the rating to a service or storing it in a variable
  }
}
