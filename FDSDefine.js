/**
 * Created by Wayne on 6/21/2017.
 */
// Setup measurement structures for statistics gathering. The Font Data Structures (FDS)
(function () {
// HTML Locker Connecting Font and Character Strings
// Todo de-rigidify numeric lookup
 const fam = 0, size = 1, lSp = 2, wSp =3;
 const usrIdx= 0, cmpIdx = 1;
 const defaultTestString =
	 '!"#$% '+ "&'()* "+ "+,-./ "+
	 "01234 "+ "56789 "+ ":;<=> "+
	 "?@ABC "+ "DEFGH "+ "IJKLM "+
	 "NOPQR "+ "STUVW "+ "XYZ[\ "+
	 "]^_`a "+ "bcdef "+ "ghijk "+
	 "lmnop "+ "qrstu "+ "vwxyz "+
	 "{|}~";

 // Locker Constructor
 function Locker() {
  // Flag for string of length 1
  this.oneLen=false;
  // HTML Measurement and Display Boxes
  this.locker =  document.getElementById('Locker');
  let displayBoxes = this.locker.getElementsByClassName('Display');
  this.uBoxDisplay= displayBoxes[usrIdx];
  this.cBoxDisplay= displayBoxes[cmpIdx];
 }

 // Extend Locker Object Prototype
 Locker.prototype.setupBox = function (context){
  //Create Box
  let box = document.createElement('p');
  ///////////////////////////////////////
  // Set up the Measurement Text String
  let txtStr = document.getElementById('ChrStrText').value;
  this.textString= (txtStr !== '') ? txtStr : defaultTestString;
  if (this.textString.length===1) {
   this.textString+=this.textString;
   this.oneLen=true;
  }
  this.textLen = this.textString.length;

  // Measurement Boxes in HTML Doc
  let boxDisplay = (context === 'user') ? this.uBoxDisplay : this.cBoxDisplay;
  // Input Forms for Fonts in HTML doc
  let fontFormNode= (context === 'user') ? document.getElementById('UserFontProp') : document.getElementById('CompFontProp');
  let fFInput= fontFormNode.getElementsByClassName('compile');
  // Set up the Measurement Text String
  let textString = this.textString;
  let tsLen= this.textLen;
  let fFam = (fFInput[fam].value !=='') ? fFInput[fam].value+', sans-serif': 'sans-serif';
  let fSize = 1*fFInput[size].value;
  let ltSp = 1*fFInput[lSp].value;
  let wdSp = 1*fFInput[wSp].value;
  console.log(`read font size from ${context} form ${fSize.toString()+'px'} ${arguments[1]}`);
  let boxWidth = Math.ceil(2*tsLen*(fSize+ltSp+0.25*wdSp));
  // alert (`setup values len ${tsLen} context ${context} size ${fSize} letter and word spacing ${ltSp} and ${wdSp} boxWidth ${boxWidth}`) ;

  box.innerText= textString;
  box.style.fontFamily= fFam;
  box.style.fontSize= fSize.toString()+'px';
  console.log(`computed font size ${context}= ${box.style.fontSize}`);
  box.style.letterSpacing= ltSp.toString()+'em';
  box.style.wordSpacing= wdSp.toString()+'em';
  // alert(`wordSpacing from box ${context} ${box.style.wordSpacing}`)
  box.style.width= boxWidth.toString()+'px';
  box.style.wordWrap="break-word"   ;
  box.style.wordBreak="break-all";
  box.className="Measure";
  box.id=context+'Node';
  // For Viewing
  boxDisplay.style.fontFamily= fFam;
  boxDisplay.style.fontSize= fSize.toString()+'px';
  boxDisplay.style.letterSpacing= ltSp.toString()+'em';
  boxDisplay.style.wordSpacing= wdSp.toString()+'em';
  boxDisplay.style.wordWrap="break-word"   ;
  boxDisplay.style.wordBreak="break-all";
  boxDisplay.innerHTML= `Test String in "${fFam.split(',')[0]}" is 
   ${textString}`;
  console.log(context+'Node');

  this.locker.removeChild(document.getElementById(context+'Node'));
  this.locker.appendChild(box);

  return box;
 };

 window.FDS_Locker =  Locker;
})();







