import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Ivainge's site";

  // images: string[] = [
  //   'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Desktop-1080p-HD-Wallpaper-Nature.jpg',
  //   'https://images.hdqwalls.com/download/best-nature-image-1920x1080.jpg',
  //   'https://wallpaperaccess.com/full/4706862.jpg',
  // ];

  images: string[] = [
    'https://cdna.artstation.com/p/assets/images/images/060/460/880/original/pixel-jeff-chill-mario-2023-2.gif',
    'https://cdna.artstation.com/p/assets/images/images/060/460/880/original/pixel-jeff-chill-mario-2023-2.gif',
    'https://64.media.tumblr.com/132a18cdb7b6789faa533af403b1d878/289784d6fbcb7f73-77/s1280x1920/a0111c32d378556a2ffb21e01ada1fcf52b82842.gif',
  ];

  backgroundImage: string = '';

  ngOnInit() {
    let ran = Math.round((Math.random() * 100) % 2);
    console.log(ran);
    if(this.backgroundImage !== "undefined") {
      this.backgroundImage = this.images[ran];
    }
    else{
      this.backgroundImage = 'https://img.freepik.com/premium-photo/3d-render-plastic-background-with-reflections-displacement-surface-random-patterns-extruded-from-wavy-shape_363039-2098.jpg?w=2000'
    }
  }
}
