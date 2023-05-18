type MandatoryType = { name: string; age: number; salary: number };

interface MandatoryInterface {
  name: string;
  age: number;
  salary: number;
}

const addMeInMyCrush2 = <
  T extends MandatoryInterface
>(
  myInfo: T
) => {
  const crush = "kate";

  const newData = { ...myInfo, crush };

  return newData;
};
type MyInfoType = {
  name: string;
  age: number;
  salary: number;
};

const myInfo2: MyInfoType = {
  name: "tanvir",
  age: 100,
  salary: 1000,
};

const result222 = addMeInMyCrush2(myInfo2);
