$(document).ready(function () {
    //$('body').addClass('fullwidth8181');
    var itemDetail;
    var orderDetail;
    var PartyDetail;

    /*SEARCHING FOR TABLET AND CAPSULE*/

    $("#ContentPlaceHolder1_txtComposition").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/EditMaster.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtComposition").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.BatchSize + '_' + item.BomID,
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
            $("#ContentPlaceHolder1_txtLabelClaim").val(array[1]);
            $("#ContentPlaceHolder1_txtBatchSize").val(array[2]);
            $("#ContentPlaceHolder1_hdnMasterBomID").val(array[3]);
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
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.BatchSize + '_' + item.BomID,
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
            $("#ContentPlaceHolder1_txtLabelClaim").val(array[1]);
            $("#ContentPlaceHolder1_txtBatchSize").val(array[2]);
            $("#ContentPlaceHolder1_hdnMasterBomID").val(array[3]);

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
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.BatchSize + '_' + item.BomID,
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
            $("#ContentPlaceHolder1_txtLabelClaim").val(array[1]);
            $("#ContentPlaceHolder1_txtBatchSize").val(array[2]);
            $("#ContentPlaceHolder1_hdnMasterBomID").val(array[3]);

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
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.BatchSize + '_' + item.BomID,
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
            $("#ContentPlaceHolder1_txtLabelClaim").val(array[1]);
            $("#ContentPlaceHolder1_txtBatchSize").val(array[2]);
            $("#ContentPlaceHolder1_hdnMasterBomID").val(array[3]);

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
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.BatchSize + '_' + item.BomID,
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
            $("#ContentPlaceHolder1_txtLabelClaim").val(array[1]);
            $("#ContentPlaceHolder1_txtBatchSize").val(array[2]);
            $("#ContentPlaceHolder1_hdnMasterBomID").val(array[3]);

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

    /*SEARCHING FOR OINTMENT*/

    $("#ContentPlaceHolder1_txtCompositionoimt").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/CreateOrder.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtCompositionoimt").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.BatchSize + '_' + item.BomID,
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
            $("#ContentPlaceHolder1_txtLabelClaim").val(array[1]);
            $("#ContentPlaceHolder1_txtBatchSize").val(array[2]);
            $("#ContentPlaceHolder1_hdnMasterBomID").val(array[3]);

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

    /*********************RAWMATERIAL SEARCH FOR BAJAJ FORMULATIONS***************************/
    $("#ContentPlaceHolder1_txtRawmaterial").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PurchaseOrder.aspx/GetAllItem",

                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtRawmaterial").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Alias,
                            value: item.Alias,
                            itemDetail: item.Id + '_' + item.RawMaterialName + '_' + item.Quantity + '_' + item.Unit + '_' + item.CoatedMaterial,
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
            var Coatedmaterial = arrayitem[4];
            //alert(id);
            $("#ContentPlaceHolder1_hdnRawMaterialId").val(id);
            $("#ContentPlaceHolder1_hdnAvailQty").val(arrayitem[2]);
            $("#ContentPlaceHolder1_hdnunit").val(arrayitem[3]);
            $("#ContentPlaceHolder1_lblAvalQty").html(arrayitem[2]);
            $("#ContentPlaceHolder1_lblUnit").html(arrayitem[3]);
            $("#ContentPlaceHolder1_hdnRmMaterialCoated").val(arrayitem[4]);
           
        }
    });
    /*********************END***************************/


    /*********************RAWMATERIAL SEARCH FOR Edit BOM***************************/
    $("#txtRawmaterialName").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PurchaseOrder.aspx/GetAllItem",

                data: JSON.stringify({ "Name": "" + $("#txtRawmaterialName").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Alias,
                            value: item.Alias,
                            itemDetail: item.Id + '_' + item.RawMaterialName + '_' + item.Quantity + '_' + item.Unit + '_' + item.CoatedMaterial,
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
            debugger;
            //alert(id);
            //$("#ContentPlaceHolder1_hdnRawMaterialId").val(id);
            //$("#ContentPlaceHolder1_hdnAvailQty").val(arrayitem[2]);
            //$("#ContentPlaceHolder1_hdnunit").val(arrayitem[3]);

            $("#ContentPlaceHolder1_hdnRawMaterialId").val(id);
            $("#txtAvailableQty").val(arrayitem[2]);
            $("#ContentPlaceHolder1_grdBomChild_txtAvailableQtyFooter").val(arrayitem[2]);
            $("#txtUnit").val(arrayitem[3]);
            $("#ContentPlaceHolder1_grdBomChild_txtUnitFooter").val(arrayitem[3]);
            $("#ContentPlaceHolder1_hdnRmMaterialCoated").val(arrayitem[4]);
        }
    });
    /*********************END***************************/


    //ORDER SEARCH


    $("#ContentPlaceHolder1_txtBrandNameRep").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/ProductionExecution.aspx/GetAllOrders",
                data: JSON.stringify({ "term": "" + $("#ContentPlaceHolder1_txtBrandNameRep").val() + "_" + $("#ContentPlaceHolder1_lblGenTabCapType").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.BrandName + '-' + item.UserOrganisation + '-' + item.OrderCode,
                            value: item.BrandName,
                            orderDetail: item.Id + '_' + item.BrandName,
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
            var str = ui.item.orderDetail;
            var array = str.split("_");
            console.log(array);
            var id = array[0];

            $("#ContentPlaceHolder1_hdnOrderId").val(id);
        }
    });


});