function convert()
{
    let code = document.getElementById("input").value;

    let outputEl = document.getElementById("output");
    outputEl.innerHTML = "";

    // let eso = "";
    // Instead we add directly to the HTML

    /* for (let i = 0; i < Object.keys(SHORTCUT_CHARS).length; i++)
    {
        console.log(Object.keys(SHORTCUT_CHARS)[i]);
        console.log(eval(SHORTCUT_CHARS[Object.keys(SHORTCUT_CHARS)[i]]));
    } */

    if (document.getElementById("evalSource").checked)
    {
        outputEl.innerHTML += BEFORE_CODE;
    }

    for (let i = 0; i < code.length; i++)
    {
        if (i != 0)
        {
            // eso += "+";
            outputEl.innerHTML += "+";
        }

        if (Object.keys(SHORTCUT_CHARS).includes(code[i]))
        {
            // eso += SHORTCUT_CHARS[code[i]];
            outputEl.innerHTML += SHORTCUT_CHARS[code[i]];
        }

        else
        {
            // console.log("ADDING UNICODE CHAR " + code[i]);

            unicodeValue = code.charCodeAt(i).toString(16);
            while (unicodeValue.length < 4)
            {
                unicodeValue = "0" + unicodeValue;
            }
            unicodeValue = "\\u" + unicodeValue;

            // console.log(unicodeValue);
            
            /*
            eso += BEFORE_CODE;
            eso += "(!![]+[])[+!![]]+(!![]+[])[+!![]+!![]+!![]]+(!![]+[])[+![]]+([][+![]]+[])[+![]]+(!![]+[])[+!![]]+([][+![]]+[])[+!![]]+"; // return
            eso += SHORTCUT_CHARS[" "] + "+";
            eso += SHORTCUT_CHARS["'"] + "+";
            */

            outputEl.innerHTML += BEFORE_CODE;
            outputEl.innerHTML += "(!![]+[])[+!![]]+(!![]+[])[+!![]+!![]+!![]]+(!![]+[])[+![]]+([][+![]]+[])[+![]]+(!![]+[])[+!![]]+([][+![]]+[])[+!![]]+";
            outputEl.innerHTML += SHORTCUT_CHARS[" "] + "+";
            outputEl.innerHTML += SHORTCUT_CHARS["'"] + "+";

            for (let j = 0; j < unicodeValue.length; j++)
            {
                // console.log(unicodeValue[j]);

                // eso += SHORTCUT_CHARS[unicodeValue[j]];
                outputEl.innerHTML += SHORTCUT_CHARS[unicodeValue[j]];

                if (j != unicodeValue.length - 1)
                {
                    // eso += "+";
                    outputEl.innerHTML += "+";
                }
            }
            
            /*
            eso += "+" + SHORTCUT_CHARS["'"];
            eso += AFTER_CODE;
            */

            outputEl.innerHTML += "+" + SHORTCUT_CHARS["'"];
            outputEl.innerHTML += AFTER_CODE;
        }
    }

    /*if (document.getElementById("evalSource").checked)
    {
        document.getElementById("output").innerHTML = BEFORE_CODE + eso + AFTER_CODE;
    }

    else
    {
        document.getElementById("output").innerHTML = eso;
    }*/

    if (document.getElementById("evalSource").checked)
    {
        document.getElementById("output").innerHTML += AFTER_CODE;
    }
}