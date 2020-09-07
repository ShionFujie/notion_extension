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
  $("div:contains('New page')").click()
}

function scrollToTop() {
  const scroller = document
    .querySelector("#notion-app")
    .querySelector(".notion-frame")
    .querySelector(".notion-scroller");
  if (scroller == null) {
    console.debug("Cannot find scroller");
    return;
  }
  scroller.scroll({ top: 0, left: 0, behavior: "smooth" });
}
