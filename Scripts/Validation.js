function validateLogin() {

    if ($('#txtUserName').val() == "") {
        $("#lblUserName").text("Please Enter User Name !");
        $("#lblUserName").css("display", "inline");
        $('#txtUserName').focus();
        return false;
    }
    else {
        $("#lblUserName").css("display", "none");
    }
    if ($('#txtPassword').val() == "") {
        $("#lblPassword").text("Please Enter Password !");
        $("#lblPassword").css("display", "inline");
        $('#txtPassword').focus();
        return false;
    }
    else {
        $("#lblPassword").css("display", "none");
    }



    //if ($('[id*=txtCaptcha]').val() == "") {
    //    $("[id*=lblCaptcha]").text("Please verify captcha !!");
    //    $("[id*=lblCaptcha]").css("display", "inline");
    //    $('[id*=txtCaptcha]').focus();
    //    return false;
    //}
    //else {
    //    $("[id*=lblCaptcha]").css("display", "none");
    //}








    return true;
}


function validateLogin_unlock() {
    if ($('#txtPassword').val() == "") {
        $("#lblPassword").text("Please Enter Your Password");
        $("#lblPassword").css("display", "inline");
        $('#txtPassword').focus();
        return false;
    }
    else {
        $("#lblPassword").css("display", "none");
    }
    return true;
}



function validateLock() {

    if ($('#txtPassword').val() == "") {
        $("#lblPassword").text("Please Enter Password !");
        $("#lblPassword").css("display", "inline");
        $('#txtPassword').focus();
        return false;
    }
    else {
        $("#lblPassword").css("display", "none");
    }
    return true;
}

//function validateCustomer() {

//    var State = $("#ContentPlaceHolder1_ddlState").val();
//    var City = $("#ContentPlaceHolder1_ddlCity").val();

//    $(".form-control").removeClass("mustFill");

//    if ($('#txtOrgName').val() == "") {
//        $('#txtOrgName').addClass("mustFill");
//        $('#txtOrgName').focus();
//        return false;
//    }

//    if ($('#txtAddress1').val() == "") {
//        $('#txtAddress1').addClass("mustFill");
//        $('#txtAddress1').focus();
//        return false;
//    }

//    if ($('#txtAddress2').val() == "") {
//        $('#txtAddress2').addClass("mustFill");
//        $('#txtAddress2').focus();
//        return false;
//    }

//    if ($('#txtLandline').val() == "") {
//        $('#txtLandline').addClass("mustFill");
//        $('#txtLandline').focus();
//        return false;
//    }


//    if ($("#ContentPlaceHolder1_ddlState option:selected").text() == "Select State") {
//        $("#ContentPlaceHolder1_ddlState").addClass("mustFill");
//        $("#ContentPlaceHolder1_ddlState").focus();
//        return false;
//    }

//    if ($("#ContentPlaceHolder1_ddlCity option:selected").text() == "Select City") {
//        $("#ContentPlaceHolder1_ddlCity").addClass("mustFill");
//        $("#ContentPlaceHolder1_ddlCity").focus();
//        return false;
//    }

//    if ($('#txtName').val() == "") {
//        $('#txtName').addClass("mustFill");
//        $('#txtName').focus();
//        return false;
//    }

//    if ($('#txtUsername').val() == "") {
//        $('#txtUsername').addClass("mustFill");
//        $('#txtUsername').focus();
//        return false;
//    }

//    if ($('#txtPassword').val() == "") {
//        $('#txtPassword').addClass("mustFill");
//        $('#txtPassword').focus();
//        return false;
//    }

//    if ($('#txtConfirmPassword').val() == "") {
//        $('#txtConfirmPassword').addClass("mustFill");
//        $('#txtConfirmPassword').focus();
//        return false;
//    }
//    if ($('#txtPassword').val() != $('#txtConfirmPassword').val())
//    {
//        //alert("Password and Confirm Password do not match");
//        Openmodal_message("Error", "Password and Confirm Password do not match");
//        return false;
//    }

//    if ($('#txtEmail').val() == "") {
//        $('#txtEmail').addClass("mustFill");
//        $('#txtEmail').focus();
//        return false;
//    }

//    if ($('#txtPhone1').val() == "") {
//        $('#txtPhone1').addClass("mustFill");
//        $('#txtPhone1').focus();
//        return false;
//    }

//    if ($('#txtPhone2').val() == "") {
//        $('#txtPhone2').addClass("mustFill");
//        $('#txtPhone2').focus();
//        return false;
//    }

//    return true;
//}

function validateProfile() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtName').val() == "") {
        $('#ContentPlaceHolder1_txtName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtName').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtUsername').val() == "") {
        $('#ContentPlaceHolder1_txtUsername').addClass("mustFill");
        $('#ContentPlaceHolder1_txtUsername').focus();
        return false;
    }

   
    if ($('#ContentPlaceHolder1_txtAddress1').val() == "") {
        $('#ContentPlaceHolder1_txtAddress1').addClass("mustFill");
        $('#ContentPlaceHolder1_txtAddress1').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtAddress2').val() == "") {
        $('#ContentPlaceHolder1_txtAddress2').addClass("mustFill");
        $('#ContentPlaceHolder1_txtAddress2').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtOrgName').val() == "") {
        $('#ContentPlaceHolder1_txtOrgName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtOrgName').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtEmail').val() == "") {
        $('#ContentPlaceHolder1_txtEmail').addClass("mustFill");
        $('#ContentPlaceHolder1_txtEmail').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtLandline').val() == "") {
        $('#ContentPlaceHolder1_txtLandline').addClass("mustFill");
        $('#ContentPlaceHolder1_txtLandline').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtPhone1').val() == "") {
        $('#ContentPlaceHolder1_txtPhone1').addClass("mustFill");
        $('#ContentPlaceHolder1_txtPhone1').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtPhone2').val() == "") {
        $('#ContentPlaceHolder1_txtPhone2').addClass("mustFill");
        $('#ContentPlaceHolder1_txtPhone2').focus();
        return false;
    }

    return true;
}

