fwslots = new Array(300).fill(null);
twslots=new Array(100).fill(null);


class ParkingLot {

  constructor() {
    console.log("in constructor");
  }

  park(carId,vtype) {

    if(vtype == 4){
    
    if (fwslots.every((slot) => slot !== null)) {
      return false;
    }

    for (let i = 0; i < fwslots.length; i++) {
      const slot = fwslots[i];

      if (slot === null) {
        fwslots[i] = carId;
        console.log(fwslots[i]);
        totalchargescollected+=50;
        return i+1;
        
      }
    }
  }
  else if(vtype == 2){
    
    if (twslots.every((slot) => slot !== null)) {
      return false;
    }

    for (let i = 0; i < twslots.length; i++) {
      const slot = twslots[i];

      if (slot === null) {
        twslots[i] = carId;
        totalchargescollected+=25;
        return i+1;
      }
    }
  }


  }

  remove(carId, vtype) {
  console.log('vtype :', vtype);
    console.log("fwslots--->", fwslots);
    if(vtype === "4"){
      if (fwslots.every((slot) => slot !== carId)) {
        
        return false;
      }
       
    const filterEg = fwslots.filter(val => val === carId);
    console.log('filterEg :', filterEg);

    const findEg = fwslots.find(val => val === carId);
    console.log('findEg :', findEg);

    const findIndexEg = fwslots.findIndex(val => val === carId);
    console.log('findIndexEg :', findIndexEg);

    const someEg = fwslots.some(val => val === carId);
    console.log('someEg :', someEg);
       fwslots[findIndexEg]=null;
    return findIndexEg + 1;
  }
  else {
   if (twslots.every((slot) => slot !== carId)) {
       return false;
    }
    const filterEg = twslots.filter(val => val === carId);
    console.log('filterEg :', filterEg);

    const findEg = twslots.find(val => val === carId);
    console.log('findEg :', findEg);

    const findIndexEg = twslots.findIndex(val => val === carId);
    console.log('findIndexEg :', findIndexEg);

    const someEg = twslots.some(val => val === carId);
    console.log('someEg :', someEg);

    return findIndexEg + 1;
    
  }


  }
  static deleteBook(el) {
    if(e1) {
      el.parentElement.parentElement.remove();
    }
  }
}

class UI {
  static addBookToList(name,vehnum,allot) {
    const list = document.querySelector('#slot-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${name}</td>
      <td>${vehnum}</td>
      <td>${allot}</td>
      
    `;
    
    list.appendChild(row);
  }


}


var ui = new ParkingLot();
var totalchargescollected=0;
document.querySelector('#slot-form').addEventListener('submit', (e) => {
  
  e.preventDefault();

  
  const namee = document.querySelector('#namee').value;
  const vehnum = document.querySelector('#vehnum').value;
  const vehtype = document.querySelector('#vehtype').value;

  
  
  let allotted =ui.park(vehnum,vehtype);
  console.log("allotted===>", allotted);
  
  UI.addBookToList(namee,vehnum,allotted);
  console.log(totalchargescollected);

  
});

//  document.querySelector('#slot-list').addEventListener('click', (e) => {

//   e.preventDefault();
//   const vehnu = document.querySelector('#vehnum').value;
//   const vehtyp = document.querySelector('#vehtype').value;
 
//   let uii = new ParkingLot();
//   uii.remove(vehnu,vehtyp);
  
  
//   ParkingLot.deleteBook(e.target);
// }
// );





// var uii = new ParkingLot();
// document.getElementById('slot-list').addEventListener('click', function (e) {

//   var vehnu = document.querySelector('#df').value;
//    var vehty = document.querySelector('#de').value;
  
  
  
//  let allott= uii.remove(vehnu,vehty);
//  console.log(allott);
//   ParkingLot.deleteBook(e.target);
// },false);


const perform = () =>{
  var vehnu = document.querySelector('#df').value;
 var vehty = document.querySelector('#de').value;
 const uii = new ParkingLot();
 
 let allott= uii.remove(vehnu,vehty);
 console.log(allott);

 var flag=1;
  var i=0,j=1;
   while(flag){


const tbl = document.getElementById("my-slot").getElementsByTagName('tbody')[0];
 var matchnum =tbl.rows[i].cells[1].innerText;
  if(vehnu === matchnum){
    document.getElementById("my-slot").deleteRow(i);
  
  flag=0; break;

  }
  else 
  i++;
 }
}