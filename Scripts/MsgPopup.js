function Openmodal_message(type, GetMsg) {
    if (type == "Error") {
        $('.headings').css('color', 'red');
    }
    else {
        $('.headings').css('color', '#1cb11c');
    }
    $('.headings').text(type);
    $('#msg').text(GetMsg);
    $("#modalmessage").modal('show');
}

function OpenConfirm() {
    $("#modalmessage_delete").modal('show');
}


