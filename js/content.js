chrome.runtime.onMessage.addListener(({ type }) => {
  switch (type) {
    case TYPE_ADD_NEW_PAGE:
      addNewPage();
      break;
    case TYPE_SCROLL_TO_TOP:
      scrollToTop();
      break;
  }
});

function addNewPage() {
  console.debug("trying to add new page");
  const button = $("div[role='button']:has(div:contains(New page))");
  if (button == null) {
    console.debug("Cannot find button to add new page");
    return;
  }
  button.click();
}

function scrollToTop() {
    console.debug('trying to scroll')
}
