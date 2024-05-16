// background/background.js
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "blockPage",
    title: "Block Page",
    contexts: ["page"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "blockPage") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  }
});
