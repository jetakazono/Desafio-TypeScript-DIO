/*Como podemos rodar isso em um arquivo .ts sem causar erros? 
let employee = {};
employee.code = 10;
employee.name = "John";
*/ 


interface IEmployee{
    code : number,
    name : string
};

const person1 : IEmployee = {
    code: 1,
    name: "Jessie"
};

const person2 = {} as IEmployee;
person2.code = 2;
person2.name = "Jess";

const person3 : {code:number, name:string} = {
    code: 3,
    name: "Jessica"
};

const person4 = {
    code: 4,
    name: "Jeh"
}