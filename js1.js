const base = `https://docs.google.com/spreadsheets/d/1dJT2i50Ik_-uhI-GmDlBO2iaP91FqeeQRDwKRHAMAmI/gviz/tq?`;
let UrlDOMESTIC = base + "&sheet=DOMESTIC&tq=" + encodeURIComponent('Select *');
let DataDOMESTIC = [];
let UrlWORLDWIDE_EXPORT = base + "&sheet=WORLDWIDE_EXPORT&tq=" + encodeURIComponent('Select *');
let DataWORLDWIDE_EXPORT = [];
let UrlWORLDWIDE_IMPORT = base + "&sheet=WORLDWIDE_IMPORT&tq=" + encodeURIComponent('Select *');
let DataWORLDWIDE_IMPORT= [];
let UrlTHIRD_COUNTRY = base + "&sheet=THIRD_COUNTRY&tq=" + encodeURIComponent('Select *');
let DataTHIRD_COUNTRY = [];
let UrlECONOMY = base + "&sheet=ECONOMY&tq=" + encodeURIComponent('Select *');
let DataECONOMY = [];
let UrlTHIRD_COUNTRY_MATRIX = base + "&sheet=THIRD_COUNTRY_MATRIX&tq=" + encodeURIComponent('Select *');
let DataTHIRD_COUNTRY_MATRIX = [];
let UrlECONOMY_ZONING = base + "&sheet=ECONOMY_ZONING&tq=" + encodeURIComponent('Select *');
let DataECONOMY_ZONING = [];
let UrlAll_ZONE = base + "&sheet=All_ZONE&tq=" + encodeURIComponent('Select *');
let DataAll_ZONE = [];
let UrlOtherPrices= base + "&sheet=OtherPrices&tq=" + encodeURIComponent('Select *');
let DataOtherPrices= [];

document.addEventListener('DOMContentLoaded', init)
function init() {
  if (typeof(Storage) !== "undefined") {
    ConvertMode();
    }
  let Loading=document.getElementById("LoadingFormBrowser");
  let FormLoad=document.getElementById("FormLoad");
  Loading.className="fa fa-refresh fa-spin";
    LoadAll_ZONE();
    const myTimeout = setTimeout(function(){ 
      FormLoad.style.display="none";
      Loading.className="fa fa-refresh";
    clearTimeout(myTimeout);
    }, 2500);
}


