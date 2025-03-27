interface IUnitItem {
  key: string;
  value: string;
}

type UnitType = {
  [category: string]: IUnitItem[];
};

export const UnitTypes = [
  { key: "area", value: "Area" },
  { key: "frequency", value: "Frequency" },
  { key: "fuel", value: "Fuel Economy" },
  { key: "length", value: "Length" },
  { key: "mass", value: "Mass" },
  { key: "pressure", value: "Pressure" },
  { key: "speed", value: "Speed" },
  { key: "temp", value: "Temperature" },
  { key: "time", value: "Time" },
  { key: "volume", value: "Volume" },
];

export const Units: UnitType = {
  area: [
    { key: "sqKilometre", value: "Square Kilometre" },
    { key: "sqMetre", value: "Square Metre" },
    { key: "sqMile", value: "Square Mile" },
    { key: "sqYard", value: "Square Yard" },
    { key: "sqFoot", value: "Square Foot" },
    { key: "sqInch", value: "Square Inch" },
    { key: "hectare", value: "Hectare" },
    { key: "acre", value: "Acre" },
  ],

  frequency: [
    { key: "hertz", value: "Hertz" },
    { key: "kHertz", value: "Kilohertz" },
    { key: "mHertz", value: "Megahertz" },
    { key: "gHertz", value: "Gigahertz" },
  ],

  fuel: [
    { key: "mpUSGallon", value: "Miles per US Gallon" },
    { key: "mpGallon", value: "Miles per Gallon" },
    { key: "kmpLitre", value: "Kilometre per Litre" },
    { key: "lp100Km", value: "Liter per 100 Kilometre" },
  ],

  length: [
    { key: "kilometre", value: "Kilometre" },
    { key: "metre", value: "Metre" },
    { key: "centimetre", value: "Centimetre" },
    { key: "millimetre", value: "Millimetre" },
    { key: "micrometre", value: "Micrometre" },
    { key: "nanometre", value: "Nanometre" },
    { key: "mile", value: "Mile" },
    { key: "yard", value: "Yard" },
    { key: "foot", value: "Foot" },
    { key: "inch", value: "Inch" },
  ],

  mass: [
    { key: "microgram", value: "Microgram" },
    { key: "milligram", value: "Milligram" },
    { key: "gram", value: "Gram" },
    { key: "kilogram", value: "Kilogram" },
    { key: "metricTon", value: "Metric Ton" },
    { key: "ounce", value: "Ounce" },
    { key: "pound", value: "Pound" },
    { key: "stone", value: "Stone" },
    { key: "usTon", value: "US Ton" },
  ],

  pressure: [
    { key: "bar", value: "Bar" },
    { key: "pascal", value: "Pascal" },
    { key: "pperSqInch", value: "Pound per square inch" },
    { key: "sAtmosphere", value: "Standard Atmosphere" },
    { key: "torr", value: "Torr" },
  ],

  speed: [
    { key: "miPerHour", value: "Miles per hour" },
    { key: "ftPerSecond", value: "Foot per second" },
    { key: "mPerSecond", value: "Metre per second" },
    { key: "kmPerHour", value: "Kilometre per hour" },
    { key: "knot", value: "Knot" },
  ],

  temp: [
    { key: "celsius", value: "Celsius" },
    { key: "fahrenheit", value: "Fahrenheit" },
    { key: "kelvin", value: "Kelvin" },
    { key: "rankine", value: "Rankine" },
  ],

  time: [
    { key: "nSecond", value: "Nanosecond" },
    { key: "muSecond", value: "Microsecond" },
    { key: "mSecond", value: "Millisecond" },
    { key: "second", value: "Second" },
    { key: "minute", value: "Minute" },
    { key: "hour", value: "Hour" },
    { key: "day", value: "Day" },
    { key: "week", value: "Week" },
    { key: "month", value: "Month" },
    { key: "calYear", value: "Calendar Year" },
    { key: "decade", value: "Decade" },
    { key: "century", value: "Century" },
  ],

  volume: [
    { key: "usGallon", value: "US Liquid Gallon" },
    { key: "usQuart", value: "US Liquid Quart" },
    { key: "usPint", value: "US Liquid Pint" },
    { key: "usCup", value: "US Legal Cup" },
    { key: "usOunce", value: "US Fluid Ounce" },
    { key: "usTablespoon", value: "US Tablespoon" },
    { key: "usTeaspoon", value: "US Teaspoon" },
    { key: "liter", value: "Liter" },
    { key: "milliliter", value: "Milliliter" },
  ],
};
