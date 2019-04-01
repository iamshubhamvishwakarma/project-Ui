import { Component, OnInit, Input } from "@angular/core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "UI-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"]
})
export class MessageComponent implements OnInit {
  @Input() data;
  likeIcon = `fa fa-heart`;
  now: number;
  constructor() {
    this.now = Date.now();
  }

  toggleLike() {
    if(this.data.isLiked){
      this.likeIcon = "fa fa-heart-o";
    }else{
      this.likeIcon = "fa fa-heart"
    }
    this.data.isLiked = !this.data.isLiked;
    console.log();
  }

  ngOnInit() {
    if (!this.data.isLiked) {
      this.likeIcon = `fa fa-heart-o`;
    }
  }
}
