interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getToDo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  return await response.json();
};

const getTodoData = async (): Promise<void> => {
  const result = await getToDo();
  console.log(result);
};

getToDo();

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "data ";

    if (data) {
      resolve(data);
    }
  });
};

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = false;

    if (data) {
      resolve(data);
    }
  });
};

interface DataType {
  data: string;
}

const makePromiseObject = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = { data: "new data" };

    if (data) {
      resolve(data);
    }
  });
};
const getPromiseData = async (): Promise<void> => {
  const data = await makePromise();
};

const getPromiseDataBoolena = async (): Promise<void> => {
  const data = await makePromiseBoolean();
};

const getPromiseDataObj = async (): Promise<DataType> => {
  const data = await makePromiseObject();
  return data;
};
