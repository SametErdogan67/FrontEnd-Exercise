// console.log("Merhaba");

// var salary=5000 + (5000*0.3);
// console.log(salary);

// let productName= "apple";
// let productPrice = 15000;

// console.log(typeof productName);
// console.log(typeof productPrice);

// let sayi1 = 10;
// let sayi2 = 20;

// console.log(sayi1.toString()+sayi2.toString());

// let suankiYil = new Date().getFullYear();
// console.log(suankiYil);

// // Operatörler

// let sonuc;

// let a = 10, b=20, c=32 ;

// sonuc = c%a;


// // Aritmetik
// console.log((a+b+c)/3);
// console.log(sonuc);

// if(3>4){
//     console.log("merhaba");
// }

// let isLoggedin = false;

// if(isLoggedin){
//     console.log("uygulamaya giriş yapıldı");
// }
// else{
// console.log("YAPILMADI");
// }

// let username = "samedi6774";
// let password = "1235";

// if(username == "samedi6774"){
//     if(password=="1234"){
//         console.log("bilgiler doğru, giriş yapıldı");
//     }else{
//         console.log("parola yanlış");
//     }
// }
// else{
//     console.log("kullanıcı adı yanlış");
// }


// // yas >=18
// // mezuniyet == "lise" yada mezuniyet =="üniversite"

// let yas=20;
// let mezuniyet ="üniversite";

// if((yas >=18) && (mezuniyet =="lise" || mezuniyet=="üniversite")){
//     console.log("ehliyet alabilir");

// 15

// 1************************
// let sayi = prompt("Lütfen bir sayı giriniz?");

// if((sayi>10) && (sayi<50)) {
//     console.log("Sayı 10 ile 50 arasındadır");
// }
// else{
//     console.log("Değildir.");
// }


// 2*************************

// let number1 = prompt("Lütfen bir sayı Giriniz");

// if((number1%2==1) && (number1>0)){
//     console.log("pozitif tek sayıdır");
// }
// else{
//     console.log("pozitif tek sayıdır değildir   ");
// }

// 3**********************************

// let x = prompt("X değeri giriniz");
// let y = prompt("y değeri giriniz");
// let z = prompt("z değeri giriniz");

// if (x>y && x>z){
//     console.log("x, hem y hemde z den büyük");
// }
// else if(y>x && y>z){
//     console.log("y, hem x hemde z den büyük");
// }
// else{
//     console.log("z hem x den hem de y den büyüktür");
//     }
    
// let vize1 = prompt("Vize1 giriniz");
// let vize2 = prompt("Vize2 giriniz");
// let final = prompt("Final giriniz");

// ortalamaNot = (vize1*0.2+vize2*0.2+final*0.6)
// console.log(ortalamaNot);

// if(ortalamaNot> 50){
//     console.log("geçtiniz");
// }
// else{
//     console.log("kaldınız");
// }

// if(ortalamaNot>=50 && final>50){
//     console.log("geçtiniz");
// }
// else{
//     console.log("kaldınız");
// }

// if(final>70 || ortalamaNot<50){
//     console.log("geçtiniz");
// }
// else{
//     console.log("kaldınız");
// }

// let yas = 64;



// let emeklilik = (65-yas)>0 ? "Emekliliğe" + (65-yas) + "yıl kaldı" : "Zaten emekli oldunuz";

// let mesaj = `benim adım samo.${emeklilik}`

// console.log(mesaj);

// let kursAdi = "Komple Uygulamalı Web Geliştime Eğitimi";

// let sonuc;

// sonuc = kursAdi.toLowerCase();

// sonuc1 = sonuc.toUpperCase();

// sonuc1 = kursAdi.length;

// console.log(sonuc1);

// let url="https://www.sadikturan.com/";

// sonuc =url.length;
// console.log(sonuc);

// let kursAdi = "Komple Web Geliştirme Kursu" ;

// let sonuc1 = kursAdi.split(" ");
// console.log(sonuc1);

// let sonuc2 = url.startsWith("https");
// console.log(sonuc2);

// let sonuc3= kursAdi.includes("Eğitimi");
// console.log(sonuc3);

// let lowerKursAdi=kursAdi.toLowerCase();
// console.log(lowerKursAdi);

// let designkursAdi= lowerKursAdi.replaceAll(" ","-");
// console.log(designkursAdi);

// let result = url.concat(designkursAdi);
// console.log(result);

// let number = "10";
// console.log(typeof number);

// let number1= "10a";
// console.log(isNaN(number1)); 

// sonuc = Math.random();

// console.log(sonuc);

// let time = new Date();

// let timeDate=time.getDate();
// console.log(timeDate);

// let timeYear = time.getFullYear();
// console.log(timeYear);

// let result5 = timeYeaer.setFullYear(2025);

// console.log(result5);

// simdi = new Date();
// console.log(simdi);

// dogumTarihi = new Date(1988, 4, 11);

// sonuc = simdi.getFullYear()-dogumTarihi.getFullYear();
// console.log(sonuc);

// let urunler = ["iphone12","iphone13","iphone14"];
// let fiyatlar =[12000, 13000, 14000];
// let renkler = ["siyah","beyaz","kırmızı"];

// console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
// console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
// console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);

// let urun1 =["iphone 12",12000,"siyah"];
// let urun2 =["iphone 13",13000,"beyaz"];
// let urun3 =["iphone 14",14000,"kırmızı"];

// urun1[2] = "cyan";
// console.log(urun1[2]);

// let ogrenciler = ["mert","ali","ayşe"];

// sonuc=ogrenciler.length;
// console.log(sonuc);


// // array to string

// sonuc = ogrenciler.toString();

// console.log(sonuc);

// sonuc = ogrenciler.join("/");
// console.log(sonuc);


