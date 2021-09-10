

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


/////### DateRangePicker 日期時間選擇 Start ###/////
// https://www.daterangepicker.com/
$(function () { 
  $('input[name="reservation"]').daterangepicker({
    timePicker: true,
    singleDatePicker: true,
    locale: {
      format: 'YYYY/MM/DD hh:mm A'
    }
  });
});

// 單日期選擇器 //
$(function () {  
  $('input[name="singleDate"]').daterangepicker({
    singleDatePicker: true,
  showDropdowns: true,
  //   minYear: 1901,
  // maxYear: parseInt(moment().format('YYYY'), 10),
    locale: {
      format: 'YYYY/MM/DD'
    }
  });
});
/////###  End ###/////

/////### magicsuggest 支援可輸入select Start ###/////
// http://nicolasbize.com/magicsuggest/doc.html  

$(function () { 
  $('.searchAddress').magicSuggest({
　　placeholder:'---- 請輸入 ----',
　　allowFreeEntries: true,
　　maxSelection:1,
　　autoSelect:true,
　　displayField:"value",
　　resultAsString:true,
    selectionStacked: true,
    toggleOnClick: true,
　　data: ['台北', '新北市']
  }); 
});


///##### disabled magicsuggest 支援可輸入select #####////
$(function () { 
  $('.searchAddress_disable').magicSuggest({
　　placeholder:'---- 請輸入 ----',
　　allowFreeEntries: true,
　　maxSelection:1,
　　autoSelect:true,
　　displayField:"value",
　　resultAsString:true,
    selectionStacked: true,
    toggleOnClick: true,
    disabled: true,
　　data: ['台北', '新北市']
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

//跑馬燈
$(function () {
    const marqueeStyleArr = document.getElementsByClassName('marquee');
    for (let i = 0; i < marqueeStyleArr.length; i++) {
        console.log(marqueeStyleArr.length);
        this.translateX = this.translateX + marqueeStyleArr[i].clientWidth;  
    }
})


//jsTree
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