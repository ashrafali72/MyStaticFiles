$(document).ready(function () {
    //$('body').addClass('fullwidth8181');
    var itemDetail;
    var PartyDetail;

    $("#ContentPlaceHolder1_txtSupplier").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PurchaseInventory.aspx/GetAllSupplier",

                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtSupplier").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.SupplierName,
                            value: item.SupplierName,
                            PartyDetail: item.Id + '_' + item.SupplierName+'_'+item.ContactPerson + '_' + item.Email + '_' + item.Phone,
                        };
                    }))
                },
                error: function (result) {
                    //alert("Error");
                    Openmodal_message("Error", "Please try again after some time");
                }
            });
        },
        minLength: 4,
        select: function (event, ui) {
            var str = ui.item.PartyDetail;
            var arrayparty = str.split("_");
            console.log(arrayparty);
            var id = arrayparty[0];

            $("#ContentPlaceHolder1_hdnSupplierId").val(id);
            $("#ContentPlaceHolder1_txtSupplier").val(arrayparty[1]);
            $("#ContentPlaceHolder1_txtContactPersonName").val(arrayparty[2]);
            $("#ContentPlaceHolder1_txtEmail").val(arrayparty[3]);
            $("#ContentPlaceHolder1_txtPhone").val(arrayparty[4]);
            $("#ContentPlaceHolder1_txtSupplier").css('border-color', 'green');
        }
    });

    $('.number').keypress(function (e) {

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

 /*************************Open PopUp*************************/
 $("#ContentPlaceHolder1_txtItemName").autocomplete({
    source: function (request, response) {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CRM/PurchaseInventory.aspx/GetItemName",

            data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtItemName").val()  + "_" + $("#ContentPlaceHolder1_ddlStockType").val() + "" }),
            dataType: "json",
            success: function (data) {
                var ParsedObject = $.parseJSON(data.d);
                response($.map(ParsedObject, function (item) {
                    return {
                        label: item.ItemName,
                        value: item.ItemName,
                        PartyDetail: item.Id + '_' + item.ItemName,
                    };
                }))
            },
            error: function (result) {
                //alert("Error");
                Openmodal_message("Error", "Please try again after some time");
            }
        });
    },
    minLength: 4,
    select: function (event, ui) {
        var str = ui.item.PartyDetail;
        var arrayparty = str.split("_");
        console.log(arrayparty);
        var id = arrayparty[0];

        $("#ContentPlaceHolder1_hdnItemId").val(id);
       
    }
});

    /*********************END***************************/
 
    /*********************END***************************/
   


    function PopulateFields(id) {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CRM/CreateOrder.aspx/GetAllProduts",
            data: JSON.stringify({ "Name": "" + id + "" }),
            dataType: "json",
            success: function (data) {

                console.log(data);
            },

            error: function (result) {
                //alert("Error");
                Openmodal_message("Error", "Please try again after some time");
            }
        });
    }

    $('.validation').keypress(function () {
        if ($(this).hasClass('mustFill')) {
            $(this).removeClass('mustFill');
        }
    });
    $('input[type="text"]').keypress(function () {
        if ($(this).hasClass('mustFill')) {
            $(this).removeClass('mustFill');
        }
    });

    $('.number').keypress(function (e) {

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $('#ContentPlaceHolder1_ddlitem').bind('change', function () {
        $('#ContentPlaceHolder1_hdnItemname').val($(this).val());
    });
});

function addproducttype()
{   
    $("#AddProductType").modal('show');
}
function addsupplier()
{
    $("#OpenSupplier").modal('show');
}
function addItemName()
{
    $("#AddItemsName").modal('show');
}