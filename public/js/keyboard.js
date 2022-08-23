window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) {
      return; // Should do nothing if the default action has been cancelled
    }
    let returnMessage = `event: keydown press ${event.key}`;
    let handled = true;
    console.log(returnMessage);
    let Keyname = '';

    switch(event.key){
        case undefined:
            handled = false
            break;
        case "1":
            Keyname = '01';
            keydim(Keyname)
            break;
        case "2":
            Keyname = '03';
            keydim(Keyname)
        break;
        case "3":
            Keyname = '05';
            keydim(Keyname)
        break;
        case "4":
            Keyname = '06';
            keydim(Keyname)
        break;
        case "5":
            Keyname = '08';
            keydim(Keyname)
        break;
        case "6":
            Keyname = '10';
            keydim(Keyname)
        break;
        case "7":
            Keyname = '12';
            keydim(Keyname)
        break;
        case "8":
            Keyname = '13';
            keydim(Keyname)
        break;
        case "9":
            Keyname = '15';
            keydim(Keyname)
        break;
        case "0":
            Keyname = '17';
            keydim(Keyname)
        break;
    }
    let filename = `../sound/whitekeys/key${Keyname}.mp3`
    if (handled) {
        event.preventDefault();
      }


    new Audio(filename).play();
  

  }, true);


  function keydim(value){
    const whitePianoKeys = [...document.querySelectorAll(".wk")];
    let pianoKey = whitePianoKeys.find(pianoKey => pianoKey.getAttribute('value') == value)
    dimKey(pianoKey);
  }