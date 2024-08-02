import { Component } from '@angular/core';
import { RecommendedComponent } from "../recommended/recommended.component";

interface product{
  pName : string;
  pPrice:number;
  pCat:string;

  pimage:string



}



@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [RecommendedComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {
  productlist:product[] = [
    {pName: 'GENSHIN IMPACT' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(1).jpg'},
    {pName: 'NEVERWINTER' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(2).jpg'},
    {pName: 'DARK ORBIT' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(3).jpg'},
    {pName: 'LOSTARK' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(4).jpg'},

    {pName: 'TAITAN REVENGE' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(5).jpg'},
    {pName: 'DIABLO IMPORTAL' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(6).jpg'},
    {pName: 'FLUFF UNIVERS' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(7).jpg'},
    {pName: 'NEW GENESIS' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(8).jpg'},

    {pName: 'ETERNAL FURY' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(9).jpg'},
    {pName: 'PALIA' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(10).jpg'},
    {pName: 'LEAGON OF ANGELS' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(11).jpg'},
    {pName: 'STAR TREK' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(12).jpg'},

    {pName: 'TAWOER OF FANTASY' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(13).jpg'},
    {pName: 'NOAHS HEART' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(14).jpg'},
    {pName: 'PHANTASY STAR' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(15).jpg'},
    {pName: 'DESTINY' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(16).jpg'},

    {pName: 'DAUNTLESS' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(17).jpg'},
    {pName: 'ALBION' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(18).jpg'},
    {pName: 'BLOU SOUL' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(19).jpg'},
    {pName: 'TRUE' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(20).jpg'},

    {pName: 'GUILD WARS' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(21).jpg'},
    {pName: 'DARKEN SANG' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(22).jpg'},
    {pName: 'RUNE SCAPE' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(23).jpg'},
    {pName: 'KRITIKA ZERO' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(24).jpg'},

    {pName: 'GENSHIN IMPACT' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(25).jpg'},
    {pName: 'NEVERWINTER' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(26).jpg'},
    {pName: 'DARK ORBIT' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(27).jpg'},
    {pName: 'LOSTARK' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(28).jpg'},

    {pName: 'TAITAN REVENGE' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(29).jpg'},
    {pName: 'DIABLO IMPORTAL' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(30).jpg'},
    {pName: 'FLUFF UNIVERS' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(31).jpg'},
    {pName: 'NEW GENESIS' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(32).jpg'},

    {pName: 'ETERNAL FURY' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(33).jpg'},
    {pName: 'PALIA' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(34).jpg'},
    {pName: 'LEAGON OF ANGELS' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(35).jpg'},
    {pName: 'STAR TREK' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(36).jpg'},

    {pName: 'TAWOER OF FANTASY' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(37).jpg'},
    {pName: 'NOAHS HEART' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(38).jpg'},
    {pName: 'PHANTASY STAR' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(39).jpg'},
    {pName: 'DESTINY' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(40).jpg'},

    {pName: 'DAUNTLESS' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(41).jpg'},
    {pName: 'ALBION' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(42).jpg'},
    {pName: 'BLOU SOUL' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(43).jpg'},
    {pName: 'TRUE' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(44).jpg'},

    {pName: 'GUILD WARS' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(45).jpg'},
    {pName: 'DARKEN SANG' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(46).jpg'},
    {pName: 'RUNE SCAPE' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(47).jpg'},
    {pName: 'KRITIKA ZERO' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(48).jpg'},

  ]
}
