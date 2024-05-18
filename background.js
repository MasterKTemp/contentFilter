// background/background.js
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "blocked",
    title: "Block Page",
    contexts: ["page"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "blocked") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  }
});
