///////////////////////////////
/*
import React, { useState } from "react";
const host = "http://localhost:4000";

const productprice = async (productName) => {
  const [currentproductprice, setcurrentproductprice] = useState({
    price: 140,
  });
  const price = await fetch(
    `${host}/api/actions/getProductdetails/${productName}`,
    {
      method: "GET",
    }
  );
  const pricejson = await price.json();

  setcurrentproductprice({
    price: pricejson.data.price,
  });
  // return pricejson.data.price;
};
*/
/////////////////////////////////////////////////////

const Beds = [
  {
    id: 1,
    name: "Canopy Beds",
    img: "../image/bed1.jpg",
    quantity: "200",
    multiply: "x",
    price: 106.0,
  },
  {
    id: 2,
    name: "California King",
    img: "../image/bed2.jpg",
    quantity: "150",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 3,
    name: "Round Bed",
    img: "../image/bed3.jpg",
    quantity: "209",
    multiply: "x",
    price: 246.0,
  },
  {
    id: 4,
    name: "Poster Bed",
    img: "../image/bed4.jpg",
    quantity: "200",
    multiply: "x",
    price: 200.0,
  },
  {
    id: 5,
    name: "Storage Bed",
    img: "../image/bed5.jpg",
    quantity: "150",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 6,
    name: "Queen Bed",
    img: "../image/bed6.jpg",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
];

const Dressers = [
  {
    id: 1,
    name: "Combo Dresser",
    img: "../image/dresser3.jpg",
    quantity: "150",
    multiply: "x",
    price: 60.0,
  },
  {
    id: 2,
    name: "LowBoy",
    img: "../image/dresser4.jpg",
    quantity: "160",
    multiply: "x",
    price: 80.0,
  },
  {
    id: 3,
    name: "HighBoy",
    img: "../image/dresser5.jpg",
    quantity: "100",
    multiply: "x",
    price: 80.0,
  },
  {
    id: 4,
    name: "Armoire",
    img: "../image/dresser6.jpg",
    quantity: "120",
    multiply: "x",
    price: 90.0,
  },
  {
    id: 5,
    name: "Media Dresser",
    img: "../image/dresser7.jpg",
    quantity: "130",
    multiply: "x",
    price: 90.0,
  },
  {
    id: 6,
    name: "Horizontal Dresser",
    img: "../image/dresser9.jpg",
    quantity: "130",
    multiply: "x",
    price: 140.0,
  },
];

const Nightstands = [
  {
    id: 1,
    name: "Cain NightStand",
    img: "../image/stand1.jpg",
    quantity: "120",
    multiply: "x",
    price: 20.0,
  },
  {
    id: 2,
    name: "Rubix NightStand",
    img: "../image/stand2.jpg",
    quantity: "130",
    multiply: "x",
    price: 30.0,
  },
  {
    id: 3,
    name: "Square NightStand",
    img: "../image/stand3.jpg",
    quantity: "120",
    multiply: "x",
    price: 40.0,
  },
  {
    id: 4,
    name: "Cubic NightStand",
    img: "../image/stand4.jpg",
    quantity: "130",
    multiply: "x",
    price: 40.0,
  },
  {
    id: 5,
    name: "Compartmental NightStand",
    img: "../image/stand5.jpg",
    quantity: "120",
    multiply: "x",
    price: 40.0,
  },
  {
    id: 6,
    name: "Cubic large  nightstand",
    img: "../image/stand6.jpg",
    quantity: "130",
    multiply: "x",
    price: 40.0,
  },
];

const Buffets = [
  {
    id: 1,
    name: "Meal period Buffet",
    img: "../image/Buffet1.jpg",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Brunch Buffet",
    img: "../image/Buffet2.jpg",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "Finger or fork Buffet",
    img: "../image/Buffet3.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Display Buffet",
    img: "../image/Buffet4.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "Regional and ethnic Buffet",
    img: "../image/Buffet5.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "Event oriented Buffet",
    img: "../image/Buffet6.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

const Dinningchairs = [
  {
    id: 1,
    name: "Arm chair",
    img: "../image/diningchair1.jpg",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Parsons Chair",
    img: "../image/diningchair2.jpg",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "Wingback chair",
    img: "../image/diningchair3.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Ladderback chair",
    img: "../image/diningchair4.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "Wishbone",
    img: "../image/diningchair5.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "Fan back",
    img: "../image/diningchair6.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

const Diningtable = [
  {
    id: 1,
    name: "Madison Park",
    img: "../image/diningtable1.jpg",
    qr: "../image/table.png",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Ashley",
    img: "../image/diningtable2.jpg",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "Japhad",
    img: "../image/diningtable3.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Freeform",
    img: "../image/diningtable4.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "Sintered",
    img: "../image/diningtable5.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "Contemporary",
    img: "../image/diningtable6.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

const Bookshelves = [
  {
    id: 1,
    name: "Cubicles",
    img: "../image/bookshelf1.jpg",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Madina",
    img: "../image/bookshelf2.jpg",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "Thin wood",
    img: "../image/bookshelf3.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Rectangular Block",
    img: "../image/bookshelf4.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "Closet",
    img: "../image/bookshelf5.jpg",
    quantity: "120",
    qr: "../image/closet.png",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "Barrister",
    img: "../image/bookshelf6.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

const Desks = [
  {
    id: 1,
    name: "Writing desk",
    img: "../image/desk1.jpg",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Credenta",
    img: "../image/desk2.jpg",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "Carrel",
    img: "../image/desk3.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Trestle",
    img: "../image/desk4.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "Executive",
    img: "../image/desk5.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "Proffessional",
    img: "../image/desk6.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

const Officechairs = [
  {
    id: 1,
    name: "Heavy Duty",
    img: "../image/officechair1.jpg",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Designer",
    img: "../image/officechair2.jpg",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "High back",
    img: "../image/officechair3.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Ergonomic",
    img: "../image/officechair4.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "Conference",
    img: "../image/officechair5.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "Leather",
    img: "../image/officechair6.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

const Barstools = [
  {
    id: 1,
    name: "Swivel",
    img: "../image/barstool1.jpg",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Backless",
    img: "../image/barstool2.jpg",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "Counter",
    img: "../image/barstool3.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Klingbel",
    img: "../image/barstool4.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "Wishbone",
    img: "../image/barstool5.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "Rattan",
    img: "../image/barstool6.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

const Diningsets = [
  {
    id: 1,
    name: "Hagen",
    img: "../image/diningset1.jpg",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Concrete",
    img: "../image/diningset2.jpg",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "Familie",
    img: "../image/diningset3.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Santora",
    img: "../image/diningset4.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "Beverly",
    img: "../image/diningset5.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "Frontane",
    img: "../image/diningset6.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

const Kitchenislands = [
  {
    id: 1,
    name: "Fixed islands",
    img: "../image/kitchenisland1.jpeg",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Sleek waterfall",
    img: "../image/kitchenisland2.jpeg",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "Mobile Kitchen",
    img: "../image/kitchenisland3.jpeg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Cabinet kings",
    img: "../image/kitchenisland4.jpeg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "Galley",
    img: "../image/kitchenisland5.jpeg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "Chefs Island",
    img: "../image/kitchenisland6.jpeg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

const Coffeetables = [
  {
    id: 1,
    name: "Evelyn",
    img: "../image/coffeetable1large.jpg",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Nebue",
    img: "../image/coffeetable2.jpg",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "Cottage",
    img: "../image/coffeetable3.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Industrial",
    img: "../image/coffeetable4.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "Gallyn",
    img: "../image/coffeetable5.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "Farmhouse",
    img: "../image/coffeetable6.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

const Sidetables = [
  {
    id: 1,
    name: "End table",
    img: "../image/sidetable1.jpg",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Console table",
    img: "../image/sidetable2.jpg",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "Bedside",
    img: "../image/sidetable3.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Nesting",
    img: "../image/sidetable4.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "Console",
    img: "../image/sidetable5.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "Frontera",
    img: "../image/sidetable6.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

const Sofas = [
  {
    id: 1,
    name: "Green Wave-Sage",
    img: "../image/sofa1.jpg",
    qr: "../image/couch.png",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Jackson-EverGreen",
    img: "../image/sofa2.jpg",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "Blue Lagoon",
    img: "../image/sofa3.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Ledger Blue",
    img: "../image/sofa4.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "Harbour Mulli",
    img: "../image/sofa5.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "London Salsa",
    img: "../image/sofa6.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

const GarderBenches = [
  {
    id: 1,
    name: "Banana",
    img: "../image/gardenbench1.jpg",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Lutyens",
    img: "../image/gardenbench2.jpg",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "Memorial",
    img: "../image/gardenbench3.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Couples",
    img: "../image/gardenbench4.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "Park",
    img: "../image/gardenbench5.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "Relax",
    img: "../image/gardenbench6.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

const Hammocks = [
  {
    id: 1,
    name: "Brazilian",
    img: "../image/hammok1.jpg",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Nicaraguan",
    img: "../image/hammok2.png",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "Venezeulen",
    img: "../image/hammok3.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Naval",
    img: "../image/hammok4.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "Travel",
    img: "../image/hammok5.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "Mayan",
    img: "../image/hammok6.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

const PatioFurnitures = [
  {
    id: 1,
    name: "Resin wicker",
    img: "../image/patiofurniture1.jpg",
    quantity: "100",
    multiply: "x",
    price: 140.0,
  },
  {
    id: 2,
    name: "Outdoors",
    img: "../image/patiofurniture2.jpg",
    quantity: "130",
    multiply: "x",
    price: 130.0,
  },
  {
    id: 3,
    name: "Milan",
    img: "../image/patiofurniture3.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 4,
    name: "Resort",
    img: "../image/patiofurniture4.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 5,
    name: "MockingBird",
    img: "../image/patiofurniture5.jpg",
    quantity: "120",
    multiply: "x",
    price: 160.0,
  },
  {
    id: 6,
    name: "Mozaic",
    img: "../image/patiofurniture6.jpg",
    quantity: "130",
    multiply: "x",
    price: 160.0,
  },
];

export const Bedsinfo = Beds;
export const Dressersinfo = Dressers;
export const Nightstandsinfo = Nightstands;

export const Buffetsinfo = Buffets;
export const Dinningchairsinfo = Dinningchairs;
export const Diningtableinfo = Diningtable;

export const Bookshelvesinfo = Bookshelves;
export const Desksinfo = Desks;
export const Officechairsinfo = Officechairs;

export const Barstoolsinfo = Barstools;
export const Diningsetsinfo = Diningsets;
export const Kitchenislandsinfo = Kitchenislands;

export const Coffeetablesinfo = Coffeetables;
export const Sidetablesinfo = Sidetables;
export const Sofasinfo = Sofas;

export const GarderBenchesinfo = GarderBenches;
export const Hammocksinfo = Hammocks;
export const PatioFurnituresinfo = PatioFurnitures;

//export default { Beds, Bookshelves, Officechairs };
// 100  130  120  130  120  130
// 140  130  160  160  160  160
