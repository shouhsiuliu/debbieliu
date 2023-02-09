 // $.ajax("https://randomuser.me/api/").then(function(res){
    //   console.log(res)
    // })

    //定義要用到的網址
    var cataurl ="https://2017.awiclass.monoame.com/api/demo/shop"
    var imgurl ="https://2017.awiclass.monoame.com/"
    var items = []

    //下載所有鞋子資料
    window.onload=function downloadList(){
      $.ajax({
        url: cataurl,
        error: function(){
          console.log("載入失敗")
        },
        success: function(res){
          console.log("載入所有鞋子資料")
          items=res
          // 更新畫面中的元素
          updateList()
        }
      })
      
    }
    //更新列表
    function updateList(){
      $("ul#shoplist").html("")
      items.forEach(item=>{
        var itemEl = $(`
          <li data-id="${item.id}">
              <img src="${imgurl}/${item.img}">
              <div>
                <p>view more</p>
              </div> 
            </a>    
          </li>
        `)
        itemEl.click(function(){
          // $("#selectinfo,#igClose").fadeIn();
          $("#infopop").addClass("openPop");
          $("#infopop").click(function(){
            $(this).removeClass('openPop')
          });
          var selectedId = $(this).attr("data-id")
          updateSelect( selectedId  )
        })
        $("ul#shoplist").append(itemEl)
      })
    }




    //下載選取的商品呈現
    function updateSelect(id){
      $.ajax({
        url: cataurl+"/"+id,
        success: function(res2){
          console.log(`載入${res2.name}(${res2.id})的資料`)
          var content = `
            <ul>
              <li><img src="${imgurl}/${res2.img}"></li>
              <li class="infoprice">NT$${res2.price}</li>
              <li class="infoname">${res2.name} - ${res2.color}</li>
              <li>${res2.description}</li>
             
              
              <li><div class="btn">
                    <ul>  
                      <li><a href="#">Wish List</a></li>
                      <li><a href="#">Add To Bag</a></li>
                    </ul>
                  </div>
              </li>
            </ul>
          `
          $(".selectinfo").html( content )
         
        }
      })
    }

    function optionChange(){
      var select = $("select").val()
      updateSelect(select)
    }

    // filter
    $(document).ready(function() {
      $("#shopInput").on("keyup", function() {
          // 抓 搜尋的關鍵詞
          var value = $(this).val().toLowerCase(); //toLowerCase() 變小寫
          // 抓Table裡頭有沒有符合
          $("#shop .infopop .selectinfo li").filter(function() {
            $("ul#shoplist").toggle($(this).append(value).toLowerCase().indexOf(value))
          });
      });
    });

  //   $(document).ready(function() {
  //     $("#myInput").on("keyup", function() {
  //         // 抓 搜尋的關鍵詞
  //         var value = $(this).val().toLowerCase(); //toLowerCase() 變小寫
  //         // 抓Table裡頭有沒有符合
  //         $("#myBody tr").filter(function() {
  //             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  //         });
  //     });
  // });