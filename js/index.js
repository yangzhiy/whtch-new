baseUrl="http://120.78.164.247:8099"
$(function() {
    $(".contentLeft li").on({
        click:function(){
        if($(this).text()=="首页"){
            $(".contentRight").load("home.html")
        }else if($(this).text()=="栏目管理"){
            $(".contentRight").load("category.html")
        }else if($(this).text()=="资讯管理"){
            $(".contentRight").load("info1.html")
        }else if($(this).text()=="用户"){
            $(".contentRight").load("user.html")
        }
    }
    })
})