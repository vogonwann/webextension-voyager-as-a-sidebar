browser.menus.create({
  id: "voyager-sidebar",
  title: "Voyager in a sidebar",
  documentUrlPatterns: ["https://vger.app/*"]
});

function reloadSidebar() {
  browser.sidebarAction.setPanel({ panel: "https://vger.app" });
}

browser.menus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "voyager-sidebar") {
    browser.sidebarAction.getPanel({}).then(reloadSidebar)
  }
});

browser.commands.onCommand.addListener(function (command) {
  if (command == "toggle-sidebar") {
    browser.sidebarAction.isOpen({}).then(isOpen => {
      if (isOpen) {
        browser.sidebarAction.close()
      } else {
        browser.sidebarAction.open();
      }
    });

  }
});
