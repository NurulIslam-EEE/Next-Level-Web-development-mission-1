let emni: any;
emni = "Next level";

// (emni as string).length;
<string>emni.length;

function kgToGm(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return ` ${value}`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return `${value}`;
  }
}

// const resultToBeNumber=kgToGm(1000) as number
const resultToBeNumber = <number>kgToGm(1000);
// const resultToBeString=kgToGm(1000) as string;

const resultToBeString = <string>kgToGm(1000);

type CustomErrorType = {
  message: string;
};
