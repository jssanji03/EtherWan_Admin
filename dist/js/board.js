
$(function () {
    var $li = $('li.tab-title li');
        $($li.eq(0).addClass('active').find('a').attr('href')).siblings('.tab-pane').hide();
    $li.on('click',function () {
        $($(this).find('a').attr('href')).show().siblings('.tab-pane').hide();
        $(this).addClass('active').siblings('.active').removeClass('active');
    });
});

// 畫面新增頁面
$(function () {
    $("#clone").on('click',function () {
        const val = $('input:radio[name="list"]:checked').val();
        const board = [".OneGrid",".TwoGrid",".ThreeGrid",".FourGrid",".announcement",".calendar",".leaveApplication",".LinkURL",".HomeBanner",".Propaganda"]
        const edit=`<div class="editPage">
                        <a type="submit" href="./boardEdit.html" class="btn btn-edit btn-sm">編輯</a>
                        <a type="submit" class="btn btn-delete btn-sm" onclick="removeDom(this)">刪除</a>
                    </div>`                   
        const del=`<div class="editPage">
                        <a type="submit" class="btn btn-delete btn-sm" onclick="removeDom(this)">刪除</a>
                    </div>`                   
        function defaultPage(grid) {
            $(`${grid}:first .container`).before(edit);
            $(`${grid}:first`).addClass('portlet').clone(true).css("display", "block").appendTo(".box1");
        }
        function customPage (grid){
            $(`${grid}:first .container`).before(del);
            $(`${grid}:first`).addClass('portlet').clone(true).css("display", "block").appendTo(".box1");
        }
        switch (val) {
            case 'one': defaultPage (board[0]);
            break;
            case 'two': defaultPage (board[1]);
            break;
            case 'three': defaultPage (board[2]);
            break;
            case 'four': defaultPage (board[3]);
            break;
            case 'announcement': customPage (board[4]);
            break;
            case 'calendar': customPage (board[5]);
            break;
            case 'leaveApplication': customPage (board[6]);
            break;
            case 'LinkURL': customPage (board[7]);
            break;
            case 'HomeBanner': customPage (board[8]);
            break;
            case 'Propaganda': customPage (board[9]);
            break;
        }
    });
});



// Alert
function show () {
    const alert = document.querySelector('.alert')
    alert.classList.add("show")
}
function cancel () {
    const alert = document.querySelector('.alert')
    alert.classList.remove("show")
}

function removeDom(obj) {
    const $Node = obj.parentNode.parentNode;
    $Node.remove()
}

//檔案上傳顯示
$('#File').change(function () {
    var file = $('#File')[0].files[0];
    var reader = new FileReader;
    reader.onload = function (e) {
        $('#demo').attr('src', e.target.result);
    };
    reader.readAsDataURL(file);
});

 //color picker with addon
// $('#exampleColorInput').on('change', function () {
//     console.log($('#exampleColorInput').val());
//     const color = $('#exampleColorInput').val()
//     $('.colorNum').val(color)
// })
       