let price =400, Qtn =3;
const All_Data ={
    price ,
    Qtn,
    calcutate(){
        return this.price *this.Qtn;
    }
}
console.log(All_Data.calcutate()) //1200