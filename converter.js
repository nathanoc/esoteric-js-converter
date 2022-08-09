function convert()
{
    let code = document.getElementById("input").value;

    let eso = "";

    /* for (let i = 0; i < Object.keys(SHORTCUT_CHARS).length; i++)
    {
        console.log(Object.keys(SHORTCUT_CHARS)[i]);
        console.log(eval(SHORTCUT_CHARS[Object.keys(SHORTCUT_CHARS)[i]]));
    } */

    for (let i = 0; i < code.length; i++)
    {
        if (i != 0)
        {
            eso += "+";
        }

        if (Object.keys(SHORTCUT_CHARS).includes(code[i]))
        {
            eso += SHORTCUT_CHARS[code[i]];
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

            eso += BEFORE_CODE;
            eso += "(!![]+[])[+!![]]+(!![]+[])[+!![]+!![]+!![]]+(!![]+[])[+![]]+([][+![]]+[])[+![]]+(!![]+[])[+!![]]+([][+![]]+[])[+!![]]+"; // return
            eso += SHORTCUT_CHARS[" "] + "+";
            eso += SHORTCUT_CHARS["'"] + "+";
            for (let j = 0; j < unicodeValue.length; j++)
            {
                // console.log(unicodeValue[j]);
                eso += SHORTCUT_CHARS[unicodeValue[j]];
                if (j != unicodeValue.length - 1)
                {
                    eso += "+";
                }
            }
            eso += "+" + SHORTCUT_CHARS["'"];
            eso += AFTER_CODE;
        }
    }

    if (document.getElementById("evalSource").checked)
    {
        document.getElementById("output").innerHTML = BEFORE_CODE + eso + AFTER_CODE;
    }

    else
    {
        document.getElementById("output").innerHTML = eso;
    }
}