console.log("hello, vanilla.");

//CurrentDate const let
let currentDate = new Date();
let getDay = currentDate.getDay();
let getDate = currentDate.getDate();
let getMonth = currentDate.getMonth();
let getFullYear = currentDate.getFullYear();


//Calendar Body const let
let firstDayThisMonth = new Date(getFullYear, getMonth, 1);
let lastDayThisMonth = new Date(getFullYear, getMonth + 1, 0); // Day를 0으로 설정하면 전 달 마지막 날짜를 잡아줌.
const currentDayOfWeek = document.querySelector('.currentDayOfWeek');
const currentDay = document.querySelector('.currentDay');
const currentMonthAndYear = document.querySelector('.currentMonthAndYear');
const ths = document.getElementsByTagName('th')
const trs = document.querySelectorAll('.tbodyTr');
const tds = document.getElementsByTagName('td');
const tdsArray = [].slice.call(tds)
//Array.from(tds)도 가능하나 IE 호환 안됨
//Array.prototype.slice.call(argument)도 가능
const firstDaySecondWeek = [8, 7, 6, 5, 4, 3, 2];

//button const
const prevBtn = document.querySelector('.button.prev');
const nextBtn = document.querySelector('.button.next');


//let const
let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

//CurrentDate
//요일

function getDays () {
  switch(getDay) {
    case 0 :
      currentDayOfWeek.textContent = days[0];
      break;
    case 1 :
      currentDayOfWeek.textContent = days[1];
      break;
    case 2 :
      currentDayOfWeek.textContent = days[2];
      break;
    case 3 :
      currentDayOfWeek.textContent = days[3];
      break;
    case 4 :
      currentDayOfWeek.textContent = days[4];
      break;
    case 5 :
      currentDayOfWeek.textContent = days[5];
      break;
    case 6 :
      currentDayOfWeek.textContent = days[6];
      break;
    default :
      throw Error ("what the heck happened?");
  }
}
getDays();

//날짜
currentDay.textContent = getDate;

//연월
function getMonths () {
  switch(getMonth) {
    case 0 :
      currentMonthAndYear.textContent = `${months[0]} ${getFullYear}`;
      break;
    case 1 :
      currentMonthAndYear.textContent = `${months[1]} ${getFullYear}`;
      break;
    case 2 :
      currentMonthAndYear.textContent = `${months[2]} ${getFullYear}`;
      break;
    case 3 :
      currentMonthAndYear.textContent = `${months[3]} ${getFullYear}`;
      break;
    case 4 :
      currentMonthAndYear.textContent = `${months[4]} ${getFullYear}`;
      break;
    case 5 :
      currentMonthAndYear.textContent = `${months[5]} ${getFullYear}`;
      break;
    case 6 :
      currentMonthAndYear.textContent = `${months[6]} ${getFullYear}`;
      break;
    case 7 :
      currentMonthAndYear.textContent = `${months[7]} ${getFullYear}`;
      break;
    case 8 :
      currentMonthAndYear.textContent = `${months[8]} ${getFullYear}`;
      break;
    case 9 :
      currentMonthAndYear.textContent = `${months[9]} ${getFullYear}`;
      break;
    case 10 :
      currentMonthAndYear.textContent = `${months[10]} ${getFullYear}`;
      break;
    case 11 :
      currentMonthAndYear.textContent = `${months[11]} ${getFullYear}`;
      break;
    default :
      throw Error ("what the heck happened?");
  }
}
getMonths();

// Calendar Body
// 요일 라벨링
for (let i = 0; i < ths.length; i++) {
  ths[i].textContent = days[i]
}

// 날짜넣기

