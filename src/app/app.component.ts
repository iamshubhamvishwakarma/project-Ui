import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  NgZone,
  Renderer
} from "@angular/core";
import { LoaderComponent } from "./Shared/loader/loader.component";
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";

@Component({
  selector: "UI-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  
})
export class AppComponent {
  title = "ProjectUi";
  terminalResultsDiv;
  isSolidNavbar = true;// make this false
  @ViewChild("loader")
  loader: ElementRef;
  constructor(
    private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer
  ) {
    router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event);
    });
  }

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  scrollHandler(event) {
    let height = event.path[1].window.pageYOffset;
    if (height > 10) {
      this.isSolidNavbar = true;
    } else {
      this.isSolidNavbar = false;
    }
  }

  private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      console.log("Navigation start", event);
      this.ngZone.runOutsideAngular(() => {
        this.renderer.setElementStyle(
          this.loader.nativeElement,
          "opacity",
          "1"
        );
      });
    }  if (event instanceof NavigationEnd) {
      this.hideSpinner();
      console.log("Navigation End", event);
    }  if (event instanceof NavigationError) {
      this.hideSpinner();
     // console.log("Navigation Error", event);
    }  if (event instanceof NavigationCancel) {
      //this.hideSpinner();
      console.log("Navigation Canceled", event);
    }  
  }
  private hideSpinner() {
    this.ngZone.runOutsideAngular(() => {
      this.renderer.setElementStyle(this.loader.nativeElement, "opacity", "0");
    });
  }
}
