import { RecaptchaErrorParameters } from 'ng-recaptcha';

export type CaptchaResponse = {
  ok: boolean;
  data: string | RecaptchaErrorParameters;
};
