function run(){

let cd=new Date().getDate();
let cm=new Date().getMonth();
let cy=new Date().getFullYear();

cm=cm+1;

let d=document.getElementById("day").value;
let m=document.getElementById("month").value;
let y=document.getElementById("year").value;

let days=0;
if((y>cy) || (y==cy)&&(m>cm) || (y==cy)&&(m==cm)&&(d>cd) || d>31 || m>12 || d==0 || y==null || d==null || (y==cy)&&(m==cm)&&(d==cd) ){
    days="Give Valid Input";
    t='';
    if( (y==cy)&&(m==cm)&&(d==cd)){
        days="Today";
    }
    alert(days);
}

else {
    
    for(let i=y;i<=cy;i++){

    const x={1:31 , 2: ((i%100==0 && i%400==0) || (i%100!=0 && i%4==0))?29:28 ,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};

   if(cy==y){
        if(cm==m){
            days+=cd-d;
        }
        else{
            for(let j=m;j<=cm;j++){
                 if(j==m){
                    days=days+x[j]-d;
                 }   
                 else if(j==cm){
                    days+=cd;
                 }
                 else{
                    d+=x[j];
                 };
            };
        };
        break;
    }


    if(i==y){
        for(let j=m ;j<=12;j++){
            if(j==m){
                days+=x[j]-d;}
            else{
                days+=x[j];
                };    
            };
        }

   else if(i==cy){
        for(let k=1;k<=cm;k++){
            if(k==cm){
                days=days+cd;
            }
            else{
                days+=x[k];
            };
         };
     }
    
    else{
        for(let v=1;v<=12;v++){
            days+=x[v];
        };
    }
 };  

//conversion

let day=days;

    let y1=Math.floor(day/365);
    let y2=day%365;
    let m1=Math.floor(y2/30);
    let m2=y2%30;
   
    days=`${(y1>0)?y1:''}${(y1==1)?" year ":(y1>1)?" years ":""} ${(m1>0)?m1:''}${(m1==1)?" month ":(m1==0)?'':" months "}${(m2==0)?'':m2}${(m2==0)?'':(m2==1)?" day":" days"} `;

let week1=Math.round(day/7);
let month=Math.round(day/30);
let hours=day*24;

    document.getElementById("show").innerHTML=days;
    document.getElementById("showdays").innerHTML=`${day}${(day<=1)?" day":" days"}`;
    document.getElementById("showweeks").innerHTML=`${week1}${(week1<=1)?" week":" weeks"}`;
    document.getElementById("showmonths").innerHTML=`${month}${(month<=1)?" month":" months"}`
    document.getElementById("showhours").innerHTML=`${hours} hours`;

}  

};

const ourmonths={0:"January",1:"Febraury",2:"March",3:"April",4:"May",5:"June",6:"July",7:"Jugust",8:"September",9:"October",10:"November",11:"December"};

let c1=new Date().getDate();
let c22=new Date().getMonth();
c2=ourmonths[c22];
let c3=new Date().getFullYear()
document.getElementById("fordate").innerHTML=c1;
document.getElementById("formonth").innerHTML=c2;
document.getElementById("foryear").innerHTML=c3;
