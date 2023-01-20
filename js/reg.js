// 陈攀宇做
$(function(){ 
        /*匹配以数字或者字母开头并且位数在2-5位或者2-5位的中文*/
        var regName =  /(^[a-zA-Z0-9]{2,5}$)|(^[\u2E80-\u9FFF]{2,5}$)/;
        $("#name").change(function(){
            if(!regName.test($("#name").val())){
                alert("名字输入不符合要求");
            }    
        });

        var regPhone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        $("#phone").change(function(){
            if(!regPhone.test($("#phone").val())){
                alert("手机号码输入不正确");
            }    
        });
})
