$(document).ready(function () {
    //$('body').addClass('fullwidth8181');
    var itemDetail;
    var orderDetail;
    var PartyDetail;
    $("#ContentPlaceHolder1_txtUserOrg").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/ApproveOrder.aspx/GetAllParty",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtUserOrg").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.MarketedBy,
                            value: item.MarketedBy,
                            PartyDetail: item.Id + '_' + item.ContactPerson + '_' + item.Email + '_' + item.Phone1 + '_' + item.Phone2,
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
            $("#ContentPlaceHolder1_txtCustomerrName").val(arrayparty[1]);
            $("#ContentPlaceHolder1_txtEmail").val(arrayparty[2]);
            $("#ContentPlaceHolder1_txtPhone").val(arrayparty[3]);
            $("#ContentPlaceHolder1_txtPhone2").val(arrayparty[4]);
        }
    });


    /*SEARCHING FOR TABLET AND CAPSULE*/

    $("#ContentPlaceHolder1_txtComposition").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/Approvals.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtComposition").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim,
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
            $("#ContentPlaceHolder1_lblLabelClaim").html(array[1]);
            $("#ContentPlaceHolder1_hdnLabelClaim").val(array[1]);
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
                url: "/CRM/Approvals.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtCompositionSyp").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim,
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
            $("#ContentPlaceHolder1_lblLabelClaim").html(array[1]);
            $("#ContentPlaceHolder1_hdnLabelClaim").val(array[1]);
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
                url: "/CRM/Approvals.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtCompositionDsyp").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim,
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
            $("#ContentPlaceHolder1_lblLabelClaim").html(array[1]);
            $("#ContentPlaceHolder1_hdnLabelClaim").val(array[1]);
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
                url: "/CRM/Approvals.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtCompositionSchet").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim,

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
            $("#ContentPlaceHolder1_lblLabelClaim").html(array[1]);
            $("#ContentPlaceHolder1_hdnLabelClaim").val(array[1]);
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
                url: "/CRM/Approvals.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtCompositionInj").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim,
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
            id = array[0];

            $("#ContentPlaceHolder1_hdnProductId").val(id);
            $("#ContentPlaceHolder1_lblLabelClaim").html(array[1]);
            $("#ContentPlaceHolder1_hdnLabelClaim").val(array[1]);
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