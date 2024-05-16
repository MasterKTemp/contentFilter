// content/content.js
// List of keywords to block
const blockedKeywords = ["sex", "murder", "murdered", "adult","illegal"];

// Function to check if page content contains blocked keywords
function containsBlockedKeyword() {
  const pageContent = document.body.innerText.toLowerCase();
  console.log("Page content:", pageContent);
  return blockedKeywords.some(keyword => {
    console.log("Checking for keyword:", keyword);
    const keywordFound = pageContent.includes(keyword);
    if (keywordFound) {
      console.log("Blocked keyword found:", keyword);
    }
    return keywordFound;
  });
}
//hello

// Function to apply CSS to hide blocked content
function hideBlockedContent() {
  const blockedElements = document.querySelectorAll(":not(script)");
  blockedElements.forEach(element => {
    blockedKeywords.forEach(keyword => {
      if (element.innerText.toLowerCase().includes(keyword)) {
        console.log("Hiding element containing blocked keyword:", keyword);
        element.style.display = "none";
      }
    });
  });
}

// Check if page content contains blocked keywords and hide blocked content
if (containsBlockedKeyword()) {
  hideBlockedContent();
}
