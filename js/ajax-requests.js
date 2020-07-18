function sendContactInfo(){
    var data = {};
    data.fname = $('#fname').val();
    data.phone = $('#phone').val();
    data.email = $('#email').val();
    data.message = $('#message').val();
    console.log(data);
    $.post('https://portfolio-mailsender.herokuapp.com/api/getComments',data,function(response,status){
        console.log(response);
        if(response.status == "success"){
            alert("Details Submitted Successfully");
        }else{
            alert("oops something went Wrong Try again!!!");
        }
    }
    
    );
}

$('#submit').click(sendContactInfo)