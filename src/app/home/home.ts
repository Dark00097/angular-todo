import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  nom ="karim";
  imgurl="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/1280px-Angular_gradient_logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=thumbnail"

  bonjour() {alert('Bonjour ');}


  nom1="karim"

  students=["Ahmed","salah","amin","Ayoub","yassine"]
  students2=[
    {name:"Ahmed",age:20},
    {name:"salah",age:21},
    {name:"amin",age:22},
    {name:"Ayoub",age:23},
    {name:"yassine",age:23},

  ]
  
  count=0;
  counts=signal(0);
  incrementSimple(){
    this.count++;
  }
  increment(){
    this.counts.update(v => v+1);
  }
}
