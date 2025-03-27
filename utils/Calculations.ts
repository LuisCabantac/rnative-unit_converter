export const sqKilometre = {
  sqKilometre(value: number) {
    return value;
  },
  sqMetre(value: number) {
    return value * 1e6;
  },
  sqMile(value: number) {
    return value / 2.59;
  },
  sqYard(value: number) {
    return value * 1.196e6;
  },
  sqFoot(value: number) {
    return value * 1.076e7;
  },
  sqInch(value: number) {
    return value * 1.55e9;
  },
  hectare(value: number) {
    return value * 100;
  },
  acre(value: number) {
    return value * 247.1;
  },
};

export const sqMetre = {
  sqKilometre(value: number) {
    return value / 1e6;
  },
  sqMetre(value: number) {
    return value;
  },
  sqMile(value: number) {
    return value / 2.59e6;
  },
  sqYard(value: number) {
    return value * 1.196;
  },
  sqFoot(value: number) {
    return value * 10.764;
  },
  sqInch(value: number) {
    return value * 1550;
  },
  hectare(value: number) {
    return value / 10000;
  },
  acre(value: number) {
    return value / 4047;
  },
};

export const sqMile = {
  sqKilometre(value: number) {
    return value * 2.59;
  },
  sqMetre(value: number) {
    return value * 2.59e6;
  },
  sqMile(value: number) {
    return value;
  },
  sqYard(value: number) {
    return value * 3.098e6;
  },
  sqFoot(value: number) {
    return value * 2.788e7;
  },
  sqInch(value: number) {
    return value * 4.014e9;
  },
  hectare(value: number) {
    return value * 259;
  },
  acre(value: number) {
    return value * 640;
  },
};

export const sqYard = {
  sqKilometre(value: number) {
    return value / 1.196e6;
  },
  sqMetre(value: number) {
    return value / 1.196;
  },
  sqMile(value: number) {
    return value / 3.098e6;
  },
  sqYard(value: number) {
    return value;
  },
  sqFoot(value: number) {
    return value * 9;
  },
  sqInch(value: number) {
    return value * 1296;
  },
  hectare(value: number) {
    return value / 11960;
  },
  acre(value: number) {
    return value / 4840;
  },
};

export const sqFoot = {
  sqKilometre(value: number) {
    return value / 1.076e7;
  },
  sqMetre(value: number) {
    return value / 10.764;
  },
  sqMile(value: number) {
    return value / 2.788e7;
  },
  sqYard(value: number) {
    return value / 9;
  },
  sqFoot(value: number) {
    return value;
  },
  sqInch(value: number) {
    return value * 144;
  },
  hectare(value: number) {
    return value / 107600;
  },
  acre(value: number) {
    return value / 43560;
  },
};

export const sqInch = {
  sqKilometre(value: number) {
    return value / 1.55e9;
  },
  sqMetre(value: number) {
    return value / 1550;
  },
  sqMile(value: number) {
    return value / 4.014e9;
  },
  sqYard(value: number) {
    return value / 1296;
  },
  sqFoot(value: number) {
    return value / 144;
  },
  sqInch(value: number) {
    return value;
  },
  hectare(value: number) {
    return value / 1.55e7;
  },
  acre(value: number) {
    return value / 6.273e6;
  },
};

export const hectare = {
  sqKilometre(value: number) {
    return value / 100;
  },
  sqMetre(value: number) {
    return value * 10000;
  },
  sqMile(value: number) {
    return value / 259;
  },
  sqYard(value: number) {
    return value * 11960;
  },
  sqFoot(value: number) {
    return value * 107600;
  },
  sqInch(value: number) {
    return value * 1.55e7;
  },
  hectare(value: number) {
    return value;
  },
  acre(value: number) {
    return value * 2.471;
  },
};

export const acre = {
  sqKilometre(value: number) {
    return value / 247.1;
  },
  sqMetre(value: number) {
    return value * 4047;
  },
  sqMile(value: number) {
    return value / 640;
  },
  sqYard(value: number) {
    return value * 4840;
  },
  sqFoot(value: number) {
    return value * 43560;
  },
  sqInch(value: number) {
    return value * 6.273e6;
  },
  hectare(value: number) {
    return value / 2.471;
  },
  acre(value: number) {
    return value;
  },
};

export const hertz = {
  hertz(value: number) {
    return value;
  },
  kHertz(value: number) {
    return value / 1000;
  },
  mHertz(value: number) {
    return value / 1e6;
  },
  gHertz(value: number) {
    return value / 1e9;
  },
};

