function getword(info, tab) {
	chrome.tabs.create({url : "https://sccl.santaclaraca.gov/search/?searchtype=X&sortdropdown=t&SORT=D&extended=0&SUBMIT=Search&searchlimits=&searcharg=" + info.selectionText});
}
chrome.contextMenus.create({
	title : "Search Santa Clara library catalog: %s",
	contexts : [ "selection" ],
	onclick : getword,
});