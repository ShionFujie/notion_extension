chrome.runtime.onMessage.addListener(({ type }) => {
  if (type === TYPE_ADD_NEW_PAGE) addNewPage();
});

function addNewPage() {
  console.debug("trying to add new page");
  const button = $("div[role='button']:has(div:contains(New page))");
  if (button == null) {
      console.debug("Cannot find button to add new page")
      return
  }
  button.click()
}