// **********************Loading*****************
function LoadDOMESTIC(){
  DataDOMESTIC=[];
  fetch(UrlDOMESTIC)
  .then(res => res.text())
  .then(rep => {
      const jsonDOMESTIC = JSON.parse(rep.substring(47).slice(0, -2));
      const colzDOMESTIC = [];
      jsonDOMESTIC.table.cols.forEach((headingDOMESTIC) => {
          if (headingDOMESTIC.label) {
              let columnDOMESTIC = headingDOMESTIC.label;
              colzDOMESTIC.push(columnDOMESTIC);
          }
      })
      jsonDOMESTIC.table.rows.forEach((rowData) => {
          const rowDOMESTIC = {};
          colzDOMESTIC.forEach((ele, ind) => {
              rowDOMESTIC[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
          })
          DataDOMESTIC.push(rowDOMESTIC);
      })
  })
}

function LoadWORLDWIDE_EXPORT(){
  DataWORLDWIDE_EXPORT=[];
  fetch(UrlWORLDWIDE_EXPORT)
  .then(res => res.text())
  .then(rep => {
      const jsonWORLDWIDE_EXPORT = JSON.parse(rep.substring(47).slice(0, -2));
      const colzWORLDWIDE_EXPORT = [];
      jsonWORLDWIDE_EXPORT.table.cols.forEach((headingWORLDWIDE_EXPORT) => {
          if (headingWORLDWIDE_EXPORT.label) {
              let columnWORLDWIDE_EXPORT = headingWORLDWIDE_EXPORT.label;
              colzWORLDWIDE_EXPORT.push(columnWORLDWIDE_EXPORT);
          }
      })
      jsonWORLDWIDE_EXPORT.table.rows.forEach((rowData1) => {
          const rowWORLDWIDE_EXPORT = {};
          colzWORLDWIDE_EXPORT.forEach((ele, ind) => {
              rowWORLDWIDE_EXPORT[ele] = (rowData1.c[ind] != null) ? rowData1.c[ind].v : '';
          })
          DataWORLDWIDE_EXPORT.push(rowWORLDWIDE_EXPORT);
      })
  })
}

function LoadWORLDWIDE_IMPORT(){
  DataWORLDWIDE_IMPORT=[];
  fetch(UrlWORLDWIDE_IMPORT)
  .then(res => res.text())
  .then(rep => {
      const jsonWORLDWIDE_IMPORT = JSON.parse(rep.substring(47).slice(0, -2));
      const colzWORLDWIDE_IMPORT = [];
      jsonWORLDWIDE_IMPORT.table.cols.forEach((headingWORLDWIDE_IMPORT) => {
          if (headingWORLDWIDE_IMPORT.label) {
              let columnWORLDWIDE_IMPORT = headingWORLDWIDE_IMPORT.label;
              colzWORLDWIDE_IMPORT.push(columnWORLDWIDE_IMPORT);
          }
      })
      jsonWORLDWIDE_IMPORT.table.rows.forEach((rowData2) => {
          const rowWORLDWIDE_IMPORT = {};
          colzWORLDWIDE_IMPORT.forEach((ele, ind) => {
              rowWORLDWIDE_IMPORT[ele] = (rowData2.c[ind] != null) ? rowData2.c[ind].v : '';
          })
          DataWORLDWIDE_IMPORT.push(rowWORLDWIDE_IMPORT);
      })
  })
}

function LoadTHIRD_COUNTRY(){
  DataTHIRD_COUNTRY=[];
  fetch(UrlTHIRD_COUNTRY)
  .then(res => res.text())
  .then(rep => {
      const jsonTHIRD_COUNTRY = JSON.parse(rep.substring(47).slice(0, -2));
      const colzTHIRD_COUNTRY = [];
      jsonTHIRD_COUNTRY.table.cols.forEach((headingTHIRD_COUNTRY) => {
          if (headingTHIRD_COUNTRY.label) {
              let columnTHIRD_COUNTRY = headingTHIRD_COUNTRY.label;
              colzTHIRD_COUNTRY.push(columnTHIRD_COUNTRY);
          }
      })
      jsonTHIRD_COUNTRY.table.rows.forEach((rowData3) => {
          const rowTHIRD_COUNTRY = {};
          colzTHIRD_COUNTRY.forEach((ele, ind) => {
              rowTHIRD_COUNTRY[ele] = (rowData3.c[ind] != null) ? rowData3.c[ind].v : '';
          })
          DataTHIRD_COUNTRY.push(rowTHIRD_COUNTRY);
      })
  })
}

function LoadECONOMY(){
  DataECONOMY=[];
  fetch(UrlECONOMY)
  .then(res => res.text())
  .then(rep => {
      const jsonECONOMY = JSON.parse(rep.substring(47).slice(0, -2));
      const colzECONOMY = [];
      jsonECONOMY.table.cols.forEach((headingECONOMY) => {
          if (headingECONOMY.label) {
              let columnECONOMY = headingECONOMY.label;
              colzECONOMY.push(columnECONOMY);
          }
      })
      jsonECONOMY.table.rows.forEach((rowData4) => {
          const rowECONOMY = {};
          colzECONOMY.forEach((ele, ind) => {
              rowECONOMY[ele] = (rowData4.c[ind] != null) ? rowData4.c[ind].v : '';
          })
          DataECONOMY.push(rowECONOMY);
      })
  })
}

function LoadTHIRD_COUNTRY_MATRIX(){
  DataTHIRD_COUNTRY_MATRIX=[];
  fetch(UrlTHIRD_COUNTRY_MATRIX)
  .then(res => res.text())
  .then(rep => {
      const jsonTHIRD_COUNTRY_MATRIX = JSON.parse(rep.substring(47).slice(0, -2));
      const colzTHIRD_COUNTRY_MATRIX = [];
      jsonTHIRD_COUNTRY_MATRIX.table.cols.forEach((headingTHIRD_COUNTRY_MATRIX) => {
          if (headingTHIRD_COUNTRY_MATRIX.label) {
              let columnTHIRD_COUNTRY_MATRIX = headingTHIRD_COUNTRY_MATRIX.label;
              colzTHIRD_COUNTRY_MATRIX.push(columnTHIRD_COUNTRY_MATRIX);
          }
      })
      jsonTHIRD_COUNTRY_MATRIX.table.rows.forEach((rowData5) => {
          const rowTHIRD_COUNTRY_MATRIX = {};
          colzTHIRD_COUNTRY_MATRIX.forEach((ele, ind) => {
              rowTHIRD_COUNTRY_MATRIX[ele] = (rowData5.c[ind] != null) ? rowData5.c[ind].v : '';
          })
          DataTHIRD_COUNTRY_MATRIX.push(rowTHIRD_COUNTRY_MATRIX);
      })
  })
}

function LoadECONOMY_ZONING(){
  DataECONOMY_ZONING=[];
  fetch(UrlECONOMY_ZONING)
  .then(res => res.text())
  .then(rep => {
      const jsonECONOMY_ZONING = JSON.parse(rep.substring(47).slice(0, -2));
      const colzECONOMY_ZONING = [];
      jsonECONOMY_ZONING.table.cols.forEach((headingECONOMY_ZONING) => {
          if (headingECONOMY_ZONING.label) {
              let columnECONOMY_ZONING = headingECONOMY_ZONING.label;
              colzECONOMY_ZONING.push(columnECONOMY_ZONING);
          }
      })
      jsonECONOMY_ZONING.table.rows.forEach((rowData6) => {
          const rowECONOMY_ZONING = {};
          colzECONOMY_ZONING.forEach((ele, ind) => {
              rowECONOMY_ZONING[ele] = (rowData6.c[ind] != null) ? rowData6.c[ind].v : '';
          })
          DataECONOMY_ZONING.push(rowECONOMY_ZONING);
      })
      if (isNaN(DataECONOMY_ZONING[0].Num)==false){LoadAddressList11();};
  })
}

function LoadAll_ZONE(){
  DataAll_ZONE=[];
  fetch(UrlAll_ZONE)
  .then(res => res.text())
  .then(rep => {
      const jsonAll_ZONE = JSON.parse(rep.substring(47).slice(0, -2));
      const colzAll_ZONE = [];
      jsonAll_ZONE.table.cols.forEach((headingAll_ZONE) => {
          if (headingAll_ZONE.label) {
              let columnAll_ZONE = headingAll_ZONE.label;
              colzAll_ZONE.push(columnAll_ZONE);
          }
      })
      jsonAll_ZONE.table.rows.forEach((rowData7) => {
          const rowAll_ZONE = {};
          colzAll_ZONE.forEach((ele, ind) => {
              rowAll_ZONE[ele] = (rowData7.c[ind] != null) ? rowData7.c[ind].v : '';
          })
          DataAll_ZONE.push(rowAll_ZONE);
      })
      if (isNaN(DataAll_ZONE[0].Num)==false){LoadAddressList();};
  })
}

function LoadDataOtherPrices(){
  DataOtherPrices=[];
  fetch(UrlOtherPrices)
  .then(res => res.text())
  .then(rep => {
      const jsonOtherPrices = JSON.parse(rep.substring(47).slice(0, -2));
      const colzOtherPrices = [];
      jsonOtherPrices.table.cols.forEach((headingOtherPrices) => {
          if (headingOtherPrices.label) {
              let columnOtherPrices = headingOtherPrices.label;
              colzOtherPrices.push(columnOtherPrices);
          }
      })
      jsonOtherPrices.table.rows.forEach((rowData8) => {
          const rowOtherPrices = {};
          colzOtherPrices.forEach((ele, ind) => {
              rowOtherPrices[ele] = (rowData8.c[ind] != null) ? rowData8.c[ind].v : '';
          })
          DataOtherPrices.push(rowOtherPrices);
      })
  })
}


function OnRestForm(){
  let ShipAdress=document.getElementById("ShipAdress");
  ChangeShipAdress(ShipAdress.value);
}

function ChangeShipAdress(MyVal){
  let directionDiv=document.getElementById("directionDiv");
  let TypePostDiv=document.getElementById("TypePostDiv");
  let Address = document.getElementById("Address");
  let FromAddressDev=document.getElementById("FromAddressDev");
  let ToAddressDev=document.getElementById("ToAddressDev");
  let AddressDev=document.getElementById("AddressDev");
  let TypeShip=document.getElementById("TypeShip");
  if(MyVal=="1"){
    directionDiv.style.display="none";
    TypePostDiv.style.display="none";
    FromAddressDev.style.display="none";
    ToAddressDev.style.display="none";
    AddressDev.style.display="none";
    TypeShip.innerHTML=`<option value="0">طرد</option>`
    HideResultDiv();
  }else{
    AddressDev.style.display="flex";
    directionDiv.style.display="flex";
    TypePostDiv.style.display="flex";
    TypeShip.innerHTML=`<option value="0">وثائق</option>
                        <option value="1">طرد</option>`
    Changedirection(document.getElementById("ShipAdress").value);
  }
  Address.value="";
  
}

function Changedirection(MyVal){
  let TypePost=document.getElementById("TypePost");
  let FromAddressDev=document.getElementById("FromAddressDev");
  let ToAddressDev=document.getElementById("ToAddressDev");
  let AddressDev=document.getElementById("AddressDev");
  document.getElementById("FromAddress").value=""
  document.getElementById("ToAddress").value=""
  document.getElementById("Address").value=""
  switch (MyVal) {
    case "2":
      TypePost.innerHTML=`<option value="0">Express Worldwide</option>`;
      FromAddressDev.style.display="flex";
      ToAddressDev.style.display="flex";
      AddressDev.style.display="none";
      break;
    case "1":
      TypePost.innerHTML=`
      <option value="0">Express Worldwide</option>
      <option value="1">Economy Select</option>
      `;
      FromAddressDev.style.display="none";
      ToAddressDev.style.display="none";
      AddressDev.style.display="flex";
      break; 
    case "0":
      TypePost.innerHTML=`
      <option value="0">Express Worldwide</option>
      <option value="1">Economy Select</option>
      `;
      FromAddressDev.style.display="none";
      ToAddressDev.style.display="none";
      AddressDev.style.display="flex";
      break;
  }
  OnchangeTypePost(TypePost.value);
}

function OnchangeTypePost(MyVal){
  let TypeShip=document.getElementById("TypeShip");
  document.getElementById("FromAddress").value=""
  document.getElementById("ToAddress").value=""
  document.getElementById("Address").value=""
  let Loading=document.getElementById("LoadingFormBrowser");
  let FormLoad=document.getElementById("FormLoad");
  FormLoad.style.display="flex";
  Loading.className="fa fa-refresh fa-spin";
  if(MyVal=="0"){
    LoadAll_ZONE();
    LoadTHIRD_COUNTRY_MATRIX();
    const myTimeout = setTimeout(function(){ 
      FormLoad.style.display="none";
      Loading.className="fa fa-refresh";
    clearTimeout(myTimeout);
    }, 2500);
    TypeShip.innerHTML=`<option value="0">وثائق</option>
                        <option value="1">طرد</option>`
  }else{
    LoadECONOMY_ZONING();
    const myTimeout = setTimeout(function(){ 
      FormLoad.style.display="none";
      Loading.className="fa fa-refresh";
    clearTimeout(myTimeout);
    }, 2500);
    TypeShip.innerHTML=`<option value="0">طرد</option>`
  }
  HideResultDiv();
  document.getElementById("AddressZone").value="";
}

function LoadAddressList(){
  let Countries,Num,Countries_Ar;
  let optionClass;
  let AddressList =document.getElementById("AddressList");
  let AddressList1 =document.getElementById("AddressList1");
  let AddressList2 =document.getElementById("AddressList2");
  AddressList.innerHTML="";
  AddressList1.innerHTML="";
  AddressList2.innerHTML="";
  for (let index = 0; index < DataAll_ZONE.length; index++) {
    Num=DataAll_ZONE[index].Num;
    Countries=DataAll_ZONE[index].Countries;
    Countries_Ar=DataAll_ZONE[index].Countries_Ar;
    if(Num!=""){
      optionClass=document.createElement("option");
      optionClass.value=Countries_Ar;
      optionClass.textContent=Countries;
      AddressList.appendChild(optionClass);
      optionClass=document.createElement("option");
      optionClass.value=Countries_Ar;
      optionClass.textContent=Countries;
      AddressList1.appendChild(optionClass);
      optionClass=document.createElement("option");
      optionClass.value=Countries_Ar;
      optionClass.textContent=Countries;
      AddressList2.appendChild(optionClass);
    }
  }
}

function LoadAddressList11(){
  let Countries,Num,Countries_Ar;
  let optionClass;
  let AddressList =document.getElementById("AddressList");
  AddressList.innerHTML="";
  for (let index = 0; index < DataECONOMY_ZONING.length; index++) {
    Num=DataECONOMY_ZONING[index].Num;
    Countries=DataECONOMY_ZONING[index].Countries;
    Countries_Ar=DataECONOMY_ZONING[index].Countries_Ar;
    if(Num!=""){
      optionClass=document.createElement("option");
      optionClass.value=Countries_Ar;
      optionClass.textContent=Countries;
      AddressList.appendChild(optionClass);
    }
  }
}

// ***********************Mode*********************
function ConvertMode(){
  if (localStorage.getItem("FColor")==1){
    ConvertModeToSun();
  }else{
    ConvertModeToMoon();
  }
}

function ConvertModeToSun(){
  localStorage.setItem("FColor", 1);
  document.getElementById("Moon").style.display="inline-block";
  document.getElementById("Sun").style.display="none";
  document.querySelector(':root').style.setProperty('--FColor', "wheat"); 
  document.querySelector(':root').style.setProperty('--EColor', "white");
  document.querySelector(':root').style.setProperty('--loginColor', "whitesmoke"); 
  document.querySelector(':root').style.setProperty('--FontColor', "#f2a20b"); 
  document.querySelector(':root').style.setProperty('--Font2Color', "#a53333"); 
  document.querySelector(':root').style.setProperty('--Font3Color', "#a53333");
  document.querySelector(':root').style.setProperty('--THColor', "wheat");  
  document.querySelector(':root').style.setProperty('--TDColor', "yellow"); 
} 
function ConvertModeToMoon(){
  localStorage.setItem("FColor", 2);
  document.getElementById("Sun").style.display="inline-block";
  document.getElementById("Moon").style.display="none";
  document.querySelector(':root').style.setProperty('--FColor', "#141e30"); 
  document.querySelector(':root').style.setProperty('--EColor', "#243b55");
  document.querySelector(':root').style.setProperty('--loginColor', "#00000080"); 
  document.querySelector(':root').style.setProperty('--FontColor', "white"); 
  document.querySelector(':root').style.setProperty('--Font2Color', "#d3f6f8"); 
  document.querySelector(':root').style.setProperty('--Font3Color', "black"); 
  document.querySelector(':root').style.setProperty('--THColor', "gray");  
  document.querySelector(':root').style.setProperty('--TDColor', "Red"); 
}  

// ********************Calculate
function IsNotNullsOrNan(WeightT,LengthT,widthT,HeightT){
  if(WeightT.value=="" || isNaN(WeightT.value)==true){WeightT.style.border="2px solid #ff0000";return false}else{WeightT.style.border="none";};
  if(LengthT.value=="" || isNaN(LengthT.value)==true){LengthT.style.border="2px solid #ff0000";return false}else{LengthT.style.border="none";};
  if(widthT.value=="" || isNaN(widthT.value)==true){widthT.style.border="2px solid #ff0000";return false}else{widthT.style.border="none";};
  if(HeightT.value=="" || isNaN(HeightT.value)==true){HeightT.style.border="2px solid #ff0000";return false}else{HeightT.style.border="none";};
    return true;
}

function CalculatePrice(){
  let BasicPrice=document.getElementById("BasicPrice");
  let Address=document.getElementById("Address");
  let AddressZone=document.getElementById("Address");
  let FromAddress=document.getElementById("FromAddress");
  let FromAddressZone=document.getElementById("FromAddressZone");
  let ToAddress=document.getElementById("ToAddress");
  let ToAddressZone=document.getElementById("ToAddressZone");
  let WeightT=document.getElementById("WeightT");
  let LengthT=document.getElementById("LengthT");
  let widthT=document.getElementById("widthT");
  let HeightT=document.getElementById("HeightT");
  let Loading=document.getElementById("LoadingFormBrowser");
  let FormError=document.getElementById("FormError");
  let FormLoad=document.getElementById("FormLoad");
  let ShipAdress=document.getElementById("ShipAdress");
  let Direction=document.getElementById("Direction");
  let TypePost=document.getElementById("TypePost");
  let THIRD_ZONING=document.getElementById("THIRD_ZONING");
  let IsError,Method,Method00;
  if(IsNotNullsOrNan(WeightT,LengthT,widthT,HeightT)==false){return};
  FormLoad.style.display="flex";
  Loading.className="fa fa-refresh fa-spin";
  if(ShipAdress.value=="1"){
    LoadDOMESTIC();
    Method=0;
  }else{
    switch (Direction.value) {
      case "0":
        if(AddressZone.value==-1 || AddressZone.value==""){Address.style.border="2px solid #ff0000";return;}else{Address.style.border="none";}
        if(TypePost.value=="0"){
          LoadWORLDWIDE_IMPORT();
          Method=1;
        }else{
          LoadECONOMY();
          Method=2;
        }
        break;
      case "1":
        if(AddressZone.value==-1 || AddressZone.value==""){Address.style.border="2px solid #ff0000";return;}else{Address.style.border="none";}
        if(TypePost.value=="0"){
          LoadWORLDWIDE_EXPORT();
          Method=3;
        }else{
          LoadECONOMY();
          Method=2;
        }
        break;
      case "2":
          if(FromAddressZone.value==-1 || FromAddressZone.value==""){FromAddress.style.border="2px solid #ff0000";return;}else{FromAddress.style.border="none";}
          if(ToAddressZone.value==-1 || ToAddressZone.value==""){ToAddress.style.border="2px solid #ff0000";return;}else{ToAddress.style.border="none";}
          if(THIRD_ZONING.value==-1){return;};
          LoadTHIRD_COUNTRY();
          Method=4;
        break;
    }
  }
  LoadDataOtherPrices();
  const myTimeout = setTimeout(function(){ 
    FormLoad.style.display="none";
    Loading.className="fa fa-refresh";
    if(isNaN(Method)==true){return;}
    switch (Method) {
      case 0:
        IsError=CalculateDOMESTIC(WeightT.value,LengthT.value,widthT.value,HeightT.value);
        Method00="DOMESTIC";
      break;
      case 1:
        IsError=CalculateWORLDWIDE_IMPORT(WeightT.value,LengthT.value,widthT.value,HeightT.value);
        Method00="WORLDWIDE_IMPORT";
      break;
      case 2:
        IsError=CalculateECONOMY(WeightT.value,LengthT.value,widthT.value,HeightT.value);
        Method00="ECONOMY";
      break;
      case 3:
        IsError=CalculateWORLDWIDE_EXPORT(WeightT.value,LengthT.value,widthT.value,HeightT.value);
        Method00="WORLDWIDE_EXPORT";
      break;
      case 4:
        IsError=CalculateTHIRD_COUNTRY(WeightT.value,LengthT.value,widthT.value,HeightT.value);
        Method00="WORLDWIDE";
      break;
    }
    if(IsError==-1){
    FormError.style.display="flex";
    const myTimeout1 = setTimeout(function(){ 
      FormError.style.display="none";
    clearTimeout(myTimeout1);
    }, 2500);
  }else{
    ShowResultDiv(BasicPrice,IsError,Method00,WeightT.value,LengthT.value)
  }
  clearTimeout(myTimeout);
  }, 2500);
}

function OnChangeAddress(Address){
  let TypePost=document.getElementById("TypePost");
  let AddressZone=document.getElementById("AddressZone");
  if (Address==undefined || Address==""){AddressZone.value= -1; return};
  if(TypePost.value=="0"){
    for (let index = 0; index < DataAll_ZONE.length; index++) {
      if(DataAll_ZONE[index].Num!=""){
        if(Address == DataAll_ZONE[index].Countries_Ar){
          AddressZone.value= "Zone_" + DataAll_ZONE[index].WORLDWIDE_ZONING;
          return;
          }
        }
      }
      AddressZone.value= -1;
  }else{
    for (let index = 0; index < DataECONOMY_ZONING.length; index++) {
      if(DataECONOMY_ZONING[index].Num!=""){
        if(Address == DataECONOMY_ZONING[index].Countries_Ar){
          AddressZone.value= "Zone_" + DataECONOMY_ZONING[index].ECONOMY_ZONING;
          return;
          }
        }
      }
      AddressZone.value= -1;
  };
}

function OnChangeToAddress(Address){
  let ToAddressZone=document.getElementById("ToAddressZone");
  if (Address==undefined || Address==""){ToAddressZone.value= -1; return};
    for (let index = 0; index < DataAll_ZONE.length; index++) {
      if(DataAll_ZONE[index].Num!=""){
        if(Address == DataAll_ZONE[index].Countries_Ar){
          ToAddressZone.value= "Zone_" + DataAll_ZONE[index].THIRD_COUNTRY_ZONING;
          FindMATRIXZone();
          return;
          }
        }
      }
      ToAddressZone.value= -1;
}

function OnChangeFromAddress(Address){
  let FromAddressZone=document.getElementById("FromAddressZone");
  if (Address==undefined || Address==""){FromAddressZone.value= -1; return};
    for (let index = 0; index < DataAll_ZONE.length; index++) {
      if(DataAll_ZONE[index].Num!=""){
        if(Address == DataAll_ZONE[index].Countries_Ar){
          FromAddressZone.value= "Zone_" + DataAll_ZONE[index].THIRD_COUNTRY_ZONING;
          FindMATRIXZone();
          return;
          }
        }
      }
      FromAddressZone.value= -1;
}

function FindMATRIXZone(){
  let FromAddressZone=document.getElementById("FromAddressZone");
  let ToAddressZone=document.getElementById("ToAddressZone");
  let THIRD_ZONING=document.getElementById("THIRD_ZONING");
  if (FromAddressZone.value==-1 || FromAddressZone.value=="" || ToAddressZone.value==-1 || ToAddressZone.value==""){THIRD_ZONING.value= -1; return};
  for (let index = 0; index < DataTHIRD_COUNTRY_MATRIX.length; index++) {
    if(DataTHIRD_COUNTRY_MATRIX[index].Num!=""){
      if(FromAddressZone.value == DataTHIRD_COUNTRY_MATRIX[index].Note){
        THIRD_ZONING.value= "Zone_" + DataTHIRD_COUNTRY_MATRIX[index][ToAddressZone.value];
        return;
        }
      }
    }
    THIRD_ZONING.value= -1;
}

function ShowResultDiv(BasicPrice,ValueB,Method00,WeightT,LengthT){
  let TypeShipStr,Mval,Clicked;
  let ResultDiv=document.getElementById("ResultDiv");
  let TypeShip=document.getElementById("TypeShip");
  let OtherPriceDiv=document.getElementById("OtherPriceDiv");
  let OtherPrice=document.getElementById("OtherPrice");
  let TotalPrice=document.getElementById("TotalPrice");
  if(TypeShip.value=="0"){TypeShipStr="Documents"}else{TypeShipStr="Non-documents"};
  let Div="";
  let Count=0;
  for (let index = 0; index < DataOtherPrices.length; index++) {
    if(DataOtherPrices[index].Num!=""){
      if((DataOtherPrices[index].DHL==Method00|| DataOtherPrices[index].DHL=="All") && (DataOtherPrices[index].type==TypeShipStr || DataOtherPrices[index].type=="All")){
        Clicked="";
        if(DataOtherPrices[index].Unite=="Ship"){
            Mval=DataOtherPrices[index].Amount;
        }else{
          if(DataOtherPrices[index].ISS==0){
            Mval=RoundNumbers(DataOtherPrices[index].Amount * WeightT,2);
          }else{
            Mval=Math.max(RoundNumbers(DataOtherPrices[index].Amount * WeightT,2),Mval=DataOtherPrices[index].ISS) 
          }
        }
        if(DataOtherPrices[index].lenth!=0){
          Clicked="checked";
            if(LengthT>Number(DataOtherPrices[index].lenth)){Mval=DataOtherPrices[index].Amount}
        }
        if(DataOtherPrices[index].Wiht!=0){
          Clicked="checked";
            if(WeightT>Number(DataOtherPrices[index].Wiht)){Mval=DataOtherPrices[index].Amount}
        }
        Div=`<div class='user-box1'>
            <input type="checkbox" id="OtherPrice${Count}" ${Clicked} class="Chee" onchange="ReCaluclateOthers()" />
            <label for='OtherPrice${Count}'>${DataOtherPrices[index].Note}</label>
            <input id="OtherPNum${Count}" type="text" readonly="" value="${Mval}" />
            </div>` + Div ;
            Count++
        }
      }
    }
  ResultDiv.style.display="flex";
  OtherPriceDiv.style.display="flex";
  OtherPriceDiv.innerHTML=Div;
  BasicPrice.value=ValueB;
  let Others=CaluclateOthers();
  OtherPrice.value=Others;
  TotalPrice.value= RoundNumbers(ValueB + Others,2);
  let MyPer=document.getElementById("MyPer");
  let AllTotalPrice=document.getElementById("AllTotalPrice");
  if(MyPer.value!=0 && MyPer.value<=100){
    AllTotalPrice.value=TotalPrice.value * MyPer.value/100 +  Number(TotalPrice.value);
  }else{
    AllTotalPrice.value=TotalPrice.value
  }
}

function ReCaluclateOthers(){
  let BasicPrice=document.getElementById("BasicPrice");
  let OtherPrice=document.getElementById("OtherPrice");
  let TotalPrice=document.getElementById("TotalPrice");
  let MyPer=document.getElementById("MyPer");
  let AllTotalPrice=document.getElementById("AllTotalPrice");
  let Others=CaluclateOthers();
  let ValueB=Number(BasicPrice.value);
  OtherPrice.value=Others;
  TotalPrice.value= RoundNumbers(ValueB + Others,2);
  if(MyPer.value!=0 && MyPer.value<=100){
    AllTotalPrice.value=TotalPrice.value * MyPer.value/100 + Number(TotalPrice.value);
  }else{
    AllTotalPrice.value=TotalPrice.value
  }
  
}

function CaluclateOthers(){
  let TableInputMt=document.getElementsByClassName("Chee");
  let total = 0 ;
  for (let index = 0; index < TableInputMt.length; index++) {
    if (TableInputMt.item(index).checked==true){
      total =  total + Number(document.getElementById(`OtherPNum${TableInputMt.length-index - 1}`).value);
    }
  }
  return RoundNumbers(total,2);
}

function HideResultDiv(){
  let ResultDiv=document.getElementById("ResultDiv");
  let BasicPrice=document.getElementById("BasicPrice");
  let OtherPrice=document.getElementById("OtherPrice");
  let TotalPrice=document.getElementById("TotalPrice");
  let MyPer=document.getElementById("MyPer");
  let AllTotalPrice=document.getElementById("AllTotalPrice");
  let OtherPriceDiv=document.getElementById("OtherPriceDiv");
  ResultDiv.style.display="none";
  OtherPriceDiv.style.display="none";
  BasicPrice.value="";
  OtherPrice.value="";
  TotalPrice.value="";
  MyPer.value="";
  AllTotalPrice.value="";
}

function CalculateDOMESTIC(WeightT,LengthT,widthT,HeightT){
let ErrorBrowser=document.getElementById("ErrorBrowser");
if(WeightT < Number(DataDOMESTIC[0].SKG) || WeightT > Number(DataDOMESTIC[DataDOMESTIC.length - 1].EKG)){
  ErrorBrowser.textContent=" يتوجب ان يكون وزن الشحنة اكبر او يساوي  " + DataDOMESTIC[0].SKG + " واصغر " + DataDOMESTIC[DataDOMESTIC.length - 1].EKG 
  return -1;
}
for (let index = 0; index < DataDOMESTIC.length; index++) {
  if(DataDOMESTIC[index].Num!=""){
    if(WeightT >= Number(DataDOMESTIC[index].SKG) && WeightT < Number(DataDOMESTIC[index].EKG)){
      if(DataDOMESTIC[index].State=="Value"){
        return DataDOMESTIC[index].Zone_1;
      }else{
        return RoundNumbers((Math.abs(WeightT - DataDOMESTIC[index].SKG) * DataDOMESTIC[index].Zone_1) + DataDOMESTIC[index - 1].Zone_1 , 2);
      }
    }
  }
}
}

function CalculateWORLDWIDE_IMPORT(WeightT,LengthT,widthT,HeightT){
  let ErrorBrowser=document.getElementById("ErrorBrowser");
  let AddressZone=document.getElementById("AddressZone");
  if(WeightT < Number(DataWORLDWIDE_IMPORT[0].SKG) || WeightT > Number(DataWORLDWIDE_IMPORT[DataWORLDWIDE_IMPORT.length - 1].EKG)){
    ErrorBrowser.textContent=" يتوجب ان يكون وزن الشحنة اكبر او يساوي  " + DataWORLDWIDE_IMPORT[0].SKG + " واصغر " + DataWORLDWIDE_IMPORT[DataWORLDWIDE_IMPORT.length - 1].EKG 
    return -1;
  }
  for (let index = 0; index < DataWORLDWIDE_IMPORT.length; index++) {
    if(DataWORLDWIDE_IMPORT[index].Num!=""){
      if(WeightT >= Number(DataWORLDWIDE_IMPORT[index].SKG) && WeightT < Number(DataWORLDWIDE_IMPORT[index].EKG)){
        if(DataWORLDWIDE_IMPORT[index].State=="Value"){
          return DataWORLDWIDE_IMPORT[index][AddressZone.value];
        }else{
          return RoundNumbers((Math.abs(WeightT - DataWORLDWIDE_IMPORT[index].SKG) * DataWORLDWIDE_IMPORT[index][AddressZone.value]) + DataWORLDWIDE_IMPORT[index - 1][AddressZone.value] , 2);
        }
      }
    }
  }
  }

  function CalculateECONOMY(WeightT,LengthT,widthT,HeightT){
    let ErrorBrowser=document.getElementById("ErrorBrowser");
    let AddressZone=document.getElementById("AddressZone");
    if(WeightT < Number(DataECONOMY[0].SKG) || WeightT > Number(DataECONOMY[DataECONOMY.length - 1].EKG)){
      ErrorBrowser.textContent=" يتوجب ان يكون وزن الشحنة اكبر او يساوي  " + DataECONOMY[0].SKG + " واصغر " + DataECONOMY[DataECONOMY.length - 1].EKG 
      return -1;
    }
    for (let index = 0; index < DataECONOMY.length; index++) {
      if(DataECONOMY[index].Num!=""){
        if(WeightT >= Number(DataECONOMY[index].SKG) && WeightT < Number(DataECONOMY[index].EKG)){
          if(DataECONOMY[index].State=="Value"){
            return DataECONOMY[index][AddressZone.value];
          }else{
            return RoundNumbers((Math.abs(WeightT - DataECONOMY[index].SKG) * DataECONOMY[index][AddressZone.value]) + DataECONOMY[index - 1][AddressZone.value] , 2);
          }
        }
      }
    }
    }

function CalculateWORLDWIDE_EXPORT(WeightT,LengthT,widthT,HeightT) {
  let TypeShip=document.getElementById("TypeShip");
  let ErrorBrowser=document.getElementById("ErrorBrowser");
  let AddressZone=document.getElementById("AddressZone");
  if(TypeShip.value=="0"){
    if(WeightT < Number(DataWORLDWIDE_EXPORT[0].SKG) || WeightT > Number(DataWORLDWIDE_EXPORT[DataWORLDWIDE_EXPORT.length - 1].EKG)){
      ErrorBrowser.textContent=" يتوجب ان يكون وزن " + TypeShip.value + " اكبر او يساوي  " + DataWORLDWIDE_EXPORT[0].SKG + " واصغر " + DataWORLDWIDE_EXPORT[DataWORLDWIDE_EXPORT.length - 1].EKG 
      return -1;
    }
  }else{
    if(WeightT < Number(DataWORLDWIDE_EXPORT[1].SKG) || WeightT > Number(DataWORLDWIDE_EXPORT[DataWORLDWIDE_EXPORT.length - 1].EKG)){
      ErrorBrowser.textContent=" يتوجب ان يكون وزن " + TypeShip.value + " اكبر او يساوي  " + DataWORLDWIDE_EXPORT[1].SKG + " واصغر " + DataWORLDWIDE_EXPORT[DataWORLDWIDE_EXPORT.length - 1].EKG 
      return -1;
    }
  } 
  for (let index = 0; index < DataWORLDWIDE_EXPORT.length; index++) {
    if(DataWORLDWIDE_EXPORT[index].Num!=""){
      if(WeightT >= Number(DataWORLDWIDE_EXPORT[index].SKG) && WeightT < Number(DataWORLDWIDE_EXPORT[index].EKG)){
        if(DataWORLDWIDE_EXPORT[index].State=="Value"){
          return DataWORLDWIDE_EXPORT[index][AddressZone.value];
        }else{
          return RoundNumbers((Math.abs(WeightT - DataWORLDWIDE_EXPORT[index].SKG) * DataWORLDWIDE_EXPORT[index][AddressZone.value]) + DataWORLDWIDE_EXPORT[index - 1][AddressZone.value] , 2);
        }
      }
    }
  }
}
function CalculateTHIRD_COUNTRY(WeightT,LengthT,widthT,HeightT){
  let TypeShip=document.getElementById("TypeShip");
  let TypeShipStr="";
  let ErrorBrowser=document.getElementById("ErrorBrowser");
  let THIRD_ZONING=document.getElementById("THIRD_ZONING");
    if(WeightT < Number(DataTHIRD_COUNTRY[0].SKG) || WeightT > Number(DataTHIRD_COUNTRY[DataTHIRD_COUNTRY.length - 1].EKG)){
      ErrorBrowser.textContent=" يتوجب ان يكون وزن  اكبر او يساوي  " + DataTHIRD_COUNTRY[0].SKG + " واصغر " + DataTHIRD_COUNTRY[DataTHIRD_COUNTRY.length - 1].EKG 
      return -1;
    }
    if(TypeShip.value=="0"){TypeShipStr="Documents"}else{TypeShipStr="Non-documents"}
  for (let index = 0; index < DataTHIRD_COUNTRY.length; index++) {
    if(DataTHIRD_COUNTRY[index].Num!=""){
      if(WeightT<2.5){
        if(WeightT >= Number(DataTHIRD_COUNTRY[index].SKG) && WeightT < Number(DataTHIRD_COUNTRY[index].EKG) && TypeShipStr==DataTHIRD_COUNTRY[index].type){
          if(DataTHIRD_COUNTRY[index].State=="Value"){
            return DataTHIRD_COUNTRY[index][THIRD_ZONING.value];
          }else{
            return RoundNumbers((Math.abs(WeightT - DataTHIRD_COUNTRY[index].SKG) * DataTHIRD_COUNTRY[index][THIRD_ZONING.value]) + DataTHIRD_COUNTRY[index - 1][THIRD_ZONING.value] , 2);
          }
      }
      }else{
        if(WeightT >= Number(DataTHIRD_COUNTRY[index].SKG) && WeightT < Number(DataTHIRD_COUNTRY[index].EKG)){
          if(DataTHIRD_COUNTRY[index].State=="Value"){
            return DataTHIRD_COUNTRY[index][THIRD_ZONING.value];
          }else{
            return RoundNumbers((Math.abs(WeightT - DataTHIRD_COUNTRY[index].SKG) * DataTHIRD_COUNTRY[index][THIRD_ZONING.value]) + DataTHIRD_COUNTRY[index - 1][THIRD_ZONING.value] , 2);
          }
      }
      }
    }
  }
}  
function RoundNumbers(Values,Num){
  let Cval=String(Values);
  let Len=Cval.indexOf(".");
  if(Len!=-1){
    return Number(Cval.slice(0,Len + Num + 1 ));
  }else{
    return Number(Cval);
  }
}


