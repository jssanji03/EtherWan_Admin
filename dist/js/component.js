

/////### Datatable Control Start ###/////
// https://datatables.net/


  
//## 包含標題與搜尋功能 RWD card - End ##//    

//## Datatable Responsive 套件 - Start ##//
 $('.datatable-RWD').DataTable({
        searching: false,
        "paging": false,
        "ordering": false,
        "info": false,
        "autoWidth": false,
        scroller: true,
        responsive: true,
        "lengthChange": false,
        "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
        },
        dom: "<'row'<'col-xl-12'fr>>" +
            "<'row'<'col-sm-12'tlp>>",
    }
);
 
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

/////### DateRangePicker 日期時間選擇 Start ###/////
// https://www.daterangepicker.com/
$(function () { 
  $('.reservation').daterangepicker({
    timePicker: true,
    singleDatePicker: true,
    locale: {
      format: 'YYYY/MM/DD'
    }
  });
});

// 單日期選擇器 //
$(function () {  
  $('.singleDate').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    locale: {
      format: 'YYYY/MM/DD'
    }
  });
});
/////###  End ###/////

/////### 單選 select2 Start ###/////
// https://select2.org/getting-started/basic-usage
$(function () {
    $(".singleSelect").select2({
    placeholder: "---- 請選擇 ----",
    allowClear: true,
    closeOnSelect: true,
    allowHtml: true,
    });
});

// #### 複選 Select2 #### //
$(function () { 
  $(".multipleSelect").select2({
    placeholder: "---- 請選擇 ----",
    allowClear: true,
    tags: true,
    // closeOnSelect: false,
  });
});  
/////###  End ###/////    


//Menu選單
$(function () {
    var pathname = window.location.pathname;
   $(".nav-sidebar li a").each( function() {
        var href= $(this).attr("href");
        if (href != undefined && pathname.indexOf(href) >= 0){
          $(this).addClass("active");
          $(this).parents('.nav-treeview').children('.nav-link').addClass("active")
          $(this).parents('.nav-treeview').parent().addClass("menu-open")
          $(this).parents('.menu-open').children('.nav-link').addClass("active")
        }
    });
});



//畫面拖曳 sortable
$(function () {
    $( ".box1" ).sortable({
    connectWith: ".box1",  
    placeholder: "ui-state-highlight",
    update: function(event, ui) {
    var changedList = this.id;
    var order = $(this).sortable('toArray');
    var positions = order.join(';');

      console.log({
        id: changedList,
        positions: positions
      });
    }
    });
})

// SummerNote
 $('.summernote').summernote({
      height: 150,
 })
  
 // pdf.js 
//https://mozilla.github.io/pdf.js/getting_started/#download
// $('#File').on("change", function (e) {
//     var file = $('#File')[0].files[0];
//     var type = file.type;
//     if (type.indexOf('pdf') != '-1'){
//       const file = e.target.files[0],
//         fileReader = new FileReader();
//         var pageNum = 1,
//           pageRendering = false,
//           pageNumPending = null;
      
//       fileReader.onload = function (ev) {

//           pdfjsLib.getDocument({ data: fileReader.result }).promise.then((pdf) => {
//           pageRendering = true;
//         // Update current page in HTML
//             pdf.getPage(pageNum).then(function (page) {
//             console.log(pageNum);
//           var desiredWidth = 1000;
//           var viewport = page.getViewport({ scale: 1 });
//           var scale = desiredWidth / viewport.width;
//           var scaledViewport = page.getViewport({ scale: scale });

//           var canvas = document.querySelector(".the-canvas");
//           var context = canvas.getContext("2d");

//           canvas.height = scaledViewport.height;
//           canvas.width = scaledViewport.width;

//           var renderContext = {
//             canvasContext: context,
//             viewport: scaledViewport
//           };
//           var renderTask = page.render(renderContext);
//           renderTask.promise.then(function () {
//             console.log("Page rendered");
//               var png_data = canvas.toDataURL('image/png')
//               $('.picDemo').attr('src', png_data);
//           });
//         });
//       });
//         };
//         fileReader.readAsArrayBuffer(file);
//     } else {
//       var file = $('#File')[0].files[0];
//         console.log(URL.createObjectURL(file));
//         var reader = new FileReader;
//         reader.onload = function (e) {
//             $('.picDemo').css('display', 'block');
//           $('.picDemo').attr('src', e.target.result);
//             // $('#the-canvas').css('display', "none ");
//         };
//         reader.readAsDataURL(file);
//     }
// });
 // pdf.js 
