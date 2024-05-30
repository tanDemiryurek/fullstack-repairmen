import { Component } from '@angular/core';

@Component({
  selector: 'app-dogalgaztesisatciustasi',
  templateUrl: './dogalgaztesisatciustasi.component.html',
  styleUrl: './dogalgaztesisatciustasi.component.css'
})
export class DogalgaztesisatciustasiComponent {
  onRatingClicked(rating: number) {
    console.log(`User selected ${rating} stars.`);
    // You can add more logic here, such as sending the rating to a service or storing it in a variable
  }
}
