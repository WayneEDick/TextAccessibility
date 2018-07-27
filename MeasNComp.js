/**
 * Created by Wayne on 5/18/2017.
 */
(function (){
function Measure (l) {
 this.l= l;

}
Measure.prototype.dfnStruct = function () {
 this.uBox = this.l.setupBox('user') ;
 this.cBox= this.l.setupBox('compare');
 this.len = this.l.textLen;
 /*this.uStartW = this.l.uWidth;
 this.cStartW = this.l.cWidth;
 this.l.uBox.width= this.uStartW;
 this.l.cBox.width= this.cStartW; /**/
 this.uWidth= this.fontTSetWidth(this.uBox);
 this.cWidth= this.fontTSetWidth(this.cBox);
 if (this.l.oneLen) {
  this.uWidth/=2;
  this.cWidth/=2;
  this.len=1;
 }
 this.uAveCh= this.uWidth/this.len;
 this.cAveCh=this.cWidth/this.len;
};
Measure.prototype.boxHeight = function (box) {
 let h = getComputedStyle(box).height;
 return h.substr(0, h.length - 2)*1;
}
Measure.prototype.boxWidth = function (box)  {
 let w = getComputedStyle(box).width;
 return w.substr(0, w.length - 2)*1;
}
Measure.prototype.fontTSetWidth = function (box) {
 console.log(`in fontTSetWidth`)
 let hNum = this.boxHeight(box);// Initial height
 let wNum = this.boxWidth(box);// Initial width
 // Approximate the font seqW
 for (let wNew=wNum; (hNum>=this.boxHeight(box)); wNew-=1)  {
  //console.log(wNew);
  box.style.width= wNew.toString()+'px';
  wNum = wNew;
  if (wNew<1) break;
 }

 wNum = this.boxWidth(box);
 console.log(`Pixel Width ${wNum}`)
 return wNum;
}

Measure.prototype.statsOut = function () {
 console.log(`statsOut`)
 let boxes = document.getElementsByClassName('Display');
 let uBox = boxes[0];
 let cBox = boxes[1];
 console.log(`create Output Nodes`)
 // Create Output Nodes
 let uFam=document.createElement('span') ;
 let cFam=document.createElement('span');
 let uSize=document.createElement('span') ;
 let cSize=document.createElement('span');
 let uLSp=document.createElement('span') ;
 let cLSp=document.createElement('span');
 let uWSp=document.createElement('span') ;
 let cWSp=document.createElement('span');
 let uTxtW=document.createElement('span') ;
 let cTxtW=document.createElement('span');
 let uAvCh=document.createElement('span') ;
 let cAvCh=document.createElement('span');
 let Ratio=document.createElement('p') ;
 // Container Paragaphs
 let uRow=document.createElement('p') ;
 let cRow=document.createElement('p');
 // The Answer Table in the HTML
 let answerSection = document.getElementById('answerSection');
 let answerEntries = answerSection.getElementsByTagName('p')
 /*console.log(`Load Content`)  /**/
 // Load Content
 // Font Family
 //alert(`split font family ${uBox.style.fontFamily.split(',')[0]}`);
 uFam.innerText= `User: font family= ${uBox.style.fontFamily.split(',')[0]}`;
 cFam.innerText= 'Author: font family= '+cBox.style.fontFamily;
 // Font Size
 uSize.innerText= ', size= '+uBox.style.fontSize;
 cSize.innerText= ', size= '+cBox.style.fontSize;
 // Letter Spacing
 uLSp.innerText= ', letter spacing= '+ uBox.style.letterSpacing;
 cLSp.innerText= ', letter spacing= '+ cBox.style.letterSpacing;
 // Word Spacing
 uWSp.innerText= ', word spacing= '+ uBox.style.wordSpacing;
 cWSp.innerText= ', word spacing= '+ cBox.style.wordSpacing;
 /* debug: console.log(`uWSp=${uWSp.innerText} cWSp=${cWSp.innerText}`)   /**/
 // Text Set Width and Average Character Width
 uTxtW.innerText= ', test width= '+ this.uWidth+'px'  ;
 cTxtW.innerText= ', text width= '+ this.cWidth+ 'px';
 uAvCh.innerText= ', mean char width= '+ this.uAveCh.toPrecision(4) + 'px.';
 cAvCh.innerText= ', mean char width= '+this.cAveCh.toPrecision(4) + 'px.';
 // Ration of user to compare widths
 Ratio.innerHTML  = 'Width Ratio: User / Author = ' +(this.uWidth / this.cWidth).toPrecision(4).toString()+' .' ;
 /*console.log(`Assemble Table`)  /**/
 // Assemble Answer Rows and Insert in Answer Table
 // Append Font Family
 uRow.appendChild(uFam) ;
 cRow.appendChild(cFam) ;
 // Append Font Size
 uRow.appendChild(uSize) ;
 cRow.appendChild(cSize) ;
 // Append Letter Spacing
 uRow.appendChild(uLSp) ;
 cRow.appendChild(cLSp) ;
 // Append Word Spacing
 uRow.appendChild(uWSp) ;
 cRow.appendChild(cWSp) ;
 // Insert Widths
 uRow.appendChild(uTxtW) ;
 cRow.appendChild(cTxtW) ;
 uRow.appendChild(uAvCh) ;
 cRow.appendChild(cAvCh) ;
 // Add Style to Answer Rows
 // User Row Style
 uRow.style.fontFamily = uBox.style.fontFamily;
 uRow.style.fontSize = uBox.style.fontSize;
 uRow.style.letterSpacing = uBox.style.letterSpacing;
 uRow.style.wordSpacing = uBox.style.wordSpacing;
 uRow.className='uRow';
 // Compare Row Style
 cRow.style.fontFamily = cBox.style.fontFamily;
 cRow.style.fontSize = cBox.style.fontSize;
 cRow.style.letterSpacing = cBox.style.letterSpacing;
 cRow.style.wordSpacing = cBox.style.wordSpacing;
 cRow.className='cRow';
 // Display and Insert Rows in the Answer Table
 answerSection.style.display='block';
 answerSection.style.visibility='visible' ;
 // Insert User and Compare Stats
 answerSection.insertBefore(cRow, answerEntries[0]);
 answerSection.insertBefore(uRow, answerEntries[0]);
 // Insert the Conclusion Comparison
 answerSection.insertBefore(Ratio, answerEntries[0])
 // Hide Measure Boxes
 {
  let boxes= document.getElementsByClassName('Measure');
  for (let i=0; i<boxes.length; i++){
   boxes[i].style.display='none'
  }
 }
 };

window.Meas_Measure = Measure;
})();