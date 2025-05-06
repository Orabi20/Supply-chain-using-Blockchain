import Web3 from 'web3';
import configuration from '../build/contracts/Tickets.json';
import 'bootstrap/dist/css/bootstrap.css';

import pc0 from './images/pc0.jpg';
import pc1 from './images/pc1.jpg';
import pc2 from './images/pc2.jpg';
import pc3 from './images/pc3.webp';
import pc4 from './images/pc4.jpg';
import pc5 from './images/pc5.webp';
import pc6 from './images/pc6.webp';
import pc7 from './images/pc7.webp';
import pc8 from './images/pc8.jpg';
import pc9 from './images/pc9.webp';
import pc10 from './images/pc10.webp';
import pc11 from './images/pc11.jpg';
import pc12 from './images/pc12.jpg';
import pc13 from './images/pc13.webp';
import pc14 from './images/pc14.webp';
import pc15 from './images/pc15.jpg';
import pc16 from './images/pc16.jpg';
import pc17 from './images/pc17.webp';
import pc18 from './images/pc18.webp';
import pc19 from './images/pc19.webp';
import osc0 from './images/osc0.jpg';
import osc1 from './images/osc1.jpg';
import osc2 from './images/osc2.webp';
import osc3 from './images/osc3.jpeg';
import osc4 from './images/osc4.jpg';
import osc5 from './images/osc5.jpg';
import osc6 from './images/osc6.jpg';
import osc7 from './images/osc7.jpg';
import osc8 from './images/osc8.png';
import osc9 from './images/osc9.jpg';
import osc10 from './images/osc10.jpg';
import osc11 from './images/osc11.jpg';
import osc12 from './images/osc12.jpg';
import osc13 from './images/osc13.webp';
import osc14 from './images/osc14.jpg';
import osc15 from './images/osc15.webp';
import osc16 from './images/osc16.jpg';
import osc17 from './images/osc17.jpg';
import osc18 from './images/osc18.png';
import osc19 from './images/osc19.jpeg';
import fun0 from './images/fun0.webp';
import fun1 from './images/fun1.jpg';
import fun2 from './images/fun2.jpg';
import fun3 from './images/fun3.jpg';
import fun4 from './images/fun4.webp';
import fun5 from './images/fun5.jpg';
import fun6 from './images/fun6.png';
import fun7 from './images/fun7.jpg';
import fun8 from './images/fun8.jpg';
import fun9 from './images/fun9.jpg';
import fun10 from './images/fun10.jpg';
import fun11 from './images/fun11.jpg';
import fun12 from './images/fun12.png';
import fun13 from './images/fun13.png';
import fun14 from './images/fun14.jpg';
import fun15 from './images/fun15.jpg';
import fun16 from './images/fun16.jpg';
import fun17 from './images/fun17.jpg';
import fun18 from './images/fun18.webp';
import fun19 from './images/fun19.jpg';
import ticketImage0 from './images/ticket0.jpg';
import ticketImage1 from './images/ticket1.png';
import ticketImage2 from './images/ticket2.jpg';
import ticketImage3 from './images/ticket3.png';
import ticketImage4 from './images/ticket4.jpg';
import ticketImage5 from './images/ticket5.png';
import ticketImage6 from './images/ticket6.png';
import ticketImage7 from './images/ticket7.jpg';
import ticketImage8 from './images/ticket8.png';
import ticketImage9 from './images/ticket9.jpg';




const pcImage = [pc0, pc1, pc2, pc3, pc4, pc5, pc6, pc7, pc8, pc9, pc10, pc11, pc12, pc13, pc14, pc15, pc16, pc17, pc18, pc19];
const oscImage = [osc0, osc1, osc2, osc3, osc4, osc5, osc6, osc7, osc8, osc9, osc10, osc11, osc12, osc13, osc14, osc15, osc16, osc17, osc18, osc19];
const funImage = [fun0, fun1, fun2, fun3, fun4, fun5, fun6, fun7, fun8, fun9, fun10, fun11, fun12, fun13, fun14, fun15, fun16, fun17, fun18, fun19];
const ticketImage = [
  ticketImage0,
  ticketImage1,
  ticketImage2,
  ticketImage3,
  ticketImage4,
  ticketImage5,
  ticketImage6,
  ticketImage7,
  ticketImage8,
  ticketImage9
];
const adminAddress = "0x285288FC711992d6452178A630Bb2A02Df72Df05";

