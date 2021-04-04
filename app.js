var input = document.querySelector('.input_text');
var name1 = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var button= document.querySelector('.submit');


button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=692f2bbe971869caaca4894ba21855b9')
.then(response => response.json())
.then(data => {
  
  name1.innerHTML = data['name'];
  desc.innerHTML =  data['weather'][0]['description'];
  temp.innerHTML = data['main']['temp'];
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})