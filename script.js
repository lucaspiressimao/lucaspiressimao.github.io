function includeHTML() {
    var elements = document.querySelectorAll('[w3-include-html]');
    elements.forEach(function(elmnt) {
        var file = elmnt.getAttribute("w3-include-html");
        if (file) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                        elmnt.removeAttribute("w3-include-html");
                        includeHTML();
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                }
            }
            xhr.open("GET", file, true);
            xhr.send();
        }
    });
}

function switchLanguage(language) {
    if (language === 'en') {
        window.location.href = window.location.href.replace('.html', '-en.html');
    } else if (language === 'pt') {
        window.location.href = window.location.href.replace('-en.html', '.html');
    }
}