function validateEnquiry() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtComposition').val() == "") {
        $('#ContentPlaceHolder1_txtComposition').addClass("mustFill");
        $('#ContentPlaceHolder1_txtComposition').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtQuantity').val() == "") {
        $('#ContentPlaceHolder1_txtQuantity').addClass("mustFill");
        $('#ContentPlaceHolder1_txtQuantity').focus();
        return false;
    }

    if ($("#ContentPlaceHolder1_ddlPackingRequired option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlPackingRequired").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlPackingRequired").focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtEnquiryDetails').val() == "") {
        $('#ContentPlaceHolder1_txtEnquiryDetails').addClass("mustFill");
        $('#ContentPlaceHolder1_txtEnquiryDetails').focus();
        return false;
    }

    return true;
}

function ValidateFeedback()
{

    if ($("#ContentPlaceHolder1_ddlFeedbackType option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlFeedbackType").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlFeedbackType").focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtComment').val() == "") {
        $('#ContentPlaceHolder1_txtComment').addClass("mustFill");
        $('#ContentPlaceHolder1_txtComment').focus();
        return false;
    }
    return true;
}

function ValidateStaff() {

    var State = $("#ContentPlaceHolder1_ddlState").val();
    var City = $("#ContentPlaceHolder1_ddlCity").val();
    var Department = $("#ContentPlaceHolder1_ddlDepartment").val();

    $(".form-control").removeClass("mustFill");

    if ($('#txtOrgName').val() == "") {
        $('#txtOrgName').addClass("mustFill");
        $('#txtOrgName').focus();
        return false;
    }

    if ($('#txtAddress1').val() == "") {
        $('#txtAddress1').addClass("mustFill");
        $('#txtAddress1').focus();
        return false;
    }

    if ($('#txtAddress2').val() == "") {
        $('#txtAddress2').addClass("mustFill");
        $('#txtAddress2').focus();
        return false;
    }

    if ($("#ContentPlaceHolder1_ddlDepartment option:selected").text() == "Select Department") {
        $("#ContentPlaceHolder1_ddlDepartment").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlDepartment").focus();
        return false;
    }

    if ($("#ContentPlaceHolder1_ddlState option:selected").text() == "Select State") {
        $("#ContentPlaceHolder1_ddlState").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlState").focus();
        return false;
    }

    if ($("#ContentPlaceHolder1_ddlCity option:selected").text() == "Select City") {
        $("#ContentPlaceHolder1_ddlCity").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlCity").focus();
        return false;
    }

    if ($('#txtName').val() == "") {
        $('#txtName').addClass("mustFill");
        $('#txtName').focus();
        return false;
    }

    if ($('#txtUsername').val() == "") {
        $('#txtUsername').addClass("mustFill");
        $('#txtUsername').focus();
        return false;
    }

    if ($('#txtPassword').val() == "") {
        $('#txtPassword').addClass("mustFill");
        $('#txtPassword').focus();
        return false;
    }

    if ($('#txtConfirmPassword').val() == "") {
        $('#txtConfirmPassword').addClass("mustFill");
        $('#txtConfirmPassword').focus();
        return false;
    }
    if ($('#txtPassword').val() != $('#txtConfirmPassword').val())
    {
        //alert("Password and Confirm Password do not match");
        Openmodal_message("Error", "Password and Confirm Password do not match");
        return false;
    }

    if ($('#txtEmail').val() == "") {
        $('#txtEmail').addClass("mustFill");
        $('#txtEmail').focus();
        return false;
    }

    if ($('#txtPhone1').val() == "") {
        $('#txtPhone1').addClass("mustFill");
        $('#txtPhone1').focus();
        return false;
    }

    return true;
}
function validateAddMoreInventorySupplier()
{
    $(".form-control").removeClass("mustFill");

    if ($("#ContentPlaceHolder1_ddlStockType option:selected").text() == "-Select-") {
        $("#ContentPlaceHolder1_ddlStockType").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlStockType").focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtSupplier').val() == "") {
        $('#ContentPlaceHolder1_txtsupplier').addClass("mustFill");
        $('#ContentPlaceHolder1_txtsupplier').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtItemName').val() == "") {
        $('#ContentPlaceHolder1_txtItemName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtItemName').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtQTYStock').val() == "") {
        $('#ContentPlaceHolder1_txtQTYStock').addClass("mustFill");
        $('#ContentPlaceHolder1_txtQTYStock').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtNewRate').val() == "") {
        $('#ContentPlaceHolder1_txtNewRate').addClass("mustFill");
        $('#ContentPlaceHolder1_txtNewRate').focus();
        return false;
    }
  
    return true;   
}
function validateInventorySupplier()
{
    $(".form-control").removeClass("mustFill");

    var StockType = $("#ContentPlaceHolder1_ddlStockType").val();

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtsuppliername').val() == "") {
        $('#ContentPlaceHolder1_txtsuppliername').addClass("mustFill");
        $('#ContentPlaceHolder1_txtsuppliername').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtContactPerson').val() == "") {
        $('#ContentPlaceHolder1_txtContactPerson').addClass("mustFill");
        $('#ContentPlaceHolder1_txtContactPerson').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtPhoneno').val() == "") {
        $('#ContentPlaceHolder1_txtPhoneno').addClass("mustFill");
        $('#ContentPlaceHolder1_txtPhoneno').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtEmailId').val() == "") {
        $('#ContentPlaceHolder1_txtEmailId').addClass("mustFill");
        $('#ContentPlaceHolder1_txtEmailId').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtAddress').val() == "") {
        $('#ContentPlaceHolder1_txtAddress').addClass("mustFill");
        $('#ContentPlaceHolder1_txtAddress').focus();
        return false;
    }
    return true;   
}
function ValidateOrder() {
     

    //var TabCapType = $("#ContentPlaceHolder1_ddlTabCapType").val();
    //var TabCapSize = $("#ContentPlaceHolder1_ddlPackTypeSize").val();
    //var PackType = $("#ContentPlaceHolder1_ddlPackType").val();
    //var PackSize = $("#ContentPlaceHolder1_ddlPackSize").val();
    var BrandName = $("#ContentPlaceHolder1_txtBrandName").val();
    var MRP = $("#ContentPlaceHolder1_txtMRP").val();
    //var UserName = $("#ContentPlaceHolder1_txtUserName").val();
    //var Email = $("#ContentPlaceHolder1_txtEmail").val();
    //var Packing = $("#ContentPlaceHolder1_txtPackingRequired").val();
    //var UserOrg = $("#ContentPlaceHolder1_txtUserOrg").val();
    //var Phone = $("#ContentPlaceHolder1_txtUserOrg").val();

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtUserOrg').val() == "") {
        $('#ContentPlaceHolder1_txtUserOrg').addClass("mustFill");
        $('#ContentPlaceHolder1_txtUserOrg').focus();
        return false;
    }

    if ($("#ContentPlaceHolder1_ddlPackingMaterial option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlPackingMaterial").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlPackingMaterial").focus();
        return false;
    }
    if ($("#ContentPlaceHolder1_ddlpaymenttype option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlpaymenttype").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlpaymenttype").focus();
        return false;
    }
    var payment_type = $('#ContentPlaceHolder1_ddlpaymenttype').val();
    if(payment_type!=null && payment_type!=undefined)
    {
    if(payment_type=="AKASH JI" || payment_type=="NITIN KUMAR" ||payment_type=="VIPIN PUROHIT")
    {
    if ($('#ContentPlaceHolder1_txtagentrate').val() == "") {
        $('#ContentPlaceHolder1_txtagentrate').addClass("mustFill");
        $('#ContentPlaceHolder1_txtagentrate').focus();
       return false;
    }
    }
    }

    if ($("#ContentPlaceHolder1_ddlgovtorder option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlgovtorder").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlgovtorder").focus();
        return false;
    }
    //if ($("#ContentPlaceHolder1_ddlorderby option:selected").text() == "Select") {
    //    $("#ContentPlaceHolder1_ddlorderby").addClass("mustFill");
    //    $("#ContentPlaceHolder1_ddlorderby").focus();
    //    return false;
    //}
   
    if ($("#ContentPlaceHolder1_ddlProductType option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlProductType").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlProductType").focus();
        return false;
    
    }

    if ($('#ContentPlaceHolder1_txtBrandName').val() == "") {
        $('#ContentPlaceHolder1_txtBrandName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBrandName').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtComposition').val() == "") {
        $('#ContentPlaceHolder1_txtComposition').addClass("mustFill");
        $('#ContentPlaceHolder1_txtComposition').focus();
        return false;
    }

    //if ($("#ContentPlaceHolder1_ddlOrderType option:selected").text() == "") {
    //    $("#ContentPlaceHolder1_ddlOrderType").addClass("mustFill");
    //    $("#ContentPlaceHolder1_ddlOrderType").focus();
    //    return false;
    //}

    //if ($("#ContentPlaceHolder1_ddlTabCapType option:selected").text() == "Select") {
    //    $("#ContentPlaceHolder1_ddlTabCapType").addClass("mustFill");
    //    $("#ContentPlaceHolder1_ddlTabCapType").focus();
    //    return false;
    //}

    //if ($("#ContentPlaceHolder1_ddlPackTypeSize option:selected").text() == "Select") {
    //    $("#ContentPlaceHolder1_ddlPackTypeSize").addClass("mustFill");
    //    $("#ContentPlaceHolder1_ddlPackTypeSize").focus();
    //    return false;
    //}

    //if ($("#ContentPlaceHolder1_ddlPackType option:selected").text() == "Select") {
    //    $("#ContentPlaceHolder1_ddlPackType").addClass("mustFill");
    //    $("#ContentPlaceHolder1_ddlPackType").focus();
    //    return false;
    //}

    //if ($("#ContentPlaceHolder1_ddlPackSize option:selected").text() == "Select") {
    //    $("#ContentPlaceHolder1_ddlPackSize").addClass("mustFill");
    //    $("#ContentPlaceHolder1_ddlPackSize").focus();
    //    return false;
    //}
    
    if ($('#ContentPlaceHolder1_txtQuantity').val() == "" || $('#ContentPlaceHolder1_txtQuantity').val() == "0") {
        $('#ContentPlaceHolder1_txtQuantity').addClass("mustFill");
        $('#ContentPlaceHolder1_txtQuantity').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtMRP').prop('readonly') == true) { // add by vipin
        //there not apply validation 
        $('#ContentPlaceHolder1_txtMRP').val("0");
    }
    else {
        if ($('#ContentPlaceHolder1_txtMRP').val() == "") {
            $('#ContentPlaceHolder1_txtMRP').addClass("mustFill");
            $('#ContentPlaceHolder1_txtMRP').focus();
            return false;
        }
    }
   
   
    

    //if ($('#ContentPlaceHolder1_txtEmail').val() == "") {
    //    $('#ContentPlaceHolder1_txtEmail').addClass("mustFill");
    //    $('#ContentPlaceHolder1_txtEmail').focus();
    //    return false;
    //}

    //if ($('#ContentPlaceHolder1_txtPackingRequired').val() == "") {
    //    $('#ContentPlaceHolder1_txtPackingRequired').addClass("mustFill");
    //    $('#ContentPlaceHolder1_txtPackingRequired').focus();
    //    return false;
    //}

    //if ($('#ContentPlaceHolder1_txtUserOrg').val() == "") {
    //    $('#ContentPlaceHolder1_txtUserOrg').addClass("mustFill");
    //    $('#ContentPlaceHolder1_txtUserOrg').focus();
    //    return false;
    //}

    //if ($('#ContentPlaceHolder1_txtPhone').val() == "") {
    //    $('#ContentPlaceHolder1_txtPhone').addClass("mustFill");
    //    $('#ContentPlaceHolder1_txtPhone').focus();
    //    return false;
    //}
    var pcksze=$('#ContentPlaceHolder1_txtPackSize').val().toLowerCase();
    if (pcksze!='10x10' && pcksze!='10*10')
        {
            if(confirm("Pack size is not 10x10, Please check MRP carefully ! Are you want to proceed ?" )){
                return true;
            }
            else{
                return false;
            }
        }
    return true;
}

