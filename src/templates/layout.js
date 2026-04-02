import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components"
import { graphql } from 'gatsby'
import SiteHeader from '../components/Layout/Header';
import { Browser, detach, select, Animation, selectAll, closest, Ajax, isUndefined, createElement } from '@syncfusion/ej2-base';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { TreeView, Accordion, Tab } from '@syncfusion/ej2-navigations';
import { navigate } from "gatsby-link";
import StackBlitzSDK from '@stackblitz/sdk';
import Layout from "../components/layout";
import * as toc from '../../left-toc.json';
import { isNullOrUndefined } from "util";

var setInt;
var feedback;
var feedBackDownResponse;
var feedDlgInit = true;
var rTocInit = true;
var searchFields = { groupBy: 'component', value: 'title' };
var isMobile = false;
var uuid = 0;
var today = null;
var isNotIE = true;
var gcseInit = true;

if (typeof window !== 'undefined') {
  isNotIE = !Browser.isIE;
}
// --- Tabs runtime: header filename sync + responsive dropdown on <= 920px (in tab-header) ---
function initDocTabsRuntime(retry = 0) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  function updateActiveTab(tabEl) {
    const container = tabEl.closest('.tab-container');
    if (!container) return;

    const allTabs = container.querySelectorAll('.tab-header .tabs .tab');
    const allPanels = container.querySelectorAll('.tab-contents .tab-content');
    const fileNameSpan = container.querySelector('.tab-file-header .file-name');
    const fileIcon = container.querySelector('.tab-file-header .file-icon');
    const selectEl = container.querySelector('.tab-header .tab-dropdown-wrap select.tab-dropdown');

    // Deactivate all
    allTabs.forEach(t => {
      t.classList.remove('active');
      if (!container.__hasMultipleMarkedActive) {
        t.classList.remove('active-marked');
      }
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });
    allPanels.forEach(p => {
      p.classList.remove('active');
      p.setAttribute('aria-hidden', 'true');
    });

    // Activate selected
    tabEl.classList.add('active');
    tabEl.setAttribute('aria-selected', 'true');
    tabEl.setAttribute('tabindex', '0');

    const targetId = tabEl.getAttribute('data-tab');
    const targetPanel = container.querySelector(`#${CSS.escape(targetId)}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
      targetPanel.setAttribute('aria-hidden', 'false');
    }

    // Update filename from the active tab's data-file
    const fileName = tabEl.getAttribute('data-file') || '';
    if (fileNameSpan) fileNameSpan.textContent = fileName;

    // Sync dropdown to the active tab
    if (selectEl) {
      const tabsArr = Array.from(allTabs);
      const idx = tabsArr.indexOf(tabEl);
      if (idx > -1) selectEl.value = String(idx);
    }
    // Update icon based on language (shell vs others)
    const rawLang = (tabEl.getAttribute('data-lang') || '')
      .toLowerCase()
      .trim();

    // Shell / command-line languages
    const shellLangs = ['sh', 'shell', 'bash', 'cmd', 'powershell'];

    // Decide icon
    const iconClass = shellLangs.includes(rawLang)
      ? 'icon-terminal'
      : 'icon-doc';

    if (fileIcon) {
      fileIcon.className = 'file-icon ' + iconClass;
    }
  }

  function buildDropdownInHeader(container) {
    if (container.querySelector('.tab-header .custom-dropdown')) return;

    const header = container.querySelector('.tab-header');
    const tabs = container.querySelectorAll('.tab-header .tabs .tab');
    if (!header || !tabs.length) return;

    const wrap = document.createElement('div');
    wrap.className = 'tab-dropdown-wrap';

    const dropdown = document.createElement('div');
    dropdown.className = 'custom-dropdown';

    const selected = document.createElement('div');
    selected.className = 'custom-dropdown-selected';
    // Find the first active tab
    const firstActiveTab = Array.from(tabs).find(t => t.classList.contains('active')) || tabs[0];
    selected.textContent = firstActiveTab.textContent.trim();

    const ul = document.createElement('ul');
    ul.className = 'custom-dropdown-options';

    tabs.forEach((tab, idx) => {
      const li = document.createElement('li');
      li.textContent = tab.textContent.trim();
      li.dataset.index = idx;

      // Set active class if tab is active
      if (tab.classList.contains('active')) li.classList.add('active');

      li.addEventListener('click', () => {
        updateActiveTab(tab);
        dropdown.classList.remove('open'); // close dropdown

        // Remove active from all and add to the clicked one
        ul.querySelectorAll('li').forEach(o => o.classList.remove('active'));
        li.classList.add('active');

        selected.textContent = li.textContent;
      });

      ul.appendChild(li);
    });

    selected.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('open'); // toggle arrow rotation
    });

    dropdown.appendChild(selected);
    dropdown.appendChild(ul);
    wrap.appendChild(dropdown);
    header.appendChild(wrap);

    // Close dropdown if clicked outside
    document.addEventListener('click', () => dropdown.classList.remove('open'));
  }

  function wireTabGroup(container) {
    if (container.__tabsWired) return;   // ✅ ADD THIS
    container.__tabsWired = true;
    const tabs = container.querySelectorAll('.tab-header .tabs .tab');
    if (!tabs.length) return;
    const markedActiveTabs = container.querySelectorAll(
      '.tab-header .tabs .tab.active-marked'
    );
    container.__hasMultipleMarkedActive = markedActiveTabs.length > 1;

    // Build dropdown once per group (in header)
    buildDropdownInHeader(container);

    // Track handlers for cleanup
    const handlers = new Map();

    tabs.forEach(tab => {
      const onClick = () => updateActiveTab(tab);
      const onKeyDown = (e) => {
        const key = e.key;
        const tabsArr = Array.from(tabs);
        const idx = tabsArr.indexOf(tab);

        if (key === 'ArrowRight' || key === 'ArrowLeft') {
          e.preventDefault();
          const nextIdx = key === 'ArrowRight'
            ? (idx + 1) % tabsArr.length
            : (idx - 1 + tabsArr.length) % tabsArr.length;
          tabsArr[nextIdx].focus();
          updateActiveTab(tabsArr[nextIdx]);
        } else if (key === 'Home') {
          e.preventDefault();
          tabsArr[0].focus();
          updateActiveTab(tabsArr[0]);
        } else if (key === 'End') {
          e.preventDefault();
          tabsArr[tabsArr.length - 1].focus();
          updateActiveTab(tabsArr[tabsArr.length - 1]);
        } else if (key === 'Enter' || key === ' ') {
          e.preventDefault();
          updateActiveTab(tab);
        }
      };

      tab.addEventListener('click', onClick);
      tab.addEventListener('keydown', onKeyDown);
      handlers.set(tab, { onClick, onKeyDown });
    });

    // Ensure filename & dropdown reflect the active tab initially
    const active = container.querySelector('.tab-header .tabs .tab.active') || tabs[0];
    if (active) updateActiveTab(active);

    container.__tabHandlers = handlers;
  }

  function wireAll() {
    document.querySelectorAll('.tab-container').forEach(wireTabGroup);
  }

  // Run now (DOM already hydrated in Gatsby when componentDidMount fires)
  wireAll();

  // Cleanup for unmount / route change
  window.__cleanupDocTabsRuntime = function () {
    document.querySelectorAll('.tab-container').forEach(container => {
      const handlers = container.__tabHandlers;
      if (handlers) {
        handlers.forEach((h, tab) => {
          tab.removeEventListener('click', h.onClick);
          tab.removeEventListener('keydown', h.onKeyDown);
        });
        delete container.__tabHandlers;
      }
      // Remove any header dropdowns we added
      const wrap = container.querySelector('.tab-header .tab-dropdown-wrap');
      if (wrap && wrap.parentNode) wrap.parentNode.removeChild(wrap);
      // Just in case an older build inserted content dropdowns:
      const old = container.querySelector('.tab-contents .tab-dropdown-wrap');
      if (old && old.parentNode) old.parentNode.removeChild(old);
    });
  };
}

export default class LayoutTemplate extends React.Component {
  treeData;
  indexPageMapper;
  accordionData;
  routerData = [];
  accordionInstance;
  search;
  feedBackDialog;
  path1;
  emailCheckBox;
  temp;
  leftSideBar;
  rightSideBar;
  pathPrefix;
  platformReference;

  constructor() {
    super();
    this.platformReference = React.createRef();

  }
  componentDidMount() {
    this.treeData = toc.treeData;
    this.accordionData = toc.accData;
    this.routerData = toc.routerData;
    this.indexPageMapper = toc.indexPageMapper;
    this.search.dataSource = toc.searchData;
    this.pathPrefix = toc.pathPrefix;
    isMobile = window.matchMedia('(max-width:480px)').matches;
    window.gcseSearch = function () {
      select('#doc-body-cont').classList.add('gcse-search');
      select('#doc-search-result').classList.remove('doc-hide');
      var tocActive = select('.e-toc-active');
      if (tocActive) {
        tocActive.classList.remove('e-toc-active');
      }
      //this.renderToc();
    };
    var indexpath = window.location.origin;
    if (indexpath !== "https://help.boldbi.com") {
      var noindex = document.createElement('meta');
      noindex.setAttribute('name', 'robots');
      noindex.content = 'noindex';
      document.getElementsByTagName('head')[0].appendChild(noindex);
    }
    let path = window.location.pathname.split('/')[1];
    this.platformReference.current.updatePlatform(path);
    this.renderToc();
    this.renderTab();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initDocTabsRuntime();
      });
    });
    createCustomSearch();
    this.expandAccordion(this.expandedNode(this.getPathName()));
    this.setNavContent();
    this.renderBreadCrumb();
    this.selectedToc();
    this.configureHamburger();
    this.configureRightSideBar();
    this.configureMobileSearch();
    helpBotChat();
    sitevisitorLoad();
    // boldDeskLiveChat();
    tabClick();
    zoomOptionForImages();
    copyToClipboard();
    rightSideBarFunctionality();
    select('.doc-toc-search-icon').addEventListener('click', () => {
      let leftTocSearch = select('#auto-complete');
      if (leftTocSearch && leftTocSearch.value && leftTocSearch.ej2_instances) {
        leftTocSearch.ej2_instances[0].renderPopup();
      }
    });
    if (isMobile) {
      select('#md-content').addEventListener('click', this.docClick);
      select('#doc-footer').addEventListener('click', this.docClick);
      select('#doc-search-result').classList.remove('doc-hide');
    }

    if (!window.location.hash.length) {
      document.getElementById('md-content').scrollTop = 0;
    }
    if (isNotIE) {
      feedback = select('#footer-feedback');
      feedBackDownResponse = select('.feedback-down-response');
    }
    this.leftSideBar.mediaQuery = window.matchMedia('(min-width: 765px)');
    this.setHeaderClick();
    this.getUuid();
    setTimeout(() => {
      this.ScrollToc();
      if (window.location.hash) {
        const targetElement = select(window.location.hash);
        if (targetElement) {
          targetElement.click();
        }
      }
      this.removeOverlay();
      this.dispatchResizeEvent();
    }, 300);
  }

  shouldComponentUpdate() {
    return false;
  }

  dispatchResizeEvent() {
    let resizeEvent = window.document.createEvent('UIEvents');
    resizeEvent.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(resizeEvent);
  }

  setNavContent() {
    let prevEle = document.getElementsByClassName('nav-prev-text')[0];
    let nextEle = document.getElementsByClassName('nav-next-text')[0];
    let routerInfo = this.routerData[this.getPathName()];
    let prevCont = !isUndefined(routerInfo.prevPath) ? this.routerData[routerInfo.prevPath].title.join(' / ') : undefined;
    let nextCont = !isUndefined(routerInfo.nextPath) ? this.routerData[routerInfo.nextPath].title.join(' / ') : undefined;
    if (isMobile) {
      prevCont = !isUndefined(prevCont) ? this.getMobileNavContent(prevCont) : undefined;
      nextCont = !isUndefined(nextCont) ? this.getMobileNavContent(nextCont) : undefined;
    }
    if (!isUndefined(routerInfo.prevPath)) {
      select('#prev-link').href = this.pathPrefix + routerInfo.prevPath
      select('#prev-link').target = this.routerData[routerInfo.prevPath].isDemo ? '_blank' : '_self';
    }
    if (!isUndefined(routerInfo.nextPath)) {
      select('#next-link').href = this.pathPrefix + routerInfo.nextPath;
      select('#next-link').target = this.routerData[routerInfo.nextPath].isDemo ? '_blank' : '_self';
    }
    prevEle.innerText = prevCont;
    nextEle.innerText = nextCont;
    prevEle.parentElement.classList[isUndefined(prevCont) ? 'add' : 'remove']('doc-hide');
    nextEle.parentElement.classList[isUndefined(nextCont) ? 'add' : 'remove']('doc-hide');
  }

  getMobileNavContent(content) {
    if (content.indexOf('/') !== -1) {
      content = content.split('/')[1].trim();
    }
    return content;
  }

  nodeSelected(args) {
    this.navToPath(args.nodeData.id);
  }

  navToPath(navPath) {
    if (navPath.split('#').length > 1) {
      let headerPath = navPath.split('#')[1].replace('/', '');
      document.body.setAttribute('headerPathReference', '#' + headerPath)
    }
    if (this.routerData[navPath].isDemo) {
      window.open(`${this.pathPrefix + navPath}`, '_blank')
    } else {
      select('#doc-mobile-right-toc').classList.add('doc-hide');
      navigate(navPath);
    }
  }

  getPathName() {
    return window.location.pathname.replace(this.pathPrefix, '');
  }

  expandedNode(path) {
    let accordionHeader = this.routerData[path].platform;
    let accordionIndex;
    if (accordionHeader) {
      let tData = this.treeData[accordionHeader];
      this.accordionData.some((accordionData, index) => {
        if (accordionData.data === accordionHeader) {
          accordionIndex = index;
          return true;
        } else {
          return false;
        }
      })
      this.preselectTreeView(tData, path)
    }
    return accordionIndex;
  }

  preselectTreeView(data, id) {
    (function findItem(data, id) {
      for (let key in data) {
        let item = data[key];
        if (item.id === id) {
          if (item.child) {
            item.expanded = true;
          }
          return item;
        }
        if (item.child) {
          let subresult = findItem(item.child, id);
          if (subresult) {
            item.expanded = true;
            return subresult;
          }
        }
      }
      return null;
    })(data, id);
  }

  expandAccordion(index) {
    if (!isUndefined(index)) {
      this.accordionInstance.expandItem(true, index);
    }
    this.accordionInstance.animation = { expand: { effect: 'SlideDown', duration: 400, easing: 'linear' }, collapse: { effect: 'SlideUp', duration: 400, easing: 'linear' } };
  }

  renderBreadCrumb() {
    let breadCrumbData = this.routerData[this.getPathName()];
    let firstTitle = breadCrumbData.title[0];
    let secondTitle = breadCrumbData.title[1];
    let breadCrumbElem = document.getElementById('doc-bread-crumb');
    let nextIconHtml = '<span style="padding:0 5px"> ></span> ';
    let breadCrumInnerHtml = `${secondTitle ? `<a class="doc-bread-nav" href="${this.pathPrefix ? `${this.pathPrefix}>` : '/'}${this.indexPageMapper[firstTitle]}/">${firstTitle}</a> ${nextIconHtml}${secondTitle}` : firstTitle}`;
    breadCrumbElem.innerHTML = breadCrumInnerHtml;
  }

  expand(e) {
    let ele = e.element.querySelector('.toc-tree');
    if (e.name === 'expanding' && ele && ele.childElementCount === 0) {
      new TreeView({
        fields: { dataSource: this.treeData[ele.id], id: 'id', text: 'name', child: 'child' },
        nodeSelected: this.nodeSelected.bind(this)
      }, ele);
    }
    // let path=e.element.querySelector('.acc-path').getAttribute("data");
    // this.navToPath(path);
  }

  accClick(e) {
    let accordionItem = closest(e.originalEvent.srcElement, '.e-acrdn-item')
    let isCommon = accordionItem && accordionItem.classList.contains('e-select') ? false : true;
    let path = accordionItem ? accordionItem.querySelector('.acc-path').getAttribute("data") : "";
    let hrefPath = document.body.getAttribute('headerPathReference');
    let tocnodes = document.getElementById('toc');
    if (!isNullOrUndefined(hrefPath)) {
      window.location.href = window.location.href.split('#')[0] + hrefPath;
      document.body.removeAttribute('headerPathReference');
    }
    if (!isNullOrUndefined(document.querySelector('.e-toc-active'))) {
      this.selectedToc();
      if ((!isNullOrUndefined(tocnodes.querySelector("[data='" + e.originalEvent.srcElement.getAttribute("data") + "']"))) || (isNullOrUndefined(e.originalEvent.srcElement.getAttribute("data")) && isNullOrUndefined(tocnodes.querySelector("[data-uid='" + e.originalEvent.srcElement.getAttribute("data") + "']")) && !e.originalEvent.srcElement.classList.contains("e-fullrow") && !e.originalEvent.srcElement.classList.contains('interaction'))) {
        this.navToPath(path);
      }

    }
    if (isCommon) {
      this.navToPath(path);
    }
  }

  selectedToc() {

    let path = this.getPathName();

    if (window.location.hash !== "") {
      path = path + window.location.hash + '/';
    }
    let toc = document.getElementById('toc');
    let selectTree = toc.querySelector(`[data-uid='${path}']`);
    let selectAcrdn = toc.querySelector(`[data='${path}']`);
    if (selectAcrdn) {
      closest(selectAcrdn, '.e-acrdn-item').classList.add('e-toc-active');
      //if((!isNullOrUndefined(tocnodes.querySelector("[data='" + e.originalEvent.srcElement.getAttribute("data") + "']")))||(isNullOrUndefined(e.originalEvent.srcElement.getAttribute("data"))&&isNullOrUndefined(tocnodes.querySelector("[data-uid='" + e.originalEvent.srcElement.getAttribute("data") + "']"))&&!e.originalEvent.srcElement.classList.contains("e-fullrow")&&!e.originalEvent.srcElement.classList.contains('interaction')))
      // {
      this.navToPath(path);
      // }     
    } else if (selectTree) {
      let previousSelection = toc.querySelectorAll('.e-toc-active');
      for (var element of previousSelection) {
        element.classList.remove('e-toc-active')
      }
      selectTree.classList.add('e-toc-active');
      selectTree.querySelector('.e-fullrow').classList.add('e-toc-active');
      selectTree.querySelector('.e-text-content').classList.add('e-toc-active')
    }
  }

  renderToc() {
    this.accordionInstance = new Accordion({
      expandMode: 'Single',
      expanding: this.expand.bind(this),
      clicked: this.accClick.bind(this),
      items: this.accordionData,
      animation: { expand: { effect: 'SlideDown', duration: 0, easing: 'linear' }, collapse: { effect: 'SlideUp', duration: 400, easing: 'linear' } }
    }, '#toc');
  }
  renderTab() {
    var tabs = document.getElementsByClassName('doc-tab');
    for (var i = 0; i < tabs.length; i++) {
      var tab = new Tab({
        selecting: this.tabSelecting.bind(this),
      });
      tab.created = this.onTabcreated.bind([this, tab]);
      tab.appendTo(tabs[i]);
    }
  }

  onTabcreated() {
    let tabHeader = this[1].element;
    let enableStackblitz = this[0].routerData[this[0].getPathName()].platform === 'JavaScript';
    let editorContent = createElement('div', {
      className: 'e-editor-content',
      innerHTML: `<button class="e-btn new-tab e-primary">View Demo</button>${enableStackblitz ?
        '<button class="e-btn e-stack e-primary">Edit in StackBlitz</button>' : ''}`
    });
    if (enableStackblitz) {
      editorContent.querySelector('.e-stack').addEventListener('click', this[0].onStackBlitzClick.bind([this[0], this[1]]));
    }
    editorContent.querySelector('.new-tab').addEventListener('click', this[0].openNewTab.bind([this[0], this[1]]));
    tabHeader.parentElement.insertBefore(editorContent, tabHeader.nextSibling);
  }

  openNewTab() {
    let path = this[1].element.getAttribute("data-sample");
    window.open(`${this[0].pathPrefix + path}`, '_blank')
  }

  getFiles(fname) {
    var respone;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        respone = this.responseText;
      }
    };
    xhttp.open("GET", fname, false);
    xhttp.send();
    return respone;
  }

  onStackBlitzClick() {
    let basePath = this[0].pathPrefix + this[1].element.getAttribute('data-sample');
    let config = JSON.parse(this[0].getFiles(basePath + 'stack.json'));
    let files = {}
    config.stackBlitzFiles.forEach((fname) => {
      files[fname] = this[0].getFiles(basePath + fname);
    });
    let payload = {
      files: files,
      title: config.title,
      description: config.description,
      template: 'javascript',
    }
    StackBlitzSDK.openProject(payload, { newWindow: true });
  }

  tabSelecting(e) {
    if (e.isSwiped) {
      e.cancel = true;
    }
  }

  ESTTimeOffset() {
    var jan = new Date(today.getFullYear(), 0, 1);
    var jul = new Date(today.getFullYear(), 6, 1);
    return (Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset()) <= today.getTimezoneOffset() ? -4 : -5) * 3600000;
  }

  createCookie(cookieName, cookieValue) {
    var d = new Date();
    if (cookieName !== '_pageCount') {
      d.setMonth(d.getMonth() + 24);
      var expires = "expires=" + d.toUTCString();
    }
    document.cookie = cookieName + "=" + cookieValue + "; " + expires + "domain=.syncfusion.com;path=/";
  }

  getCookie(cookieName) {
    var name = cookieName + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ')
        cookie = cookie.substring(1);
      if (cookie.indexOf(name) === 0)
        return cookie.substring(name.length, cookie.length);
    }
    return "";
  }

  getUuid() {
    if (this.getCookie('_uid') !== '') {
      uuid = this.getCookie('_uid');
    } else {
      today = new Date();
      var loadTimeOffset = today.getTimezoneOffset() * 60000;
      var estTimeOffset = this.ESTTimeOffset();
      var timeUTC = today.getTime() + loadTimeOffset;
      var timeEST = new Date(timeUTC + estTimeOffset) / 1;
      uuid = Math.floor(Math.random() * 1000) + 1 + timeEST.toString();
      this.createCookie('_uid', uuid);
    }
  }

  removeOverlay() {
    var docOverlay = select('#doc-overlay');
    if (docOverlay) {
      docOverlay.classList.add('doc-hide');
    }
  }

  docClick() {
    select('#doc-left-sidebar').ej2_instances[0].hide();
    select('#doc-mobile-right-toc').ej2_instances[0].hide();
    select('#doc-mobile-toc').classList.remove('right-toc-active');
    select('#doc-mobile-search').classList.remove('mobile-search-active');
    select('#md-content').classList.remove('mobile-search-enabled');
    select('#doc-mobile-content-search').classList.add('doc-hide');
  }

  setHeaderClick() {
    var headTags = selectAll('h1, h2, h3, h4', select('#md-cnt'));
    for (var head of headTags) {
      head.addEventListener('click', (e) => {
        var ele = select('a', e.srcElement) || select('a', e.srcElement.parentElement);
        ele.click();
      })
    }
  }

  configureHamburger() {
    select('.doc-hamburger-icon').addEventListener('click', () => {
      this.closeRightSideBar();
      this.leftSideBar.toggle();
      this.toggleMobileSearch(false);
    });
  }

  configureRightSideBar() {
    if (!select('.doc-no-right-toc')) {
      select('#doc-mobile-right-toc').classList.remove('doc-hide');
      select('#doc-mobile-toc').addEventListener('click', () => {
        if (rTocInit) {
          select('#doc-mobile-right-toc').classList.remove('doc-no-width');
          rTocInit = false;
        }
        select('#doc-mobile-toc').classList[this.rightSideBar.isOpen ? 'remove' : 'add']('right-toc-active');
        this.leftSideBar.hide();
        this.rightSideBar.toggle();
        this.toggleMobileSearch(false);
      });
    }
  }

  configureMobileSearch() {
    select('#doc-mobile-search').addEventListener('click', () => {
      var mobileSearchIcon = select('#doc-mobile-search');
      mobileSearchIcon.classList.toggle('mobile-search-active');
      this.leftSideBar.hide();
      this.closeRightSideBar();
      this.toggleMobileSearch(mobileSearchIcon.classList.contains('mobile-search-active'));
    });
  }

  toggleMobileSearch(bool) {
    select('#doc-mobile-search').classList[bool ? 'add' : 'remove']('mobile-search-active');
    select('#md-content').classList[bool ? 'add' : 'remove']('mobile-search-enabled');
    if (!select('#doc-body-cont').classList.contains('gcse-search')) {
      select('#doc-mobile-content-search').classList[bool ? 'remove' : 'add']('doc-hide');
    }
  }

  closeRightSideBar() {
    var mobileRightToc = select('.right-toc-active');
    if (mobileRightToc) {
      mobileRightToc.classList.remove('right-toc-active');
    }
    this.rightSideBar.hide();
  }

  searchSelect(e) {
    if (e.item && e.item.id) {
      this.navToPath(e.item.id);
    }
  }

  checkVisibilty(elem, parent) {
    var pageTop = parent.scrollTop;
    var pageBottom = pageTop + parent.offsetHeight;
    var elementTop = elem.offsetTop;
    var elementBottom = elementTop + parseInt(window.getComputedStyle(elem).height);
    return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
  };

  ScrollToc() {
    setTimeout(() => {
      var selectedToc = select(`[data-uid="${this.getPathName()}"]`) ||
        select('#toc .e-acrdn-item.e-active') || select('#toc .e-acrdn-item.e-toc-active');
      if (selectedToc) {
        selectedToc.scrollIntoView();
      }
    }, 0);
  }

  feedBackUp() {
    feedback.classList.add('doc-feedback-up');
    feedback.innerHTML = 'Thank you for your feedback!';
    var animation = new Animation({ duration: 3000, name: 'FadeOut', end: function () { select('#footer-feedback').classList.add('doc-hide') } });
    animation.animate(feedback);
  }

  resetFeedBackDown() {
    var chbxs = selectAll('#checkboxes input', feedBackDownResponse);
    for (var chbx of chbxs) {
      chbx.ej2_instances[0].checked = false;
      var id = chbx.id;
      var tArea = select('#comment' + id, this.feedBackDownResponse);
      tArea.value = '';
      tArea.classList.add('doc-hide');
      select('.error-message.' + id, feedBackDownResponse).classList.add('doc-hide');
    }
    select('.email-input', feedBackDownResponse).value = '';
    this.emailCheckBox.checked = false;
    closest(this.emailCheckBox.element, '.e-checkbox-wrapper').classList.add('doc-hide');
    select('.feed-submit').ej2_instances[0].disabled = true;
  }

  feedBackDown() {
    if (feedDlgInit) {
      closest(this.emailCheckBox.element, '.e-checkbox-wrapper').classList.add('doc-hide');
      select('.email-input').addEventListener('keyup', (e) => {
        closest(this.emailCheckBox.element, '.e-checkbox-wrapper').classList[!e.target.value ? 'add' : 'remove']('doc-hide');
      });
      feedDlgInit = !feedDlgInit
    }
    this.feedBackDialog.show();
  }

  feedBackDownCancel() {
    feedBackDownResponse.classList.add('doc-hide');
    feedback.classList.remove('doc-hide');
    this.resetFeedBackDown();
  }

  feedBackSubmit() {
    if (this.validateFeedBack()) {

      feedBackDownResponse.classList.add('doc-hide');
      select('#feedBackDlg .e-dlg-header-content').classList.add('doc-hide');
      select('#feedBackDlg .e-footer-content').classList.add('doc-hide');
      select('#feedBackDlg').classList.add('feed-thanks');
      select('#feedBackDlg .feedback-up-response').classList.remove('doc-hide');


      var animation = new Animation({
        duration: 2500, name: 'FadeOut', end: function () {
          select('#feedBackDlg').classList.add('doc-hide');
          select('#feedBackDlg').ej2_instances[0].hide();
          select('#footer-feedback').classList.add('doc-hide');
        }
      });
      animation.animate('#feedBackDlg');

      var myIp = '';
      var ipAjax = new Ajax("https://ipinfo.io/json", 'GET', true);
      ipAjax.send().then();
      ipAjax.onSuccess = (data) => {
        myIp = JSON.parse(data).ip;
        var FeedBack = {
          UUID: uuid,
          URL: window.location.href,
          IPAddress: myIp,
          IsFeedbackProvided: 'Yes',
          Email: select('.feedback-down-response .email-input').value,
          Message: this.feedBackMessage(),
          CanContact: this.emailCheckBox.checked,
          Feedback: select('#feedback-down').innerText.trim()
        }

        var ajax = new Ajax("https://websiteapi.syncfusion.com/feedback/doc", "POST", true, "application/json");
        ajax.send(JSON.stringify(FeedBack));
      }
    }
  }

  feedBackMessage() {
    var feedBackMessage = "";
    var chbxs = selectAll('#checkboxes input', feedBackDownResponse);
    var countNumber = 1;
    for (var chbx of chbxs) {
      if (chbx.checked) {
        var label = chbx.ej2_instances[0].label;
        var comment = select('#comment' + chbx.id, this.feedBackDownResponse).value;
        // eslint-disable-next-line
        feedBackMessage += countNumber + ". <b>" + label + "</b><br>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + comment + "<br><br>"
        countNumber++;
      }
    }
    return feedBackMessage;
  }

  validateFeedBack() {
    var validationOk = true;
    var chbxs = selectAll('#checkboxes input', feedBackDownResponse);
    for (var chx of chbxs) {
      var chbx = chx.ej2_instances[0];
      if (chbx.checked) {
        var id = chx.id;
        if (!select('#comment' + id, this.feedBackDownResponse).value) {
          select('.error-message.' + id, feedBackDownResponse).classList.remove('doc-hide');
          validationOk = false;
        }
      }
    }
    return validationOk;
  }

  floatFocus(args) {
    args.target.parentElement.classList.add('e-input-focus');
  }

  floatBlur(args) {
    args.target.parentElement.classList.remove('e-input-focus');
  }

  feedBackCheck(args) {
    var checkbox = args.event.srcElement;
    var id = checkbox.id;
    select('#comment' + id, feedBackDownResponse).classList[checkbox.checked ? 'remove' : 'add']('doc-hide');
    select('.error-message.' + id, feedBackDownResponse).classList.add('doc-hide');
    var checked = false;
    var chbxs = selectAll('#checkboxes input', feedBackDownResponse);
    for (var chbx of chbxs) {
      if (chbx.checked) {
        checked = true;
        break;
      }
    }
    select('.feed-submit').ej2_instances[0].disabled = !checked;
  }

  /* eslint-disable */
  render() {
    const { header } = this.props.pageContext;
    const postNode = this.props.data.postBySlug;
    const canonicalUrl = postNode.frontmatter.canonical ? 'https://help.boldbi.com' + postNode.frontmatter.canonical : '';
    var mdContentClass = "e-view";
    if (!header) {
      mdContentClass += " doc-no-right-toc";
    }
    const currentYear = new Date().getFullYear();
    var metaRobot = { name: 'robots', content: 'follow' }
    return (
      <Layout>
        <div>
          <Helmet>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-SRXJZD7EME"></script>
            <script>
              {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments); }
                        gtag('js', new Date());
                        gtag('config', 'G-SRXJZD7EME');
                       `}
            </script>
            <title>{postNode.frontmatter.title}</title>
            {postNode.frontmatter.canonical ?
              <link rel="canonical" key={canonicalUrl} href={canonicalUrl} data-react-helmet="true" />
              : []}
            <meta name="description" content={postNode.frontmatter.description} />
            <meta name="keywords" content={postNode.frontmatter.keywords} />
            <meta name={metaRobot.name} content={metaRobot.content} />

          </Helmet>
          <div id="doc-body" className={"e-view"}>
            <div hidden id="reports-analytics" data-queue={`Bold BI - Documentation`}></div>
            <HeaderContainer className="e-view">
              <SiteHeader ref={this.platformReference} />
            </HeaderContainer>
            <div id="doc-body-container" className="e-view">
              <SidebarComponent id="doc-left-sidebar" enableGestures={false} width="265px" type="Over" target="#doc-body-container" ref={Sidebar => this.leftSideBar = Sidebar}>
                <LeftPane id="doc-left-pane" className="e-view">
                  <div id="left-pane-search" className="e-view">
                    <AutoCompleteComponent id='auto-complete' ref={t => this.search = t} fields={searchFields} placeholder="Filter by title" select={this.searchSelect.bind(this)} ></AutoCompleteComponent>
                    <div className="doc-toc-search-icon"></div>
                  </div>
                  {/* <BrowserRouter> */}
                  {/* <Switch> */}
                  <div id="doc-left-toc" className="e-view">
                    <div id="toc"></div>
                  </div>
                  {/* </Switch> */}
                  {/* </BrowserRouter> */}
                </LeftPane>
              </SidebarComponent>
              <BodyContainer id="doc-body-cont" className={mdContentClass}>
                <div id="doc-body-header" className="e-view">
                  <div id="doc-bread-crumb"></div>
                  <div id="doc-mobile-toc" className="doc-icons icon-toc"></div>
                  <div id="doc-mobile-search" className="doc-icons icon-search doc-hide"></div>
                  <div className="doc-search-results-header">Search results</div>
                </div>
                <div id="doc-mobile-content-search" className="doc-hide e-view"></div>
                <div className="doc-body-content">
                  <div id="md-content" className="e-view">
                    <div id="md-cnt" dangerouslySetInnerHTML={{ __html: postNode.html }} />
                    {/*isNotIE ?
                      <div id="footer-feedback">
                        <div className="feedback-ques">
                          <div className="feedback-ques-text">Is this page helpful?</div>
                          <div id="feedback-down" className="feedback" onClick={this.feedBackDown.bind(this)}>
                            <div className="feedback-down-icon"></div>
                            <div className="feedback-down-text">No</div>
                          </div>
                          <div id="feedback-up" className="feedback" onClick={this.feedBackUp.bind(this)}>
                            <div className="feedback-up-icon"></div>
                            <div className="feedback-up-text">Yes</div>
                          </div>
                        </div>
                      </div>
                      : <div id="ie"></div>*/}
                    <NavButtons id="nav-buttons">
                      <NavButton id="prev-button">
                        <a id="prev-link"><div className="doc-icons icon-prev_icon nav-prev-icon"></div><div className="nav-prev-text">Previous</div></a>
                      </NavButton>
                      <NavButton id="next-button">
                        <a id="next-link"><div className="doc-icons icon-next_icon nav-next-icon"></div><div className="nav-next-text">Next</div></a>
                      </NavButton>
                    </NavButtons>
                    <div id="doc-footer">
                      <div id="footer-copyright">
                        <a id="copyright" target="_blank" href="https://www.boldbi.com/copyright">Copyright © 2001 - <span id="copyright-year"> {currentYear}</span> Syncfusion Inc. All Rights Reserved</a>
                      </div>
                      <div id="footer-powered_by"></div>
                    </div>
                  </div>
                  <RightToc dangerouslySetInnerHTML={{ __html: header }}></RightToc>
                </div>
                <SidebarComponent id="doc-mobile-right-toc" className="doc-hide doc-no-width" isOpen={false} enableGestures={false} width="260px" type="Over" position="Right" ref={Sidebar => this.rightSideBar = Sidebar}>
                  <RightToc dangerouslySetInnerHTML={{ __html: header }}></RightToc>
                </SidebarComponent>
                <div id="doc-search-result" className="doc-hide"></div>
              </BodyContainer>
            </div>
            <div id="doc-overlay" className="e-view">
              <div className="doc-loading">
                <svg className="circular" height="40" width="40">
                  <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="6" strokeMiterlimit="10"></circle>
                </svg>
              </div>
            </div>
            {isNotIE ?
              <DialogComponent id="feedBackDlg" buttons={[{
                click: () => {
                  this.feedBackSubmit();
                },
                buttonModel: { content: 'SUBMIT', isPrimary: true, cssClass: 'e-primary feed-submit', disabled: true }
              },
              {
                click: () => {
                  this.feedBackDialog.hide();
                },
                buttonModel: { content: 'CANCEL', cssClass: 'e-primary feed-cancel' }
              }]} visible={false} isModal={true} showCloseIcon={true} header='HELP US TO IMPROVE THIS PAGE' width='50%'
                close={this.resetFeedBackDown.bind(this)} ref={dialog => this.feedBackDialog = dialog} target='#doc-body'>
                <div className="feedback-down-response">
                  <div id="checkboxes" className="multiselect">

                    <CheckBoxComponent id="one" label="Correct inaccurate or outdated content" change={this.feedBackCheck.bind(this)} />
                    <br />
                    <textarea id="commentone" className="form-control message doc-hide" rows="3" placeholder="Please specify what content needs correction..."></textarea>
                    <div className="error-message doc-hide one">Please provide additional information</div>
                    <br />

                    <CheckBoxComponent id="two" label="Improve illustrations or images" change={this.feedBackCheck.bind(this)} />
                    <br />
                    <textarea id="commenttwo" className="form-control message doc-hide" rows="3" placeholder="Please specify which images can be improved..."></textarea>
                    <div className="error-message doc-hide two">Please provide additional information</div>
                    <br />

                    <CheckBoxComponent id="three" label="Fix typos or broken links" change={this.feedBackCheck.bind(this)} />
                    <br />
                    <textarea id="commentthree" className="form-control message doc-hide" rows="3" placeholder="Please specify what needs to be fixed..."></textarea>
                    <div className="error-message doc-hide three">Please provide additional information</div>
                    <br />

                    <CheckBoxComponent id="four" label="Add more information" change={this.feedBackCheck.bind(this)} />
                    <br />
                    <textarea id="commentfour" className="form-control message doc-hide" rows="3" placeholder="Please specify what information should be added..."></textarea>
                    <div className="error-message doc-hide four">Please provide additional information</div>
                    <br />

                    <CheckBoxComponent id="five" label="Correct inaccurate or outdated code samples" change={this.feedBackCheck.bind(this)} />
                    <br />
                    <textarea id="commentfive" className="form-control message doc-hide" rows="3" placeholder="Please specify what needs correction..."></textarea>
                    <div className="error-message doc-hide five">Please provide additional information</div>
                    <br />

                    <CheckBoxComponent id="six" label="Other" change={this.feedBackCheck.bind(this)} />
                    <br />
                    <textarea id="commentsix" className="form-control message doc-hide" rows="3" placeholder="Please enter feedback on topics not previously listed..."></textarea>
                    <div className="error-message doc-hide six">Please provide additional information</div>

                  </div>


                  <input className="e-input email-input" onFocus={this.floatFocus} onBlur={this.floatBlur} type="email" placeholder="Email (optional)" />

                  <CheckBoxComponent ref={c => this.emailCheckBox = c} id="emailcheckbox" label='I agree to the creation of a Syncfusion account in my name and to be contacted regarding this message. No further action will be taken. Please see our <a href="https://www.syncfusion.com/privacy" target="_blank"> Privacy policy.</a>' />

                  <div id="email-error-message" className="error-message doc-hide"></div>
                </div>
                <div className="feedback-up-response doc-hide">Thank you for your feedback and comments.We will rectify this as soon as possible!</div>
              </DialogComponent>
              : <div class="ie"></div>}
          </div>
        </div>
      </Layout>
    );
  }
}

