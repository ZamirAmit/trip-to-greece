function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6hZhl70XxC4":
        Script1();
        break;
      case "5z7aHnxAQwQ":
        Script2();
        break;
      case "6hsXAP8As0N":
        Script3();
        break;
  }
}

function Script1()
{
    var player = GetPlayer();
let url = "https://free.currconv.com/api/v7/convert?compact=ultra&apiKey=c33139b9947ab50ce852"
q = "&q=EUR_ILS"
fetch (url + q)
.then(response => response.json())
.then(data => player.SetVar("EUR_ILS",data.EUR_ILS));
}

function Script2()
{
  var player = GetPlayer();
var sleep = player.GetVar("sleep");
var food = player.GetVar("food");
var transportation = player.GetVar("transportation");
var attraction = player.GetVar("attraction");

var total = sleep + food + transportation + attraction;
player.SetVar("total",total);
}

function Script3()
{
  var player = GetPlayer();

// Get israeli values:
var sleep_ils = player.GetVar("sleep_ils");
var food_ils = player.GetVar("food_ils");
var transportation_ils = player.GetVar("transportation_ils");
var attraction_ils = player.GetVar("attraction_ils");
var EUR_ILS = player.GetVar("EUR_ILS");

// Get europian values:
var sleep = player.GetVar("sleep");
var food = player.GetVar("food");
var transportation = player.GetVar("transportation");
var attraction = player.GetVar("attraction");

// Currency conversion:
sleep_ils = sleep * EUR_ILS;
food_ils = food * EUR_ILS;
transportation_ils = transportation * EUR_ILS;
attraction_ils = attraction * EUR_ILS;

// Set new value:
player.SetVar("sleep_ils",sleep_ils);
player.SetVar("food_ils",food_ils);
player.SetVar("transportation_ils",transportation_ils);
player.SetVar("sleep_ils",sleep_ils);
player.SetVar("attraction_ils",attraction_ils);

// Calculating total:
var total_ils = sleep_ils + food_ils + transportation_ils + attraction_ils;
player.SetVar("total_ils",total_ils);
}

