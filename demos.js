document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 20,
    backSpeed: 20,
    startDelay: 1000,
    loop: false,
    loopCount: Infinity,
  
  
  });


  var typed2 = new Typed('#typed2', {
    strings: [
      'Some <i>strings</i> with',
      'Some <strong>HTML</strong>',
      'Chars &times; &copy;'
    ],
    typeSpeed: 0,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });
 
  new Typed('#typed3', {
    strings: [
      'My strings are: <i>strings</i> with',
      'My strings are: <strong>HTML</strong>',
      'My strings are: Chars &times; &copy;'
    ],
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: true,
    loop: true
  });

  new Typed('#typed4', {
    strings: ['Some strings without', 'Some HTML', 'Chars'],
    typeSpeed: 0,
    backSpeed: 0,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true
  });

  new Typed('#typed5', {
    strings: [
      '1 Some <i>strings</i> with',
      '2 Some <strong>HTML</strong>',
      '3 Chars &times; &copy;'
    ],
    typeSpeed: 0,
    backSpeed: 0,
    shuffle: true,
    cursorChar: '_',
    smartBackspace: false,
    loop: true
  });

  new Typed('#typed6', {
    strings: [
      'npm install^1000\n`installing components...` ^1000\n`Fetching from source...`'
    ],
    typeSpeed: 40,
    backSpeed: 0,
    loop: true
  });
});

