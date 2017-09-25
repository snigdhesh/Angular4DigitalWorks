import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TrendGraphService } from './treandgraph.component.service';

@Component({
    selector: 'trend',
    templateUrl: './trendgraph.component.html',
    styleUrls: ['./app.component.css']
})

export class TrendGraphComponent implements OnInit {
    //declaring array with type 'any'
    audits: any[];
    trendline0: number[] = [];
    trendline1: Date[] = [];
    auditsummarylist: any[];
    outertrendlinearray0: any[];
    outertrendlinearray1: any[];
    dates: any[];
    arr: Array<string>;
    datestring0: Date;
    datetostring: string[] = [];
    newDate: Date[] = [];

    constructor(private trendgraphservice: TrendGraphService) {
    }

    // ngOnInit() {
    //             this.trendgraphservice.getAudits().subscribe(res => {
    //             this.audits=res;
    //             console.log(res);
    //            // err=>{console.error(err)}
    //             })
    //         }
    //to convert json to array
    // generateArray(obj) {
    //     return Object.keys(obj).map((key) => { return obj[key] });
    // }
    // public lineChartData: Array<any> = [
    //     { data: [75, 65, 85, 65, 75], label: 'A' },
    //     { data: [12, 48, 40, 19, 86], label: 'B' },
    //     { data: [18, 48, 77, 9, 100], label: 'C' }
    // ];
    public lineChartData: Array<any> = [
        { data: this.trendline0, label: 'For audit id 1' },
        { data: this.trendline1, label: 'For audit id 2' }
        // { data: [12, 48, 40, 19, 86], label: 'B' },
        // { data: [18, 48, 77, 9, 100], label: 'C' }
    ];

    public lineChartLabels: Array<any> ;
    //= this.datetostring;




