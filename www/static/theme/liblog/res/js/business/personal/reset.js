function reset(){$(".register-item").removeClass("has-error"),$(".alert-danger").remove()}function showError(r,e){var s='<small class="help-block alert alert-danger checkright" style="margin-bottom: 0px; margin-top: 10px;">'+e+"</small>";r.parents(".register-item").addClass("has-error").append(s)}$("#savebtn").click(function(){reset();var r=$("#securityForm").validate({error:function(r,e){showError(r,e),r.one("keyup",function(){$(this).parents(".form-group").removeClass("has-error has-feedback").find(".errorinfo,.glyphicon-remove").addClass("hidden")})},submitBtn:{flag:!0}});if(r){var e={oldpassword:$("#oldpassword").val(),password:$("#password").val(),repassword:$("#repassword").val(),__CSRF__:$("#csrf").val()};$.ajax({url:"/personal/setting/resetpwd",data:e,type:"POST",success:function(r){0===r.errno?(alert("更新成功！"),window.location.href="/personal/setting/password"):alert(r.errmsg)}})}return!1}),$(document).keyup(function(r){13==r.keyCode&&$("#savebtn").trigger("click")});