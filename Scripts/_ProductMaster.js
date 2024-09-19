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
                url: "/CRM/ProductMaster.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtComposition").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.Type + '_' + item.PackType + '_' + item.PackingUnit + '_' + item.TabCapSize + '_' + item.PVCColor + '_' + item.FoilSize + '_' + item.Carton + '_' + item.MRP + '_' + item.ExpDate + '_' + item.SpecialTreatment + '_' + item.BatchSize + '_' + item.Alias + '_' + item.InnerCarton,
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
            var Inner = array[14];
            var PVC = array[6];
            $("#ContentPlaceHolder1_hdnProductId").val(id);
            $("#ContentPlaceHolder1_txtLabelClaim").val(array[1]);
            //$("#ContentPlaceHolder1_txtPackType").val(array[3]);
            //$("#ContentPlaceHolder1_txtPackSize").val(array[4]);
            $("#ContentPlaceHolder1_hdnPackType").val(array[3]);
            $("#ContentPlaceHolder1_ddlTabCapSize option:selected").text(array[5]);
            $("#ContentPlaceHolder1_ddlPackType option:selected").text(array[3]);
            $("#ContentPlaceHolder1_ddlPvcColor option:selected").text(array[6]);
            $("#ContentPlaceHolder1_ddlPackSize option:selected").text(array[4]);
            //$("#ContentPlaceHolder1_ddlFoilSize option:selected").text(array[7]);
            $("#ContentPlaceHolder1_ddlLabelSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlCartonSize option:selected").text(array[8]);
            $("#ContentPlaceHolder1_ddlVialSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlinnerCarton option:selected").text(array[14]);
            //$("#ContentPlaceHolder1_txtPvcColor").val(array[6]);
            $("#ContentPlaceHolder1_txtFoilSize").val(array[7]);
            //$("#ContentPlaceHolder1_txtCartonSize").val(array[8]);
            $("#ContentPlaceHolder1_txtMrp").val(array[9]);
            $("#ContentPlaceHolder1_txtAlias").val(array[13]);
            if (Inner == "null" || Inner == "") {
                $("#ContentPlaceHolder1_ddlinnerCarton").prop("disabled", true);
            }
            //if (PVC != "") {
            //    $("#ContentPlaceHolder1_ddlPvcColor").prop("disabled", false);
            //}
            //$("#ContentPlaceHolder1_txtLabelSize").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtVialSize").prop("disabled", true); //txtAlias

            getdata();
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
                url: "/CRM/ProductMaster.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtCompositionSyp").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.Type + '_' + item.PackType + '_' + item.PackSize + '_' + item.Carton + '_' + item.Label + '_' + item.MRP + '_' + item.ExpDate + '_' + item.SpecialTreatment + '_' + item.BatchSize + '_' + item.Alias,
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
            //$("#ContentPlaceHolder1_txtPackType").val(array[3]);
            //$("#ContentPlaceHolder1_txtPackSize").val(array[4]);
            //$("#ContentPlaceHolder1_txtCartonSize").val(array[5]);
            //$("#ContentPlaceHolder1_txtLabelSize").val(array[6]);
            $("#ContentPlaceHolder1_txtMrp").val(array[7]);
            $("#ContentPlaceHolder1_ddlPackType option:selected").text(array[3]);
            $("#ContentPlaceHolder1_ddlPackSize option:selected").text(array[4]);
            $("#ContentPlaceHolder1_ddlCartonSize option:selected").text(array[5]);
            $("#ContentPlaceHolder1_ddlLabelSize option:selected").text(array[6]);
            $("#ContentPlaceHolder1_ddlTabCapSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlPvcColor").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlFoilSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlVialSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlinnerCarton").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtPvcColor").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtFoilSize").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtVialSize").prop("disabled", true);
            $("#ContentPlaceHolder1_txtAlias").val(array[11]);
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
                url: "/CRM/ProductMaster.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_hdnPackType").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.PackSize + '_' + item.BoxSize + '_' + item.Label + '_' + item.MRP + '_' + item.ExpDate + '_' + item.SpecialTreatment + '_' + item.BatchSize + '_' + item.Alias,
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
            //$("#ContentPlaceHolder1_txtLabelClaim").val(array[1]);
            //$("#ContentPlaceHolder1_txtPackSize").val(array[2]);
            //$("#ContentPlaceHolder1_txtCartonSize").val(array[3]);
            //$("#ContentPlaceHolder1_txtLabelSize").val(array[4]);
            //$("#ContentPlaceHolder1_txtMrp").val(array[5]);
            //$("#ContentPlaceHolder1_txtPackType").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtPvcColor").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtFoilSize").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtVialSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlPackSize option:selected").text(array[2]);
            $("#ContentPlaceHolder1_ddlCartonSize option:selected").text(array[3]);
            $("#ContentPlaceHolder1_ddlLabelSize option:selected").text(array[4]);
            $("#ContentPlaceHolder1_txtMrp").val(array[5]);
            $("#ContentPlaceHolder1_ddlPackType").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlTabCapSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlPvcColor").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlFoilSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlVialSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlinnerCarton").prop("disabled", true);
            $("#ContentPlaceHolder1_txtAlias").val(array[9]);


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
                url: "/CRM/ProductMaster.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtCompositionSchet").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.PackType + '_' + item.PackingUnit + '_' + item.Carton + '_' + item.Foil + '_' + item.MRP + '_' + item.ExpDate + '_' + item.SpecialTreatment + '_' + item.BatchSize + '_' + item.Alias,
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
            //$("#ContentPlaceHolder1_txtPackType").val(array[2]);
            //$("#ContentPlaceHolder1_txtPackSize").val(array[3]);
            //$("#ContentPlaceHolder1_txtCartonSize").val(array[4]);
            //$("#ContentPlaceHolder1_txtFoilSize").val(array[5]);
            //$("#ContentPlaceHolder1_txtMrp").val(array[6]);
            //$("#ContentPlaceHolder1_txtLabelSize").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtPvcColor").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtVialSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlPackType option:selected").text(array[2]);
            $("#ContentPlaceHolder1_ddlPackSize option:selected").text(array[3]);
            $("#ContentPlaceHolder1_ddlCartonSize option:selected").text(array[4]);
            $("#ContentPlaceHolder1_ddlFoilSize option:selected").text(array[5]);

            $("#ContentPlaceHolder1_ddlLabelSize ").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlTabCapSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlPvcColor").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlVialSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlinnerCarton").prop("disabled", true);

            $("#ContentPlaceHolder1_txtMrp").val(array[6]);
            $("#ContentPlaceHolder1_txtAlias").val(array[10]);

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
                url: "/CRM/ProductMaster.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtCompositionInj").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.PackType + '_' + item.PackingUnit + '_' + item.VialSize + '_' + item.Carton + '_' + item.Label + '_' + item.MRP + '_' + item.ExpDate + '_' + item.SpecialTreatment + '_' + item.BatchSize + '_' + item.Alias,
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
            //$("#ContentPlaceHolder1_txtPackType").val(array[2]);
            //$("#ContentPlaceHolder1_txtPackSize").val(array[3]);
            //$("#ContentPlaceHolder1_txtVialSize").val(array[4]);
            //$("#ContentPlaceHolder1_txtCartonSize").val(array[5]);
            //$("#ContentPlaceHolder1_txtLabelSize").val(array[6]);

            $("#ContentPlaceHolder1_ddlPackType option:selected").text(array[2]);
            $("#ContentPlaceHolder1_ddlPackSize option:selected").text(array[3]);
            $("#ContentPlaceHolder1_ddlVialSize option:selected").text(array[4]);
            $("#ContentPlaceHolder1_ddlCartonSize option:selected").text(array[5]);
            $("#ContentPlaceHolder1_ddlLabelSize option:selected").text(array[6]);
            $("#ContentPlaceHolder1_ddlFoilSize ").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlTabCapSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlPvcColor").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlinnerCarton").prop("disabled", true);
            $("#ContentPlaceHolder1_txtMrp").val(array[7]);
            //$("#ContentPlaceHolder1_txtFoilSize").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
            //$("#ContentPlaceHolder1_txtPvcColor").prop("disabled", true);
            $("#ContentPlaceHolder1_txtAlias").val(array[11]);

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


    /* DROPDOWN BIND AJAX */
    
    function getdata() {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CRM/ProductMaster.aspx/GetPackType",
            data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_hdnPackType").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
            dataType: "json",
            success: function (r) {
                var ddlCustomers = $("[id*=ContentPlaceHolder1_ddlPackType]");
                //alert(ddlCustomers);
                ddlCustomers.empty().append('<option selected="selected" value="0">Please select</option>');
                $.each(r.d, function () {
                    ddlCustomers.append($("<option></option>").val(this['Value']).html(this['Text']));
                });
            }
        });
    };

    });