/*
calculate updown value by two prices,buy and current
*/

//************************************************************************
// GLOBAL AREA

var SavedFontColorLabelResult;  //original color of label result
const nameLabelResult='labelResult'; //name of label result
const FontColorRed='red';  //red

// END OF GLOBAL AREA
//************************************************************************

//when page onload
function PageOnLoad(){

  //save font color of label result
  SavedFontColorLabelResult=document.getElementById(nameLabelResult).style.color;

}
// end of when page onload

//************************************************************************
//put result to html body
/*function getResultToBodyUpOrDown(){*/
function getResultToBodyUpOrDown(idInputBuy,idInputCurrent,idLabelResult){

    //domInputBuy:input element for buying price
    //domInputCurrent:input element for current price
    //domLabelResult:label element for result

    var domPriceBuy=document.getElementById(idInputBuy);
    var domPriceCurrent=document.getElementById(idInputCurrent);
    var domLabelResult=document.getElementById(idLabelResult);
    var resultUpDown;
    //alert(calculateUpDown(Number(domPriceBuy.value),Number(domPriceCurrent.value))+'percent');
    resultUpDown=calculateUpDown(Number(domPriceBuy.value),Number(domPriceCurrent.value));
    domLabelResult.textContent=String(resultUpDown)+'\%';
    if(resultUpDown>=0){
      domLabelResult.style.color=SavedFontColorLabelResult;
    }else{
      domLabelResult.style.color=FontColorRed;
    }


  /* for test */

  var msgPara=document.createElement('p');
  msgPara.textContent='clicked calculate button';
  //document.body.appendChild(msgPara);

  /* end for test */

}
//end of put result to html body

//************************************************************************
//calculate up and down
function calculateUpDown(BuyPrice,CurrentPrice){

return (CurrentPrice / (BuyPrice / 100)) - 100;

}
//end of calculate up and down