import * as fs from 'fs';

var data = "";
if (localStorage.getItem('history') != null) {
  data = localStorage.getItem("history")
}



const createElementFromString = (string) => {
  const el = document.createElement('div');
  el.innerHTML = string;
  return el.firstChild;
};

const CONTRACT_ADDRESS =
  "0xb0970845B187241be79e5A4CA1Ae78c78531881F";
const CONTRACT_ABI = configuration.abi;

const web3 = new Web3(
  Web3.givenProvider || 'http://127.0.0.1:8545'
);
const contract = new web3.eth.Contract(
  CONTRACT_ABI,
  CONTRACT_ADDRESS
);

let account;
const accountEl = document.getElementById('home');
const ticketsEl = document.getElementById('tickets');
const oscilloscopesEl = document.getElementById('oscilloscope');
const functionsEl = document.getElementById('function');
const antennasEl = document.getElementById('antenna');
const pcList = document.getElementById('pcList');
const oscList = document.getElementById('oscList');
const funList = document.getElementById('funList');
const antList = document.getElementById('antList');
const myPCs = document.getElementById('myPCs');
const myOscilloscopes = document.getElementById('myOscilloscopes');
const myFunctions = document.getElementById('myFunctions');
const myAntennas = document.getElementById('myAntennas');

const TOTAL_TICKETS = 20;
const EMPTY_ADDRESS =
  '0x0000000000000000000000000000000000000000';
var removedPCs = [];


//=========================================================TICKETS===========================================================
const buyTicket = async (ticket, i) => {
  await contract.methods
    .buyTicket(ticket.id)
    .send({ from: account, value: ticket.price });

  const x = new Date();
  let date = String(x);
  date = date.substr(0, 33);
  localStorage.setItem('history', data + "PC no. " + i + " bought on " + date + '*')
  // location.reload();               
  pcCnt = 0;
  const tick = document.getElementById('test');
  tick.innerHTML = "";
  const tickS = createElementFromString(
    `<div> 
      <div class="row">
        <p class="col text-center">Remaining PCs = ---</p>
        <p class="col text-center">Remaining Osciloscopes = ${oscCnt}</p>
        <p class="col text-center">Remaining Function Generators = ${fnCnt}</p>
        <p class="col text-center">Remaining Anetennas = ${antCnt}</p>
      </div>
    </div>`
  );
  tick.appendChild(tickS);
  await refreshTickets(thisAccount);
  await counter();
  await historyFunction();
};




let pcCnt = 0;
const refreshTickets = async (thisAccount) => {
  ticketsEl.innerHTML = '';
  pcList.innerHTML = "";
  myPCs.innerHTML = "";

  for (let i = 0; i < TOTAL_TICKETS; i++) {
    const ticket = await contract.methods.tickets(i).call();
    ticket.id = i;
    console.log(ticket.owner)
    if (ticket.owner === EMPTY_ADDRESS || ticket.owner === adminAddress) {
      pcCnt = pcCnt + 1;
      const ticketEl = createElementFromString(
        `<div class="ticket card text-center " style="width: 18rem;margin:5px">
          <img src="${pcImage[i]}" class="card-img-top" alt="...">
          <div class="card-body flex-column d-flex ">
            <h5 class="card-title">PC ${i}</h5>
            <button class="btn btn-primary mt-auto  ">Own PC</button>
          </div>
        </div>`
      );
      ticketEl.onclick = buyTicket.bind(null, ticket, i);
      ticketsEl.appendChild(ticketEl);
    }
    else {
      if (ticket.owner === thisAccount) {

        const ticketEl = createElementFromString(
          `<div>
            <div class="ticket card text-center" style="width: 18rem;margin:5px">
              <img src="${pcImage[i]}" class="card-img-top" alt="...">
              <div class="card-body flex-column d-flex ">
                <h5 class="card-title">PC${i}</h5>
                <button class="btn btn-danger mt-auto removeThis"">Remove</button>
              </div>
            </div>
          </div>`
        );
        // ticketEl.onclick = removePC.bind(null, i);
        myPCs.appendChild(ticketEl);

      }
      const pcEl = createElementFromString(
        `<div class="ticket card" style="width: 700px; padding:10px">        
          PC no. ${ticket.id} owned by: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${ticket.owner} 
      </div>`
      );
      pcList.appendChild(pcEl);
    }
  }
};

