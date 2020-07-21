function sendContactInfo(){
    var data = {};
    data.fname = $('#fname').val();
    data.phone = $('#phone').val();
    data.email = $('#email').val();
    data.message = $('#message').val();
    console.log(data);
    sendDataToServer(data)
}

function sendQuote(){
    var data = {};
    data.fname = $('#quoteName').val();
    data.phone = $('#quotePhone').val();
    data.email = $('#quoteEmail').val();
    data.address = $('#address').val();
    data.service = $('#quoteService').val();
    console.log(data);
    sendDataToServer(data);
}

$('#quoteSubmit').click(sendQuote);
$('#submit').click(sendContactInfo);

function sendDataToServer(data){
    $.post('https://portfolio-mailsender.herokuapp.com/api/getComments',data,function(response,status){
        console.log(response);
        alert(response.message);
    }
    );
}