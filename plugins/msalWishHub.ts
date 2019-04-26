import * as Msal from 'msal' 

var applicationConfig = {
    clientID: 'a59705a8-0ef5-451d-8390-983b318cf9d7',
    authority: "https://login.microsoftonline.com/tfp/wishhubdev.onmicrosoft.com/B2C_1_wishhub_dev",
    b2cScopes: ["openid"]
    };

const clientApplication = new Msal.UserAgentApplication(
applicationConfig.clientID,
applicationConfig.authority,
    (errorDesc, token, error, tokenType) =>{});

export class MsalWishHub {
    private readonly isDev: boolean
    constructor() {
    }
  
    login() {
      return 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE1NTYyOTI4MTcsIm5iZiI6MTU1NjI4OTIxNywidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tLzEyMzM3MTEzLWY0NjQtNDczYy1hMzg1LTYwYTFiYmE3OTkzOC92Mi4wLyIsInN1YiI6IjdjZmZhYTVlLWU0NjMtNGU3Yi1iOTc0LWY4ZTA5MTVkNmUwYiIsImF1ZCI6ImU5MjFiYzRhLWIwYjktNGZhMi1hMTM4LTkxY2QwNjE3MDY5ZSIsIm5vbmNlIjoiOWUyOGQ4OTktOTQ1ZC00OTc0LTk0ZWMtNGQ3ODdmZmJiNmVhIiwiaWF0IjoxNTU2Mjg5MjE3LCJhdXRoX3RpbWUiOjE1NTYyODkyMTcsImlkcCI6ImZhY2Vib29rLmNvbSIsIm9pZCI6IjdjZmZhYTVlLWU0NjMtNGU3Yi1iOTc0LWY4ZTA5MTVkNmUwYiIsInRmcCI6IkIyQ18xX3dpc2hodWJfZGV2In0.Ob9Kc6wnqw81xRbywLhyMhsQ14aB_5-eVlcz3-tdS74IeoAMl43HEomcPwg6cy-sTgwzUi3h_DZF0w0LGFOqEuEVoB0zQv4muAYkKvHcyBd4k3qeKzaSTqfVVkP2WnEejPJSaNHEA0LT5vQHbRpQ67KODJ3sM28OMfJpRrPJVaFoYzSKgK-HmGs6sftYkfMghGFqFCKWfYZ2K012loepEDv6zt5g9gGVm-g6i1j1BfOzmectDPfpeCf1QYi0VlFKE4ZHinz5urjTNe6PHRnbLgH7fzFDpvgfw2dHIqsUj-6x7CSQhoQ7FkRbtvCNLjFcAI3CS9jyXPfAn0VtDlw5QA';
    }

    silentLogin(){
      return this.login();
    }

    logout(){
        clientApplication.logout();
    }

  }
  
  export default (_, inject) => {
    inject('msalWishHub', new MsalWishHub())
  }