function rValidateOrder()
{
     if ($("#ContentPlaceHolder1_repddlpaymenttype option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_repddlpaymenttype").addClass("mustFill");
        $("#ContentPlaceHolder1_repddlpaymenttype").focus();
        return false;
    }

    var rpayment_type = $('#ContentPlaceHolder1_repddlpaymenttype').val();
    if(rpayment_type!=null && rpayment_type!=undefined)
    {
    if(rpayment_type=="AKASH JI" || rpayment_type=="NITIN KUMAR" || rpayment_type=="VIPIN PUROHIT")
    {
    if ($('#ContentPlaceHolder1_rtxtagentrate').val() == "") {
        $('#ContentPlaceHolder1_rtxtagentrate').addClass("mustFill");
        $('#ContentPlaceHolder1_rtxtagentrate').focus();
       return false;
    }
    }
    }

    if ($("#ContentPlaceHolder1_ddlgovtorder2 option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlgovtorder2").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlgovtorder2").focus();
        return false;
    }
    //if ($("#ContentPlaceHolder1_repddlorderby option:selected").text() == "Select") {
    //    $("#ContentPlaceHolder1_repddlorderby").addClass("mustFill");
    //    $("#ContentPlaceHolder1_repddlorderby").focus();
    //    return false;
    //}


var pcksze=$('#ContentPlaceHolder1_lblPackSize').text().toLowerCase();
if (pcksze!='10x10' && pcksze!='10*10')
    {
        if(confirm("Pack size is not 10x10, Please check MRP carefully ! Are you want to proceed ?" )){
            return true;
        }
        else{
            return false;
        }
    }
  
return true;
}

