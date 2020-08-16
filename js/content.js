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
  const scroller = document.querySelector('#notion-app')
    .querySelector(".notion-frame")
    .querySelector(".notion-scroller");
  if (scroller == null) {
    console.debug("Cannot find scroller");
    return;
  }
  scroller.scroll({top: 0, left:0, behavior: "smooth"})
}
