import {
  Component,
  OnInit,
  Input,
  AfterViewChecked,
  ElementRef,
  ViewChild
} from "@angular/core";
import { query } from "@angular/core/src/render3";
import { Message } from "../../Models/message";
import { BotServiceService } from "../../Service/bot-service.service";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "UI-window",
  templateUrl: "./window.component.html",
  styleUrls: ["./window.component.scss"]
})
export class WindowComponent implements OnInit {
  messages: any = [];
  @ViewChild("scrollMe") private myScrollContainer: ElementRef;
  searchICon = faSearch;
  tempMsg = [
    "Hi",
    "Helo",
    "how can i help you ",
    "Hi",
    "Helo",
    "how can i help you   ",
    "i need help",
    "may i know your name"
  ];

  tempOp = [true, true, false, true, false, true];
  constructor(private service: BotServiceService) {
    for (var _i = 0; _i < this.tempMsg.length; _i++) {
      var tt = new Message();
      tt.isFromMe = this.tempOp[_i];
      tt.message = this.tempMsg[_i];
      tt.isLiked = this.tempOp[_i];
      this.messages.push(tt);
    }
  }
  msg = "";
  searchtext = "";
  isSearchEnable = false;
  @Input() display;

  ngOnInit() {}

  scrollToBottomOfResults() {
    var terminalResultsDiv = document.getElementById("message-list");
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  }

  sendMessage(msg) {
    if (msg === "") {
      return false;
    }

    const sm = new Message();
    sm.isFromMe = false;
    sm.message = msg;
    this.messages.push(sm);
    console.log(this.messages);
    this.msg = "";
    this.scrollToBottomOfResults();
    this.service.getBotResponse(msg).subscribe(res => {
      const fromBot = new Message();
      fromBot.isFromMe = true;
      fromBot.message = JSON.parse(
        JSON.stringify(res)
      ).result.fulfillment.speech;
      this.messages.push(fromBot);
      this.scrollToBottomOfResults();
      console.log(res);
    });
    this.msg = "";
    console.log("message sent", msg);
  }
  filterList(event) {
    let temp = this.messages;
    temp.forEach(element => {});
    console.log(event);
  }

  searchIconToggler() {
    this.isSearchEnable = !this.isSearchEnable;
    if (this.isSearchEnable) {
      this.searchICon = faTimes;
    } else {
      this.searchICon = faSearch;
    }
  }
}