function ValidatePrintOrder() {
    if ($('#ContentPlaceHolder1_txtCustomerName').val() == "" && $('#ContentPlaceHolder1_txtBrand').val() == "") {
        $('#ContentPlaceHolder1_txtCustomerName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtCustomerName').focus();
        $('#ContentPlaceHolder1_txtBrand').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBrand').focus();
        //alert("Please Search your order by Brand Name or Customer Name");
        Openmodal_message("Error", "Please Search your order by Brand Name or Customer Name");
        return false;
    }
    return true;
}

function ValidateProductMaster() {

    if ($('#ContentPlaceHolder1_txtSaltComposition').val() == "") {
        $('#ContentPlaceHolder1_txtSaltComposition').addClass("mustFill");
        $('#ContentPlaceHolder1_txtSaltComposition').focus();
        return false;
    }

    if ($("#ContentPlaceHolder1_ddlTabCapType option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlTabCapType").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlTabCapType").focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtPckSize').val() == "") {
        $('#ContentPlaceHolder1_txtPckSize').addClass("mustFill");
        $('#ContentPlaceHolder1_txtPckSize').focus();
        return false;
    }

    if ($("#ContentPlaceHolder1_ddlCompany option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlCompany").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlCompany").focus();
        return false;
    }


    return true;
}

function validateApproval() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtBrandName').val() == "") {
        $('#ContentPlaceHolder1_txtBrandName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBrandName').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtComposition').val() == "") {
        $('#ContentPlaceHolder1_txtComposition').addClass("mustFill");
        $('#ContentPlaceHolder1_txtComposition').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtUserOrg').val() == "") {
        $('#ContentPlaceHolder1_txtUserOrg').addClass("mustFill");
        $('#ContentPlaceHolder1_txtUserOrg').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtCustomerrName').val() == "") {
        $('#ContentPlaceHolder1_txtCustomerrName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtCustomerrName').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtPhone').val() == "") {
        $('#ContentPlaceHolder1_txtPhone').addClass("mustFill");
        $('#ContentPlaceHolder1_txtPhone').focus();
        return false;
    }

    return true;
}

function validateInvoice() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtUserOrg').val() == "") {
        $('#ContentPlaceHolder1_txtUserOrg').addClass("mustFill");
        $('#ContentPlaceHolder1_txtUserOrg').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtBrandName').val() == "") {
        $('#ContentPlaceHolder1_txtBrandName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBrandName').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtBilledQuantity').val() == "") {
        $('#ContentPlaceHolder1_txtBilledQuantity').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBilledQuantity').focus();
        return false;
    }

    return true;

}

function ValidateGRNEntry() {


    if ($('#ContentPlaceHolder1_txtBillNo').val() == "") {
        $('#ContentPlaceHolder1_txtBillNo').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBillNo').focus();
        return false;
    }

    if ($('.validation').val() == "") {
        $('#ContentPlaceHolder1_txtBatchNo').addClass("mustFill");
        //alert('Please fill the highlighted field');
        Openmodal_message("Error", "Please fill the highlighted field");
        return false;
    }

    return true;
}

function ValidateQCEntry() {
    $(".form-control").removeClass("mustFill");
    if ($('#ContentPlaceHolder1_txtARNo').val() == "") {
        $('#ContentPlaceHolder1_txtARNo').addClass("mustFill");
        $('#ContentPlaceHolder1_txtARNo').focus();
        return false;
    }
    return true;
}

function ValidatePurchaseOrderAdd() {

    var ExciseDuty = $("#ContentPlaceHolder1_ddlExciseDuty").val();
    var SalesTax = $("#ContentPlaceHolder1_ddlSalesTax").val();
    var GST = $("#ContentPlaceHolder1_ddlgst").val();

    $(".form-control").removeClass("mustFill");

    if ($("#ContentPlaceHolder1_ddlCompany option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlCompany").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlCompany").focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtItemName').val() == "") {
        $('#ContentPlaceHolder1_txtItemName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtItemName').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtItemMake').val() == "") {
        $('#ContentPlaceHolder1_txtItemMake').addClass("mustFill");
        $('#ContentPlaceHolder1_txtItemMake').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtNewRate').val() == "") {
        $('#ContentPlaceHolder1_txtNewRate').addClass("mustFill");
        $('#ContentPlaceHolder1_txtNewRate').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtQuantity').val() == "") {
        $('#ContentPlaceHolder1_txtQuantity').addClass("mustFill");
        $('#ContentPlaceHolder1_txtQuantity').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtQuantity').val() == "0") {
        $('#ContentPlaceHolder1_txtQuantity').addClass("mustFill");
        $('#ContentPlaceHolder1_txtQuantity').focus();
        return false;
    }

    //if ($("#ContentPlaceHolder1_ddlSalesTax option:selected").text() == "Select") {
    //    $("#ContentPlaceHolder1_ddlSalesTax").addClass("mustFill");
    //    $("#ContentPlaceHolder1_ddlSalesTax").focus();
    //    return false;
    //}

    if ($("#ContentPlaceHolder1_ddlgst option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlgst").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlgst").focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtBrandName').val() == "") {
        $('#ContentPlaceHolder1_txtBrandName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBrandName').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtBoxSize').val() == "") {
        $('#ContentPlaceHolder1_txtBoxSize').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBoxSize').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtRatePack').val() == "") {
        $('#ContentPlaceHolder1_txtRatePack').addClass("mustFill");
        $('#ContentPlaceHolder1_txtRatePack').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtQtyRequire').val() == "") {
        $('#ContentPlaceHolder1_txtQtyRequiree').addClass("mustFill");
        $('#ContentPlaceHolder1_txtQtyRequire').focus();
        return false;
    }

    return true;
}

