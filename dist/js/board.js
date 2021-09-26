
// 畫面新增頁面
$(function () {
    const data =[
        [
            "https://fakeimg.pl/1000x350/",
            "http://www.google.com.tw"
        ],
        [
            "https://fakeimg.pl/1000x350/",
            "http://www.yahoo.com.tw"
        ],
        [
            "https://fakeimg.pl/1000x350/",
            "http://www.facebook.com.tw"
        ],
        [
            "https://fakeimg.pl/1000x350/",
            "http://www.msn.com.tw"
        ],
    ]
    $("#clone").on('click', function () {
        const val = $('input:radio[name="list"]:checked').val();
        const board = [".OneGrid", ".TwoGrid", ".ThreeGrid", ".FourGrid", ".announcement", ".calendar", ".leaveApplication", ".LinkURL", ".HomeBanner", ".Propaganda"]
        
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
        function homePage(grid) {
            function carousel (data) {
                var carousel = `
            <section class="HomeBanner col-12">
            <div class="container">
                <div class="row pt-70 align-items-center">
                    <div class="col-lg-3 col-12 order-lg-first order-last mt-lg-0 mt-3">
                        <div class="row flex-xl-column d-flex pe-4">
                            <div class="information_card bg_gradient">
                                <a class="" href="./pages/homepage.html">
                                    <h3 class="white">關於益網</h3>
                                    <p class="important fontsEn fz-12 lh-30">About EtherWan</p>
                                </a>
                            </div>
                            <div class="information_card mt-4 bg_gradient">
                                <a class="" href="./pages/companyForm.html">
                                    <h3 class="white">公司管理辦法/表單</h3>
                                    <p class="important fontsEn fz-12 lh-30 ">Policy / Form</p>
                                </a>
                            </div>
                            <div class="information_card mt-4 bg_gradient">
                                <a class="" href="./pages/useForm.html">
                                    <h3 class="white">常用資訊</h3>
                                    <p class="important fontsEn fz-12 lh-30">Useful Information</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-12 p-0 order-lg-last order-first">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators ">
                            </div>
                            <div class="carousel-inner" style="height: 350px;">
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                `;
                var html = ``;
                for (var i = 0; i < data.length; i++) {
                    html += `<div class="carousel-item photoLink">`;
                    html += `<a href=${data[i][1]} target=_blank><img src="${data[i][0]}" class="img-fluid" alt="..."></a>`;
                    html += "</div>";
                    if (i == 9) {
                        break;
                    }
                }
                $(".box1").html(carousel); 
                $(".carousel-inner").html(html); 
                $(".carousel-inner>div").first().addClass("active"); 
            }
            carousel(data)
            
            $(`${grid}:first .container`).before(del);
            $(`${grid}`).addClass('portlet').clone(true).appendTo(".box1");

            //下方自動加入控制圓鈕
            const total = document.querySelectorAll('.carousel-item').length
            append_li();
            function append_li() {
        let li = "";
        var get_ac = $(".carousel-inner .active");
        var ac = $(".carousel .carousel-inner div").index(get_ac);

        for (var i = 0; i <= total - 1; i++) {
            if (i == (ac) / 2) {
                li += `<button type="button" data-bs-target="#carousel1" class="active" data-bs-slide-to="${i}" class="active"
                            aria-current="true"></button>`;
            } else {
                li += `<button type="button" data-bs-target="#carousel1" data-bs-slide-to="${i}"
                            ></button>`;
            }
        }
        $(".carousel-indicators").append(li);
            }
            //單則隱藏控制鈕
            if (total.length < 2) {
        $('.carousel-indicators').hide();
            }
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
            case 'HomeBanner': homePage (board[8]);
            break;
            case 'Propaganda': customPage (board[9]);
            break;
        }
    });
}
);



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


//js Tree Start
$(function () {
    const jsonData = [
                {
                    "id":"json1",
                    "text": "首頁",
                    "parent": "#",
                    "state": {
                        "opened": true,  //展示第一個層級下面的node 
                    },
                },
                {
                    "id": "json2",
                    "text": "企業承諾",
                    "parent": "json1",
                    "a_attr": {
                        "class": "a-link",
                        "href": "#",
                    },
                },
                {
                "id": "json3",
                "text": "企業政策",
                "parent": "json1",
                "a_attr": {
                    "class": "a-link",
                    "href": "#content2",
                },
                }
        ]
        createJSTree(jsonData);
})
    
function customMenu($node) {
        var tree = $("#data").jstree(true);
        var items = {
                        "Create": {
                            "separator_before": false,
                            "separator_after": true,
                            "label": "新增頁面",
                            action: function (data) {
                                $node = tree.create_node($node, { text: 'New Folder', type: 'default' });
                                tree.deselect_all();
                                tree.select_node($node);
                            }

                        },
                        "Rename": {
                            "separator_before": false,
                            "separator_after": false,
                            "label": "重新命名",
                            "action": function (obj) {
                                tree.edit($node);
                            }
                        },
                        "Remove": {
                            "separator_before": false,
                            "separator_after": false,
                            "label": "刪除",
                            "action": function (obj) {
                                tree.delete_node($node);
                            }
                        }
        };
        if ($node.parent == 'json1') {    //如果是根節點
            delete items.Create;
        } return items
}
function createJSTree(jsonData) {
        $('#data').jstree({
            "core": {
                "check_callback": true,
                'data': jsonData
            },
            "plugins": ["themes", "json_data", "html_data","contextmenu"],
            "contextmenu": {
                "items": customMenu
            }
        })
}

//#### js Tree End ####//