// let fruits = ["elma", "armut", "muz", "çilek"];

// howMany=fruits.length;
// console.log(howMany);

// firstproduct=fruits.pop();

// console.log(firstproduct);

// lastproduct = fruits.shift();
// console.log(lastproduct);

// question1 = fruits.includes("elma");
// console.log(question1);

// let users1={
//     "ad":"Samet",
//     "soyad": "Erdoğan",
//     "yas": 34,
//     "adres":"Zonguldak"
// }

// let users2={
//     "ad":"Nafiye",
//     "soyad": "Erdoğan",
//     "yas": 31,
//     "adres":"Isparta"
// }

// let user =[users1,users2];

// let add = user[1].ad;
// console.log(user);
// console.log(add);
// // let sonuc;
// // sonuc = users.ad;
// // sonuc= users.soyad;
// // sonuc = users["yas"];

// // console.log(sonuc);


// Object Uygulama

// 1- Sipariş bilgilerini object içerisinde saklayınız.
//     2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
//     3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

//     siparis1={sipariş id: 101
//     sipariş tarihi: 31.12.2022
//     ödeme şekli: kredi kartı
//     kargo adresi: Yahya kaptan mah. Kocaeli İzmit
//     satın alınan ürünler: 
//         ürün id: 5
//         ürün başlığı: IPhone 13 Pro
//         ürün url: http://abc.com/iphone-13-pro
//         ürün fiyatı: 22000

//         ürün id: 6
//         ürün başlığı: IPhone 13 Pro Max
//         ürün url: http://abc.com/iphone-13-pro-max
//         ürün fiyatı: 25000

//     müşteri:
//         müşteri id: 12
        
//     satıcı:
//         firma id: 34
//         firma adı: Apple Türkiye}

//     sipariş id: 102
//     sipariş tarihi: 30.12.2022
//     ödeme şekli: kredi kartı
//     kargo adresi: Yahya kaptan mah. Kocaeli İzmit
//     satın alınan ürünler: 

//         ürün id: 6
//         ürün başlığı: IPhone 13 Pro Max
//         ürün url: http://abc.com/iphone-13-pro-max
//         ürün fiyatı: 25000

//     müşteri:
//         müşteri id: 12
        
//     satıcı:
//         firma id: 34
//         firma adı: Apple Türkiye

// 1*********************************

// let siparis_1 = {
//     "siparis_id":10,
//     "siparis_tarihi":"30.12.2022",
//     "odeme_sekli":"kredi kartı",
//     "kargo_adresi":"Yahya kaptan mah. Kocaeli İzmit"
//     "satin_alinan_urunler":{
//         "urun_id": 5,
//         "urun_basligi": "IPhone 13 Pro",
//         "urun_url": "http://abc.com/iphone-13-pro"
//         "urun_fiyati": 25000

//     }

// };
// let i = 0;
// for (let i = 0; i< 10; i++) {
//     console.log(i);;
    
// }

// let sayilar = [1,4,5,8,3,2];

// let i = 0;
// let toplam = 0;

// for(let i =0; i<sayilar.length; i++){
//     toplam+=sayilar[i];
// }
// console.log(toplam);


// let sayilar =[1,2,8,15,10,25];

// let i=0;
// for(let i =0;i<sayilar.length;i++){
//     console.log(i**2);
// }

// let i=0;

// for(let i = 0;i<sayilar.length;i++){
//     if(sayilar[i]%5==0){
//         console.log(sayilar[i]);
//     };
// }

// let i=0;
// let toplam =0;
// for(let i = 0;i<sayilar.length;i++){
//     if(sayilar[i]%2 == 0){;
//         toplam +=sayilar[i];
        
        
//     }   
// }
// console.log(toplam);

// let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23"];

// // let i = 0;
// // for(let i = 0; i<urunler.length;i++){
// //     console.log(urunler[i].toUpperCase());
// // }

// let i = 0;
// let adet = 0;
// for(let i = 0; i<urunler.length; i++){
//     if(urunler[i].includes("samsung")){
//         adet++;
//     }
   
// }
// console.log(adet);

// let ogrenciler = [
//     {"ad":"yigit", "soyad": "bilgi","notlar": [60,70,60]},
//     {"ad":"ada", "soyad": "bilgi","notlar": [80,70,80]},
//     {"ad":"çınar", "soyad": "bilgi","notlar": [70,70,60]},
// ];

// let i = 0;
// for(let i =0; i< ogrenciler.length; i++){
//     for()
//     console.log(ogrenciler[i].notlar);
// }

// let sayilar =[1,3,5,7];

// function selamlama(){
//     console.log(merhaba);
// }

// function kelimeYazdir(kelime, adet){
//     for(let i =0; i<adet; i++){
//         console.log(kelime);
//     }
// }

// kelimeYazdir("merhaba",4);


// function dikdortgenAlan(kisa_kenar,uzun_kenar){
//    alan = kisa_kenar*uzun_kenar;
//    cevre = 2*(kisa_kenar+uzun_kenar);

//    return `alan : ${alan}, cevre: ${cevre}`;
   
// }

// let sonuc = dikdortgenAlan(3,4);
// console.log(sonuc);

// Yazı Tura Uygulaması


// function yaziTuraAt(){
//     let random = Math.random(); //0-1 arası
//     if(random < 0.5){
//         console.log("yazı");
//     }
//     else{
//         console.log("tura");
//     }
//     console.log(random);
// }

// yaziTuraAt();
// yaziTuraAt();
// yaziTuraAt();

function tamBolenler(sayi){
    let sayilar=[];

    for(let i=2;i<sayi;i++){
        if(sayi % i == 0){
            sayilar.push(i);
        }
    }
    return sayilar;
}


console.log(tamBolenler(10)); 
console.log(tamBolenler(15)); 

