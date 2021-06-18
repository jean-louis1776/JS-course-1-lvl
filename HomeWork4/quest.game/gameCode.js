//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

do {//Выводим первый вопрос
   ok = false;
   event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');

   if (event == -1) {
      break;
   }
   else {
      ok = isAnswer(works.a0, event);
   }
   
   saveAns(works.a00, works.a1, works.a2);

} while (!ok);
switch (event) {
   case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
      do {
         ok = false;
         event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
         if (event == -1) {
               break;
         }
         else {
               ok = isAnswer(works.b0, event);
         }
         
         saveAns(works.b00, works.b1, works.b2);

      } while (!ok);
      switch (event) {
         case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
               do {
                  ok = false;
                  event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                  if (event == -1) {
                     break;
                  }
                  else {
                     ok = isAnswer(works.d0, event);
                  }
                  
                  saveAns(works.d00, works.d1, works.d2);

               } while (!ok);

               break;
         case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
               do {
                  ok = false;
                  event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                  if (event == -1) {
                     break;
                  }
                  else {
                     ok = isAnswer(works.d0, event);
                  }
                  
                  saveAns(works.d00, works.d1, works.d2);

               } while (!ok);

               break;
         case -1: // Второе действие
               break;
         default:
               alert('Ошибка');
      }
      break;
   case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
      do {
         ok = false;
         event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
         if (event == -1) {
               break;
         }
         else {
               ok = isAnswer(works.c0, event);
         }
         
         saveAns(works.c00, works.c1, works.c2);

      } while (!ok);
      switch (event) {
         case 1: // Второе действие
               do {
                  ok = false;
                  event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                  if (event == -1) {
                     break;
                  }
                  else {
                     ok = isAnswer(works.d0, event);
                  }
                  
                  saveAns(works.d00, works.d1, works.d2);

               } while (!ok);

               break;
         case 2: // Второе действие
               do {
                  ok = false;
                  event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                  if (event == -1) {
                     break;
                  }
                  else {
                     ok = isAnswer(works.d0, event);
                  }
                  
                  saveAns(works.d00, works.d1, works.d2);

               } while (!ok);

               break;
         case -1: // Второе действие
               break;
         default:
               alert('Ошибка');
      }
      break;
   case -1: // Первое действие
      break;
   default:
      alert('Ошибка');
}
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
   if (isNaN(event) || !isFinite(event)) {
      alert('Вы ввели недопустимый символ');
      return false;
   }
   else if (event < 1 || event > q) {
      alert('Ваше число выходит из допустимого диапазона');
      return false;
   }
return true;
}

function saveAns (questNum, answer1, answer2) {
   switch(event) {
      case 1:
         answers.push([questNum, answer1]);
         break;
      case 2:
         answers.push([questNum, answer2]);
         break;

   }
   return event;
} 

console.log(answers);
var stage = prompt('Введите номер хода');
console.log(stage);
var stageLog = `В ходе номер ${stage} был сделан такой выбор: ${answers[stage-1][0]}`;
alert(stageLog);