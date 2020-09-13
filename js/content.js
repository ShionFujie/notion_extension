chrome.runtime.onMessage.addListener(({ type }) => {
  switch (type) {
    case TYPE_ADD_NEW_PAGE:
      addNewPage();
      break;
    case TYPE_SCROLL_TO_TOP:
      scrollToTop();
      break;
    case TYPE_SCROLL_TO_BOTTOM:
      scrollToBottom();
      break;
  }
});

function addNewPage() {
  $("div[role='button']:has(div:contains('New page'))").click();
}

function scrollToTop() {
  scrollVerticallyTo(0)
}

function scrollToBottom() {
  scrollVerticallyTo(-1)
}

function scrollVerticallyTo(top_) {
  const scroller = document
    .querySelector("#notion-app")
    .querySelector(".notion-frame")
    .querySelector(".notion-scroller");
  if (scroller == null) {
    console.debug("Cannot find scroller");
    return;
  }
  const top = top_ < 0 ? scroller.scrollHeight : top_
  scroller.scroll({ top, left: 0, behavior: "smooth" });
}