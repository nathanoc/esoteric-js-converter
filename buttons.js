function runOutput()
{
    eval(document.getElementById("output").innerHTML)
}

function copyOutput()
{
    navigator.clipboard.writeText(document.getElementById("output").innerHTML)
    document.getElementById("copybutton").innerHTML = "Copied."
    setTimeout(function() {
        document.getElementById("copybutton").innerHTML = "Copy"
    }, 1000)
}