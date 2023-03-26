let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target;

      // если у нас есть подсказка...
      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;

      // ...создадим элемент для подсказки

      tooltipElem = document.createElement('div');
      tooltipElem.className = 'help';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      // спозиционируем его сверху от аннотируемого элемента (top-center)
      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // не заезжать за левый край окна

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };


    function myFunction() {
      if($(window).width() > 1460)
      {
          document.getElementById('header_link').style.fontSize = '16px';
          //document.getElementById('header_img').innerHTML = '<a href="https://www.kolledge.ru/"><img src="logo.png"></a>';
      }
      if($(window).width() < 1750)//110%
      {   
          document.getElementById('header_link').style.fontSize = '15px';
      }
      if($(window).width() < 1650)//120%
      {   
          document.getElementById('header_link').style.fontSize = '14px';
      }
      if($(window).width() < 1550)//130%
      {   
          document.getElementById('header_link').style.fontSize = '13px';
      }
      if($(window).width() < 1450)//140%
      {   
          document.getElementById('header_link').style.fontSize = '12px';
      }
      if($(window).width() < 1350)//150%
      {
        document.getElementById('header_link').style.fontSize = '11px';
      }
      if($(window).width() < 1250)//160%
      {   
          document.getElementById('header_link').style.fontSize = '10px';
      }
      if($(window).width() < 1150)//170%
      {
        document.getElementById('header_link').style.fontSize = '9px';
      }
      if($(window).width() < 1050)//180%
      {   
          document.getElementById('header_link').style.fontSize = '8px';
      }
      if($(window).width() < 1030)//190%
      {   
          document.getElementById('header_link').style.fontSize = '7px';
      }
      if($(window).width() < 1000)//200%
      {   
          document.getElementById('header_link').style.fontSize = '6px';
      }
      if($(window).width() < 950)//210%
      {
        document.getElementById('header_link').style.fontSize = '5px';
      }
      if($(window).width() < 750)//260%
      {
        document.getElementById('header_link').style.fontSize = '5px';
      }
      if($(window).width() < 650)//300%
      {
        document.getElementById('header_link').style.fontSize = '5px';
      }
      if($(window).width() < 600)//330%
      {
        document.getElementById('header_link').style.fontSize = '4px';
      }
      if($(window).width() < 500)//390%
      {
        document.getElementById('header_link').style.fontSize = '3px';
      }
      
  }
  
  //вызываем
  myFunction();
  
  //ну и при ресайзе перепроверяем
  $(window).resize(function() {
      myFunction();
  });