export const kHertz = {
  hertz(value: number) {
    return value * 1000;
  },
  kHertz(value: number) {
    return value;
  },
  mHertz(value: number) {
    return value / 1000;
  },
  gHertz(value: number) {
    return value / 1e6;
  },
};

export const mHertz = {
  hertz(value: number) {
    return value * 1e6;
  },
  kHertz(value: number) {
    return value * 1000;
  },
  mHertz(value: number) {
    return value;
  },
  gHertz(value: number) {
    return value / 1000;
  },
};

export const gHertz = {
  hertz(value: number) {
    return value * 1e9;
  },
  kHertz(value: number) {
    return value * 1e6;
  },
  mHertz(value: number) {
    return value * 1000;
  },
  gHertz(value: number) {
    return value;
  },
};

export const mpUSGallon = {
  mpUSGallon(value: number) {
    return value;
  },
  mpGallon(value: number) {
    return value * 1.201;
  },
  kmpLitre(value: number) {
    return value / 2.352;
  },
  lp100Km(value: number) {
    return 235.215 / value;
  },
};

export const mpGallon = {
  mpUSGallon(value: number) {
    return value / 1.201;
  },
  mpGallon(value: number) {
    return value;
  },
  kmpLitre(value: number) {
    return value / 2.825;
  },
  lp100Km(value: number) {
    return 282.481 / value;
  },
};

export const kmpLitre = {
  mpUSGallon(value: number) {
    return value * 2.352;
  },
  mpGallon(value: number) {
    return value * 2.825;
  },
  kmpLitre(value: number) {
    return value;
  },
  lp100Km(value: number) {
    return 100 / value;
  },
};

export const lp100Km = {
  mpUSGallon(value: number) {
    return 235.215 / value;
  },
  mpGallon(value: number) {
    return 282.481 / value;
  },
  kmpLitre(value: number) {
    return 100 / value;
  },
  lp100Km(value: number) {
    return value;
  },
};

export const bar = {
  bar(value: number) {
    return value;
  },
  pascal(value: number) {
    return value * 100000;
  },
  pperSqInch(value: number) {
    return value * 14.504;
  },
  sAtmosphere(value: number) {
    return value / 1.013;
  },
  torr(value: number) {
    return value * 750.1;
  },
};

export const pascal = {
  bar(value: number) {
    return value / 100000;
  },
  pascal(value: number) {
    return value;
  },
  pperSqInch(value: number) {
    return value / 6895;
  },
  sAtmosphere(value: number) {
    return value / 101300;
  },
  torr(value: number) {
    return value / 133.3;
  },
};

export const pperSqInch = {
  bar(value: number) {
    return value / 14.504;
  },
  pascal(value: number) {
    return value * 6895;
  },
  pperSqInch(value: number) {
    return value;
  },
  sAtmosphere(value: number) {
    return value / 14.696;
  },
  torr(value: number) {
    return value * 51.715;
  },
};

export const sAtmosphere = {
  bar(value: number) {
    return value * 1.013;
  },
  pascal(value: number) {
    return value * 101300;
  },
  pperSqInch(value: number) {
    return value * 14.696;
  },
  sAtmosphere(value: number) {
    return value;
  },
  torr(value: number) {
    return value * 760;
  },
};

export const torr = {
  bar(value: number) {
    return value / 750.1;
  },
  pascal(value: number) {
    return value * 133.3;
  },
  pperSqInch(value: number) {
    return value / 51.715;
  },
  sAtmosphere(value: number) {
    return value / 760;
  },
  torr(value: number) {
    return value;
  },
};

export const kilometre = {
  kilometre(value: number) {
    return value;
  },
  metre(value: number) {
    return value * 1000;
  },
  centimetre(value: number) {
    return value * 100000;
  },
  millimetre(value: number) {
    return value * 1000000;
  },
  micrometre(value: number) {
    return value * 1e9;
  },
  nanometre(value: number) {
    return value * 1e12;
  },
  mile(value: number) {
    return value / 1.609344;
  },
  yard(value: number) {
    return value / 0.0009144;
  },
  foot(value: number) {
    return value * 3280.84;
  },
  inch(value: number) {
    return value * 39370.1;
  },
};