//====================================================Oscilliscopes========================================================

const buyOscilloscope = async (oscilloscope, i) => {
  await contract.methods
    .buyOscilloscope(oscilloscope.id)
    .send({ from: account, value: oscilloscope.price });

  const x = new Date();
  let date = String(x);
  date = date.substr(0, 33);
  localStorage.setItem('history', data + "Oscilloscope no. " + i + " bought on " + date + '*')
  // location.reload();
  oscCnt = 0;
  const tick = document.getElementById('test');
  tick.innerHTML = "";
  const tickS = createElementFromString(
    `<div> 
      <div class="row">
        <p class="col text-center">Remaining PCs = ${pcCnt}</p>
        <p class="col text-center">Remaining Osciloscopes = ---</p>
        <p class="col text-center">Remaining Function Generators = ${fnCnt}</p>
        <p class="col text-center">Remaining Anetennas = ${antCnt}</p>
      </div>
    </div>`
  );
  tick.appendChild(tickS);
  await refreshOscilloscope(thisAccount);
  await counter();
  await historyFunction();



};


let oscCnt = 0;
const refreshOscilloscope = async (thisAccount) => {
  oscilloscopesEl.innerHTML = '';
  oscList.innerHTML = "";
  myOscilloscopes.innerHTML = "";

  for (let i = 0; i < TOTAL_TICKETS; i++) {
    const oscilloscope = await contract.methods.oscilloscopes(i).call();
    oscilloscope.id = i;
    if (oscilloscope.owner === EMPTY_ADDRESS) {

      oscCnt = oscCnt + 1;
      // var x=Math.floor(Math.random() * 10);
      const oscilloscopeEl = createElementFromString(
        `<div class="ticket card text-center" style="width: 18rem;margin:5px">
          <img src="${oscImage[i]}" class="card-img-top" alt="...">
          <div class="card-body flex-column d-flex">
            <h5 class="card-title">Oscilloscope</h5>
            <button class="btn btn-primary mt-auto">Own this Oscilloscope</button>
          </div>
        </div>`
      );
      oscilloscopeEl.onclick = buyOscilloscope.bind(null, oscilloscope, i);
      oscilloscopesEl.appendChild(oscilloscopeEl);
    }
    else {
      if (oscilloscope.owner === thisAccount) {

        const ticketEl = createElementFromString(
          `<div>
            <div class="ticket card text-center" style="width: 18rem;margin:5px">
              <img src="${oscImage[i]}" class="card-img-top" alt="...">
              <div class="card-body flex-column d-flex ">
                <h5 class="card-title">OSC${i}</h5>
                <button class="btn btn-danger mt-auto removeThis">Remove</button>
              </div>
            </div>
          </div>`
        );
        myOscilloscopes.appendChild(ticketEl);

      }
      const oscEl = createElementFromString(
        `<div class="ticket card" style="width: 700px; padding:10px">        
           Oscilloscope no. ${oscilloscope.id} owned by: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${oscilloscope.owner} 
        </div>`
      );
      oscList.appendChild(oscEl);
    }
  }
};




//==================================================Function Generators========================================================
const buyFunctiongenerator = async (functiongenerator, i) => {
  await contract.methods
    .buyfunctiongenerator(functiongenerator.id)
    .send({ from: account, value: functiongenerator.price });

  const x = new Date();
  let date = String(x);
  date = date.substr(0, 33);
  localStorage.setItem('history', data + "Function Generator no." + i + " bought on " + date + '*')
  // location.reload();
  fnCnt = 0;
  const tick = document.getElementById('test');
  tick.innerHTML = "";
  const tickS = createElementFromString(
    `<div> 
      <div class="row">
        <p class="col text-center">Remaining PCs = ${pcCnt}</p>
        <p class="col text-center">Remaining Osciloscopes = ${oscCnt}</p>
        <p class="col text-center">Remaining Function Generators = ---</p>
        <p class="col text-center">Remaining Anetennas = ${antCnt}</p>
      </div>
    </div>`
  );

  tick.appendChild(tickS);
  await refreshFunction(thisAccount);
  await counter();
  await historyFunction();



};


