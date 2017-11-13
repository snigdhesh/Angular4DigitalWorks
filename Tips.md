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

### How to add observable response to and array?

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

**Tip 4**
<hr>

 - When you update content using http.put method in angular, you can subscribe to the response and log it to console.  
 - But you cannot see it in console, instead you need to go to "network" tab instead of console tab.
 - Go to network > click on the request file listed on left side, then scroll down to find `request payload.` This is where you find the result.

**Tip 5**
<hr>
If you want to get a property that doesn't exist in local json object. You can try two approaches.  

**Example**

    `posts={title:"demo"};
    
        this.http.post(this.url,JSON.Stringify(post))
        .subscribe(
        (res)=>{post.id=res.json().id;
		        console.log(res.json().id);});

**Approach 1**
you can do    
`posts:any = {title:"demo"}`
or 
**Approach 2**
`post['id']=res.json().id`
