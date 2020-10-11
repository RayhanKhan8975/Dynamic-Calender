let today = new Date();
addEvents();
var del;
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

var selectYear = document.getElementById('selectYear')
var selectMonth = document.getElementById('selectMonth')

var daysInMonth;

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


var colors = ['floralwhite','red','gray','Pink','blue','Yellow','orange','gold','purple','lightorange','brown','#3f3b3b'];

var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

var textColor = [' #3f3b3b','white','white','white','white',' #3f3b3b','white','white','white','white','white','white']

var yearsArray = [];

let Year2 = 2030;
for(var Year1 = 2000;Year1 < Year2;Year1++)
  {
  yearsArray.push(Year1);
  }

function randomAccess(){
    for(var i = 0;i < yearsArray.length;i++){
      var option = document.createElement('option');
      
      option.innerHTML = yearsArray[i];
      
      selectYear.selected = currentYear;
      
      selectMonth.selected = currentMonth;
      
      option.value = yearsArray[i];
      
      selectYear.appendChild(option);
//      selectYear.innerHTML += "<option  onclick = jump()>" + yearsArray[i] + "</option>"
     }
      for(var i = 0;i < months.length;i++)
      {
      
      var option = document.createElement('option');
      
      option.innerHTML = months[i]
      
      option.value = [i]
      
      selectMonth.appendChild(option);
//      selectYear.innerHTML += "<option  onclick = jump()>" + yearsArray[i] + "</option>"
     }
}

function createButtons(){

   var previous = document.getElementById('previous');
  
    previous.addEventListener('click',function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    
    showCalendar(currentMonth, currentYear);
    }) 
    
  var  next = document.getElementById('next');
  
  next.addEventListener('click',function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    
    currentMonth = (currentMonth + 1) % 12;
    
    showCalendar(currentMonth, currentYear);
}
)
 
  var container = document.getElementById('container')
  
}
//let monthAndYear = document.getElementById("monthAndYear");
//
randomAccess();
 
showCalendar(currentMonth, currentYear);

createButtons();
//

function jump() {
    currentYear = parseInt(selectYear.value);

    currentMonth = parseInt(selectMonth.value);

    console.log(selectYear.value+ "/" + "/" + selectMonth.value)

    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
   let firstDay = (new Date(year, month)).getDay();

    let daysInMonth = 32 - new Date(year, month, 32).getDate();
   
    let tbl = document.getElementById('table');

  
    tbl.innerHTML = '';

    console.log('hi')

    var monthAndYear = document.getElementById('header');
    
    monthAndYear.innerHTML = months[month] + " " + year;
    
    monthAndYear.style.textAlign = 'center';
    
    monthAndYear.style.backgroundColor = colors[month];

    monthAndYear.style.textcolor = textColor[month];
   
    monthAndYear.style.color = textColor[month]
   
    selectYear.value = year;

    selectMonth.value = month;

    var dayhead = document.createElement('tr')

     dayhead.classList.add('bg-primary');
 
     dayhead.classList.add('text-white');
 
   for (var i = 0; i < days.length; i++) {
 
      var day = days[i];
 
      const cell = document.createElement('td');
 
      cell.classList.add('colors')
 
      var daymark = document.createTextNode(day);
 
      cell.appendChild(daymark);
 
      dayhead.appendChild(cell);
 
   }
    tbl.appendChild(dayhead);
    
    // creating all cells
    let date = 1;
  ;
 for (let i = 0; i < 6; i++) 
 {
        // creates a table row
        let row = document.createElement("tr");

     for(let btn = 0;btn < 1;btn++)
     {
    var allbtns = document.getElementsByClassName('modal-btn');
    
    Array.from(allbtns).forEach(function(button){
    
    button.addEventListener('click',function(){
    
    logbtnDate(button)
  })
});
        for(let btn = 0;btn < 1;btn++)
     {
    var delBtns = document.getElementsByClassName('delBtn');
    
    Array.from(delBtns).forEach(function(button){
    
    button.addEventListener('click',function(){
    deleteItem(button);
  })
})
  };
        for (let j = 0; j < 7; j++) 
        {
            if (i === 0 && j < firstDay)
             {
        
                let cell = document.createElement("td");
        
                let cellText = document.createTextNode("");
            
                cell.appendChild(cellText);
            
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
            
                break;
            }

            else {
                let cell = document.createElement("td");
            
                let btn = document.createElement('button');
            
                btn.classList.add('modal-btn')
            
                let cellText = document.createTextNode(date);
            
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
            
                    cell.classList.add("bg-info");
            
                } // color today's date
            
                btn.classList.add('btn');
     
                cell.appendChild(btn);
            
                btn.id = date;


//              btn.addEventListener('active',modal(btn.id,month,year)                )
               //btn.onclick = modal(btn.id,month,year)
                btn.innerHTML = date;
            
                row.appendChild(cell);
            
                date++;
            }

            tbl.appendChild(row); // appending each row into calendar body.
    }
}
}
}