function ValidatePurchaseOrderSubmit() {
    $(".form-control").removeClass("mustFill");

    var StockType = $("#ContentPlaceHolder1_ddlStockType").val();

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtSupplier').val() == "") {
        $('#ContentPlaceHolder1_txtSupplier').addClass("mustFill");
        $('#ContentPlaceHolder1_txtSupplier').focus();
        return false;
    }
    return true;
}

function ValidateSalesBillTin() {
    $(".form-control").removeClass("mustFill");

    var CGST = $("#ContentPlaceHolder1_ddlcgst").val();
    var SGST = $("#ContentPlaceHolder1_ddlsgst").val();
    var IGST = $("#ContentPlaceHolder1_ddlIgst").val();

    if ($('#ContentPlaceHolder1_txtBuyerTin').val() == "") {
        $('#ContentPlaceHolder1_txtBuyerTin').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBuyerTin').focus();
        //alert('Buyer VAT TIN Can not be empty');
        Openmodal_message("Error", "Buyer VAT TIN Can not be empty");
        return false;
    }

    if (CGST == "Select" && SGST == "Select" && IGST == "Select") {
        //alert('PLEASE SELECT EITHER I-GST OR C-GST/S-GST');
        Openmodal_message("Error", "PLEASE SELECT EITHER I-GST OR C-GST/S-GST");
        $('#ContentPlaceHolder1_ddlcgst').addClass("mustFill");
        $('#ContentPlaceHolder1_ddlcgst').focus();
        $('#ContentPlaceHolder1_ddlsgst').addClass("mustFill");
        $('#ContentPlaceHolder1_ddlsgst').focus();
        $('#ContentPlaceHolder1_ddlIgst').addClass("mustFill");
        $('#ContentPlaceHolder1_ddlIgst').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtBuyerTin').val() == "") {
        $('#ContentPlaceHolder1_txtBuyerTin').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBuyerTin').focus();
        //alert('Buyer VAT TIN Can not be empty');
        Openmodal_message("Error", "Buyer VAT TIN Can not be empty");
        return false;
    }
     return true;
}

function validateUpdateMaster() {

    $(".form-control").removeClass("mustFill");

    if ($("#ContentPlaceHolder1_ddlProductType option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlProductType").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlProductType").focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtComposition').val() == "") {
        $('#ContentPlaceHolder1_txtComposition').addClass("mustFill");
        $('#ContentPlaceHolder1_txtComposition').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtCompositionSyp').val() == "") {
        $('#ContentPlaceHolder1_txtCompositionSyp').addClass("mustFill");
        $('#ContentPlaceHolder1_txtCompositionSyp').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtCompositionDsyp').val() == "") {
        $('#ContentPlaceHolder1_txtCompositionDsyp').addClass("mustFill");
        $('#ContentPlaceHolder1_txtCompositionDsyp').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtCompositionSchet').val() == "") {
        $('#ContentPlaceHolder1_txtCompositionSchet').addClass("mustFill");
        $('#ContentPlaceHolder1_txtCompositionSchet').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtCompositionInj').val() == "") {
        $('#ContentPlaceHolder1_txtCompositionInj').addClass("mustFill");
        $('#ContentPlaceHolder1_txtCompositionInj').focus();
        return false;
    }

    return true;
}

function validateCreatePM() {
    var tab = $("#ContentPlaceHolder1_ddlTablet").val();
    var cap = $("#ContentPlaceHolder1_ddlCapsule").val();
    var syp = $("#ContentPlaceHolder1_ddlSyrup").val();
    var dsyp = $("#ContentPlaceHolder1_ddldrySyrup").val();
    var sachet = $("#ContentPlaceHolder1_ddlSachet").val();
    var ointment = $("#ContentPlaceHolder1_ddlointment").val();

    $(".form-control").removeClass("mustFill");

    if ($("#ContentPlaceHolder1_ddlMaterialType option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlMaterialType").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlMaterialType").focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtItemSize').val() == "") {
        $('#ContentPlaceHolder1_txtItemSize').addClass("mustFill");
        $('#ContentPlaceHolder1_txtItemSize').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtrate').val() == "") {
        $('#ContentPlaceHolder1_txtrate').addClass("mustFill");
        $('#ContentPlaceHolder1_txtrate').focus();
        return false;
    }

    if (tab == "-1" && cap == "-1" && syp == "-1" && dsyp == "-1" && sachet == "-1" && ointment == "-1") {
        $('#ContentPlaceHolder1_ddlTablet').addClass("mustFill");
        $('#ContentPlaceHolder1_ddlTablet').focus();
        $('#ContentPlaceHolder1_ddlCapsule').addClass("mustFill");
        $('#ContentPlaceHolder1_ddlCapsule').focus();
        $('#ContentPlaceHolder1_ddlSyrup').addClass("mustFill");
        $('#ContentPlaceHolder1_ddlSyrup').focus();
        $('#ContentPlaceHolder1_ddldrySyrup').addClass("mustFill");
        $('#ContentPlaceHolder1_ddldrySyrup').focus();
        $('#ContentPlaceHolder1_ddlSachet').addClass("mustFill");
        $('#ContentPlaceHolder1_ddlSachet').focus();
        $('#ContentPlaceHolder1_ddlointment').addClass("mustFill");
        $('#ContentPlaceHolder1_ddlointment').focus();
        return false;
    }
    return true;
}

