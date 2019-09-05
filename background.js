chrome.browserAction.onClicked.addListener(function (tab) {
  const backgrounds = [
    'basco.jpg',
    'enter-unite.jpg',
    'fuwa-juzo.jpg',
    'ryuuwon.jpg',
    'zamigo-delma.jpg'
  ];

  const backgroundPicker = () => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[randomIndex];
  }

  chrome.tabs.executeScript({
    code: 'document.body.style.background="url(' + "'chrome-extension://falbabdnhhhinhlcolmcfgmldfidlbne/backgrounds/" + backgroundPicker() + "'" + ')  no-repeat center center fixed"',
  });
});