// $('#File').on("change", function (e) {
//     var file = $('#File')[0].files[0];
//     var type = file.type;
//     if (type.indexOf('pdf') != '-1'){
//       const file = e.target.files[0];
//         fileReader = new FileReader();
//         fileReader.onload = function (ev) {
//         pdfjsLib.getDocument({data: fileReader.result}).promise.then((pdf) => {
//         // Update current page in HTML
//           pdf.getPage(1).then(function (page) {
//           var desiredWidth = 1000;
//           var viewport = page.getViewport({ scale: 1 });
//           var scale = desiredWidth / viewport.width;
//           var scaledViewport = page.getViewport({ scale: scale });

//           var canvas = document.querySelector(".the-canvas");
//           var context = canvas.getContext("2d");

//           canvas.height = scaledViewport.height;
//           canvas.width = scaledViewport.width;

//           var renderContext = {
//             canvasContext: context,
//             viewport: scaledViewport
//           };
//           var renderTask = page.render(renderContext);
//           renderTask.promise.then(function () {
//             console.log("Page rendered");
//               var png_data = canvas.toDataURL('image/png')
//               $('.picDemo').attr('src', png_data);
//           });
//         });
//       });
//         };
//         fileReader.readAsArrayBuffer(file);
//     } else {
//       var file = $('#File')[0].files[0];
//         console.log(URL.createObjectURL(file));
//         var reader = new FileReader;
//         reader.onload = function (e) {
//             $('.picDemo').css('display', 'block');
//           $('.picDemo').attr('src', e.target.result);
//             // $('#the-canvas').css('display', "none ");
//         };
//         reader.readAsDataURL(file);
//     }
// });
 
//  pdf.js 
$('#File').on("change", function (e) {
    var file = $('#File')[0].files[0];
    var type = file.type;
    if (type.indexOf('pdf') != '-1'){
      const file = e.target.files[0];
      var url = window.URL.createObjectURL(file);
      // var url = window.URL.revokeObjectURL(file);
      console.log(url);
      // fileReader = new FileReader();
      var pdfDoc = null,
          pageNum = 1,
          pageRendering = false,
          pageNumPending = null,
          canvas = document.querySelector(".the-canvas"),
          context = canvas.getContext("2d");

      function renderPage(num) {
        pageRendering = true;
        // Initial/first page rendering
          // for (var num = 1; num < pdf.numPages; ++num) {
            pdfDoc.getPage(num).then(function (page) {
              // you can now use *page* here
              console.log(num);
              var desiredWidth = 1000;
              var viewport = page.getViewport({ scale: 1 });
              var scale = desiredWidth / viewport.width;
              var scaledViewport = page.getViewport({ scale: scale });

              // var canvas = document.querySelector(".the-canvas");

              canvas.height = scaledViewport.height;
              canvas.width = scaledViewport.width;

              var renderContext = {
                canvasContext: context,
                viewport: scaledViewport
              };
              // page.render(renderContext);
              var renderTask = page.render(renderContext);
              // Wait for rendering to finish
              renderTask.promise.then(function() {
                pageRendering = false;
                var png_data = canvas.toDataURL('image/png')
                $('.picDemo').attr('src', png_data);
                $('#previewModal .modal-footer').css('display', 'block');
                if (pageNumPending !== null) {
                  // New page rendering is pending
                  renderPage(pageNumPending);
                  pageNumPending = null;
                }
              });

              document.getElementById('page_num').textContent = num;
            });
          // }
        // });
      };
            /**
       * If another page rendering in progress, waits until the rendering is
       * finised. Otherwise, executes rendering immediately.
       */
      function queueRenderPage(num) {
        if (pageRendering) {
          pageNumPending = num;
        } else {
          renderPage(num);
        }
      }
            /**
       * Displays previous page.
       */
      function onPrevPage() {
        if (pageNum <= 1) {
          return;
        }
        pageNum--;
        queueRenderPage(pageNum);
      }
      document.getElementById('prev').addEventListener('click', onPrevPage);

      /**
       * Displays next page.
       */
      function onNextPage() {
        if (pageNum >= pdfDoc.numPages) {
          return;
        }
        pageNum++;
        queueRenderPage(pageNum);
      }
      document.getElementById('next').addEventListener('click', onNextPage);

      pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
        pdfDoc = pdfDoc_;
        document.getElementById('page_count').textContent = pdfDoc.numPages;

        // Initial/first page rendering
        renderPage(pageNum);
      });
      // fileReader.readAsArrayBuffer(file);
    } else {
      var file = $('#File')[0].files[0];
        console.log(URL.createObjectURL(file));
        var reader = new FileReader;
        reader.onload = function (e) {
          $('.picDemo').css('display', 'block');
          $('.picDemo').attr('src', e.target.result);
          $('#previewModal .modal-footer').css('display', "none ");
        };
        reader.readAsDataURL(file);
    }
});
 