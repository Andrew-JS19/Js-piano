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
            break;
        case "2":
            Keyname = '03';
        break;
        case "3":
            Keyname = '05';
        break;
        case "4":
            Keyname = '06';
        break;
        case "5":
            Keyname = '08';
        break;
        case "6":
            Keyname = '10';
        break;
        case "7":
            Keyname = '12';
        break;
        case "8":
            Keyname = '13';
        break;
        case "9":
            Keyname = '15';
        break;
        case "0":
            Keyname = '17';
        break;
    }
    let filename = `../sound/whitekeys/key${Keyname}.mp3`
    if (handled) {
        event.preventDefault();
      }


    new Audio(filename).play();
  

  }, true);