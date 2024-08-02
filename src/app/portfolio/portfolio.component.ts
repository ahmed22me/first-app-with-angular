import { Component } from '@angular/core';

interface images{
  image:string
}


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  productlist:images[] = [
    {image: 'assets/images/poert1.png'},
    {image: 'assets/images/port2.png'},
    {image: 'assets/images/port3.png'},
    {image: 'assets/images/poert1.png'},
    {image: 'assets/images/port2.png'},
    {image: 'assets/images/port3.png'},
  ]
}
