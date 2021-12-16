// Crie, em TypeScript, uma interface chamada UserProps, que conterá as propriedades firtsName,lastName, username, email, password, cpf, contacto e isAdmin. Após criar a interface, crie uma classe User implementando essa interface. Faça os métodos getter e setter de cada propriedade.

interface UserProps{
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    cpf: string;
    contato: number;
    isAdmin: boolean;
}

class User implements UserProps{
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    cpf: string;
    contato: number;
    isAdmin: boolean;    

    constructor(firstName: string, lastName: string,userName: string, email: string, password: string, cpf: string, contato: number, isAdmin: boolean){
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.contato = contato;
        this.isAdmin = isAdmin;
    }

    getFirstName(){
        return this.firstName;
    }
    setFirstName(firstName:string){
        return this.firstName = firstName;
    }

    getLastName(){
        return this.lastName;
    }
    setLastName(lastName:string){
        return this.lastName = lastName;
    }

    getUserName(){
        return this.userName;
    }
    setUserName(userName:string){
        return this.userName = userName;
    }

    getEmail(){
        return this.email;
    }
    setEmail(email:string){
        return this.email = email;
    }

    getPassword(){
        return this.password;
    }
    setPassword(password:string){
        return this.password = this.password;
    }

    getCpf(){
        return this.cpf;
    }
    setCpf(cpf:string){
        return this.cpf = cpf;
    }

    getContato(){
        return this.contato;
    }
    setContato(contato:number){
        return this.contato = contato;
    }

    getIsAdmin(){
        return this.isAdmin;
    }
    setIsAdmin(isAdmin:boolean){
        return this.isAdmin = isAdmin;
    }

    criarUser(){
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.userName);
        console.log(this.email);
        console.log(this.password);
        console.log(this.cpf);
        console.log(this.contato);
        console.log(this.isAdmin);
    }
}

let user = new User("Evelyn","Mota","evelynmota","evelynmota.arq@gmail.com","adm123","111.111.111-11",71999999999,false);

user.criarUser();
console.log(user);
console.log(user.setUserName("ivymota"));
console.log(user.getIsAdmin());