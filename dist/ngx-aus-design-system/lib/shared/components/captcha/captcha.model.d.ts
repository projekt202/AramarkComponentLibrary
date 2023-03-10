import { RecaptchaErrorParameters } from 'ng-recaptcha';
export declare type CaptchaResponse = {
    ok: boolean;
    data: string | RecaptchaErrorParameters;
};
