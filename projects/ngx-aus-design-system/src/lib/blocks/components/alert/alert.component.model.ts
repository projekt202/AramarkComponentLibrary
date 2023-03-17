export type AlertType = "successful" | "error";

export type AlertComponent = {
  alertType: AlertType;
  title?: string;
  msg: string;
  timeToHide?: number;
}