let fnCnt = 0;
const refreshFunction = async () => {
  functionsEl.innerHTML = '';
  funList.innerHTML = "";
  myFunctions.innerHTML = "";
  for (let i = 0; i < TOTAL_TICKETS; i++) {
    const functiongenerator = await contract.methods.functions(i).call();
    functiongenerator.id = i;
    if (functiongenerator.owner === EMPTY_ADDRESS) {
      fnCnt = fnCnt + 1;
      const functionEl = createElementFromString(
        `<div class="ticket card text-center" style="width: 18rem;margin:5px">
          <img src="${funImage[i]}" class="card-img-top" alt="...">
          <div class="card-body flex-column d-flex">
            <h5 class="card-title">Function Generator ${i}</h5>
            <button class="btn btn-primary mt-auto">Own this Function generator</button>
          </div>
        </div>`
      );
      functionEl.onclick = buyFunctiongenerator.bind(null, functiongenerator, i);
      functionsEl.appendChild(functionEl);
    }
    else {
      if (functiongenerator.owner === thisAccount) {

        const ticketEl = createElementFromString(
          `<div>
            <div class="ticket card text-center" style="width: 18rem;margin:5px">
              <img src="${funImage[i]}" class="card-img-top" alt="...">
              <div class="card-body flex-column d-flex ">
                <h5 class="card-title">Function Generator ${i}</h5>
                <button class="btn btn-danger mt-auto removeThis">Remove</button>
              </div>
            </div>
          </div>`
        );
        myFunctions.appendChild(ticketEl);

      }
      const funEl = createElementFromString(
        `<div class="ticket card" style="width: 700px; padding:10px">        
           Function Generator no. ${functiongenerator.id} owned by: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${functiongenerator.owner} 
        </div>`
      );
      funList.appendChild(funEl);
    }
  }
};



//=======================================================ANTENNAS==============================================================
const buyAntenna = async (antenna, i) => {
  await contract.methods
    .buyantenna(antenna.id)
    .send({ from: account, value: antenna.price });

  const x = new Date();
  let date = String(x);
  date = date.substr(0, 33);
  localStorage.setItem('history', data + "Antenna no." + i + " bought on " + date + '*')
  // location.reload();
  antCnt = 0
  const tick = document.getElementById('test');
  tick.innerHTML = "";
  const tickS = createElementFromString(
    `<div> 
      <div class="row">
        <p class="col text-center">Remaining PCs = ${pcCnt}</p>
        <p class="col text-center">Remaining Osciloscopes = ${oscCnt}</p>
        <p class="col text-center">Remaining Function Generators = ${fnCnt}</p>
        <p class="col text-center">Remaining Anetennas = ---</p>
      </div>
    </div>`
  );

  tick.appendChild(tickS);
  await refreshAntenna(thisAccount);
  await counter();
  await historyFunction();



};

let antCnt = 0
const refreshAntenna = async () => {
  antennasEl.innerHTML = '';
  antList.innerHTML = "";
  myAntennas.innerHTML = "";

  for (let i = 0; i < TOTAL_TICKETS; i++) {
    const antenna = await contract.methods.antennas(i).call();
    antenna.id = i;
    if (antenna.owner === EMPTY_ADDRESS) {

      antCnt = antCnt + 1;
      var x = Math.floor(Math.random() * 10);
      const antennaEl = createElementFromString(
        `<div class="ticket card text-center" style="width: 18rem;margin:5px">
          <img src="${ticketImage[x]}" class="card-img-top" alt="...">
          <div class="card-body flex-column d-flex">
            <h5 class="card-title">Antenna</h5>
            <button class="btn btn-primary mt-auto">Own this Antenna</button>
          </div>
        </div>`
      );
      antennaEl.onclick = buyAntenna.bind(null, antenna, i);
      antennasEl.appendChild(antennaEl);
    }
    else {
      if (antenna.owner === thisAccount) {
        var x = Math.floor(Math.random() * 10);

        const ticketEl = createElementFromString(
          `<div>
            <div class="ticket card text-center" style="width: 18rem;margin:5px">
              <img src="${ticketImage[x]}" class="card-img-top" alt="...">
              <div class="card-body flex-column d-flex ">
                <h5 class="card-title">Antenna ${i}</h5>
                <button class="btn btn-danger mt-auto removeThis">Remove</button>
              </div>
            </div>
          </div>`
        );
        myAntennas.appendChild(ticketEl);

      }
      const antEl = createElementFromString(
        `<div class="ticket card" style="width: 700px; padding:10px">        
           Antenna no. ${antenna.id} owned by: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${antenna.owner} 
        </div>`
      );
      antList.appendChild(antEl);
    }
  }
};


