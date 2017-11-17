function gapFilling(scores) {
    var value1 = document.getElementById("exampleInputEmail4").value;
    if (value1 === '统一建模语言') {
        scores += 5;
    }

    var value2 = document.getElementById("exampleInputEmail5").value;
    if (value2 === '封装性') {
        scores += 5;
    }
    var value3 = document.getElementById("exampleInputEmail6").value;
    if (value3 === '继承性') {
        scores += 5;
    }
    var value4 = document.getElementById("exampleInputEmail7").value;
    if (value4 === '多态性') {
        scores += 5;
    }
    return scores;
}
 function singleChoice(scores) {
     var radio1 = document.getElementsByName("inlineRadioOptions3");
     if (radio1[1].checked === true) {
         scores += 10;
     }

     var radio2 = document.getElementsByName("inlineRadioOptions4");
     if (radio2[0].checked === true) {
         scores += 10;
     }
     return scores;
 }

  function multipleChoice(scores) {
      var checkbox1 = document.getElementsByName("inlineRadioOptions5");
      if (checkbox1[0].checked === true && checkbox1[1].checked === true && checkbox1[3].checked === true && checkbox1[2].checked === false) {
          scores += 10;
      }

      var checkbox2 = document.getElementsByName("inlineRadioOptions6");
      if (checkbox2[0].checked === true && checkbox2[1].checked === true && checkbox2[2].checked === true && checkbox2[3].checked === false) {
          scores += 10;
      }
     return scores;
 }

 function trueOrFalseQuestion(scores) {
     var judge1 = document.getElementsByName("inlineRadioOptions1");
     if (judge1[1].checked === true) {
         scores += 10;
     }

     var judge2 = document.getElementsByName("inlineRadioOptions2");
     if (judge2[0].checked === true) {
         scores += 10;
     }
     return scores;
 }

 function shortAnswerQuestion(scores) {
     var area = document.getElementById("area").value;
     if (area === '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以使物体实体；可以是某种图形；或者是一种数学表达式。') {
         scores += 20;
     }
     return scores;
}

function totalScores() {
    var scores = 0;

    scores = gapFilling(scores);

    scores = singleChoice(scores);

    scores = multipleChoice(scores);

    scores = trueOrFalseQuestion(scores);

    scores = shortAnswerQuestion(scores);


    alert("恭喜您得了：" + scores + "分！");
}