function ValidateProductMasterCreate() {

    $(".form-control").removeClass("mustFill");

    
    if ($("#ContentPlaceHolder1_ddlProductTypeCreate option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlProductTypeCreate").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlProductTypeCreate").focus();
        return false;
    }
    if ($("#ContentPlaceHolder1_ddlPackTypeCreate").is(':enabled')) {
        if ($("#ContentPlaceHolder1_ddlPackTypeCreate option:selected").text() == "Select") {
            $("#ContentPlaceHolder1_ddlPackTypeCreate").addClass("mustFill");
            $("#ContentPlaceHolder1_ddlPackTypeCreate").focus();
            return false;
        }
    }

    if ($("#ContentPlaceHolder1_ddlPackSizeCreate").is(':enabled')) {
        if ($("#ContentPlaceHolder1_ddlPackSizeCreate option:selected").text() == "Select") {
            $("#ContentPlaceHolder1_ddlPackSizeCreate").addClass("mustFill");
            $("#ContentPlaceHolder1_ddlPackSizeCreate").focus();
            return false;
        }
    }
    
    if ($("#ContentPlaceHolder1_ddlCartonSizeCreate").is(':enabled')) {
        if ($("#ContentPlaceHolder1_ddlCartonSizeCreate option:selected").text() == "Select") {
            $("#ContentPlaceHolder1_ddlCartonSizeCreate").addClass("mustFill");
            $("#ContentPlaceHolder1_ddlCartonSizeCreate").focus();
            return false;
        }
    }
    if ($("#ContentPlaceHolder1_ddlLabelSizeCreate").is(':enabled')) {
        if ($("#ContentPlaceHolder1_ddlLabelSizeCreate option:selected").text() == "Select") {
            $("#ContentPlaceHolder1_ddlLabelSizeCreate").addClass("mustFill");
            $("#ContentPlaceHolder1_ddlLabelSizeCreate").focus();
            return false;
        }
    }
    if ($("#ContentPlaceHolder1_ddlTabCapSizeCreate").is(':enabled')) {
        if ($("#ContentPlaceHolder1_ddlTabCapSizeCreate option:selected").text() == "Select") {
            $("#ContentPlaceHolder1_ddlTabCapSizeCreate").addClass("mustFill");
            $("#ContentPlaceHolder1_ddlTabCapSizeCreate").focus();
            return false;
        }
    }
    if ($('#ContentPlaceHolder1_txtcompositionCreate').val() == "") {
        $('#ContentPlaceHolder1_txtcompositionCreate').addClass("mustFill");
        $('#ContentPlaceHolder1_txtcompositionCreate').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtLabelClaimCreate').val() == "") {
        $('#ContentPlaceHolder1_txtLabelClaimCreate').addClass("mustFill");
        $('#ContentPlaceHolder1_txtLabelClaimCreate').focus();
        return false;
    }

    return true;
}

function validateBOMMaster() {
    
    $(".form-control").removeClass("mustFill");

   
    if ($("#ContentPlaceHolder1_ddlProductType option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlProductType").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlProductType").focus();
        return false;
    }
    //-----------------Avdhesh 05-09-2017--------------Start------------------------------------------------------------
    //if ($('#ContentPlaceHolder1_txtComposition').val() == "") {
    //    $('#ContentPlaceHolder1_txtComposition').addClass("mustFill");
    //    $('#ContentPlaceHolder1_txtComposition').focus();
    //    return false;
    //}
    //-----------------Avdhesh 05-09-2017--------------END------------------------------------------------------------

    if ($('#ContentPlaceHolder1_txtBatchSize').val() == "") {
        $('#ContentPlaceHolder1_txtBatchSize').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBatchSize').focus();
        return false;
    }

    


    if ($('#ContentPlaceHolder1_txtAvWeight').val() == "") {
        $('#ContentPlaceHolder1_txtAvWeight').addClass("mustFill");
        $('#ContentPlaceHolder1_txtAvWeight').focus();
        return false;
    }
    

    //if ($('#ContentPlaceHolder1_txtRawmaterial').val() == "") {
    //    $('#ContentPlaceHolder1_txtRawmaterial').addClass("mustFill");
    //    $('#ContentPlaceHolder1_txtRawmaterial').focus();
    //    return false;
    //}
    
    //if ($('#ContentPlaceHolder1_txtStdQty').val() == "") {
    //    $('#ContentPlaceHolder1_txtStdQty').addClass("mustFill");
    //    $('#ContentPlaceHolder1_txtStdQty').focus();
    //    return false;
    //}

    if ($('#ContentPlaceHolder1_txtBatchSizeEdit').val() == "") {
        $('#ContentPlaceHolder1_txtBatchSizeEdit').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBatchSizeEdit').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtAvWeightEdit').val() == "") {
        $('#ContentPlaceHolder1_txtAvWeightEdit').addClass("mustFill");
        $('#ContentPlaceHolder1_txtAvWeightEdit').focus();
        return false;
    }

    if ($("#ContentPlaceHolder1_ddlAvWeightUnit option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlAvWeightUnit").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlAvWeightUnit").focus();
        return false;
    }
    

    return true;
}


function ValidateProductionExecution() {
    $(".form-control").removeClass("mustFill");
    if ($('#ContentPlaceHolder1_txtOutputQty').val() == "" || $('#ContentPlaceHolder1_txtOutputQty').val() == "0" || $('#ContentPlaceHolder1_txtOutputQty').val() == "00") {
        $('#ContentPlaceHolder1_txtOutputQty').addClass("mustFill");
        $('#ContentPlaceHolder1_txtOutputQty').focus();
        return false;
    }
    if ($("#ContentPlaceHolder1_ddlMachine option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlMachine").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlMachine").focus();
        return false;
    }
    return true;
}

function ValidateRepeateOrder() {
    $(".form-control").removeClass("mustFill");
    if ($('#ContentPlaceHolder1_txtBrandNameRep').val() == "") {
        $('#ContentPlaceHolder1_txtBrandNameRep').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBrandNameRep').focus();
        return false;
    }
    return true;
}

function ValidateProductMaster() {
    $(".form-control").removeClass("mustFill");

    if ($("#ContentPlaceHolder1_ddlPackTypeCreate option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlPackTypeCreate").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlPackTypeCreate").focus();
        return false;
    }


    if ($("#ContentPlaceHolder1_ddlPackSizeCreate option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlPackSizeCreate").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlPackSizeCreate").focus();
        return false;
    }


    if ($("#ContentPlaceHolder1_ddlPackSizeCreate option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlPackSizeCreate").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlPackSizeCreate").focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtcompositionCreate').val() == "") {
        $('#ContentPlaceHolder1_txtcompositionCreate').addClass("mustFill");
        $('#ContentPlaceHolder1_txtcompositionCreate').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtLabelClaimCreate').val() == "") {
        $('#ContentPlaceHolder1_txtLabelClaimCreate').addClass("mustFill");
        $('#ContentPlaceHolder1_txtLabelClaimCreate').focus();
        return false;
    }
  
    return true;
}

