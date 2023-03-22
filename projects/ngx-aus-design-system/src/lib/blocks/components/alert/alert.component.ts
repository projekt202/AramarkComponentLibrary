import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { of, BehaviorSubject } from "rxjs";
import { delay } from 'rxjs/operators';
import { AlertType } from "./alert.component.model";

@Component({
  selector: "aus-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
})
export class AlertComponent implements OnInit {
  @Input() type: AlertType = "successful";
  @Input() title?: string;
  @Input() msg: string = "";
  @Input() timeToHide?: number;// Miliseconds.
  @Output() onHide = new EventEmitter<void>();
  showAlert$ = new BehaviorSubject<boolean>(true);

  ngOnInit(): void {
    of(true).pipe(delay(this.timeToHide ?? 20000)).subscribe(() => {
      if (this.showAlert$.value) {
        this.showAlert$.next(false);
        this.onHide.emit();
      }
    });
  }
}
