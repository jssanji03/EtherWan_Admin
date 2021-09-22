// 即時宣導 跑馬燈
$(function () {
    const marqueeData =[
        "1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.",
        "2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.",
        "3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.",
        "10. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.",
        "20. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.",
        "30. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.",
    ]
    function marqueeArr(marqueeData) {
        const marquee = document.querySelector(".marquee ul")
        const marqueeLi = marquee.childNodes;
        var html = "";
        for (let i = 0; i < marqueeData.length; i++) { 
            html += `<li class="marquee-item">${marqueeData[i]}</li>`;
        }
        marquee.innerHTML = html
        
        // $("#marquee").html(html); //印出html
        for (let i = 0; i < marqueeLi.length; i++) {
            const Li = marqueeLi[i];
            Li.style.animationDelay = `${i * 4}s`;
            Li.style.animationDuration = `${marqueeLi.length * 4}s`;
        }
    }
    marqueeArr(marqueeData)
})

// HomeBanner 輪播
// $(function () {
//     const data =[
//         [
//             "https://fakeimg.pl/1000x350/",
//             "http://www.google.com.tw"
//         ],
//         [
//             "https://fakeimg.pl/1000x350/",
//             "http://www.yahoo.com.tw"
//         ],
//         [
//             "https://fakeimg.pl/1000x350/",
//             "http://www.facebook.com.tw"
//         ],
//         [
//             "https://fakeimg.pl/1000x350/",
//             "http://www.msn.com.tw"
//         ],
//     ]
    
//     function carousel (data) {
//         // console.log(data);
//         var carousel = `
//         <div class="row pt-70 align-items-center">
//             <div class="col-lg-3 col-12 order-lg-first order-last mt-lg-0 mt-3">
//                 <div class="row flex-xl-column d-flex pe-4">
//                     <div class="information_card bg_gradient">
//                         <a class="" href="./pages/homepage.html">
//                             <h3 class="white">關於益網</h3>
//                             <p class="important fontsEn fz-12 lh-30">About EtherWan</p>
//                         </a>
//                 </div>
//                 <div class="information_card mt-4 bg_gradient">
//                     <a class="" href="./pages/companyForm.html">
//                         <h3 class="white">公司管理辦法/表單</h3>
//                         <p class="important fontsEn fz-12 lh-30 ">Policy / Form</p>
//                     </a>
//                 </div>
//                 <div class="information_card mt-4 bg_gradient">
//                     <a class="" href="./pages/useForm.html">
//                         <h3 class="white">常用資訊</h3>
//                         <p class="important fontsEn fz-12 lh-30">Useful Information</p>
//                     </a>
//                 </div>
//             </div>
//         </div>
//         <div class="col-lg-9 col-12 p-0 order-lg-last order-first">
//             <div id="carousel1"class="carousel slide" data-bs-ride="carousel">
//                 <div class="carousel-indicators">
//                 </div>
//                 <div class="carousel-inner" style="height: 350px;">
//                 </div>
//                 <button class="carousel-control-prev" type="button" data-bs-target="#carousel1"
//                                                                         data-bs-slide="prev">
//                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Previous</span>
//                 </button>
//                 <button class="carousel-control-next" type="button" data-bs-target="#carousel1"
//                                                                         data-bs-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </div>
//     </div>
//         `;
//         var html = ``;
//         for (var i = 0; i < data.length; i++) {
//             html += `<div class="carousel-item photoLink">`;
//             html += `<a href=${data[i][1]} target=_blank><img src="${data[i][0]}" class="img-fluid" alt="..."></a>`;
//             html += "</div>";
//             if (i == 9) {
//                 break;
//             }
//         }
//         $(".HomeBanner .container").html(carousel); //印出html
//         $(".carousel-inner").html(html); //印出html
//         $(".carousel-inner>div").first().addClass("active"); 
//     }
//     carousel(data)
//     //下方自動加入控制圓鈕
//     const total = document.querySelectorAll('.carousel-item').length
//     append_li();
//     function append_li() {
//         let li = "";
//         var get_ac = $(".carousel-inner .active");
//         var ac = $(".carousel .carousel-inner div").index(get_ac);

