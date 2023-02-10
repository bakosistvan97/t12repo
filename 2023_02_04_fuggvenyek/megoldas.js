//Bakos István Sándor, Junior Frontend és webfejlesztő, #Team12
//1. feladat
function keszito(){
    document.write("Bakos István Sándor <br> Junior Frontend és Webfejlesztő <br> #Team12");
}
keszito()
//2. feladat
function hatvanyozo(szam,hatvany){
    let hatvanyeredmeny=szam**hatvany;
    return hatvanyeredmeny;
}
document.write(`${hatvanyozo(2,3)} , ${hatvanyozo(5,3)}`)
//3. feladat
function parosLetrehoz(alsoHatar,felsoHatar){
    let randomParos=Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar
    if (randomParos%2==0){
        return randomParos;
    }
    else if (randomParos%2!=0){
        randomParos++;
        return randomParos;
    }
}
document.write(`${parosLetrehoz(1,100)}`)
//4. feladat
function testTomegIndex(suly,magassag){
    let TTI=suly/(magassag**2);
    let sulyosSovanysag="súlyos soványság";
    let mersekeltSovanysag="mérsékelt soványság";
    let enyheSovanysag="enyhe soványság";
    let normalisTestsuly="normális testsúly";
    let tulsulyos="túlsúlyos";
    let IfokuElhizas="elsőfokú elhízás";
    let IIfokuElhizas="másodfokú elhízás";
    let IIIfokuElhizas="harmadfokú elhízás";
    if(TTI<16){
        return sulyosSovanysag;
    }
    else  if(16<=TTI && TTI<=16.99){
        return mersekeltSovanysag;
    }
    else  if(17<=TTI && TTI<=18.49){
        return enyheSovanysag;
    }
    else  if(18.5<=TTI && TTI<=24.99){
        return normalisTestsuly;
    }
    else  if(25<=TTI && TTI<=29.99){
        return tulsulyos;
    }
    else  if(30<=TTI && TTI<=34.99){
        return IfokuElhizas;
    }
    else  if(35<=TTI && TTI<=39.99){
        return IIfokuElhizas;
    }
    else  if(40<=TTI){
        return IIIfokuElhizas;
    }
}
document.write(`${testTomegIndex(200,2)} , ${testTomegIndex(45,1.5)} , ${testTomegIndex(25,1.2)}`)
//5. feladat
function egeszOsztoE(szam,oszto){
    oszthatoE=true
    if(szam%oszto==0){
        return oszthatoE;
    }
    else{
        oszthatoE=false
        return oszthatoE;
    }
}
document.write(`${egeszOsztoE(25,5)} , ${egeszOsztoE(1050,7)} , ${egeszOsztoE(2048,3)}`)