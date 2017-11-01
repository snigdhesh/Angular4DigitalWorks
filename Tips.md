# Some TIPS for angular
**Tip 1** <hr>
- Use `ng serve --port 3000` to change port number temporarily on angular. Where `3000` is the desired port number.

**Tip 2**  <hr>

###### Requirements
- Want to display link (blue underlined word).  
- But routing should be through angular routing.
###### Example 
`<a href="" (click)="goHome()">Home page</a>`  
- In above case angular takes you to home page, but immediately it takes you to error page (If you set error page on any miscellneous urls).
- To avoid this, you can use   
`href="javascript:void(0);"`


**Tip 3**
<hr>
### how to add observable response to an array?

**step 1**
Just initialize and array like this  
`workouts=[];`

**step 2** 
Assign response to this array like this.  

`ngOnInit(){
  this.dataService.fetchData().subscribe(
    data=> {
      this.workouts =data;
      console.log(this.workouts);
    });
}`

**source**
https://stackoverflow.com/questions/42223382/angular-2-http-store-response-in-array