function ValidateManuallyOrder() {
    $('#ContentPlaceHolder1_txtBrandNamePM').removeAttr("style");
    $('#ContentPlaceHolder1_ddlitem').removeAttr("style");
    $("#ContentPlaceHolder1_HiddenField1_Itemname").val("Select");

    var brandname = $('#ContentPlaceHolder1_txtBrandNamePM').val()

    if (brandname == "" || brandname == undefined || brandname == null) {      
        $('#ContentPlaceHolder1_txtBrandNamePM').css('border-color', 'red');
        $('#ContentPlaceHolder1_txtBrandNamePM').focus();
        return false;
    }

    if ($("#ContentPlaceHolder1_ddlitem option:selected").text() == "Select") {
        $('#ContentPlaceHolder1_ddlitem').css('border-color', 'red');
        $('#ContentPlaceHolder1_ddlitem').focus();
        return false;
    }

    //var selecteditem = $("#ContentPlaceHolder1_ddlitem option:selected").text();
    //$("#ContentPlaceHolder1_HiddenField1_Itemname").val(selecteditem);

    return true;
}

function validatePrintManualInvoice() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtcompanyNamebill').val() == "") {
        $('#ContentPlaceHolder1_txtcompanyNamebill').addClass("mustFill");
        $('#ContentPlaceHolder1_txtcompanyNamebill').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtcompanyNameShip').val() == "") {
        $('#ContentPlaceHolder1_txtcompanyNameShip').addClass("mustFill");
        $('#ContentPlaceHolder1_txtcompanyNameShip').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtcompanyaddressbill').val() == "") {
        $('#ContentPlaceHolder1_txtcompanyaddressbill').addClass("mustFill");
        $('#ContentPlaceHolder1_txtcompanyaddressbill').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtcompanyaddressShip').val() == "") {
        $('#ContentPlaceHolder1_txtcompanyaddressShip').addClass("mustFill");
        $('#ContentPlaceHolder1_txtcompanyaddressShip').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtgstInbill').val() == "") {
        $('#ContentPlaceHolder1_txtgstInbill').addClass("mustFill");
        $('#ContentPlaceHolder1_txtgstInbill').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtgstInShip').val() == "") {
        $('#ContentPlaceHolder1_txtgstInShip').addClass("mustFill");
        $('#ContentPlaceHolder1_txtgstInShip').focus();
        return false;
    }
    return true;
}


function validateCustomerorderSearch() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtBrand').val() == "") {
        $('#ContentPlaceHolder1_txtBrand').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBrand').focus();
        return false;
    }
   
    return true;
}

function validateSalesReport() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtDateFrom').val() == "") {
        $('#ContentPlaceHolder1_txtDateFrom').addClass("mustFill");
        $('#ContentPlaceHolder1_txtDateFrom').focus();
        return false;
    }
    return true;
}

function ValidateBomCalculator() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtQuantity').val() == "") {
        $('#ContentPlaceHolder1_txtQuantity').addClass("mustFill");
        $('#ContentPlaceHolder1_txtQuantity').focus();
        return false;
    }
    return true;
}


function validateRawMaterialUpdate() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtName').val() == "") {
        $('#ContentPlaceHolder1_txtName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtName').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtArNo').val() == "") {
        $('#ContentPlaceHolder1_txtArNo').addClass("mustFill");
        $('#ContentPlaceHolder1_txtArNo').focus();
       // $('#ContentPlaceHolder1_lnkupdate').removeAttr("disabled");
        return false;
    }
    $('#ContentPlaceHolder1_lnkupdate').attr("disabled", "disabled");
    return true;
}

function validateDispatchUpdate() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtTranName').val() == "") {
        $('#ContentPlaceHolder1_txtTranName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtTranName').focus();
        return false;
    }
  /*  if ($('#ContentPlaceHolder1_txtbill_no').val() == "") {
        $('#ContentPlaceHolder1_txtbill_no').addClass("mustFill");
        $('#ContentPlaceHolder1_txtbill_no').focus();
        return false;
    }*/
    if ($('#ContentPlaceHolder1_txtgrno').val() == "") {
        $('#ContentPlaceHolder1_txtgrno').addClass("mustFill");
        $('#ContentPlaceHolder1_txtgrno').focus();
        return false;
    }
    $('#ContentPlaceHolder1_lnkupdate').attr("disabled", "disabled");
    return true;
}


function validateBetaInsert() {

    $(".form-control").removeClass("mustFill");


    if ($("#ContentPlaceHolder1_ddlProdType option:selected").text() == "Select") {
        $('#ContentPlaceHolder1_ddlProdType').css('border-color', 'red');
        $('#ContentPlaceHolder1_ddlProdType').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtsaltName').val() == "") {
        $('#ContentPlaceHolder1_txtsaltName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtsaltName').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtbetaomposition').val() == "") {
        $('#ContentPlaceHolder1_txtbetaomposition').addClass("mustFill");
        $('#ContentPlaceHolder1_txtbetaomposition').focus();
        return false;
    }
    return true;
}

function validateSMSnotificationADD() {

    $(".form-control").removeClass("mustFill");


    if ($("#ContentPlaceHolder1_ddlstatus option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlstatus").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlstatus").focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtNotificationmessage').val() == "") {
        $('#ContentPlaceHolder1_txtNotificationmessage').addClass("mustFill");
        $('#ContentPlaceHolder1_txtNotificationmessage').focus();
        return false;
    }
    return true;
}
function validateSMSnotificationEdit() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtmessageUpdate').val() == "") {
        $('#ContentPlaceHolder1_txtmessageUpdate').addClass("mustFill");
        $('#ContentPlaceHolder1_txtmessageUpdate').focus();
        return false;
    }
    return true;
}


function ValidatePMInternal() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtItemName').val() == "") {
        $('#ContentPlaceHolder1_txtItemName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtItemName').focus();
        return false;
    }
  
    return true;
}

function ValidateManagePMInternal() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtBatchNo').val() == "") {
        $('#ContentPlaceHolder1_txtBatchNo').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBatchNo').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtManufacturing').val() == "") {
        $('#ContentPlaceHolder1_txtManufacturing').addClass("mustFill");
        $('#ContentPlaceHolder1_txtManufacturing').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtExpiry').val() == "") {
        $('#ContentPlaceHolder1_txtExpiry').addClass("mustFill");
        $('#ContentPlaceHolder1_txtExpiry').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtReceivedQty').val() == "") {
        $('#ContentPlaceHolder1_txtReceivedQty').addClass("mustFill");
        $('#ContentPlaceHolder1_txtReceivedQty').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtBillNo').val() == "") {
        $('#ContentPlaceHolder1_txtBillNo').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBillNo').focus();
        return false;
    }
    return true;
}

