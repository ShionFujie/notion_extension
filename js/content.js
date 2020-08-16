chrome.runtime.onMessage.addListener(({ type }) => {
  if (type === TYPE_ADD_NEW_PAGE) addNewPage();
});

function addNewPage() {
    console.debug("trying to add new page")
}