var deleteItem = function(btn){
  localStorage.removeItem(btn.id)
  document.location.reload();
}
  var logbtnDate = function (btn) {
  
  var hour = new Date().getHours();
  
  var minutes = new Date().getMinutes();
  
  var seconds = new Date().getSeconds();

  var daylight = hour > 12? 'PM':'AM';
 
  hour = hour === 0? 12:hour;
  
  hour = hour > 12? hour - 12 : hour;
  
  minutes = minutes.toString().length < 2? "0" + minutes:minutes;
  
  
  modal.style.display = "block";
  
  data.innerHTML = "";
  
  data.innerHTML +=  btn.id +  '-'  + months[selectMonth.value]  + "-" + selectYear.value;
  
  data.innerHTML += "<br>" + "current time:" + hour + ":" + minutes + ":" + seconds + ":"+ daylight + ";"
  
 
  var loc_id = btn.id;
  displayid(btn.id)

span.onclick = function(){
  
  modal.style.display = "none";

}
}

var modal = document.createElement('div');

modal.classList.add('modal');



var modalContent = document.createElement('div');

modalContent.classList.add('modal-content');


var modalHeader = document.createElement('div');

modalHeader.classList.add('modal-header');

modalHeader.innerHTML = '<h2>Add Event</h2>';


var modalBody = document.createElement('div');

modalBody.classList.add('modal-body');

//modalBody.appendChild(input);

var input = document.createElement('div');

input.id = "SuperDiv"

function displayid(id){

input.innerHTML = "";

var text = document.createElement('input')

text.classList.add("form-control");

text.classList.add("col-sm");

text.classList.add("btn-outline-danger");

text.type = "text";


input.appendChild(text)

var modalButton = document.createElement('button')

modalButton.classList.add("btn");

modalButton.classList.add("btn-block");

modalButton.classList.add("col-sm-12");

input.style.alignItems = "center";

modalButton.style.marginTop = "50px"

modalButton.classList.add("btn-success");

modalButton.innerHTML = "Add";

modalButton.addEventListener('click', function(){

localStorage.setItem((id+"/"+months[currentMonth]+"/"+currentYear),text.value)

document.location.reload()
} )

input.appendChild(modalButton)

}
var mainEvent = document.getElementById('events')

function addEvents(){
  
  for (var i = 0, n = localStorage.length; i < n; i++) {
    var k = localStorage.key(i);
    
    var event = document.createElement('div')
    event.classList.add('row')
    event.classList.add('col-12')
   
    var dates = document.createElement('div');
    
    dates.classList.add('col-sm-5');
    dates.classList.add('btn-info');
    
     dates.innerHTML += k;

     var del = document.createElement('button');
     del.innerHTML = "&times";
     del.id = k;
     del.classList.add('delBtn');
     del.classList.add('close');
     var info = document.createElement('div');

     info.classList.add('col-sm-7');
     dates.classList.add('btn-danger');
     
    
     info.innerHTML += localStorage[k];

    console.log(k + ": " + localStorage[k]);
     info.appendChild(del);
     events.appendChild(dates)
     events.appendChild(info)
  }}

var label1 = document.createElement('label')

var description = document.createElement('input')

description.classList.add('form-control')

description.type = "text";

description.id = "description"

description.classList.add('col-md')

description.classList.add('form-control')

modalBody.appendChild(input)


var modalFooter = document.createElement('div');

modalFooter.classList.add('modal-footer');

var span = document.createElement('span');

var data = document.createElement('p')

span.classList.add('close');

span.innerHTML = "&times";
;
document.body.appendChild(modal);

modal.appendChild(modalContent);

modalHeader.appendChild(span);

modalContent.appendChild(modalHeader);

modalContent.appendChild(modalBody);

modalContent.appendChild(modalFooter);

modalFooter.appendChild(data);

