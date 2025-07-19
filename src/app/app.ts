import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductSelection } from "./products/product-selection/product-selection";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductSelection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'acme-product-management';
}
