export declare type AlertType = "successful" | "error";
export declare type AlertComponent = {
    alertType: AlertType;
    title?: string;
    msg: string;
    timeToHide?: number;
};
