
    $(document).ready(function() {

    
//Binding all delete button

$('.delete').click(
      function(){
        if(confirm("Do you really want to delete this record?")){
        return true;
        } else
        {
        return false;
        }
      }
);



$("input").attr("maxlength", 250);

});