export const metre = {
  kilometre(value: number) {
    return value / 1000;
  },
  metre(value: number) {
    return value;
  },
  centimetre(value: number) {
    return value * 100;
  },
  millimetre(value: number) {
    return value * 1000;
  },
  micrometre(value: number) {
    return value * 1000000;
  },
  nanometre(value: number) {
    return value * 1000000000;
  },
  mile(value: number) {
    return value / 1609.344;
  },
  yard(value: number) {
    return value / 0.9144;
  },
  foot(value: number) {
    return value / 0.3048;
  },
  inch(value: number) {
    return value / 0.0254;
  },
};

export const centimetre = {
  kilometre(value: number) {
    return value / 100000;
  },
  metre(value: number) {
    return value / 100;
  },
  centimetre(value: number) {
    return value;
  },
  millimetre(value: number) {
    return value * 10;
  },
  micrometre(value: number) {
    return value * 10000;
  },
  nanometre(value: number) {
    return value * 1e7;
  },
  mile(value: number) {
    return value / 160934.4;
  },
  yard(value: number) {
    return value / 91.44;
  },
  foot(value: number) {
    return value / 30.48;
  },
  inch(value: number) {
    return value / 2.54;
  },
};

export const millimetre = {
  kilometre(value: number) {
    return value / 1000000;
  },
  metre(value: number) {
    return value / 1000;
  },
  centimetre(value: number) {
    return value / 10;
  },
  millimetre(value: number) {
    return value;
  },
  micrometre(value: number) {
    return value * 1000;
  },
  nanometre(value: number) {
    return value * 1e6;
  },
  mile(value: number) {
    return value / 1609344;
  },
  yard(value: number) {
    return value / 91.44;
  },
  foot(value: number) {
    return value / 304.8;
  },
  inch(value: number) {
    return value / 25.4;
  },
};

export const micrometre = {
  kilometre(value: number) {
    return value / 1e9;
  },
  metre(value: number) {
    return value / 1e6;
  },
  centimetre(value: number) {
    return value / 10000;
  },
  millimetre(value: number) {
    return value / 1000;
  },
  micrometre(value: number) {
    return value;
  },
  nanometre(value: number) {
    return value * 1000;
  },
  mile(value: number) {
    return value / 1.609e9;
  },
  yard(value: number) {
    return value / 914400;
  },
  foot(value: number) {
    return value / 304800;
  },
  inch(value: number) {
    return value / 25400;
  },
};

export const nanometre = {
  kilometre(value: number) {
    return value / 1e12;
  },
  metre(value: number) {
    return value / 1e9;
  },
  centimetre(value: number) {
    return value / 1e7;
  },
  millimetre(value: number) {
    return value / 1e6;
  },
  micrometre(value: number) {
    return value / 1000;
  },
  nanometre(value: number) {
    return value;
  },
  mile(value: number) {
    return value / 1.609e12;
  },
  yard(value: number) {
    return value / 9.144e8;
  },
  foot(value: number) {
    return value / 3.048e8;
  },
  inch(value: number) {
    return value / 2.54e7;
  },
};

export const mile = {
  kilometre(value: number) {
    return value * 1.609344;
  },
  metre(value: number) {
    return value * 1609.344;
  },
  centimetre(value: number) {
    return value * 160934.4;
  },
  millimetre(value: number) {
    return value * 1609344;
  },
  micrometre(value: number) {
    return value * 1.609e9;
  },
  nanometre(value: number) {
    return value * 1.609e12;
  },
  mile(value: number) {
    return value;
  },
  yard(value: number) {
    return value * 1760;
  },
  foot(value: number) {
    return value * 5280;
  },
  inch(value: number) {
    return value * 63360;
  },
};

export const yard = {
  kilometre(value: number) {
    return value * 0.0009144;
  },
  metre(value: number) {
    return value * 0.9144;
  },
  centimetre(value: number) {
    return value * 91.44;
  },
  millimetre(value: number) {
    return value * 914.4;
  },
  micrometre(value: number) {
    return value * 914400;
  },
  nanometre(value: number) {
    return value * 9.144e8;
  },
  mile(value: number) {
    return value / 1760;
  },
  yard(value: number) {
    return value;
  },
  foot(value: number) {
    return value * 3;
  },
  inch(value: number) {
    return value * 36;
  },
};

export const foot = {
  kilometre(value: number) {
    return value / 3280.84;
  },
  metre(value: number) {
    return value / 3.281;
  },
  centimetre(value: number) {
    return value * 30.48;
  },
  millimetre(value: number) {
    return value * 304.8;
  },
  micrometre(value: number) {
    return value * 304800;
  },
  nanometre(value: number) {
    return value * 3.048e8;
  },
  mile(value: number) {
    return value / 5280;
  },
  yard(value: number) {
    return value / 3;
  },
  foot(value: number) {
    return value;
  },
  inch(value: number) {
    return value * 12;
  },
};