//         for (var i = 0; i <= total - 1; i++) {
//             if (i == (ac) / 2) {
//                 li += `<button type="button" data-bs-target="#carousel1" class="active" data-bs-slide-to="${i}" class="active"
//                             aria-current="true"></button>`;
//             } else {
//                 li += `<button type="button" data-bs-target="#carousel1" data-bs-slide-to="${i}"
//                             ></button>`;
//             }
//         }
//         $(".carousel-indicators").append(li);
//     }

//     //單則隱藏控制鈕
//     if (total.length < 2) {
//         $('.carousel-indicators').hide();
//     }
// }
// );

//行事曆
$(function () {
        const data = [
                {
                    month: 'August',
                    date: '2021/08/19',
                    event: '公益路跑'
                },
                {
                    month: 'August',
                    date: '2021/08/20',
                    event: '會議20'
                },
                {
                    month: 'August',
                    date: '2021/08/23',
                    event: '會議23'
                },
                {
                    month: 'August',
                    date: '2021/08/24',
                    event: '會議24'
                },
                {
                    month: 'August',
                    date: '2021/08/31',
                    event: '會議31'
                },
                {
                    month: 'September',
                    date: '2021/09/01',
                    event: '慶生會'
                }]
        function today() {
            const todayEvent = data.map(function(item,index){
                const today = new Date().format("yyyy/MM/dd");
                if (item.date === today) {
                    return `<p class='third'>${item.date.substr(5)}  <span class='mx-2'>${item.event}</span><p>`
                }
            });
            $('#event').html(todayEvent)
        }
        function week() {
            const startDate = new Date();
            let endDate = new Date();
            endDate.setDate(startDate.getDate() + 14);
            const dateList = [];
            // console.log(startDate.getMonth()); 
            while ((endDate.getTime() - startDate.getTime()) >= 0) {
                let year = startDate.getFullYear();
                let month = (startDate.getMonth() + 1).toString().length === 1 ? "0" + (startDate.getMonth() + 1).toString() : (
                    startDate.getMonth() + 1);
                let day = startDate.getDate().toString().length === 1 ? "0" + startDate.getDate() : startDate.getDate();
                dateList.push(`${year}/${month}/${day}`);
                startDate.setDate(startDate.getDate() + 1);
            }
            data.map(function (item, index) {
                dateList.forEach((vDay) => {
                    if (item.date === vDay) {
                        let htmlTemplate = ''
                        htmlTemplate = htmlTemplate + `<li class='third'>${item.date.substr(5)}  <p class='mx-2'>${item.event}</p></li>`

                        const event = document.querySelector('#event')
                        event.innerHTML += htmlTemplate
                    }
                })
            });
        }

        function month(year,month) {
            const select = document.querySelector('.ui-datepicker-month')
            const value = select.options[select.selectedIndex].text;
            // console.log(month)
            const monthEvent = data.map(function (item, index) {
                if (item.month === value) {
                    return `<li class='third'>${item.date.substr(5)}  <span class='lh-30 mx-3 text'>${item.event}</span></li>`
                }
            });
            $('#event').html(monthEvent)
        }
        function gotoDate(ev) {
            const event = data.map(function (item, index) {
                // console.log(ev);
                if (item.date === ev) {
                    return `<li class='third'>${item.date.substr(5)}  <p class='lh-30'>${item.event}</p></li>`
                }
                else {
                    return ``
                }
            })
            $('#event').html(event)
        }
        $(".datepicker").datepicker({
            changeMonth: true,
            onSelect: gotoDate,
            onChangeMonthYear: month,
            showMonthAfterYear: true,
            dateFormat: "yy/mm/dd",
            stepMonths: 1,
            monthNamesShort: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            dayNamesMin:[ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
        });
        window.onload = month;
});

// dataTable 審核狀態
const dataTable = document.querySelectorAll('.datatable-RWD')
  for (let i = 0; i < dataTable.length; i++) {
    const rows = dataTable[i].rows ;
    for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].cells.length; j++) {
      let text = rows[i].cells[j]
      switch (text.innerText) {
        case '駁回':
          text.firstChild.className = 'pill-danger'
          break;
        case '審核完成':
          text.firstChild.className = 'pill-approval'
          break;
        case '審核中':
          text.firstChild.className = 'pill-draft'
          break;
      }
    }
  }
  }