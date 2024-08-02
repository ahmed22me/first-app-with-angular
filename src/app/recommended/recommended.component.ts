import { Component } from '@angular/core';

interface product{
  pName : string;
  pPrice:number;
  pCat:string;
  pimage:string

}

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css'
})
export class RecommendedComponent {
  productlist:product[] = [
    {pName: 'GENSHIN IMPACT' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(49).jpg'},
    {pName: 'NEVERWINTER' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(50).jpg'},
    {pName: 'DARK ORBIT' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(51).jpg'},
    {pName: 'LOSTARK' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(52).jpg'},

    {pName: 'TAITAN REVENGE' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(53).jpg'},
    {pName: 'DIABLO IMPORTAL' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(54).jpg'},
    {pName: 'FLUFF UNIVERS' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(55).jpg'},
    {pName: 'NEW GENESIS' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(56).jpg'},

    {pName: 'ETERNAL FURY' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(57).jpg'},
    {pName: 'PALIA' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(58).jpg'},
    {pName: 'LEAGON OF ANGELS' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(59).jpg'},
    {pName: 'STAR TREK' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(60).jpg'},

    {pName: 'TAWOER OF FANTASY' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(61).jpg'},
    {pName: 'NOAHS HEART' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(62).jpg'},
    {pName: 'PHANTASY STAR' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(63).jpg'},
    {pName: 'DESTINY' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(64).jpg'},

    {pName: 'DAUNTLESS' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(65).jpg'},
    {pName: 'ALBION' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(66).jpg'},
    {pName: 'BLOU SOUL' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(67).jpg'},
    {pName: 'TRUE' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(68).jpg'},

    {pName: 'GUILD WARS' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(69).jpg'},
    {pName: 'DARKEN SANG' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(70).jpg'},
    {pName: 'RUNE SCAPE' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(71).jpg'},
    {pName: 'KRITIKA ZERO' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(72).jpg'},

    {pName: 'GENSHIN IMPACT' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(73).jpg'},
    {pName: 'NEVERWINTER' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(74).jpg'},
    {pName: 'DARK ORBIT' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(75).jpg'},
    {pName: 'LOSTARK' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(76).jpg'},

    {pName: 'TAITAN REVENGE' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(77).jpg'},
    {pName: 'DIABLO IMPORTAL' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(78).jpg'},
    {pName: 'FLUFF UNIVERS' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(79).jpg'},
    {pName: 'NEW GENESIS' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(80).jpg'},

    {pName: 'ETERNAL FURY' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(81).jpg'},
    {pName: 'PALIA' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(82).jpg'},
    {pName: 'LEAGON OF ANGELS' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(83).jpg'},
    {pName: 'STAR TREK' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(84).jpg'},

    {pName: 'TAWOER OF FANTASY' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(85).jpg'},
    {pName: 'NOAHS HEART' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(86).jpg'},
    {pName: 'PHANTASY STAR' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(87).jpg'},
    {pName: 'DESTINY' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(88).jpg'},

    {pName: 'DAUNTLESS' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(89).jpg'},
    {pName: 'ALBION' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(90).jpg'},
    {pName: 'BLOU SOUL' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(91).jpg'},
    {pName: 'TRUE' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(92).jpg'},

    {pName: 'GUILD WARS' , pPrice : 3000 , pCat : 'game' , pimage: 'assets/images/thumbnail(93).jpg'},
    {pName: 'DARKEN SANG' , pPrice : 4000 , pCat : 'game' , pimage: 'assets/images/thumbnail(94).jpg'},
    {pName: 'RUNE SCAPE' , pPrice : 5000 , pCat : 'game' , pimage: 'assets/images/thumbnail(95).jpg'},
    {pName: 'KRITIKA ZERO' , pPrice : 6000 , pCat : 'game' , pimage: 'assets/images/thumbnail(96).jpg'},

  ]
}