export const inch = {
  kilometre(value: number) {
    return value / 3280.84;
  },
  metre(value: number) {
    return value / 3.281;
  },
  centimetre(value: number) {
    return value * 30.48;
  },
  millimetre(value: number) {
    return value * 304.8;
  },
  micrometre(value: number) {
    return value * 304800;
  },
  nanometre(value: number) {
    return value * 3.048e8;
  },
  mile(value: number) {
    return value / 5280;
  },
  yard(value: number) {
    return value / 3;
  },
  foot(value: number) {
    return value / 12;
  },
  inch(value: number) {
    return value;
  },
};

export const usGallon = {
  usGallon(value: number) {
    return value;
  },
  usQuart(value: number) {
    return value * 4;
  },
  usPint(value: number) {
    return value * 8;
  },
  usCup(value: number) {
    return value * 15.773;
  },
  usOunce(value: number) {
    return value * 128;
  },
  usTablespoon(value: number) {
    return value * 256;
  },
  usTeaspoon(value: number) {
    return value * 768;
  },
  liter(value: number) {
    return value * 3.785;
  },
  milliliter(value: number) {
    return value * 3785;
  },
};

export const usQuart = {
  usGallon(value: number) {
    return value / 4;
  },
  usQuart(value: number) {
    return value;
  },
  usPint(value: number) {
    return value * 2;
  },
  usCup(value: number) {
    return value * 3.942;
  },
  usOunce(value: number) {
    return value * 32;
  },
  usTablespoon(value: number) {
    return value * 64;
  },
  usTeaspoon(value: number) {
    return value * 192;
  },
  liter(value: number) {
    return value / 1.057;
  },
  milliliter(value: number) {
    return value * 946.353;
  },
};

export const usPint = {
  usGallon(value: number) {
    return value / 8;
  },
  usQuart(value: number) {
    return value / 2;
  },
  usPint(value: number) {
    return value;
  },
  usCup(value: number) {
    return value * 1.972;
  },
  usOunce(value: number) {
    return value * 16;
  },
  usTablespoon(value: number) {
    return value * 32;
  },
  usTeaspoon(value: number) {
    return value * 96;
  },
  liter(value: number) {
    return value * 0.473176;
  },
  milliliter(value: number) {
    return value * 473.176;
  },
};

export const usCup = {
  usGallon(value: number) {
    return value / 15.772;
  },
  usQuart(value: number) {
    return value / 3.943;
  },
  usPint(value: number) {
    return value / 1.972;
  },
  usCup(value: number) {
    return value;
  },
  usOunce(value: number) {
    return value * 8.11537;
  },
  usTablespoon(value: number) {
    return value * 16.2307;
  },
  usTeaspoon(value: number) {
    return value * 48.6922;
  },
  liter(value: number) {
    return value * 0.24;
  },
  milliliter(value: number) {
    return value * 240;
  },
};

export const usOunce = {
  usGallon(value: number) {
    return value * 0.0078125;
  },
  usQuart(value: number) {
    return value * 0.03125;
  },
  usPint(value: number) {
    return value * 0.0625;
  },
  usCup(value: number) {
    return value * 0.123223;
  },
  usOunce(value: number) {
    return value;
  },
  usTablespoon(value: number) {
    return value * 2;
  },
  usTeaspoon(value: number) {
    return value * 6;
  },
  liter(value: number) {
    return value * 0.0295735;
  },
  milliliter(value: number) {
    return value * 29.5735;
  },
};

export const usTablespoon = {
  usGallon(value: number) {
    return value * 0.00390625;
  },
  usQuart(value: number) {
    return value * 0.015625;
  },
  usPint(value: number) {
    return value * 0.03125;
  },
  usCup(value: number) {
    return value * 0.0616115;
  },
  usOunce(value: number) {
    return value * 0.5;
  },
  usTablespoon(value: number) {
    return value;
  },
  usTeaspoon(value: number) {
    return value * 3;
  },
  liter(value: number) {
    return value / 67.628;
  },
  milliliter(value: number) {
    return value * 14.7868;
  },
};

