$(document).ready(function () {
    //$('body').addClass('fullwidth8181');
    var itemDetail;
    var orderDetail;
    var PartyDetail;
    $("#ContentPlaceHolder1_btnPrint").css("display","none");
    
    $("#ContentPlaceHolder1_txtUserOrg").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/CreateOrder.aspx/GetAllParty",

                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtUserOrg").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var varEmail;
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            varEmail: item.Email,
                            label: item.MarketedBy,
                            value: item.MarketedBy,
                            PartyDetail: item.Id + '_' + item.ContactPerson + '_' + item.Email + '_' + item.Phone1 + '_' + item.Phone2 + '_'+item.SecurityCharge,
                            
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
            console.log(ui.item.varEmail);
            var arrayparty = str.split("_");
            console.log(arrayparty);
            var id = arrayparty[0];
            if ((ui.item.varEmail).indexOf('_') > -1) {
                $("#ContentPlaceHolder1_hdnPartyId").val(id);
                $("#ContentPlaceHolder1_txtCustomerName").val(arrayparty[1]);
                $("#ContentPlaceHolder1_txtEmail").val(arrayparty[2] + '_' + arrayparty[3]);
                $("#ContentPlaceHolder1_txtPhone").val(arrayparty[4]);
                $("#ContentPlaceHolder1_txtPhone2").val(arrayparty[5]);
                alert("sec-----");
                $("#ContentPlaceHolder1_txtsecuritycharges").val(arrayparty[5]);
                $("#ContentPlaceHolder1_txtUserOrg").css('border-color', 'green');
            }
            else {
                $("#ContentPlaceHolder1_hdnPartyId").val(id);
                $("#ContentPlaceHolder1_txtCustomerName").val(arrayparty[1]);
                $("#ContentPlaceHolder1_txtEmail").val(arrayparty[2]);
                $("#ContentPlaceHolder1_txtPhone").val(arrayparty[3]);
                $("#ContentPlaceHolder1_txtPhone2").val(arrayparty[4]);
                $("#ContentPlaceHolder1_txtsecuritycharges").val(arrayparty[5]);
                $("#ContentPlaceHolder1_txtUserOrg").css('border-color', 'green');
            }
        }
    });

    //$("#ContentPlaceHolder1_txtBrandNameRep").autocomplete({
    //    source: function (request, response) {
    //        $.ajax({
    //            type: "POST",
    //            contentType: "application/json; charset=utf-8",
    //            url: "/CRM/CreateOrder.aspx/GetAllOrders",

    //            data: JSON.stringify({ "term": "" + $("#ContentPlaceHolder1_txtBrandNameRep").val() + "" }),
    //            dataType: "json",
    //            success: function (data) {
    //                var ParsedObject = $.parseJSON(data.d);
    //                response($.map(ParsedObject, function (item) {
    //                    return {
    //                        label: item.BrandName + '-' + item.UserOrganisation,
    //                        value: item.BrandName,
    //                        orderDetail: item.Id + '_' + item.Composition + '_' + item.MRP + '_' + item.PvcColor + '_' + item.Rate + '_' + item.Quantity + '_' + item.TabCapType + '_' + item.TabCapSize
    //                            + '_' + item.PackType + '_' + item.PackSize + '_' + item.UserName + '_' + item.UserOrganisation + '_' + item.UserPhone + '_' + item.UserEmail + '_' + item.CustomerName
    //                            + '_' + item.Phone + '_' + item.Comments + '_' + item.partyId + '_' + item.ProductId + '_' + item.PackingUnit + '_' + item.FoilSize + '_' + item.VialSize + '_' + item.BoxSize
    //                            + '_' + item.Carton + '_' + item.Label + '_' + item.LabelClaim + '_' + item.InnerCarton + '_' + item.PackingMaterialRequired + '_' + item.DPCO,
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
    //        var str = ui.item.orderDetail;
    //        var arraynew = str.split("_");
    //        console.log(arraynew);
    //        var id = arraynew[0];
    //        var PvcColorArrayN = arraynew[3].split(",");
    //        var TabCapTypeArrayN = arraynew[6].split(",");
    //        var PackTypeArray = arraynew[19].split(",");
    //        var PackingRequired = arraynew[27].split(",");
    //        var Type = arraynew[6].split(",");
    //        if (Type == "SYP") {
    //            $("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
    //            $("#ContentPlaceHolder1_ddlPVCColor").prop("disabled", true);
    //        }
    //        else if (Type == "D-SYP") {
    //            $("#ContentPlaceHolder1_ddlPackType").prop("disabled", true);
    //            $("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
    //            $("#ContentPlaceHolder1_ddlPVCColor").prop("disabled", true);
    //        }
    //        else if (Type == "SACHET") {
    //            $("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
    //            $("#ContentPlaceHolder1_ddlPVCColor").prop("disabled", true);
    //        }
    //        else if (Type == "INJ") {
    //            $("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
    //            $("#ContentPlaceHolder1_ddlPVCColor").prop("disabled", true);
    //        }
            
    //        //$("#ContentPlaceHolder1_txtUserOrg").css('border-color', 'red');
            
    //        //alert('Please select Marketed By Again !');
    //        for (var i = 0; i < PvcColorArrayN.length; i++) {
    //            $("#ContentPlaceHolder1_ddlPVCColor").append($("<option></option>").val(PvcColorArrayN[i]).html(PvcColorArrayN[i]));
    //        }
            
    //        for (var i = 0; i < PackTypeArray.length; i++) {
    //            $("#ContentPlaceHolder1_ddlPackType").append($("<option></option>").val(PackTypeArray[i]).html(PackTypeArray[i]));
    //        }
            
    //        if (PackingRequired != "null") {
    //            if (PackingRequired == "true")
    //                $("#ContentPlaceHolder1_ddlPackingMaterial").val("1");
    //            else(PackingRequired == "false")
    //            $("#ContentPlaceHolder1_ddlPackingMaterial").val("0");
    //            $("#ContentPlaceHolder1_ddlPackingMaterial").prop("disabled", true);
    //        }
            
    //        $("#ContentPlaceHolder1_hdnOrderId").val(id);
    //        $("#ContentPlaceHolder1_txtComposition").val(arraynew[1]);
    //        $("#ContentPlaceHolder1_txtCompositionSyp").val(arraynew[1]);
    //        $("#ContentPlaceHolder1_txtCompositionDsyp").val(arraynew[1]);
    //        $("#ContentPlaceHolder1_txtCompositionSchet").val(arraynew[1]);
    //        $("#ContentPlaceHolder1_txtCompositionInj").val(arraynew[1]);
    //        $("#ContentPlaceHolder1_txtMRP").val(arraynew[2]);
    //        $("#ContentPlaceHolder1_txtRate").val(arraynew[4]);
    //        $("#ContentPlaceHolder1_txtQuantity").val(arraynew[5]);
    //        $("#ContentPlaceHolder1_hdnPvcColor").val(arraynew[3]);
    //        $("#ContentPlaceHolder1_hdnTabCapType").val(arraynew[6]);
    //        $("#ContentPlaceHolder1_ddlProductType option:selected").text(arraynew[6]);
    //        $("#ContentPlaceHolder1_txtTabCapSize").val(arraynew[7]);
    //        $("#ContentPlaceHolder1_txtPackSize").val(arraynew[9]);
    //        $("#ContentPlaceHolder1_txtCustomerName").val(arraynew[10]);
    //        $("#ContentPlaceHolder1_txtUserOrg").val(arraynew[11]);
    //        $("#ContentPlaceHolder1_txtPhone").val(arraynew[12]);
    //        $("#ContentPlaceHolder1_txtEmail").val(arraynew[13]);
    //        $("#ContentPlaceHolder1_txtCustomertwo").val(arraynew[14]);
    //        $("#ContentPlaceHolder1_txtPhone2").val(arraynew[15]);
    //        $("#ContentPlaceHolder1_txtComments").val(arraynew[16]);
    //        $("#ContentPlaceHolder1_hdnPartyId").val(arraynew[17]);
    //        $("#ContentPlaceHolder1_hdnProductId").val(arraynew[18]);
    //        $("#ContentPlaceHolder1_hdnPackingUnit").val(arraynew[19]);
    //        $("#ContentPlaceHolder1_hdnFoilSize").val(arraynew[20]);
    //        $("#ContentPlaceHolder1_hdnVialSize").val(arraynew[21]);
    //        $("#ContentPlaceHolder1_hdnBoxSize").val(arraynew[22]);
    //        $("#ContentPlaceHolder1_hdnCarton").val(arraynew[23]);
    //        $("#ContentPlaceHolder1_hdnLabel").val(arraynew[24]);
    //        $("#ContentPlaceHolder1_hdnLabelClaim").val(arraynew[25]);
    //        $("#ContentPlaceHolder1_hdnInnerCarton").val(array[26]);
    //        $("#ContentPlaceHolder1_hdnPMRequired").val(array[27]);
    //        $("#ContentPlaceHolder1_hdnDPCO").val(array[28]);
            
    //    }
    //});


    $("#ContentPlaceHolder1_txtBrandName").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/CreateOrder.aspx/GetAllOrders",
                data: JSON.stringify({ "term": "" + $("#ContentPlaceHolder1_txtBrandName").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.BrandName + '-' + item.UserOrganisation,
                            value: item.BrandName,
                            orderDetail: item.Id + '_' + item.BrandName,
                        };
                    }))
                },
                error: function (result) {
                    //alert("Error");
                  //  Openmodal_message("Error", "Please try again after some time");
                }
            });
        },
        minLength: 2,
        select: function (event, ui) {
            var str = ui.item.orderDetail;
            var array = str.split("_");
            console.log(array);
            var id = array[0];

            //alert('This BrandName Already Exist');
            Openmodal_message("Error", "This BrandName Already Exist");

        }
    });

    $("#ContentPlaceHolder1_txtBrandNameRep").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/CreateOrder.aspx/GetAllOrders",
                data: JSON.stringify({ "term": "" + $("#ContentPlaceHolder1_txtBrandNameRep").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.BrandName + '-' + item.OrderType + '-' + item.UserOrganisation + '-' + item.OrderCode + '-' + item.Quantity + 'Qty',
                            value: item.BrandName,
                            orderDetail: item.Id + '_' + item.BrandName,
                        };
                    }))
                },
                error: function (result) {
                    //alert("Error");
                  //  Openmodal_message("Error", "Please try again after some time");
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
                    //$("#ContentPlaceHolder1_ddlPVCColor").empty();
                    $("#ContentPlaceHolder1_ddlPackType").empty();
                    //$("#ContentPlaceHolder1_ddlPVCColor").append($("<option></option>").val("Select").html("Select"));
                    $("#ContentPlaceHolder1_ddlPackType").append($("<option></option>").val("Select").html("Select"));
                    var ParsedObject = $.parseJSON(data.d);
                    console.log(ParsedObject[0].Type)
                    if(ParsedObject[0].Type=="TAB POUCH")
                    {
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.Type + '_' + item.PackType + '_' + item.PackingUnit + '_' + item.TabCapSize + '_' + item.PVCColor
                                + '_' + item.FoilSize + '_' + item.Carton + '_' + item.MRP + '_' + item.ExpDate + '_' + item.SpecialTreatment + '_' + item.BatchSize + '_' + item.InnerCarton + '_' + item.IsApprove
                            + '_' + item.BomID + '_' + item.Label + '_' + item.ProccessId+'_'+item.PouchFoil,
                        };
                    }))
                }
                else{
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.Type + '_' + item.PackType + '_' + item.PackingUnit + '_' + item.TabCapSize + '_' + item.PVCColor
                                + '_' + item.FoilSize + '_' + item.Carton + '_' + item.MRP + '_' + item.ExpDate + '_' + item.SpecialTreatment + '_' + item.BatchSize + '_' + item.InnerCarton + '_' + item.IsApprove
                            + '_' + item.BomID + '_' + item.Label + '_' + item.ProccessId,
                        };
                    }))
                }
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
            var PVCColorArray = array[6].split(",");
            var PackTyperArray = array[3].toLowerCase().split(",");
            //var MRPAvail = array[9];
            id = array[0];

