function mask_date(){
        const n_char = document.getElementById("txtdata").value.length
        if (n_char == 2){
            document.getElementById("txtdata").value = document.getElementById("txtdata").value + "/"
        } else if (n_char == 5){
            document.getElementById("txtdata").value = document.getElementById("txtdata").value + "/"
        }
    }

    function mask_cep(){
        const n_char = document.getElementById("txtcep").value.length
        if (n_char == 5){
            document.getElementById("txtcep").value = document.getElementById("txtcep").value + "-"
        }
    }

    function mask_fone(){
        const n_char = document.getElementById("txtfone").value.length
        if (n_char == 2){
            document.getElementById("txtfone").value = "(" + document.getElementById("txtfone").value + ") "
        } else if (n_char == 9){
            document.getElementById("txtfone").value = document.getElementById("txtfone").value + "-"
        }
    }