export const usTeaspoon = {
  usGallon(value: number) {
    return value / 768;
  },
  usQuart(value: number) {
    return value / 192;
  },
  usPint(value: number) {
    return value / 96;
  },
  usCup(value: number) {
    return value / 48.692;
  },
  usOunce(value: number) {
    return value / 6;
  },
  usTablespoon(value: number) {
    return value / 3;
  },
  usTeaspoon(value: number) {
    return value;
  },
  liter(value: number) {
    return value / 202.9;
  },
  milliliter(value: number) {
    return value * 4.92892;
  },
};

export const liter = {
  usGallon(value: number) {
    return value / 3.785;
  },
  usQuart(value: number) {
    return value * 1.057;
  },
  usPint(value: number) {
    return value * 2.113;
  },
  usCup(value: number) {
    return value * 4.167;
  },
  usOunce(value: number) {
    return value * 33.814;
  },
  usTablespoon(value: number) {
    return value * 67.628;
  },
  usTeaspoon(value: number) {
    return value * 202.9;
  },
  liter(value: number) {
    return value;
  },
  milliliter(value: number) {
    return value * 1000;
  },
};

export const milliliter = {
  usGallon(value: number) {
    return value / 3785;
  },
  usQuart(value: number) {
    return value / 946.4;
  },
  usPint(value: number) {
    return value / 473.2;
  },
  usCup(value: number) {
    return value / 240;
  },
  usOunce(value: number) {
    return value / 29.574;
  },
  usTablespoon(value: number) {
    return value / 14.787;
  },
  usTeaspoon(value: number) {
    return value / 4.929;
  },
  liter(value: number) {
    return value / 1000;
  },
  milliliter(value: number) {
    return value;
  },
};

export const microgram = {
  microgram(value: number) {
    return value;
  },
  milligram(value: number) {
    return value / 1000;
  },
  gram(value: number) {
    return value / 1e6;
  },
  kilogram(value: number) {
    return value / 1e9;
  },
  metricTon(value: number) {
    return value / 1e12;
  },
  ounce(value: number) {
    return value / 2.835e7;
  },
  pound(value: number) {
    return value / 4.536e8;
  },
  stone(value: number) {
    return value / 6.35e9;
  },
  usTon(value: number) {
    return value / 9.072e11;
  },
};

export const milligram = {
  microgram(value: number) {
    return value * 1000;
  },
  milligram(value: number) {
    return value;
  },
  gram(value: number) {
    return value / 1000;
  },
  kilogram(value: number) {
    return value / 1e6;
  },
  metricTon(value: number) {
    return value / 1e9;
  },
  ounce(value: number) {
    return value / 28350;
  },
  pound(value: number) {
    return value / 453600;
  },
  stone(value: number) {
    return value / 6.35e6;
  },
  usTon(value: number) {
    return value / 9.072e8;
  },
};

export const gram = {
  microgram(value: number) {
    return value * 1e6;
  },
  milligram(value: number) {
    return value * 1000;
  },
  gram(value: number) {
    return value;
  },
  kilogram(value: number) {
    return value / 1000;
  },
  metricTon(value: number) {
    return value / 1e6;
  },
  ounce(value: number) {
    return value / 28.35;
  },
  pound(value: number) {
    return value / 453.6;
  },
  stone(value: number) {
    return value / 6350;
  },
  usTon(value: number) {
    return value / 907200;
  },
};

export const kilogram = {
  microgram(value: number) {
    return value * 1e9;
  },
  milligram(value: number) {
    return value * 1e6;
  },
  gram(value: number) {
    return value * 1000;
  },
  kilogram(value: number) {
    return value;
  },
  metricTon(value: number) {
    return value / 1000;
  },
  ounce(value: number) {
    return value * 35.274;
  },
  pound(value: number) {
    return value * 2.205;
  },
  stone(value: number) {
    return value / 6.35;
  },
  usTon(value: number) {
    return value / 907.2;
  },
};

export const metricTon = {
  microgram(value: number) {
    return value * 1e12;
  },
  milligram(value: number) {
    return value * 1e9;
  },
  gram(value: number) {
    return value * 1e6;
  },
  kilogram(value: number) {
    return value * 1000;
  },
  metricTon(value: number) {
    return value;
  },
  ounce(value: number) {
    return value * 35270;
  },
  pound(value: number) {
    return value * 2205;
  },
  stone(value: number) {
    return value * 157.5;
  },
  usTon(value: number) {
    return value * 1.102;
  },
};

