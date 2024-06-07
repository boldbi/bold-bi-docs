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
    createCustomSearch();
    this.expandAccordion(this.expandedNode(this.getPathName()));
    this.setNavContent();
    this.rightTocSelect();
    this.renderBreadCrumb();
    this.selectedToc();
    this.configureHamburger();
    this.configureRightSideBar();        
    this.configureMobileSearch();
    zoomOptionForImages();
    copyToClipboard();
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
        select(window.location.hash).click();
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
      if(!isNullOrUndefined(document.querySelector('.e-toc-active'))) {
        this.selectedToc(); 
        if((!isNullOrUndefined(tocnodes.querySelector("[data='" + e.originalEvent.srcElement.getAttribute("data") + "']")))||(isNullOrUndefined(e.originalEvent.srcElement.getAttribute("data"))&&isNullOrUndefined(tocnodes.querySelector("[data-uid='" + e.originalEvent.srcElement.getAttribute("data") + "']"))&&!e.originalEvent.srcElement.classList.contains("e-fullrow")&&!e.originalEvent.srcElement.classList.contains('interaction')))
       {
        this.navToPath(path);
        }  
              
      }     
      if (isCommon) {
      this.navToPath(path);
    }
  }

    selectedToc() {
      
    let path = this.getPathName();
    
    if(window.location.hash !== "")
    {
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
      for(var element of previousSelection) {
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

  rightTocSelect() {
    var rightToc = document.getElementById('doc-right-toc');
    if (!rightToc) {
      return;
    }
    var activeElem = rightToc.querySelector('.active');
    if (rightToc) {
      var ele = rightToc.querySelector(`[href="#${window.location.href.split('#')[1]}"]`);
      if (ele) {
        if (activeElem) {
          activeElem.classList.remove('active');
        }
        ele.parentElement.classList.add('active');
      }
    }
  }

  searchSelect(e) {
    if (e.item && e.item.id) {
      this.navToPath(e.item.id);
    }
  }

  rightTocHighlight() {
    if (document.getElementById('doc-right-toc')) {
      var mdContent = document.getElementById('md-content');
      var rightToc = document.getElementById('doc-right-toc');
      var selctedElem = rightToc.querySelector('.select');
      var headers = mdContent.querySelectorAll('h2,h3,h4,h5,h6');
      for (var hEle of headers) {
        if (this.checkVisibilty(hEle, mdContent)) {
          var headEle = rightToc.querySelector(`[href='#${hEle.id}']`);
          if (headEle) {
            if (selctedElem) {
              selctedElem.classList.remove('select');
            }
            headEle.parentNode.classList.add('select');
          }
          return;
        }
      }
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
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-233131-36"></script>
                    <script>
                        {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments); }
                        gtag('js', new Date());
                        gtag('config', 'UA-233131-36');
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
                  <div id="md-content" className="e-view" onScroll={this.rightTocHighlight.bind(this)}>
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
                        '<svg class="copy-button-icon" xmlns="http://www.w3.org/2000/svg" fill="#000" width="24" height="27" viewBox="0 0 27 27"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17.875 5.844l3.281 3.406c0.313 0.344 0.594 1.063 0.594 1.531v10.094c0 0.469-0.375 0.906-0.875 0.906h-5.844v-1.531h4.906c0.156 0 0.281-0.125 0.281-0.281v-8.5c0-0.156-0.125-0.281-0.281-0.281h-3.625c-0.156 0-0.313-0.125-0.313-0.281v-3.875c0-0.156-0.125-0.281-0.281-0.281h-5.938c-0.156 0-0.313 0.125-0.313 0.281v2.156c-0.313-0.125-0.719-0.188-1.031-0.188h-0.469v-2.906c0-0.5 0.406-0.875 0.875-0.875h7.563c0.469 0 1.156 0.281 1.469 0.625zM17.813 9.656h1.313c0.156 0 0.188-0.094 0.094-0.219l-1.5-1.531c-0.094-0.125-0.188-0.094-0.188 0.063v1.406c0 0.156 0.125 0.281 0.281 0.281zM9.938 10.844l3.25 3.438c0.344 0.344 0.594 1.031 0.594 1.5v10.094c0 0.5-0.375 0.906-0.844 0.906h-12.031c-0.5 0-0.906-0.406-0.906-0.906v-14.781c0-0.469 0.406-0.906 0.906-0.906h7.531c0.469 0 1.156 0.313 1.5 0.656zM1.813 25.25h10.156c0.156 0 0.313-0.125 0.313-0.281v-8.5c0-0.156-0.156-0.281-0.313-0.281h-3.625c-0.156 0-0.281-0.125-0.281-0.281v-3.875c0-0.156-0.125-0.281-0.281-0.281h-5.969c-0.156 0-0.281 0.125-0.281 0.281v12.938c0 0.156 0.125 0.281 0.281 0.281zM11.25 14.469l-1.469-1.594c-0.125-0.125-0.219-0.031-0.219 0.125v1.375c0 0.156 0.156 0.281 0.313 0.281h1.281c0.156 0 0.219-0.094 0.094-0.188z"></path></svg>' +
                      '</div>';
  document.querySelectorAll("pre").forEach((pre) => {
      pre.insertAdjacentHTML("beforebegin", copyButton);
  });

  document.querySelectorAll(".copy-button").forEach((button) => {
      button.addEventListener("click", function() {
          const pre = this.nextElementSibling;
          const text = pre.innerText;
          const tooltip = this.querySelector(".copy-button-tooltip");

          navigator.clipboard.writeText(text).then(() => {
              tooltip.innerText = "Copied!";
              setTimeout(() => {
                  tooltip.innerText = "Copy";
              }, 5000);
          }).catch((err) => {
              console.error("Failed to copy: ", err);
          });
      });
  });
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
