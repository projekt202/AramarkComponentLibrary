export type AlertType = "successful" | "error";

export type AlertComponent = {
  type: AlertType;
  title?: string;
  msg: string;
  timeToHide?: number;
}