//=======================================================Mydevices==============================================================

const MydevicesControl = async () => {
  let deviceList = document.getElementsByClassName('deviceList');
  let mydevicesButton = document.getElementsByClassName('myDevicesButton')

  let z = 0;

  $(".myDevicesButton").on("click", function () {
    console.log("DONE")

    deviceList[z].classList.toggle("none");

    mydevicesButton[z].classList.toggle("checked");
    mydevicesButton[z].classList.toggle("unchecked");

    this.classList.toggle("checked");
    this.classList.toggle("unchecked");
    z = $(".myDevicesButton").index(this);
    deviceList[z].classList.toggle("none");

  });
}

const refreshMyDevices = async () => {



}


//********************************************************************************** */
//********************************History******************************************* */
const historyFunction = async () => {

  data = "";
  if (localStorage.getItem('history') != null) {
    data = localStorage.getItem("history")
  }
  var arr = [];
  var s = "";
  if (data != null) {

    for (i = 0; i < data.length; i++) {
      if (data[i] != "*") { s = s.concat(data[i]) }
      else if (data[i] == "*") {
        arr.push(s);
        s = "";
      }

    }
  }


  const historysEl = document.getElementById('history');
  historysEl.innerHTML = '';


  for (let i = 0; i < arr.length; i++) {
    const historyEl = createElementFromString(
      `<div class="ticket card" style="width: 700px; padding:10px">        
      ${arr[i]} 
      </div>`
    );
    historysEl.appendChild(historyEl);

  }
}
//============================================COUNTER=====================
const counter = async () => {
  const tick = document.getElementById('test');
  tick.innerHTML = "";
  const tickS = createElementFromString(
    `<div> 
      <div class="row">
        <p class="col text-center">Remaining PCs = ${pcCnt}</p>
        <p class="col text-center">Remaining Osciloscopes = ${oscCnt}</p>
        <p class="col text-center">Remaining Function Generators = ${fnCnt}</p>
        <p class="col text-center">Remaining Anetennas = ${antCnt}</p>
      </div>
    </div>`
  );

  tick.appendChild(tickS);
}
//------------------------------------------------



const main = async () => {

  const accounts = await web3.eth.requestAccounts();
  account = accounts[0];
  thisAccount = account;
  accountEl.innerText = account;

  let shift = document.getElementById('shift');
  if (account == adminAddress) {
    accountEl.innerHTML = "Admin";
  }
  else {
    shift.innerHTML = "My Devices";

  }
  await refreshTickets(thisAccount);
  await refreshOscilloscope(thisAccount);
  await refreshFunction(thisAccount);
  await refreshAntenna(thisAccount);
  await counter();
  await historyFunction();

  await MydevicesControl();

  //************************************************************************** */
  $(".removeThis").on('click', function () {
    console.log("done");
    $(this).parent().parent().remove();
  })
  //************************************************************************** */
  let divs = document.getElementsByClassName('divFAQ');
  let FAQS = document.getElementsByClassName('faqs')

  let x = 0;

  $(".faqs").on("click", function () {
    console.log("DONE")

    divs[x].classList.toggle("none");

    FAQS[x].classList.toggle("checked");
    FAQS[x].classList.toggle("unchecked");

    this.classList.toggle("checked");
    this.classList.toggle("unchecked");
    x = $(".faqs").index(this);
    divs[x].classList.toggle("none");

  });

  let y = 0;
  let mainControl = document.getElementsByClassName('mainControl');
  let mainView = document.getElementsByClassName('mainView');
  $(".mainControl").on("click", function () {
    mainView[y].classList.toggle("none");
    y = $(".mainControl").index(this);
    mainView[y].classList.toggle("none");
  })

  let ownList = document.getElementsByClassName('ownList');
  let ownButton = document.getElementsByClassName('ownButton')

  let z = 0;

  $(".ownButton").on("click", function () {
    console.log("DONE")

    ownList[z].classList.toggle("none");

    ownButton[z].classList.toggle("checked");
    ownButton[z].classList.toggle("unchecked");

    this.classList.toggle("checked");
    this.classList.toggle("unchecked");
    z = $(".ownButton").index(this);
    ownList[z].classList.toggle("none");

  });


};

//************************************************************************** */
main();
