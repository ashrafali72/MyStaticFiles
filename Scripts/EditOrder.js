$(document).ready(function () {
    var itemDetail;
    var orderDetail;
    var PartyDetail;    
    $("#ContentPlaceHolder1_txtBrand").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/CreateOrder.aspx/GetAllOrders",
                data: JSON.stringify({ "term": "" + $("#ContentPlaceHolder1_txtBrand").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.BrandName + '-' + item.OrderType + '-' + item.UserOrganisation + '-' + item.AcceptedDateGet + '-' + item.OrderCode,
                            value: item.BrandName,
                            orderDetail: item.Id + '_' + item.BrandName,
                        };
                    }))
                },
                error: function (result) {
                    //Openmodal_message("Error", "Please try again after some time");
                }
            });
        },
        minLength: 2,
        select: function (event, ui) {
            var str = ui.item.orderDetail;
            var array = str.split("_");
            console.log(array);
            var id = array[0];
            // var type = array[2];

            $("#ContentPlaceHolder1_hdnOrderId").val(id);
            // $("#ContentPlaceHolder1_hdn_ordertype").val(type);
        }
    });


    /*Printed Item Search From item Which Completes Printing*/

    $("#ContentPlaceHolder1_txtBrandPrinted").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PrintedItems.aspx/GetAllOrders",
                data: JSON.stringify({ "term": "" + $("#ContentPlaceHolder1_txtBrandPrinted").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.BrandName,
                            value: item.BrandName,
                            orderDetail: item.Id + '_' + item.BrandName,
                        };
                    }))
                },
                error: function (result) {
                   // Openmodal_message("Error", "Please try again after some time");
                }
            });
        },
        minLength: 2,
        select: function (event, ui) {
            var str = ui.item.orderDetail;
            var array = str.split("_");
            console.log(array);
            var id = array[0];
            // var type = array[2];

            $("#ContentPlaceHolder1_hdnOrderId").val(id);
        }
    });

    /*SEARCHING FOR TABLET AND CAPSULE*/

    $("#ContentPlaceHolder1_txtComposition").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/CreateOrder.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtComposition").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.PackType + '_' + item.PackingUnit + '_' + item.TabCapSize + '_' + item.PVCColor
                                + '_' + item.FoilSize + '_' + item.Carton + '_' + item.InnerCarton + '_' + item.BomID+'_'+ item.MRP,
                        };
                    }));
                },
                error: function (result) {
                    //alert("Error");
                   // Openmodal_message("Error", "Please try again after some time");
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
            $("#ContentPlaceHolder1_hdnProductId").val(id);
            $("#ContentPlaceHolder1_hdnLabelCaim").val(array[1]);
            $("#ContentPlaceHolder1_txtPacktype").val(array[2]);
            $("#ContentPlaceHolder1_txtPackSize").val(array[3]);
            $("#ContentPlaceHolder1_txtTabCapSize").val(array[4]);
            //$("#ContentPlaceHolder1_txtPvccolor").val(array[5]);
            $("#ContentPlaceHolder1_txtFoil").val(array[6]);
            $("#ContentPlaceHolder1_txtcarton").val(array[7]);
            $("#ContentPlaceHolder1_txtinnercarton").val(array[8]);
            $("#ContentPlaceHolder1_hdnBomId").val(array[9]);
            $("#ContentPlaceHolder1_hdnDPCO").val(array[10]);
            $("#ContentPlaceHolder1_txtlabel").prop("disabled", true);           
        },

        open: function (event, ui) {
            // update number of returned rows
            var len = $('.ui-autocomplete > li').length;
            $('#results_count').html('(#' + len + ')');
           // alert("2");
        },
        close: function (event, ui) {
            // update number of returned rows
            $('#results_count').html('');
           // alert("3");

        },
        // mustMatch implementation
        change: function (event, ui) {
            if (ui.item === null) {
                $(this).val('');
                $('#field_id').val('');
            }           
        }
    });

    /*SEARCHING FOR SYRUP*/

    $("#ContentPlaceHolder1_txtCompositionSyp").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/CreateOrder.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtCompositionSyp").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.PackType + '_' + item.PackSize + '_' + item.BoxSize
                                + '_' + item.Label + '_' + item.InnerCarton + '_' + item.BomID +'_'+ item.MRP,
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
            console.log(str);
            var array = str.split("_");
            console.log(array);
            var PackTyperArray = array[3].split(",");

            id = array[0];

            $("#ContentPlaceHolder1_hdnProductId").val(id);
            $("#ContentPlaceHolder1_hdnLabelCaim").val(array[1]);
            $("#ContentPlaceHolder1_txtPacktype").val(array[2]);
            $("#ContentPlaceHolder1_txtPackSize").val(array[3]);
            $("#ContentPlaceHolder1_txtcarton").val(array[4]);
            $("#ContentPlaceHolder1_txtlabel").val(array[5]);
            $("#ContentPlaceHolder1_txtinnercarton").val(array[6]);
            $("#ContentPlaceHolder1_hdnBomId").val(array[7]);
            $("#ContentPlaceHolder1_hdnDPCO").val(array[8]);
            $("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlPVCColor").prop("disabled", true);
            $("#ContentPlaceHolder1_txtFoil").prop("disabled", true);


        },
        open: function (event, ui) {
            // update number of returned rows
            var len = $('.ui-autocomplete > li').length;
            $('#results_count').html('(#' + len + ')');

        },
        close: function (event, ui) {
            // update number of returned rows
            $('#results_count').html('');

        },
        // mustMatch implementation
        change: function (event, ui) {
            if (ui.item === null) {
                $(this).val('');
                $('#field_id').val('');
            }
        }
    });


    /*SEARCHING FOR DRY-SYRUP*/

    $("#ContentPlaceHolder1_txtCompositionDsyp").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/CreateOrder.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtCompositionDsyp").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.PackSize
                                + '_' + item.BoxSize + '_' + item.Label + '_' + item.InnerCarton + '_' + item.BomID +'_'+ item.MRP,
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
            console.log(str);
            var array = str.split("_");
            console.log(array);
            id = array[0];
            $("#ContentPlaceHolder1_hdnProductId").val(id);
            $("#ContentPlaceHolder1_hdnLabelCaim").val(array[1]);
            $("#ContentPlaceHolder1_txtPackSize").val(array[2]);
            $("#ContentPlaceHolder1_txtcarton").val(array[3]);
            $("#ContentPlaceHolder1_txtlabel").val(array[4]);
            $("#ContentPlaceHolder1_txtinnercarton").val(array[5]);
            $("#ContentPlaceHolder1_hdnBomId").val(array[6]);
            $("#ContentPlaceHolder1_hdnDPCO").val(array[7]);
            $("#ContentPlaceHolder1_txtPacktype").prop("disabled", true);
            $("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlPVCColor").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtPvccolor").prop("disabled", true);
            $("#ContentPlaceHolder1_txtFoil").prop("disabled", true);
        },
        open: function (event, ui) {
            // update number of returned rows
            var len = $('.ui-autocomplete > li').length;
            $('#results_count').html('(#' + len + ')');

        },
        close: function (event, ui) {
            // update number of returned rows
            $('#results_count').html('');

        },
        // mustMatch implementation
        change: function (event, ui) {
            if (ui.item === null) {
                $(this).val('');
                $('#field_id').val('');
            }
        }
    });



    /*SEARCHING FOR SACHET */

    $("#ContentPlaceHolder1_txtCompositionSchet").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/CreateOrder.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtCompositionSchet").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.PackType + '_' + item.PackingUnit
                                + '_' + item.Carton + '_' + item.Foil + '_' + item.InnerCarton + '_' + item.BomID +'_'+ item.MRP,
                        };
                    }))
                },
                error: function (result) {
                    // alert("Error");
                    Openmodal_message("Error", "Please try again after some time");
                }
            });
        },
        minLength: 3,
        select: function (event, ui) {

            var str = ui.item.itemDetail;
            console.log(str);
            var array = str.split("_");
            console.log(array);
            var PackTyperArray = array[3].split(",");
            id = array[0];
            $("#ContentPlaceHolder1_hdnProductId").val(id);
            $("#ContentPlaceHolder1_hdnLabelCaim").val(array[1]);
            $("#ContentPlaceHolder1_txtPacktype").val(array[2]);
            $("#ContentPlaceHolder1_txtPackSize").val(array[3]);
            $("#ContentPlaceHolder1_txtcarton").val(array[4]);
            $("#ContentPlaceHolder1_txtFoil").val(array[5]);
            $("#ContentPlaceHolder1_txtinnercarton").val(array[6]);
            $("#ContentPlaceHolder1_hdnBomId").val(array[7]);
            $("#ContentPlaceHolder1_hdnDPCO").val(array[8]);
            $("#ContentPlaceHolder1_txtlabel").prop("disabled", true);
            $("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlPVCColor").prop("disabled", true);

        },
        open: function (event, ui) {
            // update number of returned rows
            var len = $('.ui-autocomplete > li').length;
            $('#results_count').html('(#' + len + ')');

        },
        close: function (event, ui) {
            // update number of returned rows
            $('#results_count').html('');

        },
        // mustMatch implementation
        change: function (event, ui) {
            if (ui.item === null) {
                $(this).val('');
                $('#field_id').val('');
            }
        }
    });


    /*SEARCHING FOR INJECTION */

    $("#ContentPlaceHolder1_txtCompositionInj").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/CreateOrder.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtCompositionInj").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.Type + '_' + item.PackType + '_' + item.PackingUnit
                                + '_' + item.VialSize + '_' + item.Carton + '_' + item.Label + '_' + item.InnerCarton +'_'+ item.MRP,
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
            console.log(str);
            var array = str.split("_");
            console.log(array);
            var PackTyperArray = array[3].split(",");
            id = array[0];
            $("#ContentPlaceHolder1_hdnProductId").val(id);
            $("#ContentPlaceHolder1_hdnLabelCaim").val(array[1]);
            $("#ContentPlaceHolder1_hdnDPCO").val(array[9]);
        },
        open: function (event, ui) {
            // update number of returned rows
            var len = $('.ui-autocomplete > li').length;
            $('#results_count').html('(#' + len + ')');

        },
        close: function (event, ui) {
            // update number of returned rows
            $('#results_count').html('');

        },
        // mustMatch implementation
        change: function (event, ui) {
            if (ui.item === null) {
                $(this).val('');
                $('#field_id').val('');
            }
        }
    });




    $("#ContentPlaceHolder1_txtCompositionSearch").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/CreateOrder.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtCompositionSearch").val() + "_" + $("#ContentPlaceHolder1_ddlProductTypeSearch option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.Composition,
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
            console.log(str);
            var array = str.split("_");
            console.log(array);
            id = array[0];
            $("#ContentPlaceHolder1_hdnProductId").val(id);
        },
        open: function (event, ui) {
            // update number of returned rows
            var len = $('.ui-autocomplete > li').length;
            $('#results_count').html('(#' + len + ')');

        },
        close: function (event, ui) {
            // update number of returned rows
            $('#results_count').html('');

        },
        // mustMatch implementation
        change: function (event, ui) {
            if (ui.item === null) {
                $(this).val('');
                $('#field_id').val('');
            }
        }
    });

});