
function format_urls() {
    var unformatted = document.getElementById('unformatted')
    var formatted = document.getElementById('formatted')

    var unformatted_lines = unformatted.value.split('\n')
    var formatted_list = []
    for (lines in unformatted_lines) {
        var unformatted_line = unformatted_lines[lines].split(' ')
        for (item in unformatted_line) {
            if (unformatted_line[item].includes('music.apple.com')) {
                var main_url = unformatted_line[item].split('?')[0]
                
                formatted_list.push(main_url + '?ls=1&app=itunes')
            }
        }
    }

    var output = formatted_list.join('\n')
    
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