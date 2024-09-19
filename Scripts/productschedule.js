
$(document).ready(function () {    
    
    var todaydate=moment().format("DD-MM-YYYY")
   var currentdate = moment(todaydate, "DD-MM-YYYY");
    var ddd="11-5-2021";
    var ddd1="12-5-2021";  
                if(moment(ddd).isBefore(currentdate))
               {
                 //alert("is true"+ todaydate);
               }       
                $(function () {
                    var tableRows = $("#order-listing tr:not(:has(th))");
                    var tds = $(this).find('td');
                    tableRows.each(function () {
                       // alert($(this).find('td').length);
                      
    var plannedtrasnfer=$(this).find('td').eq(5).text();//we can also use .html();
    var actualtransfer=$(this).find('td').eq(6).text();//
    var granulationdate=$(this).find('td').eq(7).text();
    var plannedgranulation=$(this).find('td').eq(8).text();
    var compressiondate=$(this).find('td').eq(9).text();
    var plannedcompression=$(this).find('td').eq(10).text();
    var coatingdate=$(this).find('td').eq(11).text();
    var plannedcoating=$(this).find('td').eq(12).text();
    var mfgdate=$(this).find('td').eq(13).text();
    var plannedmfg=$(this).find('td').eq(14).text();
    var fillingdate=$(this).find('td').eq(15).text();
    var plannedfilling=$(this).find('td').eq(16).text();
  
    if($(this).find('td').eq(6).html()!="" && $(this).find('td').eq(5).html()!="")
    {
        plannedtrasnfer = moment(plannedtrasnfer, "DD-MM-YYYY");
        actualtransfer = moment(actualtransfer, "DD-MM-YYYY"); // this will be valid moment date now
    
        if(moment(plannedtrasnfer).isBefore(currentdate))
        {
          $(this).find('td').eq(6).css('background-color', 'yellow');
        }
    }
    if(plannedgranulation!="")
    {
        granulationdate = moment(granulationdate, "DD-MM-YYYY");
        plannedgranulation = moment(plannedgranulation, "DD-MM-YYYY"); // this will be valid moment date now
    
        if(moment(plannedgranulation).isBefore(currentdate)) //"<"
        {
          $(this).find('td').eq(7).css('background-color', 'yellow');
        }
    }   
    if(plannedgranulation!="")
    {
        compressiondate = moment(compressiondate, "DD-MM-YYYY");
        plannedcompression = moment(plannedcompression, "DD-MM-YYYY"); // this will be valid moment date now
    
        if(moment(plannedcompression).isBefore(currentdate)) //"<"
        {
          $(this).find('td').eq(9).css('background-color', 'yellow');
        }
    }    
    if(plannedgranulation!="")
    {
        coatingdate = moment(coatingdate, "DD-MM-YYYY");
        plannedcoating = moment(plannedcoating, "DD-MM-YYYY"); // this will be valid moment date now
    
        if(moment(plannedcoating).isBefore(currentdate)) //"<"
        {
          $(this).find('td').eq(11).css('background-color', 'yellow');
        }
    }
    if(plannedmfg!="")
    {
        mfgdate = moment(mfgdate, "DD-MM-YYYY");
        plannedmfg = moment(plannedmfg, "DD-MM-YYYY"); // this will be valid moment date now
    
        if(moment(plannedmfg).isBefore(currentdate)) //"<"
        {
          $(this).find('td').eq(13).css('background-color', 'yellow');
        }
    }   
    if(plannedfilling!="")
    {
        fillingdate = moment(fillingdate, "DD-MM-YYYY");
        plannedfilling = moment(plannedfilling, "DD-MM-YYYY"); // this will be valid moment date now
    
        if(moment(plannedfilling).isBefore(currentdate)) //"<"
        {
          $(this).find('td').eq(15).css('background-color', 'yellow');
        }
    }    
                      
    //});
                       /* for (var i = 0; i < $(this).find('td').length - 1; i++) {
                            for (var j = 1; j < $(this).find('td').length; j++) {
                             //   alert($(this).find('td').eq(i).html()+"-"+$(this).find('td').eq(j).html())
                                if ($(this).find('td').eq(i).html() != $(this).find('td').eq(j).html()) {
                                    $(this).find('td').css('background-color', 'red');
                                    break;
                                }
                                else {
                                    $(this).find('td').css('background-color', 'white');
                                }
                            }
                        }*/
                    });
                    $("#order-listing").prepend($("<thead></thead>").append($(this).find("tr:first"))).dataTable({
                        "aaSorting": true,
                        "bPaginate": true
                    });
                });


//===============================================
var orderDetail;
    //$('body').addClass('fullwidth8181');
    $("#ContentPlaceHolder1_btnSearchOrder").prop("disabled", true);
    $("#ContentPlaceHolder1_txtBrand").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PrintOrder.aspx/GetAllOrders",
                data: JSON.stringify({ "term": "" + $("#ContentPlaceHolder1_txtBrand").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.BrandName + '-' + item.UserOrganisation,
                            value: item.BrandName,
                            orderDetail: item.Id + '_' + item.BrandName + '_' + item.StatusId,
                        };
                    }))
                },
                error: function (result) {
                    //alert("Error");
                    Openmodal_message("Error", "Please try again after some time")

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
            $("#ContentPlaceHolder1_hdnStatusId").val(array[2]);
            $("#ContentPlaceHolder1_txtCustomerName").val("");
            $("#ContentPlaceHolder1_btnSearchOrder").prop("disabled", false);
        }
    }

    );

    $("#ContentPlaceHolder1_txtCustomerName").autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CRM/PrintOrder.aspx/GetAllOrders",
                data: JSON.stringify({ "term": "" + $("#ContentPlaceHolder1_txtCustomerName").val() + "" }),
                dataType: "json",
                success: function (data) {
                    var ParsedObject = $.parseJSON(data.d);
                    response($.map(ParsedObject, function (item) {
                        return {
                            label: item.UserOrganisation,
                            value: item.UserOrganisation,
                            orderDetail: item.Id + '_' + item.UserOrganisation,
                        };
                    }))
                },
                error: function (result) {
                    //alert("Error");
                    Openmodal_message("Error", "Please try again after some time")
                }
            });
        },
        minLength: 3,
        select: function (event, ui) {
            var str = ui.item.orderDetail;
            var array = str.split("_");
            console.log(array);
            var id = array[0];

            $("#ContentPlaceHolder1_hdnOrderId").val(id);
            $("#ContentPlaceHolder1_txtBrand").val("");
            $("#ContentPlaceHolder1_btnSearchOrder").prop("disabled", false);
        }
    });
});
