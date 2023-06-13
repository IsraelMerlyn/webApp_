export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "1":
      incremento = 1.3;
      break;
    case "2":
      incremento = 1.15;
      break;
    case "3":
      incremento = 5.05;
      break;
      case "4":
      incremento = 5.05;
      break;
      case "5":
      incremento = 6.55;
      break;
      case "6":
      incremento = 7.05;
      break;
      case "7":
      incremento = 7.50;
      break;
      case "8":
      incremento = 8.0;
      break;
      case "9":
      incremento = 8.20;
      break;
      case "10":
      incremento = 8.45;
      break;
      case "11":
      incremento = 8.55;
      break;
      case "12":
      incremento = 8.65;
      break;
      case "13":
      incremento = 8.95;
      break;
      case "14":
      incremento = 8.05;
      break;
    default:
      break;
  }

  return incremento;
}

export function calcularPlan(plan) {
  return plan === "1" ? 1.2 : 1.5 ;
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
