chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});

const ksl_search = "https://classifieds.ksl.com/search/keyword"

chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(ksl_search)) {
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });

        const nextState = prevState === 'ON' ? 'OFF' : 'ON'

        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });

        console.log("Yay");
    }
});