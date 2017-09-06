import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Page } from "tns-core-modules/ui/page";
import { RadListView } from "nativescript-telerik-ui-pro/listview";

var page: Page;
var pageData = new Observable();
var data = new ObservableArray([
  { name: "Bulbasaur", desc: "Grass, Poison" },
  { name: "Ivysaur", desc: "Grass, Poison" },
  { name: "Venusaur", desc: "Grass, Poison" },
  { name: "Charmander", desc: "Fire" },
  { name: "Charmeleon", desc: "Fire" },
  { name: "Charizard", desc: "Fire, Flying" },
  { name: "Squirtle", desc: "Water" },
  { name: "Wartortle", desc: "Water" },
  { name: "Blastoise", desc: "Water" }
]);

export function pageLoaded(args) {
  page = args.object as Page;
  page.bindingContext = pageData;
  pageData.set("data", data);
}

export function refreshList() {
  let listView = <RadListView>page.getViewById("listview");
  setTimeout(() => {
    data.unshift({ name: "Mewtwo", desc: "Psychic" });
    listView.notifyPullToRefreshFinished();
  }, 2000);
}
