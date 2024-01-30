
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    const tableId = 'tbl2Fnzky9RSHhUo2';
    const baseId = 'app7Tbr3U7E0AFR1N';
    const url = `https://api.airtable.com/v0/${baseId}/${tableId}`;
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;
        
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        //event.preventDefault()
        if(check){
            const name = document.getElementById('name').value;
            const email = document.getElementById('mail').value;

            let obj = {
                records:[{
                    fields:{
                    Name:name,
                    Mail:email
                  }}]
              }
            
            fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization':'Bearer patATMhUk1UMYcvPL.30711edb79644f253b0ac6966991c5a16103a453c862ddb9ba3bf06904e8be3f'
                },
                body: JSON.stringify(
                  obj
                ),
              })
              .then(response => response.json())
              .then(data => {
                console.log('Suscriptor agregado con éxito:', data);
                // Aquí puedes realizar otras acciones después de la suscripción
              })
              .catch(error => {
                console.error('Error al agregar suscriptor:', error);
              });

        }//end if

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    
    

})(jQuery);