//* ======================================================
//*                 (OBJECTS)
//* ======================================================

//? Diziler (Arrays) sıralı bellek yapısıdır. Böylece, onlara indeksleyerek erişebiliriz.
//? Object leri daha karmaşık (yapılandırılmamış) bellek ihtiyaçları için kullanabiliriz

//?  herhangi bir veriye erişmek için Key-value (property-value) kullanılır


//! We can create an object with 3 methods
//* ---------------------------------------------------------
//* 1-   Object (new) örneği oluşturalım
//* ---------------------------------------------------------

const cars = new Object();
cars.name="BMW";
cars.engine=1.6;
cars.model=2000;

console.log(cars);
console.log( cars.name)
console.log( cars["model"])

//* ---------------------------------------------------------
//* 2-  object constructor kullanalım
//* ---------------------------------------------------------

function Employee(id, name, salary) {
this.empId=id;
this.empName=name;
this.empSalary=salary;
console.log(this);

}
 const kisi1= new Employee(101, "Mehmet", 7000)
 console.log(kisi1);


 //* ---------------------------------------------------------
//* 3- Object literal (En Çok Kullanılan Yol)
//* ---------------------------------------------------------

const person = {
  name: "John",
  surname: "Pitt",
  age: 30,
  job: "developer",
  languages: ["C", "C++", "Phyton", "Java"],
};

console.log(person);
console.log(person.age);
console.log(person.languages[2]);
person.location="Germany"
person.email="john@gmail.com"
person["birth"]=1990;
person.age=40

console.log(person);

//* ======================================================
//*              Objects deki yöntemler
//* ======================================================

const mensch={

name:"John",
surname:"Pitt",
birth:1990,
job:"developer",
hasDriveLicense:true,

calculateAge:function (){

 console.log(this);

 return new Date().getFullYear()-this.birth
},

summary: function(){

 console.log(this);
 return ` ${this.name} is ${this.calculateAge() } years old ` 
}
}

console.log(mensch.calculateAge());
console.log(mensch.summary());

//!NOTE: arrow functions ın sözcüksel bağlamı vardır. Yani this keyword ü bir arrow function içinde kullanırsak beklenmedik değerler alabiliriz. Bir object in içindeki this keyword ü, global scope u (window) ifade ettiği için. this value nun global scope a bağlanmasını önlemek için, object yöntemi içindeki normal function u kullanın.

// key lerin belirli bir sırası (index) olmadığı için object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================

const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];
console.log(people);
//*example1: people dizisindeki job ları göster
people.forEach((p)=>console.log(p["name"] , p.job) )

//*example2: yaşları birer birer arttır sonucu yeni diziye aktar

const yas= people.map((p)=>p.age+1)
console.log(yas);

//* EXAMPLE3: Büyük harfli ad  oluşan ve yaşları 5 artırılmış yeni object li dizi oluşturun

const leute=   people.map((i)=>({

name:i.name.toUpperCase(),
age:i.age+5,


}))
console.log(leute);
console.log(people);

//* EXAMPLE4: Yaşı 33'ün üstünde olan kişilerin name lerini listeleyin


people.filter((p)=>p.age>33).forEach((a)=>console.log(a.name) )
 
//*alternatif olarak sonucu diziye sakladık
 console.log( people.filter((p)=>p.age>33).map((a)=>a.name))



//* EXAMPLE5: Developer  adlarını ve yaşlarını yeni bir object olarak saklayın

const developers=  people.filter((p)=>p.job=="developer").map((a)=>({
 devName:a.name,
 devAge:a.age,

}))

console.log(developers);
 // people.filter((p) => p.job == "developer").forEach((a) => console.log(a.name, a.age))
 
   
   
