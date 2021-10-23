
function format_urls() {
    var unformatted = document.getElementById('unformatted')
    var formatted = document.getElementById('formatted')

    var unformatted_list = unformatted.value.split(',')
    var formatted_list = []
    
    for (url in unformatted_list) {
        var main_url = unformatted_list[url].split('?')[0]
        
        formatted_list.push(main_url + '?ls=1&app=itunes')
    }
    
    var output = formatted_list.join(',')
    
    formatted.value = output
}

function copy_text() {
    /* Get the text field */
    var copyText = document.getElementById("formatted");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied your text");
  } 