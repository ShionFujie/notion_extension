chrome.runtime.onMessageExternal.addListener((request, _, response) => {
  if (request.type === "action spec") {
    response({
      name: actionSpec.name,
      actions: Object.entries(actionSpec.actions).map(
        ([name, { displayName }]) => {
          return { name, displayName };
        }
      )
    });
  } else if (request.type === "execute action") {
    const action = actionSpec.actions[request.action.name];
    if (action !== undefined) action.f();
  }
});

const actionSpec = {
  name: "Notion",
  actions: {
    [TYPE_ADD_NEW_PAGE]: {
      f: requestAddNewPage
    },
    [TYPE_SCROLL_TO_TOP]: {
      f: requestScrollToTop
    },
    [TYPE_SCROLL_TO_BOTTOM]: {
      f: requestScrollToBottom
    }
  }
};

function requestAddNewPage() {
  sendMessageToActiveTab({ type: TYPE_ADD_NEW_PAGE });
}

function requestScrollToTop() {
  sendMessageToActiveTab({ type: TYPE_SCROLL_TO_TOP });
}

function requestScrollToBottom() { }