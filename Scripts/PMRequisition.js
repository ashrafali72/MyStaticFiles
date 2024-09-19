$(document).ready(function () {
    //$('body').addClass('fullwidth8181');
    var itemDetail;
    var orderDetail;
    var PartyDetail;

    /*********************RAWMATERIAL SEARCH FOR BAJAJ FORMULATIONS***************************/
    $("#ContentPlaceHolder1_txtRawmaterial").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PackingMaterialMaster.aspx/GetPMMasterByName",

                data: JSON.stringify({ "Itemname": "" + $("#ContentPlaceHolder1_txtRawmaterial").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.ItemName,
                            value: item.ItemName,
                            itemDetail: item.Id + '_' + item.ItemName + '_' + item.Quantity + '_' + item.Unit,
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
            var arrayitem = str.split("_");
            console.log(arrayitem);
            var id = arrayitem[0];
            //alert(id);
            $("#ContentPlaceHolder1_hdnRawMaterialId").val(id);
            $("#ContentPlaceHolder1_hdnAvailQty").val(arrayitem[2]);
            $("#ContentPlaceHolder1_hdnunit").val(arrayitem[3]);
            $("#ContentPlaceHolder1_lblAvalQty").html(arrayitem[2]);
            $("#ContentPlaceHolder1_lblUnit").html(arrayitem[3]);
        }
    });
    /*********************END***************************/

});