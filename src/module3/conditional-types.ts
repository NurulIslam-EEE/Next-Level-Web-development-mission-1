// a type is depended n another type

type a1 = number;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;

// nested condition

type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type Sheikh = {
  wife1: string;
  wife2: string;
};

// type CheckProperty<T> = T extends "wife1" ? true : false;
type CheckProperty<T> = T extends { wife1: string } ? true : false;
type CheckWife1 = CheckProperty<Sheikh>;


type A=keyof Sheikh // wife1/wife2
                // wife1 extends wife1| wife2

type CheckProperty2<T,K> = K extends keyof Sheikh ? true : false;
type CheckWife12 = CheckProperty2<Sheikh,"wife1">;

// check korbe ei sheikh a wife 1 ase kina


// matha kharap example

type Bandhubi="Monika"|"Rachel"|"Pheobo"

type RemoveBandobi<T>=T extends "Rachel"?never:T

type CurrentBandhubi=RemoveBandobi<Bandhubi>



type RemoveBandobi2<T,K>=T extends K?never:T

type CurrentBandhubi2=RemoveBandobi2<Bandhubi,"Monika">
