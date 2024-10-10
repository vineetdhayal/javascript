let saiyan = {
    name: "Vegeta",
    chiBlasts: {
      low: "Big bang attack",
      med: "Gallic gun",
      high: "Final flash",
    },
  };
  
  let anotherSaiyan = { ...saiyan };
  anotherSaiyan.name = "Goku";
  anotherSaiyan.chiBlasts.high = "Spirit Bomb";
  
  let sonOfSaiyan = Object.assign({}, saiyan);
  sonOfSaiyan.name = "Trunks";
  sonOfSaiyan.chiBlasts.high = "Finish Buster";
  
  let sonOfAnotherSaiyan = JSON.parse(JSON.stringify(anotherSaiyan));
  sonOfAnotherSaiyan.name = "Gohan";
  sonOfAnotherSaiyan.chiBlasts.high = "Kamehameha";
  
  console.log(
    saiyan.name,
    anotherSaiyan.name,
    sonOfSaiyan.name,
    sonOfAnotherSaiyan.name
  );
  console.log(
    saiyan.chiBlasts.high,
    anotherSaiyan.chiBlasts.high,
    sonOfSaiyan.chiBlasts.high,
    sonOfAnotherSaiyan.chiBlasts.high
  );