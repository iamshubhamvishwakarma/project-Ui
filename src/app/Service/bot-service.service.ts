import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BotServiceService {
  private baseURL = "https://api.dialogflow.com/v1/query?v=20150910";
  private token = "8038cd6abd71418db8410052f32fd9aa";
  constructor(private http: HttpClient) {}

  getBotResponse(query: any) {
    const data = {
      query: query,
      lang: "en",
      sessionId: "12345"
    };
    const tokenHeader = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    const req = this.http.post(this.baseURL, data, { headers: tokenHeader });
    return req;
  }

  private getHeaders() {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${this.token}`);
    return headers;
  }
}
