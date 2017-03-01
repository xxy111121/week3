



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
    
    
    
  
  button1 = createButton('Beijing');
  button1.position(25, 20);
  
  button1.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Beijing%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });

  
  button2 = createButton('Los Angeles');
  button2.position(82, 20);
  
  button2.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Los%20Angeles%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  
  button3 = createButton('Berlin');
  button3.position(168, 20);
  
  button3.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Berlin%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  
  button4 = createButton('Sydney');
  button4.position(219, 20);
  
  button4.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Sydney%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  
  button5 = createButton('Paris');
  button5.position(279, 20);
  
  button5.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Paris%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
}


function weatherLoaded(data) {
  var temp = data.query.results.channel.item.condition.temp;
  var windSpeed = data.query.results.channel.wind.speed;
  var windDirection = data.query.results.channel.wind.direction;
  
  
  var tempD2H = data.query.results.channel.item.forecast[0].high;
  var tempD2L = data.query.results.channel.item.forecast[0].low;
  
  
  


 




print(tempD2H);
print(tempD2L);



  background(0);

  
  
  textSize(15);
  textFont("Helvetica");
  textAlign(RIGHT);
     
    fill(255)
    text(windSpeed, 30, windowHeight - 50);
    fill(255,0,0);
    text(temp, 30, windowHeight - 30);
    fill(0,0,255);
    text(windDirection, 30, windowHeight - 10);
    // text(windangle, 30 windowHeight);

  //create ellipse and set width and height of the ellipse to windSpeed data
  fill(255);
  noStroke();
  ellipse(windowWidth / 2, windowHeight / 2, windSpeed * 10, windSpeed * 10);
  
   //create ellipse and set width and height of the ellipse to temp data
  noFill();
  strokeWeight(4);
  stroke(255,0,0);
  ellipse(windowWidth / 2, windowHeight / 2, temp * 2, temp * 2);
  
  
  //create rect and set rotation of rect to windDirection
  translate(windowWidth / 2, windowHeight / 2);
  fill(0,0,255);
  noStroke();
  angleMode(DEGREES); // Change the mode to DEGREES
  rotate(windDirection);
  quad(38, 80, 86, 80, 69, 63, 30, 90);
  
  




}