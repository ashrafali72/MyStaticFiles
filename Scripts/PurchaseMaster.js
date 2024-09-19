$(document).ready(function () {
    var PartyDetail;
    $("#ContentPlaceHolder1_txtBillNo").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/viewgrn.aspx/GetAllGrnItem",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtBillNo").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.BillNo,
                            value: item.BillNo,
                            PartyDetail: item.Id + '_' + item.PId,
                        };
                    }))
                },

                error: function (result) {
                    //alert(result);
                    Openmodal_message("Error", result)
                    $("#ContentPlaceHolder1_txtBillNo").css('border-color', 'red');
                }
            });
        },
        minLength: 1,
        select: function (event, ui) {
            var str = ui.item.PartyDetail;
            var arrayparty = str.split("_");
            console.log(arrayparty);
            var id = arrayparty[0];
            $("#ContentPlaceHolder1_hdnpurchaseItemId").val(id);
            $("#ContentPlaceHolder1_hdnPurchaseheaderId").val(arrayparty[1]);
            $("#ContentPlaceHolder1_txtBillNo").css('border-color', 'green');
        }
    });

//------------------------------------------------EDIT GRN RECORDS-------------------------------------------------

    $("#ContentPlaceHolder1_txtbillNumber").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/viewgrn.aspx/GetAllGrnItem",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtbillNumber").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.BillNo,
                            value: item.BillNo,
                            PartyDetail: item.Id + '_' + item.PId,
                        };
                    }))
                },

                error: function (result) {
                    //alert(result);
                    Openmodal_message("Error", result)
                    $("#ContentPlaceHolder1_txtbillNumber").css('border-color', 'red');
                }
            });
        },
        minLength: 1,
        select: function (event, ui) {
            var str = ui.item.PartyDetail;
            var arrayparty = str.split("_");
            console.log(arrayparty);
            var id = arrayparty[0];
            $("#ContentPlaceHolder1_hdnpurchaseItemId").val(arrayparty[1]);
            $("#ContentPlaceHolder1_txtbillNumber").css('border-color', 'green');
        }
    });

});