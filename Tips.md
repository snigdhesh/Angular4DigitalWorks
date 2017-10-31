### Some tips for angular
- Use `ng serve --port 3000` to change port number temporarily on angular. Where `3000` is the desired port number.

## Requirements
1.Want to display link (blue underlined word).  
2.But routing should be through angular routing.  

### Example

`<a href="" (click)="goHome()">Home page</a>`  

- In above case angular takes you to home page, but immediately it takes you to error page (If you set error page on any miscellneous urls).  

to avoid this , you can use  

`href="javascript:void(0);"`
