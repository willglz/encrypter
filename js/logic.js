function msj(){
    var text = document.getElementById("mytext").value;
    var pattern = new RegExp('^[A-Z]+$', 'i');
    if(text == ""){
        alert("Debes ingresar un texto");
    }else if(!pattern.test(text)){
        alert("Solo se permiten letras y que no tengan acento");
    }else{
        document.getElementById("newtext").value = "";
        document.getElementById("newtext").style = "background-image: none";
        var arr = Array.from(text);
        var arr2 = new Array(arr.length);
        for (var i = 0; i < arr.length; i++) {
            switch(arr[i]){
                case 'a':
                    arr2[i] = 'ai';
                    break;

                case 'e':
                    arr2[i] = 'enter';
                    break;

                case 'i':
                    arr2[i] = 'imes';
                    break;

                case 'o':
                    arr2[i] = 'ober';
                    break;

                case 'u':
                    arr2[i] = 'ufat';
                    break;

                default:
                    arr2[i] = arr[i];
                    break;
            }
            document.getElementById("newtext").value += arr2[i];
        }
        document.getElementById("mytext").value = "";
    }
}

function msj2(){
    var ntext = document.getElementById("mytext").value;
    var pattern = new RegExp('^[A-Z]+$', 'i');
    if (ntext == "") {
        alert("Debes ingresar un texto");
    }else if(!pattern.test(ntext)){
        alert("Solo se permiten letras y que no tengan acento");
    }else{
        document.getElementById("newtext").value = "";
        document.getElementById("newtext").style = "background-image: none";
        var arr = Array.from(ntext);
        var nstr = new Array(5);
        nstr[0] = ntext.replaceAll('ai', 'a',);
        nstr[1] = nstr[0].replaceAll('enter', 'e');
        nstr[2] = nstr[1].replaceAll('imes', 'i');
        nstr[3] = nstr[2].replaceAll('ober', 'o');
        nstr[4] = nstr[3].replaceAll('ufat', 'u');
        document.getElementById("newtext").value = nstr[4];
        document.getElementById("mytext").value = "";
    }
}

function copy(){
    var ntext = document.getElementById("newtext").value;
    if (ntext != "") {
        var element = document.getElementById("newtext");
        element.select();
        navigator.clipboard.writeText(element.value);
    }
}