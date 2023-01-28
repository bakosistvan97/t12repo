//Bakos István #Team12
document.write("Bakos István #Team12");
document.write("<br>HTML:100");
document.write("<br>CSS:100");
document.write("<br>JavaScript:80");

//2) feladat

let szam = Number(prompt("add meg a számot:"));
let hatvany = Number(prompt("add meg a hatványt:"));
let eredmeny = szam**hatvany;
document.write (`${szam} szám ${hatvany} hatványának eredménye:${eredmeny}`);

//3) feladat

let randomParos = Math.round(Math.random() *50)*2;
document.write (`${randomParos}`);

//4) feladat

let kor = Number(prompt("add meg az életkort:"));

if (kor >= 0 && kor < 6){
    document.write("Kisgyermekkor")
}
else if(kor >= 6 && kor < 12){
    document.write("Gyermekkor");
}
else if(kor >= 12 && kor < 16){
    document.write("Serdülőkor");
}
else if(kor >= 16 && kor < 20){
    document.write("Ifjúkor");
}
else if(kor >= 20 && kor < 30){
    document.write("Fiatal felnőtt kor");
}
else if(kor >= 30 && kor < 60){
    document.write("Felnőtt kor");
}
else if(kor >= 60 && kor < 120){
    document.write("Aggkor");
}
else {
	document.write ("hiba!")
}

//5) feladat

let osztando = Number(prompt("add meg az osztandó számot:"));
let oszto = Number(prompt("add meg az osztó számot:"));
let maradek = osztando%oszto;

if (maradek == 0){
    document.write(`${osztando} számot ${oszto} osztja úgy hogy a maradék:${maradek}`);
}
else {
    document.write(`${osztando} számot ${oszto} nem osztja maradék nélkül mert a maradék:${maradek}`);
}

//6) feladat

for(let i=0; i<=10; i++){
	negyzet = i * i;
	document.write(`${negyzet}<br>`);
}