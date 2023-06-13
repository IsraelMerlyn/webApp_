export const MARCAS = [
  { id: 1, nombre: "iphone 7",fecha:"2016" },
  { id: 2, nombre: "iphone 8",fecha:"2016" },
  { id: 3, nombre: "iphone X / XE" ,fecha:"2018" },
  { id: 4, nombre: "iphone 11" ,fecha:"2019"},
  { id: 5, nombre: "iphone 12",fecha:"2020" },
  { id: 6, nombre: "iphone 12 PRO" ,fecha:"2020"},
  { id: 7, nombre: "iphone 12 PRO MAX" ,fecha:"2020"},
  { id: 8, nombre: "iphone 13",fecha:"2021" },
  { id: 9, nombre: "iphone 13 PRO",fecha:"2021" },
  { id: 10, nombre: "iphone 13 PRO MAX" ,fecha:"2021"},
  { id: 11, nombre: "iphone 14",fecha:"2022" },
  { id: 12, nombre: "iphone 14 PRO",fecha:"2022" },
  { id: 13, nombre: "iphone 14 PRO MAX",fecha:"2022" },
];

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(
  new Array(15),
  (valor, index) => YEARMAX - index
);

export const PLANES = [
  { id: 1, nombre: "Bypass" },
  { id: 2, nombre: "Liberacion" },
  { id: 3, nombre: "Plist" },
  
];