export const ounce = {
  microgram(value: number) {
    return value * 2.835e7;
  },
  milligram(value: number) {
    return value * 28350;
  },
  gram(value: number) {
    return value * 28.35;
  },
  kilogram(value: number) {
    return value / 35.274;
  },
  metricTon(value: number) {
    return value / 35270;
  },
  ounce(value: number) {
    return value;
  },
  pound(value: number) {
    return value / 16;
  },
  stone(value: number) {
    return value / 224;
  },
  usTon(value: number) {
    return value / 32000;
  },
};

export const pound = {
  microgram(value: number) {
    return value * 4.536e8;
  },
  milligram(value: number) {
    return value * 453600;
  },
  gram(value: number) {
    return value * 453.6;
  },
  kilogram(value: number) {
    return value / 2.205;
  },
  metricTon(value: number) {
    return value / 2205;
  },
  ounce(value: number) {
    return value * 16;
  },
  pound(value: number) {
    return value;
  },
  stone(value: number) {
    return value / 14;
  },
  usTon(value: number) {
    return value / 2000;
  },
};

export const stone = {
  microgram(value: number) {
    return value * 6.35e9;
  },
  milligram(value: number) {
    return value * 6.35e6;
  },
  gram(value: number) {
    return value * 6350;
  },
  kilogram(value: number) {
    return value * 6.35;
  },
  metricTon(value: number) {
    return value / 157.5;
  },
  ounce(value: number) {
    return value * 224;
  },
  pound(value: number) {
    return value * 14;
  },
  stone(value: number) {
    return value;
  },
  usTon(value: number) {
    return value / 142.9;
  },
};

export const usTon = {
  microgram(value: number) {
    return value * 9.072e11;
  },
  milligram(value: number) {
    return value * 9.072e8;
  },
  gram(value: number) {
    return value * 907200;
  },
  kilogram(value: number) {
    return value * 907.2;
  },
  metricTon(value: number) {
    return value / 1.102;
  },
  ounce(value: number) {
    return value * 32000;
  },
  pound(value: number) {
    return value * 2000;
  },
  stone(value: number) {
    return value * 142.9;
  },
  usTon(value: number) {
    return value;
  },
};

export const miPerHour = {
  miPerHour(value: number) {
    return value;
  },
  ftPerSecond(value: number) {
    return value * 1.467;
  },
  mPerSecond(value: number) {
    return value / 2.237;
  },
  kmPerHour(value: number) {
    return value * 1.609;
  },
  knot(value: number) {
    return value / 1.151;
  },
};

export const ftPerSecond = {
  miPerHour(value: number) {
    return value / 1.467;
  },
  ftPerSecond(value: number) {
    return value;
  },
  mPerSecond(value: number) {
    return value / 3.281;
  },
  kmPerHour(value: number) {
    return value * 1.097;
  },
  knot(value: number) {
    return value / 1.688;
  },
};

export const mPerSecond = {
  miPerHour(value: number) {
    return value * 2.237;
  },
  ftPerSecond(value: number) {
    return value * 3.281;
  },
  mPerSecond(value: number) {
    return value;
  },
  kmPerHour(value: number) {
    return value * 3.6;
  },
  knot(value: number) {
    return value * 1.944;
  },
};

export const kmPerHour = {
  miPerHour(value: number) {
    return value / 1.609;
  },
  ftPerSecond(value: number) {
    return value / 1.097;
  },
  mPerSecond(value: number) {
    return value / 3.6;
  },
  kmPerHour(value: number) {
    return value;
  },
  knot(value: number) {
    return value / 1.852;
  },
};

export const knot = {
  miPerHour(value: number) {
    return value * 1.151;
  },
  ftPerSecond(value: number) {
    return value * 1.688;
  },
  mPerSecond(value: number) {
    return value / 1.944;
  },
  kmPerHour(value: number) {
    return value * 1.852;
  },
  knot(value: number) {
    return value;
  },
};

export const celsius = {
  celsius(value: number) {
    return value;
  },
  fahrenheit(value: number) {
    return (value * 9) / 5 + 32;
  },
  kelvin(value: number) {
    return value + 273.15;
  },
  rankine(value: number) {
    return ((value + 273.15) * 9) / 5;
  },
};

export const fahrenheit = {
  celsius(value: number) {
    return ((value - 32) * 5) / 9;
  },
  fahrenheit(value: number) {
    return value;
  },
  kelvin(value: number) {
    return ((value + 459.67) * 5) / 9;
  },
  rankine(value: number) {
    return value + 459.67;
  },
};

export const kelvin = {
  celsius(value: number) {
    return value - 273.15;
  },
  fahrenheit(value: number) {
    return (value * 9) / 5 - 459.67;
  },
  kelvin(value: number) {
    return value;
  },
  rankine(value: number) {
    return (value * 9) / 5;
  },
};

