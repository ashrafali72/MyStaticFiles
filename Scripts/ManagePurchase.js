$(document).ready(function () {
    //$('body').addClass('fullwidth8181');
    var PartyDetail;
    $("#ContentPlaceHolder1_txtParty").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                //url: "/CRM/ManagePurchaseOrder.aspx/GetAllSupplier",
                url: "/CRM/ManagePurchaseOrder.aspx/GetAllItem",

                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtParty").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.PartyName,
                            value: item.PartyName,
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

            $("#ContentPlaceHolder1_hdnPartyId").val(id);
            //$("#ContentPlaceHolder1_txtParty").css('border-color', 'green');
        }
    });

    $("#ContentPlaceHolder1_txtBrand").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/ManagePurchaseOrder.aspx/GetAllOrdersByBrand",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtBrand").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.BrandName,
                            value: item.BrandName,
                            PartyDetail: item.Id + '_' + item.BrandName,
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
            var str = ui.item.PartyDetail;
            var arrayparty = str.split("_");
            console.log(arrayparty);
            var id = arrayparty[0];

            $("#ContentPlaceHolder1_hdnPartyId").val(id);
        }
    });


    $('.number').keypress(function (e) {

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $(".qtyChk").keyup(function () {
        if ($.trim($(this).text()) != '0') {
            $('#ContentPlaceHolder1_btnStock').prop('disabled', true);
        } else {
            $('#ContentPlaceHolder1_btnStock').prop('disabled', false);
        }
    });

    $("#ContentPlaceHolder1_txtBrand_GRN").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/ManagePurchaseOrder_GRN.aspx/GetAllOrdersByBrand",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtBrand_GRN").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.BrandName,
                            value: item.BrandName,
                            PartyDetail: item.Id + '_' + item.BrandName,
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
            var str = ui.item.PartyDetail;
            var arrayparty = str.split("_");
            console.log(arrayparty);
            var id = arrayparty[0];

            $("#ContentPlaceHolder1_hdnPartyId").val(id);
        }
    });


    //for pm order page
    //$("#ContentPlaceHolder1_txtBrand_pmorders").autocomplete({
    //    source: function (request, response) {
    //        alert('call');
    //        $.ajax({
    //            type: "POST",
    //            contentType: "application/json; charset=utf-8",
    //            url: "/CRM/PmOrders.aspx/GetAllOrdersByBrand",
    //            data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtBrand_pmorders").val() + "" }),
    //            dataType: "json",
    //            success: function (data) {
    //                var ParsedObject = $.parseJSON(data.d);
    //                response($.map(ParsedObject, function (item) {
    //                    return {
    //                        label: item.BrandName,
    //                        value: item.BrandName,
    //                        PartyDetail: item.Id + '_' + item.BrandName,
    //                    };
    //                }))
    //            },
    //            error: function (result) {
    //                Openmodal_message("Error", "Please try again after some time");
    //            }
    //        });
    //    },
    //    minLength: 4,
    //    select: function (event, ui) {
    //        var str = ui.item.PartyDetail;
    //        var arrayparty = str.split("_");
    //        console.log(arrayparty);
    //        var id = arrayparty[0];

    //        $("#ContentPlaceHolder1_hdnPartyId_pmorders").val(id);
    //    }
    //});

    $("#ContentPlaceHolder1_grdUpdatePurchase_txtMfdDat").datepicker({
        changeMonth: true,
        minDate: "-3Y",
        changeYear: true,
        maxDate: '+3Y',
        showButtonPanel: true,
        inline: true,
        dateFormat: 'MM yy',
        showAnim: 'clip',
        onClose: function (dateText, inst) {
            $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
        }
    });

    $("#ContentPlaceHolder1_grdUpdatePurchase_txtEXPDat").datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: 15,
        maxDate: '+3Y',
        inline: true,
        showButtonPanel: true,
        dateFormat: 'MM yy',
        showAnim: 'clip',
        onClose: function (dateText, inst) {
            $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
        }
    });

    $('#ContentPlaceHolder1_txtManufacturer').keypress(function (key) {
        if (key.charCode < 48 || key.charCode > 57) return false;
    });

    $(".datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: '-3Y',
        maxDate: '+5Y',
        inline: true,
        showButtonPanel: true,
        dateFormat: 'MM yy',
        showAnim: 'clip',
        onClose: function (dateText, inst) {
            $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
        }
    });

    $("#ContentPlaceHolder1_txtBillNoSearch").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/viewgrn.aspx/GetAllPurchaseItem",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtBillNoSearch").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.BillNo,
                            value: item.BillNo,
                            PartyDetail: item.Id + '_' + item.PurchaseId,
                        };
                    }))
                },
                error: function (result) {
                    Openmodal_message("Error", result)
                    $("#ContentPlaceHolder1_txtBillNoSearch").css('border-color', 'red');
                }
            });
        },
        minLength: 1,
        select: function (event, ui) {
            var str = ui.item.PartyDetail;
            var arrayparty = str.split("_");
            console.log(arrayparty);
            var id = arrayparty[0];
            $("#ContentPlaceHolder1_txtBillNo").css('border-color', 'green');
        }
    });



    $("#ContentPlaceHolder1_txtpurchase").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PurchaseHistory.aspx/GetPurchase",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtpurchase").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.PONumber - item.PartyName - item.Createdstring,
                            value: item.PONumber,
                            itemDetail: item.Id + '_' + item.PurchaseId,
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
            var arrayparty = str.split("_");
            console.log(arrayparty);
            var id = arrayparty[0];

            $("#ContentPlaceHolder1_hdnPurchaseItemId").val(id);
            $("#ContentPlaceHolder1_hdnPurchaseheaderId").val(arrayparty[1]);
        }
    });


});