function ValidateGenericBatch() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtGenProductionDate').val() == "") {
        $('#ContentPlaceHolder1_txtGenProductionDate').addClass("mustFill");
        $('#ContentPlaceHolder1_txtGenProductionDate').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtGenericMfg').val() == "") {
        $('#ContentPlaceHolder1_txtGenericMfg').addClass("mustFill");
        $('#ContentPlaceHolder1_txtGenericMfg').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtGenBatchSize').val() == "") {
        $('#ContentPlaceHolder1_txtGenBatchSize').addClass("mustFill");
        $('#ContentPlaceHolder1_txtGenBatchSize').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtGenericExp').val() == "") {
        $('#ContentPlaceHolder1_txtGenericExp').addClass("mustFill");
        $('#ContentPlaceHolder1_txtGenericExp').focus();
        return false;
    }



    if ($('#ContentPlaceHolder1_txtGenericOutput').val() == "") {
        $('#ContentPlaceHolder1_txtGenericOutput').addClass("mustFill");
        $('#ContentPlaceHolder1_txtGenericOutput').focus();
        return false;
    }

    if ($("#ContentPlaceHolder1_ddlGenerciMachine option:selected").text() == "Select") {
        $("#ContentPlaceHolder1_ddlGenerciMachine").addClass("mustFill");
        $("#ContentPlaceHolder1_ddlGenerciMachine").focus();
        return false;
    }
    return true;
}


function ValidateClient() {
    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtClientOrgName').val() == "") {
        $('#ContentPlaceHolder1_txtClientOrgName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtClientOrgName').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtClientGST').val() == "") {
        $('#ContentPlaceHolder1_txtClientGST').addClass("mustFill");
        $('#ContentPlaceHolder1_txtClientGST').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtClientContact1').val() == "") {
        $('#ContentPlaceHolder1_txtClientContact1').addClass("mustFill");
        $('#ContentPlaceHolder1_txtClientContact1').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtClientPhone1').val() == "") {
        $('#ContentPlaceHolder1_txtClientPhone1').addClass("mustFill");
        $('#ContentPlaceHolder1_txtClientPhone1').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtClientEmail1').val() == "") {
        $('#ContentPlaceHolder1_txtClientEmail1').addClass("mustFill");
        $('#ContentPlaceHolder1_txtClientEmail1').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtClientPan').val() == "") {
        $('#ContentPlaceHolder1_txtClientPan').addClass("mustFill");
        $('#ContentPlaceHolder1_txtClientPan').focus();
        return false;
    }
   
    if ($('#ContentPlaceHolder1_txtClientBilling1').val() == "") {
        $('#ContentPlaceHolder1_txtClientBilling1').addClass("mustFill");
        $('#ContentPlaceHolder1_txtClientBilling1').focus();
        return false;
    }
    return true;
}

function validateCustomer() {
    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtOrgName').val() == "") {
        $('#ContentPlaceHolder1_txtOrgName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtOrgName').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtEmail').val() == "") {
        $('#ContentPlaceHolder1_txtEmail').addClass("mustFill");
        $('#ContentPlaceHolder1_txtEmail').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtName').val() == "") {
        $('#ContentPlaceHolder1_txtName').addClass("mustFill");
        $('#ContentPlaceHolder1_txtName').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtPhone1').val() == "") {
        $('#ContentPlaceHolder1_txtPhone1').addClass("mustFill");
        $('#ContentPlaceHolder1_txtPhone1').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtPANnumber').val() == "") {
        $('#ContentPlaceHolder1_txtPANnumber').addClass("mustFill");
        $('#ContentPlaceHolder1_txtPANnumber').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtCSTnumber').val() == "") {
        $('#ContentPlaceHolder1_txtCSTnumber').addClass("mustFill");
        $('#ContentPlaceHolder1_txtCSTnumber').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtAddress1').val() == "") {
        $('#ContentPlaceHolder1_txtAddress1').addClass("mustFill");
        $('#ContentPlaceHolder1_txtAddress1').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtBillingAddress1').val() == "") {
        $('#ContentPlaceHolder1_txtBillingAddress1').addClass("mustFill");
        $('#ContentPlaceHolder1_txtBillingAddress1').focus();
        return false;
    }
    return true;
}


function ValidateInvoiceTransfer() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_txtProduct').val() == "") {
        $('#ContentPlaceHolder1_txtProduct').addClass("mustFill");
        $('#ContentPlaceHolder1_txtProduct').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtMfg').val() == "") {
        $('#ContentPlaceHolder1_txtMfg').addClass("mustFill");
        $('#ContentPlaceHolder1_txtMfg').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtQtyTransfer').val() == "") {
        $('#ContentPlaceHolder1_txtQtyTransfer').addClass("mustFill");
        $('#ContentPlaceHolder1_txtQtyTransfer').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtExp').val() == "") {
        $('#ContentPlaceHolder1_txtExp').addClass("mustFill");
        $('#ContentPlaceHolder1_txtExp').focus();
        return false;
    }
    if ($('#ContentPlaceHolder1_txtProductionBatch').val() == "") {
        $('#ContentPlaceHolder1_txtProductionBatch').addClass("mustFill");
        $('#ContentPlaceHolder1_txtProductionBatch').focus();
        return false;
    }


    if ($('#ContentPlaceHolder1_txtProductRate').val() == "") {
        $('#ContentPlaceHolder1_txtProductRate').addClass("mustFill");
        $('#ContentPlaceHolder1_txtProductRate').focus();
        return false;
    }

    return true;

}

function validateSMS() {

    $(".form-control").removeClass("mustFill");

    if ($('#ContentPlaceHolder1_ddlsmsRecipent').val().trim() == "Select") {
        $('#ContentPlaceHolder1_ddlsmsRecipent').addClass("mustFill");
        $('#ContentPlaceHolder1_ddlsmsRecipent').focus();
        return false;
    }

    if ($('#ContentPlaceHolder1_txtMessage').val().trim() == "") {
        $('#ContentPlaceHolder1_txtMessage').addClass("mustFill");
        $('#ContentPlaceHolder1_txtMessage').focus();
        return false;
    }

    return true;
}



