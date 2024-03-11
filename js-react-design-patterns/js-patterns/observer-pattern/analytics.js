import Observable from "./observable.js";

export function sendToGoogleAnalytics(data) {
  console.log('Sent to Google analytics: ', data);
}

export function sendToCustomAnalytics(data) {
  console.log('Sent to custom analytics: ', data);
}

export function sendToEmail(data) {
  console.log('Sent to email: ', data);
}

Observable.subscribe(sendToGoogleAnalytics);
Observable.subscribe(sendToCustomAnalytics);
Observable.subscribe(sendToEmail);