    public lineChartOptions: any = {
        responsive: false,
        
    };
    public lineChartColors: Array<any> = [
        { // black
            backgroundColor: 'transparent',
            borderColor: 'black',
            pointBackgroundColor: 'white',
            pointBorderColor: 'black',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            //   fill:false
        },
        { // green
            backgroundColor: 'transparent',
            borderColor: 'green',
            pointBackgroundColor: 'white',
            pointBorderColor: '',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // red
            backgroundColor: 'transparent',
            borderColor: 'red',
            pointBackgroundColor: 'white',
            pointBorderColor: '',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    public firstMonth(): void {
        // var date = new Date(new Date().setDate(new Date().getDate() - 30));
        // console.log(date)  ;
        let today = new Date();
        console.log(today);

        // let priorDate = new Date().setDate(today.getDate()-30);
        let priorDate = new Date();
        priorDate.setDate(today.getDate() - 31);

        this.lineChartLabels = [today.toDateString(), priorDate.toDateString()];
        console.log(priorDate);


    }

    // function to display last 3 months
    public threeMonths(): void {
        // var date = new Date(new Date().setDate(new Date().getDate() - 30));
        // console.log(date)  ;
        let today = new Date();
        console.log(today);

        // let priorDate = new Date().setDate(today.getDate()-30);
        let firstMonth = new Date();
        firstMonth.setDate(today.getDate() - (30+1));
        console.log(firstMonth);

        let secondMonth = new Date();
        secondMonth.setDate(firstMonth.getDate() -(30+30+2));
        console.log(secondMonth);

        let thirdMonth = new Date();
        thirdMonth.setDate(secondMonth.getDate() -(30+30+30+2));
        console.log(thirdMonth);
        this.lineChartLabels = [
            today.toDateString(),
            firstMonth.toDateString(),
            secondMonth.toDateString(),
            thirdMonth.toDateString()

        ];
    }

    //displaying data for last sixmonths

    public sixMonths(): void {
        // var date = new Date(new Date().setDate(new Date().getDate() - 30));
        // console.log(date)  ;
        let today = new Date();
        console.log(today);//sep 25

        // let priorDate = new Date().setDate(today.getDate()-30);
        let firstMonth = new Date();
        firstMonth.setDate(today.getDate() - 31);
        console.log(firstMonth);//aug 25

        let secondMonth = new Date();
        secondMonth.setDate(firstMonth.getDate() - (30+30+2));
        console.log(secondMonth);//jul 25

        let thirdMonth = new Date();
        thirdMonth.setDate(secondMonth.getDate() - (30+30+30+2));
        console.log(thirdMonth);//jun 25

        let fourthMonth = new Date();
        fourthMonth.setDate(thirdMonth.getDate() - (30+30+30+30+3));
        console.log(fourthMonth);//may 25

        let fifthMonth = new Date();
        fifthMonth.setDate(fourthMonth.getDate() - (30+30+30+30+30+3));
        console.log(fifthMonth);//apr 25

        let sixthMonth = new Date();
        sixthMonth.setDate(fifthMonth.getDate() - (30+30+30+30+30+30+4));
        console.log(sixthMonth);

        this.lineChartLabels = [
            today.toDateString(),
            firstMonth.toDateString(),
            secondMonth.toDateString(),
            thirdMonth.toDateString(),
            fourthMonth.toDateString(),
            fifthMonth.toDateString(),
            sixthMonth.toDateString()
        ];
    }

    public twelveMonths(): void {
           // var date = new Date(new Date().setDate(new Date().getDate() - 30));
        // console.log(date)  ;
        let today = new Date();
        console.log(today);//sep 25

        // let priorDate = new Date().setDate(today.getDate()-30);
        let firstMonth = new Date();
        firstMonth.setDate(today.getDate() - 31);
        console.log(firstMonth);//aug 25

        let secondMonth = new Date();
        secondMonth.setDate(firstMonth.getDate() - (30+30+2));
        console.log(secondMonth);//jul 25

        let thirdMonth = new Date();
        thirdMonth.setDate(secondMonth.getDate() - (30+30+30+2));
        console.log(thirdMonth);//jun 25

        let fourthMonth = new Date();
        fourthMonth.setDate(thirdMonth.getDate() - (30+30+30+30+3));
        console.log(fourthMonth);//may 25

        let fifthMonth = new Date();
        fifthMonth.setDate(fourthMonth.getDate() - (30+30+30+30+30+3));
        console.log(fifthMonth);//apr 25

        let sixthMonth = new Date();
        sixthMonth.setDate(fifthMonth.getDate() - (30+30+30+30+30+30+4));
        console.log(sixthMonth);

        
        let seventhMonth = new Date();
        seventhMonth.setDate(sixthMonth.getDate() - (30+30+30+30+30+30+30+4));
        console.log(seventhMonth);

        let eigthMonth = new Date();
        eigthMonth.setDate(seventhMonth.getDate() - (30+30+30+30+30+30+30+30+4));
        console.log(eigthMonth);

        let ninthMonth = new Date();
        ninthMonth.setDate(eigthMonth.getDate() - (30+30+30+30+30+30+30+30+30+4));
        console.log(ninthMonth);

        
        let tenthMonth = new Date();
        tenthMonth.setDate(ninthMonth.getDate() - (30+30+30+30+30+30+30+30+30+30+4));
        console.log(tenthMonth);

        let eleventhMonth = new Date();
        eleventhMonth.setDate(tenthMonth.getDate() - (30+30+30+30+30+30+30+30+30+30+30+4));
        console.log(eleventhMonth);

        let twelfthMonth = new Date();
        twelfthMonth.setDate(eleventhMonth.getDate() - (30+30+30+30+30+30+30+30+30+30+30+30+4));
        console.log(twelfthMonth);


        
        this.lineChartLabels = [
            today.toDateString(),
            firstMonth.toDateString(),
            secondMonth.toDateString(),
            thirdMonth.toDateString(),
            fourthMonth.toDateString(),
            fifthMonth.toDateString(),
            sixthMonth.toDateString(),
            seventhMonth.toDateString(),
            eigthMonth.toDateString(),
            ninthMonth.toDateString(),
            tenthMonth.toDateString(),
            eleventhMonth.toDateString(),
            twelfthMonth.toDateString()
        ];

    }

    ngOnInit() {
        this.trendgraphservice.getAudits().subscribe(res => {
            this.audits = res.json();
            //console.log(res.json());
            console.log('>>>>>>>>>>>>>>displaying normal audits');
            console.log(this.audits);
            this.audits = Array.of(this.audits);
            //this.audits = this.generateArray(this.audits);
            //console.log('>>>>>>>>>>displaying Audits array');
            var audit_obj = this.audits[0];
            // console.log(this.audits[0]);
            // console.log('>>>>>>>>>>trying to display second index in audits array, infact there is no second index.');
            // console.log(this.audits[0]);            
            // console.log(Object.keys(audit_obj[0]).length);
            // for(var i=0;i<=Object.keys(audit_obj).length;i++)
            // {
            //     console.log(audit_obj.audiSummaryList[i]);
            // }
            var auditsummarylistobj0 = audit_obj.auditSummaryList[0];
            var auditsummarylistobj1 = audit_obj.auditSummaryList[1];
            var auditsummarylistobj2 = audit_obj.auditSummaryList[2];
            var auditsummarylistobj3 = audit_obj.auditSummaryList[3];
            var auditsummarylistobj4 = audit_obj.auditSummaryList[4];
            console.log('>>>>>>Displaying auditSummaryList array');
            console.log(auditsummarylistobj0);
            console.log(auditsummarylistobj1);
            console.log(auditsummarylistobj2);
            console.log(auditsummarylistobj3);
            console.log(auditsummarylistobj4);
            // audit_obj.audiSummaryList.forEach(myAuditSummaryFunction);
            // Audit summary has 5 elements, in which every element has a trend line array(with 5 elements each), so we need to loop 2 times
            // function myAuditSummaryFunction(items, index) {

            //     console.log(items);

            //     // for (var i in items) {
            //     //     var obj = items[i];
            //     //     console.log(obj);
            //     //     // var trend=obj.trendLine;
            //     //     // trend.trendLine.forEach(myTrendLineFunction);         
            //     // }
            // }

            // console.log('>>>>> displaying single property of audiSummaryList array');
            // console.log(auditsummaryobj);

            // console.log('audit id for index 0 = ' + a.auditId);
            // console.log('>>>>>>>>trend line array index=0');

            var outertrendlineobj0 = auditsummarylistobj0.trendLine;
            this.outertrendlinearray0 = Array.of(outertrendlineobj0);

            var trendlineobj1 = auditsummarylistobj1.trendLine;
            this.outertrendlinearray1 = Array.of(trendlineobj1);



            // console.log('printing outer trendLine object');
            // trendlineobj.trendLine.forEach(myAuditSummaryFunction);
            // console.log(trendlineobj);
            console.log('>>>>>>>>>>>>>>>>displaying trendline for audit id =1');
            var trendlineobj0 = this.outertrendlinearray0[0].trendLine;
            var trendlineobj1 = this.outertrendlinearray1[0].trendLine;
            //   this.lineChartLabels=[ trendlineobj0[0].auditDateTime, trendlineobj0[1].auditDateTime, trendlineobj0[2].auditDateTime, trendlineobj0[3].auditDateTime, trendlineobj0[4].auditDateTime];
            //this.lineChartLabels=[trendlineobj1[0].auditDateTime,trendlineobj1[1].auditDateTime, trendlineobj1[2].auditDateTime, trendlineobj1[3].auditDateTime, trendlineobj1[4].auditDateTime]

            // this.lineChartData=[{data:[trendlineobj0[0].healthScore,trendlineobj0[1].healthScore,trendlineobj0[2].healthScore,trendlineobj0[3].healthScore,trendlineobj0[4].healthScore], label:'For Audit 1'}];

            for (var i = 0; i < 5; i++) {
                this.trendline0.push(trendlineobj0[i].healthScore);
                //this.trendline1.push(trendlineobj1[i].healthScore);
                this.trendline1.push(trendlineobj0[i].auditDateTime);

            }
            //printing trendline0 data
            console.log(this.trendline0);
            console.log(trendlineobj0[0].auditDateTime);
            console.log(trendlineobj0[1].auditDateTime);
            console.log(trendlineobj0[2].auditDateTime);
            console.log(trendlineobj0[3].auditDateTime);
            console.log(trendlineobj0[4].auditDateTime);

            console.log(trendlineobj0[0].healthScore);
            console.log(trendlineobj0[1].healthScore);
            console.log(trendlineobj0[2].healthScore);
            console.log(trendlineobj0[3].healthScore);
            console.log(trendlineobj0[4].healthScore);

            console.log(trendlineobj0);
            //printing trendline1 data
            console.log(this.trendline1);
            console.log(trendlineobj0[0].auditDateTime);
            console.log(trendlineobj0[1].auditDateTime);
            console.log(trendlineobj0[2].auditDateTime);
            console.log(trendlineobj0[3].auditDateTime);
            console.log(trendlineobj0[4].auditDateTime);

            console.log(trendlineobj0[0].healthScore);
            console.log(trendlineobj0[1].healthScore);
            console.log(trendlineobj0[2].healthScore);
            console.log(trendlineobj0[3].healthScore);
            console.log(trendlineobj0[4].healthScore);

            console.log(trendlineobj0);
            console.log('.....displaying dates in trendline1[]');
            console.log(this.trendline1);

            for (var i = 0; i < 5; i++) {
                this.newDate[i] = new Date(this.trendline1[i]);
            }
            console.log('Displaying converted dates');

            for (var i = 0; i < 5; i++) {
                console.log((this.newDate[i].toDateString()));
                this.datetostring[i] = (this.newDate[i].toDateString());

            }

            this.lineChartLabels=this.datetostring;




            console.log('>>>>>>>>>>>>>>>>>>displaying trendline for audit id =2');
            var trendline1 = this.outertrendlinearray1[0].trendLine;
            console.log(trendline1);

            //console.log(trendline.trendLine[0].auditDateTime);
            //trendobj.trendLine.forEach(myTrendLineFunction); 
            // var innertrendlineobj=trendlineobj.trendLine[0];
            // console.log(innertrendlineobj);
            // var innertrendlineobj=trendlineobj.trendLine[1];
            // console.log(innertrendlineobj);
            // this.trendline = Array.of(a.trendLine);
            // console.log('...........printing this.trendline');
            //console.log(innertrendlineobj);
            //innertrendlineobj.trendLine.forEach(myTrendLineFunction);
            function myTrendLineFunction(items, index) {
                // console.log(items.auditDateTime + ',' + items.healthScore);
                var sam = items.auditDateTime;
                this.dates.push(sam);


                //console.log( JSON.stringify(items.auditDateTime));
                //console.log(this.lineChartLabels.JSON());
            }

            // console.log('>>>>>>displaying trend line array, index of 0');
            // console.log(innertrendlineobj.trendLine[0]);
            // var d = innertrendlineobj.trendLine[0];
            // console.log('>>>>>>>>..we can display trend line properties here');
            // console.log(d.auditDateTime);
            // console.log(d.healthScore);
            // this.d = d;
            // console.log('>>>>>>>>>>>>>>displaying trendline data');
            // trendlineobj.trendLine.forEach(myTrendLineFunction);
            // console.log(this.dates);
            // var arr:string[];
            // arr.push(trendlineobj.trendLine.forEach(myTrendLineFunction));  
            // console.log(arr);
            // var b=a.trendLine;
            // console.log(b[0]);
            // console.log('>>>>>>>>>displaying array');
            // for(let i = 0; i < c.length; i++) {
            //     console.log(c.trendLine[i].auditDateTime);
            // }
            // console.log('end');
            // this.trendline.forEach(myFunction);
            function myFunction(items, index) {
                for (var i in items) {
                    var obj = items;
                    console.log(obj);
                    // console.log(obj.auditDateTime + ', health score= ' + obj.healthScore + ', index=' + index);

                    // console.log(obj.auditDateTime);

                }
            }

            // this.lineChartLabels=c.trendLine.forEach(myFunction);
            //this.trendline=Array.of(this.audits[0]);
            console.log('>>>>>>>>>displaying actual json result');
            console.log(res.json());
            err => console.error('error here' + err);
            () => console.log('getBooks completed');
        })
    } // end of nginit method.

    // public randomize(): void {
    //     let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    //     for (let i = 0; i < this.lineChartData.length; i++) {
    //         _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
    //         for (let j = 0; j < this.lineChartData[i].data.length; j++) {
    //             _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    //         }
    //     }
    //     this.lineChartData = _lineChartData;
    // }
    // events
    // public chartClicked(e: any): void {
    //     console.log(e);
    // }
    // public chartHovered(e: any): void {
    //     console.log(e);
    // }

}
