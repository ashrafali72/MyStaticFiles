$(document).ready(function () {
    var itemDetail;
    $('.keypress-disabled').on('keypress', function (evt) {
        return false;
    });

    $("#ContentPlaceHolder1_txtItemName").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PrintInvoice.aspx/GetAllOrdersByBrand",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtItemName").val() + "" }),
                dataType: "json",
                success: function (data) {

                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.BrandName + '-' + item.ItemName + '-' + item.PONumber,
                            value: item.BrandName,
                            itemDetail: item.Id + '_' + item.BrandName + '_' + item.ItemName + '_' + item.PurchaseQuantity + '_' + item.PerUnitRate + '_' + item.measurement_unit + '_' + item.OrderType,
                        };
                    }))
                },
                error: function (result) {
                    alert("Error");
                }
            });
        },
        minLength: 3,
        select: function (event, ui) {
            var str = ui.item.itemDetail;
            var array = str.split("_");
            //console.log(array);
            var id = array[0];

            $("#ContentPlaceHolder1_hdnItemId").val(id);
            //$("#ContentPlaceHolder1_txtType").val(array[2]);
            $("#ContentPlaceHolder1_txtOrderQty").val(array[3]);
            $("#ContentPlaceHolder1_txtRate").val(array[4]);
            $("#ContentPlaceHolder1_txtUnit").val(array[5]);
            $("#ContentPlaceHolder1_txtOrderType").val(array[6]);
        }
    });



    /*COMPOSITION SEARCH FROM ORDERNEW TABLE- VARDHAN*/

    //$("#ContentPlaceHolder1_txtComposition").autocomplete({
    //    source: function (request, response) {
    //        $.ajax({
    //            type: "POST",
    //            contentType: "application/json; charset=utf-8",
    //            url: "/CRM/Printdesign.aspx/GetAllProduts",
    //            data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtComposition").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
    //            dataType: "json",
    //            success: function (data) {
    //                var ParsedObject = $.parseJSON(data.d);
    //                response($.map(ParsedObject, function (item) {
    //                    return {
    //                        label: item.Composition + '-' + item.TabCapType + '-' + item.PackType + '-' + item.PackSize + '-' + item.TabCapSize,
    //                        value: item.Composition,
    //                        itemDetail: item.Id + '_' + item.Composition,
    //                    };
    //                }))
    //            },
    //            error: function (result) {
    //                alert("Error");
    //            }
    //        });
    //    },
    //    minLength: 3,
    //    select: function (event, ui) {
    //        var str = ui.item.itemDetail;
    //        console.log(str);
    //        var array = str.split("_");
    //        console.log(array);
    //        id = array[0];
    //        $("#ContentPlaceHolder1_hdnOrderId").val(id);
    //    },
    //});




    /*COMPOSITION SEARCH FROM COMPOSITION MASTERS-ALL TABLE- VARDHAN*/

    $("#ContentPlaceHolder1_txtComposition").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/Printdesign.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtComposition").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.Composition,
                        };
                    }))
                },
                error: function (result) {
                    alert("Error");
                }
            });
        },
        minLength: 3,
        select: function (event, ui) {
            var str = ui.item.itemDetail;
            console.log(str);
            var array = str.split("_");
            console.log(array);
            id = array[0];
            $("#ContentPlaceHolder1_hdnMasterId").val(id);
        },
    });




    $("#ContentPlaceHolder1_txtInvoiceNumber").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PrintInvoice.aspx/GetInvoiceNumber",
                data: JSON.stringify({ "Name": "Invoice_" + $("#ContentPlaceHolder1_txtInvoiceNumber").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.InvoiceNumber,
                            value: item.InvoiceNumber,
                            itemDetail: item.Id + '_' + item.InvoiceNumber,
                        };
                    }))
                },
                error: function (result) {
                    alert("Error");
                }
            });
        },
        minLength: 3,
        select: function (event, ui) {
            var str = ui.item.itemDetail;
            var array = str.split("_");
            console.log(array);
            var id = array[0];
            $("#ContentPlaceHolder1_hdnPrintHeaderId").val(id);
            $("#ContentPlaceHolder1_txtInvoiceNumber").val(array[1] + '_' + array[2] + '_' + array[3]);
        }
    });

});