export const rankine = {
  celsius(value: number) {
    return (value * 5) / 9 - 273.15;
  },
  fahrenheit(value: number) {
    return value - 459.67;
  },
  kelvin(value: number) {
    return (value * 5) / 9;
  },
  rankine(value: number) {
    return value;
  },
};

export const nSecond = {
  nSecond(value: number) {
    return value;
  },
  muSecond(value: number) {
    return value / 1000;
  },
  mSecond(value: number) {
    return value / 1e6;
  },
  second(value: number) {
    return value / 1e9;
  },
  minute(value: number) {
    return value / 6e10;
  },
  hour(value: number) {
    return value / 3.6e12;
  },
  day(value: number) {
    return value / 8.64e13;
  },
  week(value: number) {
    return value / 6.048e14;
  },
  month(value: number) {
    return value / 2.628e15;
  },
  calYear(value: number) {
    return value / 3.154e16;
  },
  decade(value: number) {
    return value / 3.154e17;
  },
  century(value: number) {
    return value / 3.154e18;
  },
};

export const muSecond = {
  nSecond(value: number) {
    return value * 1000;
  },
  muSecond(value: number) {
    return value;
  },
  mSecond(value: number) {
    return value / 1000;
  },
  second(value: number) {
    return value / 1e6;
  },
  minute(value: number) {
    return value / 6e7;
  },
  hour(value: number) {
    return value / 3.6e9;
  },
  day(value: number) {
    return value / 8.64e10;
  },
  week(value: number) {
    return value / 6.048e11;
  },
  month(value: number) {
    return value / 2.628e12;
  },
  calYear(value: number) {
    return value / 3.154e13;
  },
  decade(value: number) {
    return value / 3.154e14;
  },
  century(value: number) {
    return value / 3.154e15;
  },
};

export const mSecond = {
  nSecond(value: number) {
    return value * 1e6;
  },
  muSecond(value: number) {
    return value * 1000;
  },
  mSecond(value: number) {
    return value;
  },
  second(value: number) {
    return value / 1000;
  },
  minute(value: number) {
    return value / 60000;
  },
  hour(value: number) {
    return value / 3.6e6;
  },
  day(value: number) {
    return value / 8.64e7;
  },
  week(value: number) {
    return value / 6.048e8;
  },
  month(value: number) {
    return value / 2.628e9;
  },
  calYear(value: number) {
    return value / 3.154e10;
  },
  decade(value: number) {
    return value / 3.154e11;
  },
  century(value: number) {
    return value / 3.154e12;
  },
};

export const second = {
  nSecond(value: number) {
    return value * 1e9;
  },
  muSecond(value: number) {
    return value * 1e6;
  },
  mSecond(value: number) {
    return value * 1000;
  },
  second(value: number) {
    return value;
  },
  minute(value: number) {
    return value / 60;
  },
  hour(value: number) {
    return value / 3600;
  },
  day(value: number) {
    return value / 86400;
  },
  week(value: number) {
    return value / 604800;
  },
  month(value: number) {
    return value / 2.628e6;
  },
  calYear(value: number) {
    return value / 3.154e7;
  },
  decade(value: number) {
    return value / 3.154e8;
  },
  century(value: number) {
    return value / 3.154e9;
  },
};

export const minute = {
  nSecond(value: number) {
    return value * 6e10;
  },
  muSecond(value: number) {
    return value * 6e7;
  },
  mSecond(value: number) {
    return value * 60000;
  },
  second(value: number) {
    return value * 60;
  },
  minute(value: number) {
    return value;
  },
  hour(value: number) {
    return value / 60;
  },
  day(value: number) {
    return value / 1440;
  },
  week(value: number) {
    return value / 10080;
  },
  month(value: number) {
    return value / 43800;
  },
  calYear(value: number) {
    return value / 525600;
  },
  decade(value: number) {
    return value / 5.256e6;
  },
  century(value: number) {
    return value / 5.256e7;
  },
};

export const hour = {
  nSecond(value: number) {
    return value * 3.6e12;
  },
  muSecond(value: number) {
    return value * 3.6e9;
  },
  mSecond(value: number) {
    return value * 3.6e6;
  },
  second(value: number) {
    return value * 3600;
  },
  minute(value: number) {
    return value * 60;
  },
  hour(value: number) {
    return value;
  },
  day(value: number) {
    return value / 24;
  },
  week(value: number) {
    return value / 168;
  },
  month(value: number) {
    return value / 730;
  },
  calYear(value: number) {
    return value / 8760;
  },
  decade(value: number) {
    return value / 87600;
  },
  century(value: number) {
    return value / 876000;
  },
};