function gcseCallback() {
  // if (document.readyState !== 'complete') {
  //   return google.setOnLoadCallback(gcseCallback, true);
  // }
  setInt = setInterval(() => {
    var searchInput = select('#gsc-i-id1');
    if (searchInput) {
      searchInput.placeholder = 'Search';
      var gscSearchButton = select('button.gsc-search-button');
      detach(select('svg', gscSearchButton));
      var docSearchIcon = createElement('div', { id: 'doc-content-search-icon' });
      gscSearchButton.appendChild(docSearchIcon);
      gscSearchButton.addEventListener('click', () => {
        var searchInputEle = select('#doc-content-search input') || select('#doc-mobile-content-search input');
        if (searchInputEle.value && gcseInit) {
          gcseSearch();
        }
      })
      var searchInputEle = select('#doc-content-search input') || select('#doc-mobile-content-search input');
      searchInputEle.addEventListener('keyup', (e) => {
        if (e.keyCode === 13 && e.srcElement.value && gcseInit) {
          gcseSearch();
        }
      });
      clearInterval(setInt);
    }
  }, 100);
};

function createCustomSearch() {

  var searchBoxDiv = select(isMobile ? '#doc-mobile-content-search' : '#doc-content-search');
  var searchResultDiv = select('#doc-search-result');

  searchBoxDiv.innerHTML = '<gcse:searchbox enableAutoComplete="true"></gcse:searchbox>';
  searchResultDiv.innerHTML = '<gcse:searchresults></gcse:searchresults>';
  searchResultDiv.innerHTML += `<div class="search-content-close" id="close-search-content"><span id="close-search"></span></div>`

  // if (isMobile) {
  //   select('#doc-mobile-content-search').innerHTML = select('#doc-content-search').innerHTML;
  //   select('#doc-content-search').innerHTML = '';
  // }
  if (searchBoxDiv.childNodes[0].tagName === 'GCSE:SEARCHBOX' && searchResultDiv.childNodes[0].tagName === 'GCSE:SEARCHRESULTS') {
    window.__gcse = {
      callback: gcseCallback
    };
    (function () {
      var cx = '182ea3577790a69c1';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();
    select('.search-content-close').addEventListener('click', () => {
      select('#doc-body-cont').classList.remove('gcse-search');
      select('#gsc-i-id1').value = '';
    });
  }
}

function zoomOptionForImages() {
  var imageZoom = '<div id="zoom-image-container">' +
    '<div id="zoom-image-center">' +
    '<span id="zoom-image-close">&#10006;</span>' +
    '<img id="zoom-image">' +
    '</div>'
  '</div>';
  document.body.insertAdjacentHTML('beforeend', imageZoom);

  var getImage = document.querySelectorAll("#doc-body-cont img");
  var zoomImageContainer = document.getElementById("zoom-image-container");
  var zoomImage = document.getElementById("zoom-image");
  var zoomImageClose = document.getElementById("zoom-image-close");

  Array.from(getImage).forEach(getImage => {
    getImage.onclick = function () {
      zoomImageContainer.style.display = "block";
      zoomImage.src = this.src;
    }
  });

  zoomImageClose.onclick = function () {
    zoomImageContainer.style.display = "none";
  }
}

function copyToClipboard() {
  const copyButton = '<div class="copy-button">' +
    '<span class="copy-button-tooltip">Copy</span>' +
    '<svg class="copy-button-icon" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">' +
    '<path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path opacity="0.4" d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>' +

    '<svg class="copy-button-icon success" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path opacity="0.4" d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M6.08008 14.9998L8.03008 16.9498L11.9201 13.0498" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>' +
    '</div>';

  document.querySelectorAll("pre").forEach((pre) => {
    pre.insertAdjacentHTML("beforebegin", copyButton);
  });
  document.addEventListener("click", (event) => {
    const copyButton = event.target.closest(".copy-button");
    if (!copyButton || copyButton.dataset.locked) return;
    const codeContainer = copyButton.nextElementSibling;
    if (!codeContainer) return;
    copyButton.dataset.locked = "true";
    const textToCopy = codeContainer.innerText;
    const tooltip = copyButton.querySelector(".copy-button-tooltip");
    const successIcon = copyButton.querySelector(".copy-button-icon.success");
    const defaultIcon = copyButton.querySelector(".copy-button-icon:not(.success)");
    navigator.clipboard.writeText(textToCopy).then(() => {
      if (defaultIcon) defaultIcon.style.display = "none";
      if (successIcon) successIcon.style.display = "inline-block";
      if (tooltip) tooltip.textContent = "Copied!";
    }).finally(() => {
      setTimeout(() => {
        if (defaultIcon) defaultIcon.style.display = "";
        if (successIcon) successIcon.style.display = "none";
        if (tooltip) tooltip.textContent = "Copy";
        delete copyButton.dataset.locked;
      }, 2000);
    });
  });
}

function helpBotChat() {
  const helpbot = '<div class="helpbot-chat-container">' +
    '<button type="button" class="helpbot-chat-button">' +
    '<img src="https://cdn.syncfusion.com/helpbot/staging/images/ai_start_new_page.svg" alt="helpbot icon" class="helpbot-chat-icon">' +
    '<p class="helpbot-chat-content">Bold BI HelpBot</p>' +
    '</button>' +
    '</div>';

  document.body.insertAdjacentHTML('beforeend', helpbot);
  document.querySelectorAll(".helpbot-chat-button").forEach(function (button) {
    button.addEventListener("click", function () {
      window.open("https://helpbot.boldbi.com/", "_blank");
    });
  });
}

function tabClick() {
  document.querySelectorAll(".tab-container").forEach(container => {
    const tabs = container.querySelectorAll(".tab");
    const contents = container.querySelectorAll(".tab-content");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // Remove active from all tabs
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));
        // Activate clicked tab
        tab.classList.add("active");
        const contentId = tab.getAttribute("data-tab");
        const content = container.querySelector("#" + contentId);
        if (content) content.classList.add("active");
      });
    });
  });
}

