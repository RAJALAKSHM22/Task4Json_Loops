
console.log("PROGRAME OF FOR LOOPING!! ")  //this console for title 


let datum=[{'family':{'father':{'Name':'Numjun','age':['30'],'hobby':['vlog making','Image editing'],'income':['1.5L/m']},'mother':{ 'Name':'Camila Cabello','age':['27'],'hobby':['vlog making','Image editing','cooking'],'income':['1.5L/m'] },'son':{ 'Name':'Lee Dong','age':['6'],'hobby':['playing'],'income':['0'] },'daugther':{'Name':'Shin Hye','age':['5'],'hobby':['coloring'],'income':['0']}}},{'Office':{'CEO':{'Name':'Kim','age':['58'],'YoJ':['2007'],'income':['4.5L/m']},'President':{'Name':'Jin','age':['33'],'YoJ':['2015'],'income':['10.5L/m'] },'chairPerson':{'Name':'Lee Sung','age':['36'],'YoJ':['2012'],'income':['15.8L/m']}}}]


console.log("FOR LOOP");   //this console for title 
// for Loop

for(let i=0;i<datum.length;i++){
    
    console.log(datum[i]);
}

console.log("FOR-IN LOOP");  //this console for title
// for-in Loop

for(let k in datum){
    console.log(k,datum[k]);
}

console.log("FOR-OF LOOP");  //this console for title
// for-of Loop

for(let j of datum){
    console.log(j);
}

console.log("FOR-EACH LOOP" ); //this console for title   
// for-each Loop

datum.forEach((Data)=>console.log(Data));
