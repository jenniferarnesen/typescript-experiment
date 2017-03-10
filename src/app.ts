import Person from './person';

function greeter(person : Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

class Student {
    fullName: string;
    constructor(public firstName : string, public middleInitial : string, public lastName : string) {
        this.fullName = `${firstName} ${firstName} ${lastName}`;
    }
}

class Parent {
    constructor(public firstName : string, public middleInitial : string, public lastName : string) {
        console.log('fullname of parent', this.firstName);
    }
}

const student = new Student('Tommy', 'Lee', 'Jones');
const args:string[] = ['Nicolas', 'J', 'Cage'];
const parent = new (<any>Parent)(...args);

document.getElementById('student-part').innerHTML = greeter(student);
document.getElementById('parent-part').innerHTML = greeter(parent);


