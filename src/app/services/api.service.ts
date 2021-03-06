import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "http://opsclb-1017799464.ap-south-1.elb.amazonaws.com/server/api/Common/Lookups";
  token: string = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJLRkdtU2lmSU40VnlkUFNIS2dYVkY3b3FmWVdNdVQ1MWEwbmY2UnRab1BoVlRuMUs1WU9zUE9pd2FKM1NJSXU0IiwianRpIjoiMTdjZjY1ZTMtODQ4ZC00MDQ3LTk2ZjktYTVlMGVlYTNhNjljIiwiVXNlcklEIjoiMDhkYTE0YWYtOTUzMi00NmU3LTgxYzAtMjk5MzU1YTIxMGI5IiwiVXNlck5hbWUiOiJqbWlMeGlIYVplVTRHU1VXUjkvQ1VnPT0iLCJVc2VyRW1haWwiOiJLRkdtU2lmSU40VnlkUFNIS2dYVkY3b3FmWVdNdVQ1MWEwbmY2UnRab1BoVlRuMUs1WU9zUE9pd2FKM1NJSXU0IiwiUGhvbmVOdW1iZXIiOiJHVWxIWHRLSXU5MDk3NEdXUC9zWGh3PT0iLCJVc2VyVHlwZUlkIjoiMlR1ZmNXQ3RGaXZPTU5hZG5mZkdUZz09IiwiVGVuYW50SWQiOiJvck5XakZ5NUhDelFTUkdxZHFhUDVBPT0iLCJSb2xlSWRzIjoiMlR1ZmNXQ3RGaXZPTU5hZG5mZkdUZz09IiwiUUVJZHMiOiJqUmlWOE5hZEJBQkpEV2phYTBzWXVxOTZ1UWphMjVjRTQvRkpoeFhhbkx6eFJBWWNiUmZrMnYvUmpUL3FPUmN2LFlzNGNZRDY0WmU3eno2NTdWSE1MZjlxVVc0SWo1VVhadFNWenJ3SWFQSmpHR2pzN0NubklBNjZOL1hOZDR5UloiLCJET0IiOiIxOS8wOC8xOTkxIiwiQ3VycmVudENTQ0lkIjoiMCIsImV4cCI6MTY1NTc4MTczMywiaXNzIjoiTWljcm9zb2Z0LkV4dGVuc2lvbnMuQ29uZmlndXJhdGlvbi5Db25maWd1cmF0aW9uU2VjdGlvbiIsImF1ZCI6Ik1pY3Jvc29mdC5FeHRlbnNpb25zLkNvbmZpZ3VyYXRpb24uQ29uZmlndXJhdGlvblNlY3Rpb24ifQ.wp8tWJUTN7rUr8XxjM6PRdPjhprq838z9BmEoci6ME8";
  constructor(private http: HttpClient) { }
  getAllQualifications() {
    return this.http.post<any>
      (this.url, [24],
        {
          headers: new HttpHeaders(
            { 'Authorization': this.token })
        });
  }
  getAllNameOftheDegree() {
    return this.http.post<any>
      (this.url, [25],
        {
          headers: new HttpHeaders(
            { 'Authorization': this.token })
        });
  }
  getAllSubject() {
    return this.http.post<any>
      (this.url, [26],
        {
          headers: new HttpHeaders(
            { 'Authorization': this.token })
        });
  }
} 
