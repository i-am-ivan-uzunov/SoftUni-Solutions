function printLoadingBar(percent) {
  function printPercent(perc) {
    if (perc === 100) {
      console.log('100% Complete!');
    } else {
      let percentsLoaded = `${perc}%`;
      return percentsLoaded;
    }
  }

  function printRemaining(perc) {
    let percentage = perc / 10;
    if (perc === 100) {
      console.log('[%%%%%%%%%%]');
    } else {
      let remainingText = '';
      for (let index = 0; index < 12; index++) {
        if (index === 0) {
          remainingText += '[';
        } else if (index === 11) {
          remainingText += ']';
        } else if (index > 0 && index <= percentage) {
          remainingText += '%';
        } else {
          remainingText += '.';
        }
      }
      return remainingText;
    }
  }

  function printStillLoading() {
    console.log('Still loading...');
  }

  if (percent < 100) {
    console.log(`${printPercent(percent)} ${printRemaining(percent)}`);
    printStillLoading(percent);
  } else {
    printPercent(percent);
    printRemaining(percent);
  }
}

