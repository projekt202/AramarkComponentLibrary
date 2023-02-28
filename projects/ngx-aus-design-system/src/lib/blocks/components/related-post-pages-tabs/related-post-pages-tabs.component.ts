import { Component, Input, OnInit } from "@angular/core";
import { Image } from "../../../shared/components/image/image.model";
import { BranfolderService } from "../../../shared/services/branfolder/branfolder.service";
import { OneTimeService } from "../../../shared/services/one-time/one-time.service";
import { PlatformService } from "../../../shared/services/platform/platform.service";
import { PostService } from "../../../shared/services/post/post.service";
import { ArticleCard } from "../article-card/article-card.model";
import { BannerBarComponentBackgrounds } from "../banner-bar/banner-bar.model";
import {
  Pages,
  InfoArtOrBlog,
  ArtOrBlog,
  Tabs,
  InputPost,
  TabValues,
  ButtonRelatedPostPagesTabs,
} from "./related-post-pages-tabs.model";

@Component({
  selector: "aus-related-post-pages-tabs",
  templateUrl: "./related-post-pages-tabs.component.html",
  styleUrls: ["./related-post-pages-tabs.component.scss"],
})
export class RelatedPostPagesTabsComponent implements OnInit {
  @Input() background: BannerBarComponentBackgrounds = "gray";
  @Input() articles: InputPost = {
    tab: "Articles",
    header: "Recent Articles",
  };
  @Input() posts: InputPost = {
    tab: "Blog",
    header: "Recent Posts",
  };
  @Input() numPerPage: number = 10;
  @Input() button: ButtonRelatedPostPagesTabs = {
    variant: "red",
    text: "Read More",
  };
  tabs: Tabs = [
    {
      name: "Articles",
      value: "articles",
    },
    {
      name: "Blog",
      value: "posts",
    },
  ];
  currentTab: TabValues = this.tabs[0].value; // 'articles' or 'blog'
  info: ArtOrBlog = {
    articles: {
      page: 1,
      totalCount: 20,
      enGoToLastPage: false,
      disablePagination: true,
      firstLoad: true,
      title: "",
      pages: [],
    },
    posts: {
      page: 1,
      totalCount: 20,
      enGoToLastPage: false,
      disablePagination: true,
      firstLoad: true,
      title: "",
      pages: [],
    },
  };
  rulerLength: number = 2;
  queueToLoad: number[] = [];

  oneTimeKey: string = "RELATED_POST_PAGES_TABS_RVPPC7";

  constructor(
    private postService: PostService,
    private oneTime: OneTimeService,
    private ps: PlatformService,
    private bs: BranfolderService
  ) {}

  ngOnChanges() {
    this.setTitle(this.articles.header, "articles");
    this.setTitle(this.posts.header, "posts");
    this.tabs[0].name = this.articles.tab;
    this.tabs[1].name = this.posts.tab;
  }

