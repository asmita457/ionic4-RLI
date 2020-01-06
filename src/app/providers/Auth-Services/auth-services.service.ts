import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  BaseURL = 'http://cmdr-app.rlisri.com'
  APIBaseUrl = 'http://cmdr-app.rlisri.com:3000/api/'

  constructor(public http: Http) { }

  getLoginData(email, password) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()

      var headers = new Headers()
      headers.set('Content-Type', 'application/json')

      requestOpt.headers = headers

      this.http.get(this.APIBaseUrl + 'login?username=' + email + '&password=' + password, requestOpt).subscribe((response) => {
        console.log("Data", response.json()); // data received by server
        // response.
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getlogoutData(UserId) {
    return new Promise((resolve, reject) => {
      let authToken = localStorage.getItem('AuthToken');
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('Authorization', authToken)
      requestOpt.headers = headers
      console.log("USER_ID", UserId)
      this.http.get(this.APIBaseUrl + 'logout/?user_id=' + UserId, requestOpt).subscribe((response) => {
        console.log("Data", response.json()); // data received by server
        // response.
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getChangePasswordData(Badge, OLD_PASSWORD, NEW_PASSWORD) {
    return new Promise((resolve, reject) => {
      let Authtoken = localStorage.getItem('AuthToken')
      var headers = new Headers();
      // headers.append('Access-Control-Allow-Origin', '*');
      // headers.append('Access-Control-Allow-Methods', 'GET');
      // headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json')
      headers.append('Authorization', Authtoken)
      let options = new RequestOptions({ headers: headers })

      this.http.get('http://rlicommander.com/live/common/api/user_fxs.php?format=json&method=change_password&k=83&badge=' + Badge + '&old_password=' + OLD_PASSWORD + '&new_password=' + NEW_PASSWORD, options).subscribe((response) => {
        console.log("Data", response); // data received by server
        resolve(response)
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  // getForgotPasswordData(badge, phone) {
  //   return new Promise((resolve, reject) => {
  //     var requestOpt = new RequestOptions()
  //     var headers = new Headers()
  //     headers.set('ContentType', 'application/json')
  //     requestOpt.headers = headers
  //     this.http.get('http://rlicommander.com/live/common/api/user_fxs.php?format=json&method=reset_password&k=83&badge=' + badge + '&phone=' + phone, requestOpt).subscribe((response) => {
  //       console.log("Data", response.json());
  //       resolve(response.json())
  //     }, error => {
  //       console.log("Error", error)
  //       reject(error)
  //     })
  //   })
  // }

  getForgotPasswordData(badge, phone) {
    return new Promise((resolve, reject) => {
    var requestOpt = new RequestOptions()
    var headers = new Headers();
    // headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers });
    this.http.get('http://rlicommander.com/live/common/api/user_fxs.php?format=json&method=reset_password&k=83&badge=' + badge + '&phone=' + phone, options).subscribe((response) => {
    console.log("Data", response.json()); // data received by server
    // response.
    resolve(response.json())
    }, error => {
    console.log("Error", error)
    reject(error)
    })
    })
    }
}