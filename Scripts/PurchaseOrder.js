$(document).ready(function () {
    //$('body').addClass('fullwidth8181');
    var itemDetail;
    var PartyDetail;

    $("#ContentPlaceHolder1_txtSupplier").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PurchaseOrder.aspx/GetAllSupplier",

                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtSupplier").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.CompanyName,
                            value: item.CompanyName,
                            PartyDetail: item.Id + '_' + item.ContactPerson1 + '_' + item.Email1 + '_' + item.Phone,
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

            $("#ContentPlaceHolder1_hdnPartyId").val(id);
            $("#ContentPlaceHolder1_txtContactPersonName").val(arrayparty[1]);
            $("#ContentPlaceHolder1_txtEmail").val(arrayparty[2]);
            $("#ContentPlaceHolder1_txtPhone").val(arrayparty[3]);
            //$("#ContentPlaceHolder1_txtPhone2").val(arrayparty[4]);
            //$("#ContentPlaceHolder1_hdnPartyTin").val(arrayparty[5]);
            $("#ContentPlaceHolder1_txtSupplier").css('border-color', 'green');
        }
    });

    $('.number').keypress(function (e) {

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    //changes 
    /*********************RAWMATERIAL SEARCH FOR PHARMACEUTICALS***************************/


    $("#ContentPlaceHolder1_txtItemName").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PurchaseOrder.aspx/GetAllItem",

                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtItemName").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Alias,
                            value: item.Alias,
                            itemDetail: item.Id + '_' + item.RawMaterialName + '_' + item.Quantity + '_' + item.Rate + '_' + item.Unit,
                        };
                    }))
                },
                error: function (result) {
                    //alert("Error");
                    Openmodal_message("Error", "Please try again after some time");
                }
            });
        },
        minLength: 3,
        select: function (event, ui) {
            var str = ui.item.itemDetail;
            var arrayitem = str.split("_");
            console.log(arrayitem);
            var id = arrayitem[0];

            $("#ContentPlaceHolder1_hdnItemId").val(id);
            $("#ContentPlaceHolder1_txtItemName").val(arrayitem[1]);
            $("#ContentPlaceHolder1_txtQTYStock").val(arrayitem[2]);
            $("#ContentPlaceHolder1_hdnAvailableQuantity").val(arrayitem[2]);
            $("#ContentPlaceHolder1_txtLastRate").val(arrayitem[3]);
            $("#ContentPlaceHolder1_txtNewRate").val(arrayitem[3]);
            $("#ContentPlaceHolder1_txtQuantity").val(arrayitem[2]);
            $("#ContentPlaceHolder1_lblUnit").html(arrayitem[4]);
            $("#ContentPlaceHolder1_hdnUnit").val(arrayitem[4]);
            $('#<%= txtLastRate.ClientID %>').attr('disabled', 'true');
            $('#<%= txtQTYStock.ClientID %>').attr('disabled', 'true');

        }
    });



    $("#ContentPlaceHolder1_txtBrandNamePM").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PurchaseOrder_Manual.aspx/GetAllItem",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtBrandNamePM").val() + "" }),
                dataType: "json",
                success: function (data) {
                    //debugger;
                    $("#ContentPlaceHolder1_ddlitem").empty();
                    $("#ContentPlaceHolder1_ddlitem").append($("<option></option>").val("Select").html("Select"));
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.BrandName + '-' + item.OrderType + '-' + item.UserOrganisation + '-' + item.AcceptedDateGet + '-' + item.OrderCode,
                            value: item.BrandName,
                            itemDetail: item.Id + '__' + item.BrandName + '__' + item.packingitem + '__' + item.Company + '__' + item.UserOrganisation + '__' + item.UserEmail + '__' + item.LabelClaim + '__' + item.OrderType,
                        };
                    }))
                },
                error: function (result) {
                    Openmodal_message("Error", "Please try again after some time");
                }
            });
          
        },
        minLength: 2,
        select: function (event, ui) {
            var str = ui.item.itemDetail;
            var arrayitem = str.split("__");           
            console.log(arrayitem);
            var id = arrayitem[0];
            var ItemArray = arrayitem[2].split(",");
            $("#ContentPlaceHolder1_hdnOrderId").val(id);
            $("#ContentPlaceHolder1_txtBrandNamePM").val(arrayitem[1]);           
            for (var i = 0; i < ItemArray.length; i++) {     
                $("#ContentPlaceHolder1_ddlitem").append($("<option></option>").val(ItemArray[i]).html(ItemArray[i]));
                $('#ContentPlaceHolder1_ddlitem option').filter(function () {
                    return !this.value || $.trim(this.value).length == 0 || $.trim(this.text).length == 0;
                }).remove();
            }
            $("#ContentPlaceHolder1_hdnItemnameAll").val(arrayitem[2]);
            $("#ContentPlaceHolder1_hdnCompany").val(arrayitem[3]);
            $("#ContentPlaceHolder1_hdnPartyOrg").val(arrayitem[4]);
            $("#ContentPlaceHolder1_hdnPartyEmail").val(arrayitem[5]);
            $("#ContentPlaceHolder1_hdnLabelClaim").val(arrayitem[6]);
            $("#ContentPlaceHolder1_hdnOrdertype").val(arrayitem[7]);
        }
    });


    /*********************END***************************/



    /*********************RAWMATERIAL SEARCH FOR NUTARCEUTICALS***************************/
    $("#ContentPlaceHolder1_txtItemNameBN").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PurchaseOrder.aspx/GetAllItemBN",

                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtItemNameBN").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Alias,
                            value: item.Alias,
                            itemDetail: item.Id + '_' + item.RawMaterialName + '_' + item.Quantity + '_' + item.Rate + '_' + item.Unit,
                        };
                    }))
                },
                error: function (result) {
                    // alert("Error");
                    Openmodal_message("Error", "Please try again after some time");
                }
            });
        },
        minLength: 2,
        select: function (event, ui) {
            var str = ui.item.itemDetail;
            var arrayitem = str.split("_");
            console.log(arrayitem);
            var id = arrayitem[0];

            $("#ContentPlaceHolder1_hdnItemId").val(id);
            $("#ContentPlaceHolder1_txtItemNameBN").val(arrayitem[1]);
            $("#ContentPlaceHolder1_txtQTYStock").val(arrayitem[2]);
            $("#ContentPlaceHolder1_hdnAvailableQuantity").val(arrayitem[2]);
            $("#ContentPlaceHolder1_txtLastRate").val(arrayitem[3]);
            $("#ContentPlaceHolder1_txtNewRate").val(arrayitem[3]);
            $("#ContentPlaceHolder1_txtQuantity").val(arrayitem[2]);
            $("#ContentPlaceHolder1_lblUnit").html(arrayitem[4]);                                                                                 
            $("#ContentPlaceHolder1_hdnUnit").val(arrayitem[4]);
            $('#<%= txtLastRate.ClientID %>').attr('disabled', 'true');
            $('#<%= txtQTYStock.ClientID %>').attr('disabled', 'true');

        }
    });
    /*********************END***************************/
    $("#ContentPlaceHolder1_txtBoxSize").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PurchaseOrder.aspx/GetAllPackingItem",

                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtBoxSize").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.ItemSize,
                            value: item.ItemSize,
                            itemDetail: item.Id + '_' + item.Rate + '_' + item.Dimension,
                        };
                    }))
                },
                error: function (result) {
                    //alert("Error");
                    Openmodal_message("Error", "Please try again after some time");
                }
            });
        },
        minLength: 3,
        select: function (event, ui) {
            var str = ui.item.itemDetail;
            var arrayitem = str.split("_");
            console.log(arrayitem);
            var id = arrayitem[0];

            $("#ContentPlaceHolder1_hdnpackingId").val(id);
            $("#ContentPlaceHolder1_txtRatePack").val(arrayitem[1]);
            $("#ContentPlaceHolder1_txtDimension").val(arrayitem[2]);
        }
    });

    $("#ContentPlaceHolder1_txtBrandName").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PurchaseOrder.aspx/GetAllOrders",

                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtBrandName").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.BrandName + '-' + item.UserOrganisation,
                            value: item.BrandName,
                            itemDetail: item.Id + '_' + item.Quantity,
                        };
                    }))
                },
                error: function (result) {
                    //alert("Error");
                    Openmodal_message("Error", "Please try again after some time");
                }
            });
        },
        minLength: 2,
        select: function (event, ui) {
            var str = ui.item.itemDetail;
            var arrayitem = str.split("_");
            console.log(arrayitem);
            var id = arrayitem[0];

            $("#ContentPlaceHolder1_hdnOrderId").val(id);
            $("#ContentPlaceHolder1_txtQty").val(arrayitem[1]);
        }
    });

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