//create a user object(constructor)
class User{
    constructor(email,pass,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=pass;
        this.firstName=first;
        this.lastName=last;
        this.age=age;
        this.address=address;
        this.phoneNumber=phone;
        this.payment=payment;
        this.color=color;
    }
}
//create the register function
function registerUser(){
    let email=$('#txtEmail').val();
    let pass=$('#txtPassword').val();
    let first=$('#txtFirstname').val();
    let last=$('#txtLastname').val();
    let age=$('#txtAge').val();
    let address=$('#txtAddress').val();
    let phone=$('#txtPhone').val();
    let payment=$('#selpayment').val();
    let color=$('#txtColor').val();
    let user= new User(email,pass,first,last,age,address,phone,payment,color);
    console.log(user);
    saveUser(user);//this function is on the storeManager
    clearInputs();
    setNavInfo()
}
//console log the user
function clearInputs(){
    $('#txtEmail').val('');
    $('#txtPassword').val('');
    $('#txtFirstname').val('');
    $('#txtLastname').val('');
    $('#txtAge').val('');
    $('#txtAddress').val('');
    $('#txtPhone').val('');
    $('#selpayment').val('');
    $('#txtColor').val('');
}
function setNavInfo(){
    let list=readUsers();
    let count=list.length;
    $(".menu-info label").text(count+" users");
}
function init(){
    console.log("init function");
    $('#btn-save').click(registerUser);
    setNavInfo();
}
window.onload=init;