function boldDeskLiveChat() {
  if (window.__boldDeskLoaded || document.getElementById('boldchat-widget')) return;
  const script = document.createElement("script");
  script.src = "https://support.boldbi.com/chatwidget-api/widget/v1/240f11f3-ccc2-4755-8fc5-5a7fa9bc9b1e";
  script.defer = true;
  script.async = true;

  document.body.appendChild(script);
  window.__boldDeskLoaded = true;
}

function sitevisitorLoad() {
  if (!window.__sitevisitorLoad) {
    const script = document.createElement("script");
    script.src = "/js/sitevisitor-tracking.js";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
    window.__sitevisitorLoad = true;
  } else {
    setlocalstorage();
    append_query_string();
    storageExpriedate();
    append_query_string_access_demo_link();
    append_request_demo_form_lead_details();
  }
}

function rightSideBarFunctionality() {

  document.querySelectorAll('h2, h3, h4').forEach(h => {
    if (h.id) {
      // Convert the ID: lowercase, replace spaces and special characters with '-'
      const newId = h.id
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // everything except letters/numbers → '-'
        .replace(/^-+|-+$/g, '');   // remove leading/trailing '-'
      h.id = newId;
    }
  });

  const toc = document.getElementById('doc-right-toc');
  if (!toc) return;

  const anchors = toc.querySelectorAll('.doc-anchor-h2, .doc-anchor-h3, .doc-anchor-h4');

  // === 1️⃣ INITIAL SETUP ===
  anchors.forEach(anchor => {
    const subUl = anchor.querySelector('ul');
    if (subUl) subUl.style.display = 'none'; // hide all sub-levels initially
  });

  // === 2️⃣ TOGGLE FUNCTIONALITY ===
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.stopPropagation();

      const subUl = anchor.querySelector('ul');
      const level = getLevel(anchor);

      if (level === 2) {
        // Toggle H3s
        anchors.forEach(a => {
          if (a !== anchor && getLevel(a) === 2) {
            const ul = a.querySelector('ul');
            if (ul) ul.style.display = 'none';
          }
        });
        if (subUl) subUl.style.display = subUl.style.display === 'none' ? '' : 'none';
      } else if (level === 3) {
        // Toggle H4s
        anchors.forEach(a => {
          if (a !== anchor && getLevel(a) === 3) {
            const ul = a.querySelector('ul');
            if (ul) ul.style.display = 'none';
          }
        });
        if (subUl) subUl.style.display = subUl.style.display === 'none' ? '' : 'none';
      } else if (level === 4) {
        // H4 click — keep everything open
        showBranch(anchor);
      }
    });
  });

  // === 3️⃣ SCROLL-ACTIVE HIGHLIGHTING ===
  const container = document.getElementById('md-content');
  if (!container) return;

  // Prepare headings with positions relative to container
  const headings = Array.from(container.querySelectorAll('h2, h3, h4'))
    .filter(h => h.id)
    .map(h => ({
      el: h,
      id: h.id,
      level: h.tagName.toLowerCase() === 'h2' ? 2 :
        h.tagName.toLowerCase() === 'h3' ? 3 : 4
    }));

  const topOffset = 30; // height of sticky header

  function onScroll() {
    const scrollY = container.scrollTop + topOffset;

    let active = null;
    for (let i = headings.length - 1; i >= 0; i--) {
      const headingTop = headings[i].el.offsetTop;
      if (scrollY >= headingTop) {
        active = headings[i];
        break;
      }
    }

    anchors.forEach(a => {
      a.classList.remove('active');
      const ul = a.querySelector('ul');
      if (ul) ul.style.display = 'none';
    });

    if (!active) return;

    const activeLink = toc.querySelector(`a[href="#${CSS.escape(active.id)}"]`);
    if (!activeLink) return;

    const li = activeLink.closest('li');
    if (!li) return;

    li.classList.add('active');

    if (active.level === 2) {
      const subUl = li.querySelector('ul');
      if (subUl) subUl.style.display = '';
    }

    if (active.level === 3) {
      const parentH2 = li.closest('.doc-anchor-h2');
      if (parentH2) {
        parentH2.classList.add('active');
        const ul = parentH2.querySelector('ul');
        if (ul) ul.style.display = '';
      }
      const subUl = li.querySelector('ul');
      if (subUl) subUl.style.display = '';
    }

    if (active.level === 4) {
      const parentH3 = li.closest('.doc-anchor-h3');
      if (parentH3) {
        parentH3.classList.add('active');
        const ul = parentH3.querySelector('ul');
        if (ul) ul.style.display = '';
      }
      const parentH2 = li.closest('.doc-anchor-h2');
      if (parentH2) {
        parentH2.classList.add('active');
        const ul = parentH2.querySelector('ul');
        if (ul) ul.style.display = '';
      }
    }
  }

  // Initialize
  onScroll();

  // Listen to scroll of the container
  container.addEventListener('scroll', onScroll);

  // Recalculate heading positions on resize
  window.addEventListener('resize', () => {
    headings.forEach(h => h.top = h.el.offsetTop);
    onScroll();
  });

  // === 4️⃣ HELPER FUNCTIONS ===
  function getLevel(el) {
    if (el.classList.contains('doc-anchor-h2')) return 2;
    if (el.classList.contains('doc-anchor-h3')) return 3;
    if (el.classList.contains('doc-anchor-h4')) return 4;
    return 0;
  }

  function showBranch(el) {
    let parent = el.parentElement;
    while (parent && parent !== toc) {
      if (parent.tagName.toLowerCase() === 'ul') parent.style.display = '';
      parent = parent.parentElement;
    }
  }

}


const RightToc = styled.div`
`

const NavButtons = styled.div`
`

const NavButton = styled.div`
`

const BodyContainer = styled.div`
  overflow: auto;
  overflow-x: hidden;
  justify-self: center;
  width: 100%;
  padding: ${props => props.theme.sitePadding};
  @media screen and (max-width: 600px) {
    order: 2;
  }

  & > div {
    max-width: ${props => props.theme.contentWidthLaptop};
    margin: auto;
  }

  & > h1 {
    color: ${props => props.theme.accentDark};
  }
`

const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  box-shadow: 0 8px 11px -6px rgba(0, 0, 0, 0.12);
  z-index: 1001;
  opacity: 100;
`

const LeftPane = styled.div`
  overflow: auto;
  overflow-x: hidden;
  border-right: 1px solid #ddd;
  background: #FAFAFA;
  @media screen and (max-width: 600px) {
    overflow: inherit;
  }
`

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query LayoutBySlug($slug: String!) {
    allPostTitles: allMarkdownRemark{
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      postBySlug: markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        timeToRead
        excerpt
        frontmatter {
          description
          title
          canonical
        }
        fields {
          slug
        }
      }
  }
`;
