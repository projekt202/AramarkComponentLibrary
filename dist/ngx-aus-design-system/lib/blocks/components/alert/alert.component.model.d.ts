export declare type AlertType = "successful" | "error";
export declare type AlertComponent = {
    type: AlertType;
    title?: string;
    msg: string;
    timeToHide?: number;
};