//add by vipin
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/CreateOrder.aspx/GetBomHeader",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtComposition").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "_" + id + "" }),
                dataType: "json",
                success: function (result) {                   
                    var ParsedObjects = $.parseJSON(result.d);
                    console.log(ParsedObjects);
                    console.log(ParsedObjects.length);
                   
                    if(Object.keys(ParsedObjects).length===0){                        
                        $("#ContentPlaceHolder1_txtexpMonth").val("0");
                    }
                    else{
                      
                        $("#ContentPlaceHolder1_txtexpMonth").val(ParsedObjects[0].ExpiryMonth);
                        
                    }
                },
                error: function (result) {
                    //alert("Error");
                   // Openmodal_message("Error", "Please try again after some time");
                }
            });
//end by vipin


           
            $("#ContentPlaceHolder1_hdnProductId").val(id);

            //for (var i = 0; i < PVCColorArray.length; i++) {
            //    $("#ContentPlaceHolder1_ddlPVCColor").append($("<option></option>").val(PVCColorArray[i]).html(PVCColorArray[i]));
            //}
            //for (var i = 0; i < PackTyperArray.length; i++) {
            //    $("#ContentPlaceHolder1_ddlPackType").append($("<option></option>").val(PackTyperArray[i]).html(PackTyperArray[i]));
            //}
            if (PackTyperArray != "") {
                if (PackTyperArray.indexOf("alu") !== -1) {
                    $("#ContentPlaceHolder1_ddlPVCColor").val("NA");
                }
                else if (PackTyperArray.indexOf("strip") !== -1) {
                    $("#ContentPlaceHolder1_ddlPVCColor").val("NA");
                }
                else if (PackTyperArray.indexOf("blister") !== -1) {
                    $("#ContentPlaceHolder1_ddlPVCColor").val("0");
                }
            }
            $("#ContentPlaceHolder1_hdnLabelClaim").val(array[1]);
            $("#ContentPlaceHolder1_hdnTabCapType").val(array[2]);
            $("#ContentPlaceHolder1_txtPackType").val(array[3]);
            $("#ContentPlaceHolder1_hdnPackType").val(array[3]);
            $("#ContentPlaceHolder1_hdnPackingUnit").val(array[4]);
            $("#ContentPlaceHolder1_txtPackSize").val(array[4]);
            $("#ContentPlaceHolder1_txtTabCapSize").val(array[5]);
            $("#ContentPlaceHolder1_hdnFoilSize").val(array[7]);
            $("#ContentPlaceHolder1_hdnCarton").val(array[8]);
            $("#ContentPlaceHolder1_txtMRP").val(array[9]);
            $("#ContentPlaceHolder1_hdnExpDate").val(array[10]);
            $("#ContentPlaceHolder1_hdnSpecialTreatment").val(array[11]);
            $("#ContentPlaceHolder1_hdnBatchSize").val(array[12]);
            $("#ContentPlaceHolder1_hdnInnerCarton").val(array[13]);
            $("#ContentPlaceHolder1_hdnPvcColor").val(array[6]);
            $("#ContentPlaceHolder1_hdnDPCO").val(array[9]);
            $("#ContentPlaceHolder1_hdnIsApprove").val(array[14]);
            $("#ContentPlaceHolder1_hdnBomID").val(array[15]); 
            $("#ContentPlaceHolder1_hdnLabel").val(array[16]);
            $("#ContentPlaceHolder1_hdnProcessId").val(array[17]);
            $("#ContentPlaceHolder1_hdnTubeSize").val('null');
            if ($("#ContentPlaceHolder1_hdnIsApprove").val() == 'true') {
                $("#ContentPlaceHolder1_btnPrint").css("display", "inline-block");
                $("#ContentPlaceHolder1_lblMsg").html('Approved');  
                $("#ContentPlaceHolder1_lblMsg").css("color", "green");
                //alert($("#ContentPlaceHolder1_hdnIsApprove").val());
            }
            else {
                $("#ContentPlaceHolder1_btnPrint").css("display", "inline-block");
                $("#ContentPlaceHolder1_lblMsg").html('Not Approved');
                $("#ContentPlaceHolder1_lblMsg").css("color", "red");
                //alert($("#ContentPlaceHolder1_hdnIsApprove").val());
            }
            if(array[2]=='TAB POUCH')
            {
                $("#ContentPlaceHolder1_hdnpouchfoil").val(array[18]);
            }
            //$("#ContentPlaceHolder1_ddlOrderType option:selected").text("New");
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
                    $("#ContentPlaceHolder1_ddlPackType").empty();
                    $("#ContentPlaceHolder1_ddlPackType").append($("<option></option>").val("Select").html("Select"));
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.Type + '_' + item.PackType + '_' + item.PackSize + '_' + item.BoxSize
                                + '_' + item.Carton + '_' + item.Label + '_' + item.MRP + '_' + item.ExpDate + '_' + item.SpecialTreatment + '_' + item.BatchSize + '_'
                                + item.InnerCarton + '_' + item.IsApprove + '_' + item.BomID + '_' + item.ProccessId,
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
            //var MRPAvail = array[8];
            id = array[0];

            $("#ContentPlaceHolder1_hdnProductId").val(id);
            //for (var i = 0; i < PackTyperArray.length; i++) {
            //    $("#ContentPlaceHolder1_ddlPackType").append($("<option></option>").val(PackTyperArray[i]).html(PackTyperArray[i]));
            //}
            //if (MRPAvail != "") {
            //    $("#ContentPlaceHolder1_txtMRP").prop("disabled", true);
            //    $("#ContentPlaceHolder1_hdnMrp").val(array[8]);
            //}
            //else {
            //    $("#ContentPlaceHolder1_txtMRP").prop("disabled", false);
            //    $("#ContentPlaceHolder1_hdnMrp").val(array[8]);
            //}
            $("#ContentPlaceHolder1_hdnLabelClaim").val(array[1]);
            $("#ContentPlaceHolder1_hdnTabCapType").val(array[2]);
            $("#ContentPlaceHolder1_hdnPackType").val(array[3]);
            $("#ContentPlaceHolder1_txtPackType").val(array[3]);
            $("#ContentPlaceHolder1_txtPackSize").val(array[4]);
            $("#ContentPlaceHolder1_hdnBoxSize").val(array[5]);
            $("#ContentPlaceHolder1_hdnCarton").val(array[6]);
            $("#ContentPlaceHolder1_hdnLabel").val(array[7]);
            $("#ContentPlaceHolder1_txtMRP").val(array[8]);
            $("#ContentPlaceHolder1_hdnDPCO").val(array[8]);
            $("#ContentPlaceHolder1_hdnExpDate").val(array[9]);
            $("#ContentPlaceHolder1_hdnSpecialTreatment").val(array[10]);
            $("#ContentPlaceHolder1_hdnBatchSize").val(array[11]);
            $("#ContentPlaceHolder1_hdnInnerCarton").val(array[12]);
            $("#ContentPlaceHolder1_hdnIsApprove").val(array[13]);
            $("#ContentPlaceHolder1_hdnBomID").val(array[14]);
            $("#ContentPlaceHolder1_hdnProcessId").val(array[15]);
            $("#ContentPlaceHolder1_hdnTubeSize").val('null');
            $("#ContentPlaceHolder1_ddlPVCColor option:selected").text("N/A");
            //$("#ContentPlaceHolder1_ddlOrderType option:selected").text;
            $("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlPVCColor").prop("disabled", true);

            if ($("#ContentPlaceHolder1_hdnIsApprove").val() == 'true') {
                $("#ContentPlaceHolder1_lblMsg").html('Approved');
                $("#ContentPlaceHolder1_lblMsg").css("color", "green");
                //alert($("#ContentPlaceHolder1_hdnIsApprove").val());
            }
            else {
                $("#ContentPlaceHolder1_lblMsg").html('Not Approved');
                $("#ContentPlaceHolder1_lblMsg").css("color", "red");
                //alert($("#ContentPlaceHolder1_hdnIsApprove").val());
            }
            
            

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
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.Type + '_' + item.PackSize
                                + '_' + item.BoxSize + '_' + item.Label + '_' + item.MRP + '_' + item.ExpDate + '_' + item.SpecialTreatment
                                + '_' + item.BatchSize + '_' + item.InnerCarton + '_' + item.IsApprove + '_' + item.BomID + '_' + item.ProccessId,
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
            //var MRPAvail = array[6];
            console.log(array);
            id = array[0];

            //if (MRPAvail != "") {
            //    $("#ContentPlaceHolder1_txtMRP").prop("disabled", true);
            //    $("#ContentPlaceHolder1_hdnMrp").val(array[6]);
            //}
            //else {
            //    $("#ContentPlaceHolder1_txtMRP").prop("disabled", false);
            //    $("#ContentPlaceHolder1_hdnMrp").val(array[6]);
            //}

            $("#ContentPlaceHolder1_hdnProductId").val(id);
            $("#ContentPlaceHolder1_hdnLabelClaim").val(array[1]);
            $("#ContentPlaceHolder1_hdnTabCapType").val(array[2]);
            $("#ContentPlaceHolder1_txtPackSize").val(array[3]);
            $("#ContentPlaceHolder1_hdnBoxSize").val(array[4]);
            $("#ContentPlaceHolder1_hdnLabel").val(array[5]);
            $("#ContentPlaceHolder1_txtMRP").val(array[6]);
            $("#ContentPlaceHolder1_hdnDPCO").val(array[6]);
            $("#ContentPlaceHolder1_hdnExpDate").val(array[7]);
            $("#ContentPlaceHolder1_hdnSpecialTreatment").val(array[8]);
            $("#ContentPlaceHolder1_hdnBatchSize").val(array[9]);
            $("#ContentPlaceHolder1_hdnInnerCarton").val(array[10]);
            $("#ContentPlaceHolder1_hdnIsApprove").val(array[11]);
            $("#ContentPlaceHolder1_hdnBomID").val(array[12]);
            $("#ContentPlaceHolder1_hdnProcessId").val(array[13]);
            $("#ContentPlaceHolder1_hdnTubeSize").val('null');
            $("#ContentPlaceHolder1_ddlPVCColor option:selected").text("NA");
            $("#ContentPlaceHolder1_ddlOrderType option:selected").text("New");
            $("#ContentPlaceHolder1_txtPackType").prop("disabled", true);
            $("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlPVCColor").prop("disabled", true);

            if ($("#ContentPlaceHolder1_hdnIsApprove").val() == 'true') {
                $("#ContentPlaceHolder1_lblMsg").html('Approved');
                $("#ContentPlaceHolder1_lblMsg").css("color", "green");
                //alert($("#ContentPlaceHolder1_hdnIsApprove").val());
            }
            else {
                $("#ContentPlaceHolder1_lblMsg").html('Not Approved');
                $("#ContentPlaceHolder1_lblMsg").css("color", "red");
                //alert($("#ContentPlaceHolder1_hdnIsApprove").val());
            }
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
                    //$("#ContentPlaceHolder1_ddlPackType").empty();
                    //$("#ContentPlaceHolder1_ddlPackType").append($("<option></option>").val("Select").html("Select"));
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.Type + '_' + item.PackType + '_' + item.PackingUnit
                                + '_' + item.Carton + '_' + item.Foil + '_' + item.MRP + '_' + item.ExpDate + '_' + item.SpecialTreatment
                                + '_' + item.BatchSize + '_' + item.InnerCarton + '_' + item.IsApprove + '_' + item.BomID + '_' + item.ProccessId,
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
            //var MRPAvail = array[7];
            id = array[0];

            $("#ContentPlaceHolder1_hdnProductId").val(id);
            //for (var i = 0; i < PackTyperArray.length; i++) {
            //    $("#ContentPlaceHolder1_ddlPackType").append($("<option></option>").val(PackTyperArray[i]).html(PackTyperArray[i]));
            //}
            //if (MRPAvail != "") {
            //    $("#ContentPlaceHolder1_txtMRP").prop("disabled", true);
            //    $("#ContentPlaceHolder1_hdnMrp").val(array[7]);
            //}
            //else {
            //    $("#ContentPlaceHolder1_txtMRP").prop("disabled", false);
            //    $("#ContentPlaceHolder1_hdnMrp").val(array[7]);
            //}
            $("#ContentPlaceHolder1_hdnLabelClaim").val(array[1]);
            $("#ContentPlaceHolder1_hdnTabCapType").val(array[2]);
            $("#ContentPlaceHolder1_txtPackType").val(array[3]);
            $("#ContentPlaceHolder1_hdnPackType").val(array[3]);
            $("#ContentPlaceHolder1_hdnPackingUnit").val(array[4]);
            $("#ContentPlaceHolder1_txtPackSize").val(array[4]);
            $("#ContentPlaceHolder1_hdnCarton").val(array[5]);
            $("#ContentPlaceHolder1_hdnFoilSize").val(array[6]);
            $("#ContentPlaceHolder1_txtMRP").val(array[7]);
            $("#ContentPlaceHolder1_hdnDPCO").val(array[7]);
            $("#ContentPlaceHolder1_hdnExpDate").val(array[8]);
            $("#ContentPlaceHolder1_hdnSpecialTreatment").val(array[9]);
            $("#ContentPlaceHolder1_hdnBatchSize").val(array[10]);
            $("#ContentPlaceHolder1_hdnInnerCarton").val(array[11]);
            $("#ContentPlaceHolder1_hdnIsApprove").val(array[12]);
            $("#ContentPlaceHolder1_hdnBomID").val(array[13]);
            $("#ContentPlaceHolder1_hdnProcessId").val(array[14]);
            $("#ContentPlaceHolder1_hdnTubeSize").val('null');
            //$("#ContentPlaceHolder1_ddlPVCColor option:selected").text("N/A");
            $("#ContentPlaceHolder1_ddlOrderType option:selected").text("New");
            $("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlPVCColor").prop("disabled", true);

            if ($("#ContentPlaceHolder1_hdnIsApprove").val() == 'true') {
                $("#ContentPlaceHolder1_lblMsg").html('Approved');
                $("#ContentPlaceHolder1_lblMsg").css("color", "green");
                //alert($("#ContentPlaceHolder1_hdnIsApprove").val());
            }
            else {
                $("#ContentPlaceHolder1_lblMsg").html('Not Approved');
                $("#ContentPlaceHolder1_lblMsg").css("color", "red");
                //alert($("#ContentPlaceHolder1_hdnIsApprove").val());
            }

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

    $("#ContentPlaceHolder1_txtCompositionOIMT").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/CreateOrder.aspx/GetAllProduts",
                data: JSON.stringify({ "Name": "" + $("#ContentPlaceHolder1_txtCompositionOIMT").val() + "_" + $("#ContentPlaceHolder1_ddlProductType option:selected").text() + "" }),
                dataType: "json",
                success: function (data) {
                    //$("#ContentPlaceHolder1_ddlPackType").empty();
                    //$("#ContentPlaceHolder1_ddlPackType").append($("<option></option>").val("Select").html("Select"));
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.Id + '-' + item.Composition + '-' + item.Alias,
                            value: item.Composition,
                            itemDetail: item.Id + '_' + item.LableClaim + '_' + item.Type + '_' + item.PackType + '_' + item.PackSize + '_' + item.BoxSize
                                + '_' + item.Carton + '_' + item.Label + '_' + item.MRP + '_' + item.ExpDate + '_' + item.SpecialTreatment + '_' + item.BatchSize + '_'
                                + item.InnerCarton + '_' + item.IsApprove + '_' + item.BomID + '_' + item.ProccessId + '_' + item.TubeSize,
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
            //var MRPAvail = array[8];
            id = array[0];

            $("#ContentPlaceHolder1_hdnProductId").val(id);
            $("#ContentPlaceHolder1_hdnLabelClaim").val(array[1]);
            $("#ContentPlaceHolder1_hdnTabCapType").val(array[2]);
            $("#ContentPlaceHolder1_hdnPackType").val(array[3]);
            $("#ContentPlaceHolder1_txtPackType").val(array[3]);
            $("#ContentPlaceHolder1_txtPackSize").val(array[4]);
            $("#ContentPlaceHolder1_hdnBoxSize").val(array[5]);
            $("#ContentPlaceHolder1_hdnCarton").val(array[6]);
            $("#ContentPlaceHolder1_hdnLabel").val(array[7]);
            $("#ContentPlaceHolder1_txtMRP").val(array[8]);
            $("#ContentPlaceHolder1_hdnDPCO").val(array[8]);
            $("#ContentPlaceHolder1_hdnExpDate").val(array[9]);
            $("#ContentPlaceHolder1_hdnSpecialTreatment").val(array[10]);
            $("#ContentPlaceHolder1_hdnBatchSize").val(array[11]);
            $("#ContentPlaceHolder1_hdnInnerCarton").val(array[12]);
            $("#ContentPlaceHolder1_hdnIsApprove").val(array[13]);
            $("#ContentPlaceHolder1_hdnBomID").val(array[14]);
            $("#ContentPlaceHolder1_hdnProcessId").val(array[15]);
            $("#ContentPlaceHolder1_hdnTubeSize").val(array[16]);
            $("#ContentPlaceHolder1_ddlPVCColor option:selected").text("N/A");
            //$("#ContentPlaceHolder1_ddlOrderType option:selected").text;
            $("#ContentPlaceHolder1_txtTabCapSize").prop("disabled", true);
            $("#ContentPlaceHolder1_ddlPVCColor").prop("disabled", true);

            if ($("#ContentPlaceHolder1_hdnIsApprove").val() == 'true') {
                $("#ContentPlaceHolder1_lblMsg").html('Approved');
                $("#ContentPlaceHolder1_lblMsg").css("color", "green");
                //alert($("#ContentPlaceHolder1_hdnIsApprove").val());
            }
            else {
                $("#ContentPlaceHolder1_lblMsg").html('Not Approved');
                $("#ContentPlaceHolder1_lblMsg").css("color", "red");
                //alert($("#ContentPlaceHolder1_hdnIsApprove").val());
            }

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