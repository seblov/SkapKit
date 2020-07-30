var array = {

  "fly": [
    {
      "reg": "rcn",
      "skap": "stort"
    },
    {
      "reg": "rcx",
      "skap": "stort"
    },
    {
      "reg": "rcy",
      "skap": "stort"
    },
    {
      "reg": "rcz",
      "skap": "stort"
    },
    {
      "reg": "reu",
      "skap": "lite"
    },
    {
      "reg": "rey",
      "skap": "lite"
    },
    {
      "reg": "rjx",
      "skap": "lite"
    },
    {
      "reg": "rnn",
      "skap": "stort"
    },
    {
      "reg": "rno",
      "skap": "stort"
    },
    {
      "reg": "rpa",
      "skap": "stort"
    },
    {
      "reg": "rpe",
      "skap": "stort"
    }
  ]
}

window.onload = ready

//Ikke addEventListener siden jeg er en shitter
function ready() {
    document.getElementById("btn").onclick = getFlightNumber;
}




function getFlightNumber(){

    let input = ""
    input = document.getElementById("input").value.toLowerCase()



    for (var i = 0; i < Object.keys(array.fly).length; i++) {
        if (input == array.fly[i].reg) {
            document.getElementById("output").innerHTML = array.fly[i].reg.toUpperCase().toString() + " - " + array.fly[i].skap.toString()
            break
        } else {
            document.getElementById("output").innerHTML ="Flynummeret finnes ikke"
        }

    }
}
