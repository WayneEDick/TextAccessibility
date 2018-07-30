/**
 * Created by Wayne on 6/30/2017.
 */
//todo look for loop limits .length-1
// Open / Close Listeners
(function () {
 // Open / Close Listeners
 // Font Elements
 let fOpen = document.getElementById('FontOpen');
 let uOpen = document.getElementById('OpenUserFonts');
 let cOpen = document.getElementById('OpenCompFont');
 let fClose = document.getElementById('CloseFontSettings');
 let uClose = document.getElementById('CloseUserFonts');
 let cClose = document.getElementById('CloseCompFont');
 // Character String Elements
 let chrOpen = document.getElementById("ChrStrOpen");
 let chrClose = document.getElementById("ChrStrClose");
 // Compute Values Elements
 let compute = document.getElementById("ComputeValuesOpen");
 // Open / Close Font Groups
 fOpen.addEventListener('click',
  function () {
   document.getElementById('FontGroup').style.display = 'block';
  });
 fClose.addEventListener('click',
  function () {
   document.getElementById('FontGroup').style.display = 'none';
  });
 uOpen.addEventListener('click',
  function () {
   document.getElementById("UserFontContainer").style.display = 'block';
  });
 uClose.addEventListener('click',
  function () {
   document.getElementById("UserFontContainer").style.display = 'none';
  });
 cOpen.addEventListener('click',
  function () {
   document.getElementById("CompFontContainer").style.display = 'block';
  });
 cClose.addEventListener('click',
  function () {
   document.getElementById("CompFontContainer").style.display = 'none';
  });
 // Open / Close Character Goup
 chrOpen.addEventListener('click',
  function () {
   document.getElementById("ChrStrGroup").style.display = 'block';
  });
 chrClose.addEventListener('click',
  function () {
   document.getElementById("ChrStrGroup").style.display = 'none';
  });
 //Measurement Listeners
 compute.addEventListener('click',
  function () {
   let l= new FDS_Locker();
   let m= new Meas_Measure(l);
   //l.setupBox('user','addEventListener');
   //l.setupBox('compare', 'addEventListener');
   m.dfnStruct();
   document.getElementById('Locker').style.visibility = "visible";
   document.getElementById("ComputeGroup").style.display = 'block';
   m.statsOut();
   /*document.getElementById('FontOpen').style.display="none";
   document.getElementById("ChrStrOpen").style.display = 'none';
   document.getElementById("ComputeValuesOpen").style.display = 'none';
   document.getElementById("FontGroup").style.display='none';
   document.getElementById("ChrStrGroup").style.display='none'; /**/
   });
})();


//********************** End of Code  *************************