let a = 0;
function putDays () {

  let firstDayEveryMonths = new Date(getFullYear, getMonth + a, 1);

  for (let j = 0; j < trs[0].children.length; j++) {
    if (firstDayThisMonth.getDay() === j) {
      let k = 1;
      for (let l = j; l < trs[0].children.length; l++) {
        trs[0].children[l].textContent = k;
        k += 1;
      }
    }
  }
  
  let m = firstDaySecondWeek[firstDayThisMonth.getDay()]
  
  for (let n = 1; n < trs.length; n++) {
    for (let o = 0; o < trs[0].children.length; o++) {
      trs[n].children[o].textContent = m;
      m += 1;
      if (m === lastDayThisMonth.getDate() + 1) {
        break
      };
    }
    if (m === lastDayThisMonth.getDate() + 1) {
      break
    };
  };
  
  // 오늘 날짜 빨간색, 그 외 날짜는 검은색 만들기

  tdsArray.forEach((td, index) => {
    let getDateString = getDate.toString();
    if (getFullYear === firstDayEveryMonths.getFullYear() && getMonth === firstDayEveryMonths.getMonth() && tds[index].textContent === getDateString) {
      tdsArray[index].style.color = 'red';
    } else {
      tdsArray[index].style.color = 'black';
    }
   });
};
putDays();



//btn

// 클릭시 작동하는 함수
function getFirstDayEveryMonths() {

  // 월 전환, 버튼 클릭시 a++, a--

  let firstDayEveryMonths = new Date(getFullYear, getMonth + a, 1);
  let lastDayEveryMonths = new Date(getFullYear, (getMonth + a) + 1, 0);
  
  // 상단 오늘 날짜, 월, 연, 요일 전환

  if (getFullYear === firstDayEveryMonths.getFullYear() && getMonth === firstDayEveryMonths.getMonth()) {
    getDays();
    getMonths();
    currentDay.textContent = getDate;
    putDays();
  } else {
    currentDayOfWeek.textContent = days[firstDayEveryMonths.getDay()];
    currentMonthAndYear.textContent = `${months[firstDayEveryMonths.getMonth()]} ${firstDayEveryMonths.getFullYear()}`;
    currentDay.textContent = firstDayEveryMonths.getDate();
  };

  //calender body 날짜 전환

  for (let j = 0; j < trs[0].children.length; j++) {
    let k = 1;
    for (let l = j; l < trs[0].children.length; l++) {
      if (firstDayEveryMonths.getDay() === j) {
        trs[0].children[l].textContent = k;
        k += 1;
      }
    }
  }

  let m = firstDaySecondWeek[firstDayEveryMonths.getDay()]

  for (let n = 1; n < trs.length; n++) {
    for (let o = 0; o < trs[0].children.length; o++) {
      trs[n].children[o].textContent = m;
      m += 1;
      if (m === lastDayEveryMonths.getDate() + 1) {
        break
      };
    }
    if (m === lastDayEveryMonths.getDate() + 1) {
      break
    };
  }

  // 다른 달로 넘어갔을때 td color를 리셋하고 다시 현재 달로 돌아왔을때 오늘 날짜 color red로 전환

  tdsArray.forEach((td, index) => {
    let getDateString = getDate.toString();
    if (getFullYear === firstDayEveryMonths.getFullYear() && getMonth === firstDayEveryMonths.getMonth() && tds[index].textContent === getDateString) {
      tdsArray[index].style.color = 'red';
    } else {
      tdsArray[index].style.color = 'black';
    }
   });

}


prevBtn.addEventListener('click', () => {
  a--;

  tdsArray.forEach((td) => {
    td.textContent = '';
  });

  getFirstDayEveryMonths();
});

nextBtn.addEventListener('click', () => {
  a++;

  tdsArray.forEach((td) => {
    td.textContent = '';
  });

  getFirstDayEveryMonths();
});


// 특정 날짜 클릭 시 그 값 화면에 출력

tdsArray.forEach((td, index) => {
  td.addEventListener('click', () => {
    
    const tdDate = new Date(getFullYear, getMonth + a, tdsArray[index].textContent);

    if (tdsArray[index].textContent !== '') {
      currentDay.textContent = tdsArray[index].textContent;
      const tdDay = tdDate.getDay();
      switch (tdDay) {
        case 0:
          currentDayOfWeek.textContent = days[0];
          break;
        case 1:
          currentDayOfWeek.textContent = days[1];
          break;
        case 2:
          currentDayOfWeek.textContent = days[2];
          break;
        case 3:
          currentDayOfWeek.textContent = days[3];
          break;
        case 4:
          currentDayOfWeek.textContent = days[4];
          break;
        case 5:
          currentDayOfWeek.textContent = days[5];
          break;
        case 6:
          currentDayOfWeek.textContent = days[6];
          break;
        default:
          throw Error("what the heck happened?");
      }
    }
  });
});
