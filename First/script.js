const product = {
    name: "guitar",
    price: 120,
    quantity: 12,
};

function receiveObj(ObjectP) {
    let newObj = { ...ObjectP, category: "Acoustic" }; // Adiciona nova propriedade
    return newObj;
}

receiveObj(product);

console.log(product)
// Crie uma função que receba um produto e retorne uma mensagem no formato:
// "Produto: [nome] custa [preço] na categoria [categoria]."
function receiveProd(product){
    console.log(`Produto: ${product.name} custa ${product.price} na categoria ${product.category} `)
}
myName = ["assino", "com", "x"]
receiveProd(receiveObj(product));

// 2 Implemente uma classe chamada Turma que permita gerenciar estudantes.

// A classe deve ter as propriedades: nome da turma e uma lista de estudantes (estudantes).
// Crie métodos para:
// Adicionar um estudante (nome e nota).
// Remover um estudante pelo nome.
// Calcular a média das notas dos estudantes.
// Instancie a classe e simule a criação de uma turma com pelo menos 3 estudantes.

class SchoolClass{
    
    constructor(className){
        this.className = className
        this.studentList = [];
        this.student = [];
    }
    //Método que matricula o aluno na turma / Method for the student register
    studentRegistration(name, grade){
        this.studentName = name;
        this.studentGrade = grade;
        this.setList(this.student = {"Name" : name, "Grade" : grade});
        return this.student = {"Name" : name, "Grade" : grade};
    }
    //Adicionar aluno matriculado à lista de estudantes / Add the registred student to the class List
    setList(register){
        if (register){
            console.log(`Student succesfully registred `);
            this.studentList.push(register);
        }else{
            console.log("No student register detected ");
        }
    }
    //Remove student by name
    studentDel(name){
        //For each student in the list
        this.studentList.forEach((element) => {
            //if student name (parameter) === student name of the list
            if (name === element.Name){
                //Get the student index in the array
                const getIndex = (elem) => elem.Name == element.Name;
                const index = this.studentList.findIndex(getIndex);
                //If index exists (means if the name parameter is in the array)
                if(index > -1){
                    this.studentList.splice(index, 1); // 2nd parameter means remove one item only
                }else{
                    console.log("Index not found")
                }
            }

        })
    }

    setAverage(){
        let i=0
        const SList = this.studentList;
        const SGrades = []
        SList.forEach((element) => {
            i++;
            SGrades.push(element.Grade);
        });
        const sum = SGrades.reduce((partialSum, a) => partialSum + a, 0);
        console.log(sum);
        return console.log(`Final class average grade: ${sum/i}`);
    }

}
classe = new SchoolClass("Turma 141");
aluno = classe.studentRegistration("Luan", 9);
aluno2 = classe.studentRegistration("Abner", 9);
aluno3 = classe.studentRegistration("Ajata", 0);
classe.setAverage();
classe.studentDel("Ajata");
console.log(classe.studentList);