// properties

interface Model<TData, TMethods> {
  data: TData;
  method: TMethods;
}

interface IUser2 {
  firstName: string;
  lastName: string;
}

// method
interface IMethod {
  fullName(): string;
}

type model = Model<IUser2, IMethod>;

class User2 implements model {
  data: IUser2;
  method: IMethod;

  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName };
    this.method={
        fullName:()=>`${firstName} ${lastName}`
    }
  }
}


const user1=new User2("Tanvir","ronnie")

console.log(user1.method.fullName())