  changeTag(idx: number) {
    this.changeTab(this.tabs[idx].value);
  }
  getIdOfPage(page?: number): number {
    page = this.getPageNumber(page);
    return page - 1;
  }
  getAllQueueToLoad() {
    return this.queueToLoad;
  }
  addQueueToLoad(page: number) {
    this.queueToLoad.push(page);
  }
  removeQueueToLoad(page: number) {
    this.queueToLoad = this.queueToLoad.filter(function (e) {
      return e !== page;
    });
  }
  getCurrentTab() {
    return this.currentTab;
  }
  getCurrentTabIdx(): number {
    let currentTab = this.getCurrentTab();
    let currentTabIdx = 0;
    this.tabs.forEach((tabInfo, tabIdx) => {
      if (tabInfo.value === currentTab) {
        currentTabIdx = tabIdx;
      }
    });
    return currentTabIdx;
  }
  getTab(currentTab?: TabValues) {
    if (currentTab === undefined) currentTab = this.currentTab;
    return currentTab;
  }
  getTabInfo(currentTab?: TabValues) {
    currentTab = this.getTab(currentTab);
    return this.info[currentTab];
  }
  setTabInfo(info: InfoArtOrBlog, currentTab?: TabValues) {
    currentTab = this.getTab(currentTab);
    return (this.info[currentTab] = info);
  }
  getCurrentPageNumber(currentTab?: TabValues) {
    return this.getPageNumber(undefined, currentTab);
  }
  getPageNumber(page?: number, currentTab?: TabValues) {
    if (page === undefined) page = this.getTabInfo(currentTab).page;
    return page;
  }
  setPageNumber(page: number) {
    this.getTabInfo().page = page;
  }
  getPageInfo(page?: number, TabValue?: TabValues): Pages {
    let idPage = this.getIdOfPage(page);

    return this.getTabInfo(TabValue).pages[idPage];
  }
  setPageInfo(pageInfo: Pages, page?: number, TabValue?: TabValues): Pages {
    let idPage = this.getIdOfPage(page);

    return (this.getTabInfo(TabValue).pages[idPage] = pageInfo);
  }
  getPageFirstLoad(TabValue?: TabValues) {
    return this.getTabInfo(TabValue).firstLoad;
  }
  setPageFirstLoad(firstLoad: boolean, TabValue?: TabValues) {
    this.getTabInfo(TabValue).firstLoad = firstLoad;
  }
  getTitle(TabValue?: TabValues) {
    return this.getTabInfo(TabValue).title;
  }
  setTitle(title: string, TabValue?: TabValues) {
    this.getTabInfo(TabValue).title = title;
  }
  getPageAfter(page?: number): string | null {
    page = this.getPageNumber(page);

    if (page <= 1) {
      return null;
    }
    try {
      return this.getEndCursor(page - 1);
    } catch (err) {
      return "[CANTLOAD]";
    }
  }
  hasNextPage() {
    return this.getPageInfo().hasNextPage;
  }
  getTotalCount(TabValue?: TabValues) {
    return this.getTabInfo(TabValue).totalCount;
  }
  setTotalCount(totalCount: number, TabValue?: TabValues) {
    this.setEnGoToLastPage(true, TabValue);
    this.getTabInfo(TabValue).totalCount = totalCount;
  }
  getEnGoToLastPage(TabValue?: TabValues): boolean {
    return this.getTabInfo(TabValue).enGoToLastPage;
  }
  setEnGoToLastPage(enGoToLastPage: boolean, TabValue?: TabValues) {
    this.getTabInfo(TabValue).enGoToLastPage = enGoToLastPage;
  }
  getDisablePagination(TabValue?: TabValues) {
    return this.getTabInfo(TabValue).disablePagination;
  }
  setDisablePagination(disablePagination: boolean, TabValue?: TabValues) {
    return (this.getTabInfo(TabValue).disablePagination = disablePagination);
  }
  setHasNextPage(hasNextPage: boolean, page?: number, TabValue?: TabValues) {
    this.getTabInfo(TabValue).pages[this.getIdPage()].hasNextPage = hasNextPage;
  }
  hasPreviousPage() {
    return this.getPageInfo().hasPreviousPage;
  }
  setHasPreviousPage(hasPreviousPage: boolean) {
    this.getPageInfo().hasPreviousPage = hasPreviousPage;
  }
  getStartCursor() {
    return this.getPageInfo().startCursor;
  }
  setStartCursor(startCursor: string) {
    this.getPageInfo().startCursor = startCursor;
  }
  getEndCursor(page?: number) {
    return this.getPageInfo(page).endCursor;
  }
  setEndCursor(endCursor: string, page?: number, TabValue?: TabValues) {
    this.getPageInfo(page, TabValue).endCursor = endCursor;
  }
  isLoaded(page?: number, TabValue?: TabValues) {
    return this.getPageInfo(page, TabValue)?.loaded ? true : false;
  }
  setLoaded(loaded: boolean, page?: number, TabValue?: TabValues) {
    this.getPageInfo(page, TabValue).loaded = loaded;
  }
  getIdPage() {
    return this.getIdOfPage(this.getPageNumber());
  }
  disablePaginatorIfThePageIsNotLoaded() {
    let tabShown = this.getCurrentTab();
    if (!this.isLoaded(this.getCurrentPageNumber(tabShown), tabShown)) {
      this.setDisablePagination(true, tabShown);
    }
  }
  changePageTo(page: number) {
    this.setPageNumber(page);
    this.updateRulerLength(page);
    if (this.getPageFirstLoad()) {
      this.loadPage();
      this.setPageFirstLoad(false);
    } else {
      this.disablePaginatorIfThePageIsNotLoaded();
      this.loadPage(page + 1);
    }
  }
  updateRulerLength(page?: number) {
    let totalCount: number = this.getTotalCount();
    if (this.getPageNumber(page) === 1) {
      this.rulerLength = 2;
    } else {
      this.rulerLength = 3;
    }

    if (this.rulerLength > totalCount) {
      this.rulerLength = totalCount;
    }
  }
  changeToNextPage() {
    this.changePageTo(this.getPageNumber() + 1);
  }
  changeToPreviousPage() {
    this.changePageTo(this.getPageNumber() - 1);
  }
  getDefaultPageIfItDoesntExist() {
    return {
      hasPreviousPage: false,
      hasNextPage: false,
      startCursor: "",
      endCursor: "",
      loaded: false,
      alter: null,
      nodes: [],
    };
  }
  addDefaultPageIfItDoesntExist(page?: number, TabValue?: TabValues) {
    if (!this.getPageInfo(page, TabValue)) {
      this.setPageInfo(this.getDefaultPageIfItDoesntExist(), page, TabValue);
    }
  }
  setNode(
    pageInfo: ArticleCard,
    numNode: number,
    page?: number,
    TabValue?: TabValues
  ) {
    this.getPageInfo(page, TabValue).nodes[numNode] = pageInfo;
  }
  changeTab(tab: TabValues) {
    if (this.currentTab !== tab) {
      this.currentTab = tab;
      this.changePageTo(this.getPageNumber());
    }
  }
  postLoadlage() {
    this.addDefaultPageIfItDoesntExist(this.getPageNumber() + 1);
  }
  hasNodes() {
    return this.getPageInfo()?.nodes ? true : false;
  }
  getNodes() {
    return this.getPageInfo().nodes;
  }
  getStylePagination(tabValue: TabValues) {
    if (tabValue !== this.currentTab) {
      return {
        visibility: "hidden",
        overflow: "hidden",
        height: "0",
        position: "absolute",
      };
    }
    return {};
  }
  getOneTimeKeyTab(currentTab?: TabValues) {
    currentTab = this.getTab(currentTab);

    return this.oneTimeKey + "_" + currentTab.toUpperCase();
  }
  getOneTimeKey(pageNumber?: number, currentTab?: TabValues) {
    currentTab = this.getTab(currentTab);
    pageNumber = this.getPageNumber(pageNumber, currentTab);

    return (
      this.oneTimeKey + "_" + currentTab.toUpperCase() + "_PG_" + pageNumber
    );
  }
  loadPage(_pageToLoad?: number, _tabToLoad?: TabValues): boolean | void {
    let tabToLoad: TabValues = this.getTab(_tabToLoad);
    let pageToLoad: number = this.getPageNumber(_pageToLoad, tabToLoad);

    let oneTimeKey = this.getOneTimeKey(pageToLoad, tabToLoad);
    if (this.oneTime.oneTime(oneTimeKey)) {
      let after = this.getPageAfter(pageToLoad);
      if (typeof after === "string" && after.startsWith("[CANTLOAD]")) {
        this.addQueueToLoad(pageToLoad);
        return false;
      }

      let numNodesToLoad = this.numPerPage;
      let loadAllTabs = false;
      if (this.getPageFirstLoad()) {
        numNodesToLoad = this.numPerPage * 2;
        loadAllTabs = true;
      }

      this.postService
        .getPostByPages(numNodesToLoad, tabToLoad, after, loadAllTabs)
        .subscribe((res: any) => {
          for (let tab of this.tabs) {
            if (res.data[tab.value]) {
              let listOfPageNumbers: number[] = [];
              let postType = res.data[tab.value];
              let _pageToLoad = pageToLoad;
              tabToLoad = tab.value;

              let numNodeQuery: string | number;
              let lastPageNumber: number = -1;
              let loadDefaultPage = true;
              let numNode = 0;
              for (numNodeQuery in postType.edges) {
                if (loadDefaultPage) {
                  this.addDefaultPageIfItDoesntExist(_pageToLoad, tabToLoad);
                  listOfPageNumbers[listOfPageNumbers.length] = _pageToLoad;
                  lastPageNumber = _pageToLoad;
                  loadDefaultPage = false;
                }
                let node = postType.edges[numNodeQuery].node;
                numNodeQuery = parseInt(numNodeQuery);
                let image: Image = this.bs.parse(
                  node.excerptArticlesAndPosts?.brandfolderEmbed
                );
                let nodeData: ArticleCard = {
                  variant: "img-right",
                  publishDate: node.date,
                  url: node.feUrl,
                  img: image,
                  title: node.title,
                  text:
                    node.excerptArticlesAndPosts?.writeAnExcerptOptional ?? "",
                  btn: {
                    url: node.feUrl,
                    title: this.button.text,
                    target: "_self",
                    variant: this.button.variant,
                  },
                };
                this.setNode(nodeData, numNode, _pageToLoad, tabToLoad);
                numNode++;

                if (numNode === this.numPerPage) {
                  numNode = 0;
                  _pageToLoad++;
                  loadDefaultPage = true;
                }
              }

              listOfPageNumbers.forEach((pageToLoad: number) => {
                if (pageToLoad === lastPageNumber) {
                  let pageInfo = postType.pageInfo;

                  this.setEndCursor(pageInfo.endCursor, pageToLoad, tabToLoad);
                  if (!pageInfo.hasNextPage) {
                    this.setTotalCount(pageToLoad, tabToLoad);
                  }
                }

                this.setLoaded(true, pageToLoad, tabToLoad);
                this.setDisablePagination(false, tabToLoad);
                let data = this.getPageInfo(pageToLoad, tabToLoad);
                let oneTimeKey = this.getOneTimeKey(pageToLoad, tabToLoad);
                this.oneTime.set(oneTimeKey, data);

                if (this.ps.isServer()) {
                  let getOneTimeKeyTab = this.getOneTimeKeyTab(tabToLoad);
                  this.oneTime.set(
                    getOneTimeKeyTab,
                    this.getTabInfo(tabToLoad)
                  );
                }
              });
            }
          }

          let queueToLoad = this.getAllQueueToLoad();
          queueToLoad.forEach((pageToLoad) => {
            if (this.loadPage(pageToLoad) !== false) {
              this.removeQueueToLoad(pageToLoad);
            }
          });
        });
    } else {
      if (this.getPageFirstLoad()) {
        for (let tab of this.tabs) {
          let getOneTimeKeyTab = this.getOneTimeKeyTab(tab.value);
          let value = this.oneTime.get(getOneTimeKeyTab, false);
          if (value !== false) {
            this.setTabInfo(value, tab.value);
          }
        }

        let oneTimeKey = this.getOneTimeKey(pageToLoad + 1, tabToLoad);
        let data = this.oneTime.get(
          oneTimeKey,
          this.getDefaultPageIfItDoesntExist()
        );
        this.setPageInfo(data, pageToLoad + 1, tabToLoad);
      }
      let data = this.oneTime.get(
        oneTimeKey,
        this.getDefaultPageIfItDoesntExist()
      );
      this.setPageInfo(data, pageToLoad, tabToLoad);

      this.setDisablePagination(false, tabToLoad);
      //this.postLoadlage();
    }
  }

  getCategories() {
    let categorieswithInfo = [];

    for (let tab of this.tabs) {
      if (this.info[tab.value].pages.length > 0) {
        categorieswithInfo.push(tab.name);
      }
    }
    return categorieswithInfo;
  }

  ngOnInit(): void {
    let hasCurrentTabFromHash = false;
    if (this.ps.isBrowser()) {
      let hash = location.hash ?? "";
      if (typeof hash === "string" && hash.startsWith("#tab-")) {
        let currentTab = hash.slice(5);
        for (let tabInfo of this.tabs) {
          if (tabInfo.value === currentTab) {
            hasCurrentTabFromHash = true;
            this.currentTab = tabInfo.value;
            break;
          }
        }
      }
    }

    if (!hasCurrentTabFromHash) {
      for (let tab of this.tabs) {
        this.currentTab = tab.value;
        break;
      }
    }
    this.changePageTo(this.getPageNumber());
  }
}