export const day = {
  nSecond(value: number) {
    return value * 8.64e13;
  },
  muSecond(value: number) {
    return value * 8.64e10;
  },
  mSecond(value: number) {
    return value * 8.64e7;
  },
  second(value: number) {
    return value * 86400;
  },
  minute(value: number) {
    return value * 1440;
  },
  hour(value: number) {
    return value * 24;
  },
  day(value: number) {
    return value;
  },
  week(value: number) {
    return value / 7;
  },
  month(value: number) {
    return value / 30.417;
  },
  calYear(value: number) {
    return value / 365;
  },
  decade(value: number) {
    return value / 3650;
  },
  century(value: number) {
    return value / 36500;
  },
};

export const week = {
  nSecond(value: number) {
    return value * 6.048e14;
  },
  muSecond(value: number) {
    return value * 6.048e11;
  },
  mSecond(value: number) {
    return value * 6.048e8;
  },
  second(value: number) {
    return value * 604800;
  },
  minute(value: number) {
    return value * 10080;
  },
  hour(value: number) {
    return value * 168;
  },
  day(value: number) {
    return value * 7;
  },
  week(value: number) {
    return value;
  },
  month(value: number) {
    return value / 4.345;
  },
  calYear(value: number) {
    return value / 52.143;
  },
  decade(value: number) {
    return value / 521.4;
  },
  century(value: number) {
    return value / 5214;
  },
};

export const month = {
  nSecond(value: number) {
    return value * 2.628e15;
  },
  muSecond(value: number) {
    return value * 2.628e12;
  },
  mSecond(value: number) {
    return value * 2.628e9;
  },
  second(value: number) {
    return value * 2.628e6;
  },
  minute(value: number) {
    return value * 43800;
  },
  hour(value: number) {
    return value * 730;
  },
  day(value: number) {
    return value * 30.417;
  },
  week(value: number) {
    return value * 4.345;
  },
  month(value: number) {
    return value;
  },
  calYear(value: number) {
    return value / 12;
  },
  decade(value: number) {
    return value / 120;
  },
  century(value: number) {
    return value / 1200;
  },
};

export const calYear = {
  nSecond(value: number) {
    return value * 3.154e16;
  },
  muSecond(value: number) {
    return value * 3.154e13;
  },
  mSecond(value: number) {
    return value * 3.154e10;
  },
  second(value: number) {
    return value * 3.154e7;
  },
  minute(value: number) {
    return value * 525600;
  },
  hour(value: number) {
    return value * 8760;
  },
  day(value: number) {
    return value * 365;
  },
  week(value: number) {
    return value * 52.143;
  },
  month(value: number) {
    return value * 12;
  },
  calYear(value: number) {
    return value;
  },
  decade(value: number) {
    return value / 10;
  },
  century(value: number) {
    return value / 100;
  },
};

export const decade = {
  nSecond(value: number) {
    return value * 3.154e17;
  },
  muSecond(value: number) {
    return value * 3.154e14;
  },
  mSecond(value: number) {
    return value * 3.154e11;
  },
  second(value: number) {
    return value * 3.154e8;
  },
  minute(value: number) {
    return value * 5.256e6;
  },
  hour(value: number) {
    return value * 87600;
  },
  day(value: number) {
    return value * 3650;
  },
  week(value: number) {
    return value * 521.4;
  },
  month(value: number) {
    return value * 120;
  },
  calYear(value: number) {
    return value * 10;
  },
  decade(value: number) {
    return value;
  },
  century(value: number) {
    return value / 10;
  },
};

export const century = {
  nSecond(value: number) {
    return value * 3.154e18;
  },
  muSecond(value: number) {
    return value * 3.154e15;
  },
  mSecond(value: number) {
    return value * 3.154e12;
  },
  second(value: number) {
    return value * 3.154e9;
  },
  minute(value: number) {
    return value * 5.256e7;
  },
  hour(value: number) {
    return value * 876000;
  },
  day(value: number) {
    return value * 36500;
  },
  week(value: number) {
    return value * 5214;
  },
  month(value: number) {
    return value * 1200;
  },
  calYear(value: number) {
    return value * 100;
  },
  decade(value: number) {
    return value * 10;
  },
  century(value: number) {
    return value;
  },
};
