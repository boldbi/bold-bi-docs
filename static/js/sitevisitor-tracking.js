// define the domain, subdomain and external url.
var domain = location.host;
var subdomain = ".boldbi.com";
var expriehours = 7 * 24; // 7 days
var modificationurl = [
    "https://app.boldid.net/"
];

var internal_domains = {
    "https://www.syncfusion.com": "Syncfusion",
    "https://www.boldreports.com": "Bold Reports",
    "https://www.boldbi.com": "Bold BI",
}

// get the URL params
var appendQueryParam = "";

const fidUrlParam = (name) => {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href.replace(/%20/g, ""));
    if (results == null) {
        return null;
    }
    return results[1];
}

//get the lead source.
const leadSource = () => {
    var leadSourceValue = "";
    var queryParam = ["utm_campaign", "gclid"];
    var storedleadSourceValue = localStorage.getItem('lead_source');
    if (storedleadSourceValue == "" || storedleadSourceValue == null) {
        for (let source of queryParam) {
            switch (source) {

                case "utm_campaign":
                    leadSourceValue = fidUrlParam(source);
                    break;
                case "gclid":
                    var value = fidUrlParam(source);
                    if (value != null && value.length > 0) {
                        leadSourceValue = value;
                    }
                    break;
            }
            if (leadSourceValue != "" && leadSourceValue != null) {
                return leadSourceValue;
            }
        }
    }
    if (leadSourceValue == "" || leadSourceValue == null) {
        //leadSourceValue = "sitevisitors";   commented for leadsource default as sitevisitors - user come from google too
        //added new code for leadsorce -ln 59 to 66 - task id BOLDBI-1564
        if (referralOrginUrl() != null && referralOrginUrl().toString().indexOf(domain) === -1 && referralOrginUrl().toString().indexOf(subdomain) === -1) {
            var urlformat = referralOrginUrl().toString().split("/");
            leadSourceValue = urlformat[2];
        }
        else {
            var urlformat = window.location.href.toString().split("/");
            leadSourceValue = urlformat[2];
        }
    }
    return leadSourceValue;
}

const leadcategory = () => {
    var leadcategoryvalue = fidUrlParam('utm_source');
    var leadsourcevalue = fidUrlParam("utm_campaign");
    if (leadcategoryvalue && leadsourcevalue) {
        return leadcategoryvalue;
    }
 
    if (leadcategoryvalue == "" || leadcategoryvalue == null) {
        // YouTube Ads detection FIRST (priority over gclid)
        const utmSourceLower = (fidUrlParam('utm_source') || '').toLowerCase();
        const utmCampaignLower = (leadsourcevalue || '').toLowerCase();
        const isYouTubeAds =
            utmSourceLower === 'youtube_ads' ||
            utmCampaignLower.includes('youtube_ads');
 
        if (isYouTubeAds) {
            leadcategoryvalue = "Youtube_Ads";
        }
        else if (fidUrlParam("gclid") != null && fidUrlParam("gclid") != "") {
            leadcategoryvalue = "Google_Ads";
        }
        else if (leadsourcevalue != null && leadsourcevalue != "") {   
            if (leadsourcevalue.includes("_biad")) {
                leadcategoryvalue = "Bing_Ads";
            } 
            else {
                leadcategoryvalue = "Site_Visitors";
            }
        }
        else {
            leadcategoryvalue = "Site_Visitors";
        }
    }
    return leadcategoryvalue;
}

//get the opportunity source.
const opportunitySource = () => {
    var opportunitySourceValue = "";
    var queryParam = ["utm_campaign", "gclid"];
    for (let source of queryParam) {
        switch (source) {

            case "utm_campaign":
                opportunitySourceValue = fidUrlParam(source);
                break;
            case "gclid":
                var value = fidUrlParam(source);
                if (value != null && value.length > 0) {
                    opportunitySourceValue = value;
                }
                break;
        }
        if (opportunitySourceValue != "" && opportunitySourceValue != null) {
            return opportunitySourceValue;
        }
    }
    if (opportunitySourceValue == "" || opportunitySourceValue == null) {
        if (referralOrginUrl() != null && referralOrginUrl().toString().indexOf(domain) === -1 && referralOrginUrl().toString().indexOf(subdomain) === -1) {
            var urlformat = referralOrginUrl().toString().split("/");
            opportunitySourceValue = urlformat[2];
        }
        else {
            var urlformat = window.location.href.toString().split("/");
            opportunitySourceValue = urlformat[2];
        }
    }
    return opportunitySourceValue;
}

//get the opportunity category.
const opportunitycategory = () => {
    var opportunitycategoryvalue = fidUrlParam('utm_source');
    var leadsourcevalue = fidUrlParam("utm_campaign");
    if (opportunitycategoryvalue && leadsourcevalue) {
        return opportunitycategoryvalue;
    }

    if (opportunitycategoryvalue == "" || opportunitycategoryvalue == null) {
        //YouTube Ads detection FIRST (priority over gclid)
        const utmSourceLower = (fidUrlParam('utm_source') || '').toLowerCase();
        const utmCampaignLower = (leadsourcevalue || '').toLowerCase();
        const isYouTubeAds =
            utmSourceLower === 'youtube_ads' ||
            utmCampaignLower.includes('youtube_ads');

        if (isYouTubeAds) {
            opportunitycategoryvalue = "Youtube_Ads";
        }
        else if (fidUrlParam("gclid") != null && fidUrlParam("gclid") != "") {
            opportunitycategoryvalue = "Google_Ads";
        }
        else if (leadsourcevalue != null && leadsourcevalue != "") {
            if (leadsourcevalue.includes("_biad")) {
                opportunitycategoryvalue = "Bing_Ads";
            }
            else {
                opportunitycategoryvalue = "Site_Visitors";
            }
        }
        else {
            opportunitycategoryvalue = "Site_Visitors";
        }
    }
    return opportunitycategoryvalue;
}

// get site referral orgin url
const referralOrginUrl = () => {
    var referralorginurl = document.referrer != "" ? document.referrer : document.location.href;
    if (localStorage.getItem("referralurl") != null) {
        if (internalleadsource(referralorginurl) != null) {
            return localStorage.getItem("referralurl");
        }
    }
    return referralorginurl;
}

// get the secondreferralorginurl and secondreferorgin.
const second_referralorgin = () => {
    var secondreferralorginurl = "";
    if (localStorage.getItem("secondaryreferralurl") == null) {
        secondreferralorginurl = document.location.href;
    }
    else if (localStorage.getItem("secondaryreferralurl") != null) {
        secondreferralorginurl = document.referrer;
        if (secondreferralorginurl.toString().indexOf(domain) !== -1) {
            secondreferralorginurl = localStorage.getItem("secondaryreferralurl");
        }
        else if (secondreferralorginurl.toString().indexOf(subdomain) !== -1) {
            secondreferralorginurl = document.referrer;
        }
        else if (secondreferralorginurl.toString().indexOf(".boldid.net") !== -1) {
            secondreferralorginurl = document.referrer;
        }
        else {
            secondreferralorginurl = localStorage.getItem("secondaryreferralurl");
        }
    }
    if (secondreferralorginurl == "") {
        secondreferralorginurl = document.location.href;
    }
    if (secondreferralorginurl.toString().indexOf("?") !== -1) {
        var remove_query_param = secondreferralorginurl.toString().split("?");
        secondreferralorginurl = remove_query_param[0];
    }

    return {
        secondreferralorginUrl: secondreferralorginurl
    }
}

//replace the unwanted string in url.
const replaceAll = (str, search, replacement) => {
    return str.toString().split(search).join(replacement);
}

// get the gclid id.
const gclid = () => {
    return fidUrlParam("gclid");

}

// Function to get the value of a cookie by its name
function getCookieValue(cookieName) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName + '=')) {
            return cookie.substring(cookieName.length + 1);
        }
    }
    return null;
}

function createCookieValue(cookieName, cookieValue) {
    var d = new Date();
    var expires = '';
    if (cookieName != '_pageCount') {
        d.setMonth(d.getMonth() + 24);
        expires = ";expires=" + d.toUTCString();
    }
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        document.cookie = cookieName + "=" + cookieValue + expires + ", domain=.boldbi.com;path=/";
    } else {
        document.cookie = cookieName + "=" + cookieValue + expires + ";domain=.boldbi.com;path=/";
    }
}

function ESTTimeOffsetValue() {
    var jan = new Date(today.getFullYear(), 0, 1);
    var jul = new Date(today.getFullYear(), 6, 1);
    return (Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset()) <= today.getTimezoneOffset() ? -4 : -5) * 3600000;
}

// Usage: Get the value of the "_uid" cookie
var uidValue = getCookieValue("_uid");

//check uuid in browser cookie
if (uidValue) {
    uidValue = getCookieValue('_uid');
} else {
    var today = new Date();
    var loadTimeOffset = today.getTimezoneOffset() * 60000;
    var estTimeOffset = ESTTimeOffsetValue();
    var timeUTC = today.getTime() + loadTimeOffset;
    var timeEST = new Date(timeUTC + estTimeOffset) / 1;
    uidValue = Math.floor(Math.random() * 1000) + 1 + timeEST.toString();
    createCookieValue('_uid', uidValue);
}

//set  the tracking value to loacl staorage.
const setlocalstorage = () => {
    var gclidvalue = "";
    var referralurlvalue = "";
    var scoundaryreferralurlvalue = "";

    // Uuid value set in local storage
    localStorage.setItem("uuid", uidValue);

    // commented utm improvements - registation from pricing page link
    //  if (localStorage.getItem("lead_source") == null || (localStorage.getItem("lead_source") != null && leadSource().toString().indexOf("sitevisitors") === -1)) {
    if (localStorage.getItem("lead_source") == null || (localStorage.getItem("lead_source") != null && leadSource().toString().indexOf(domain) === -1)) {
        localStorage.setItem("lead_source", leadSource());
    }
    if ((localStorage.getItem("referralurl") == null) || (localStorage.getItem("referralurl") != null && referralOrginUrl().toString().indexOf(subdomain) === -1)) {
        localStorage.setItem("referralurl", referralOrginUrl());
    }
    if (localStorage.getItem("secondaryreferralurl") == null || (localStorage.getItem("secondaryreferralurl") != null && second_referralorgin().secondreferralorginUrl.toString().indexOf(subdomain) !== -1)) {
        localStorage.setItem("secondaryreferralurl", second_referralorgin().secondreferralorginUrl);
    }
    if (localStorage.getItem("lead_category") == null || (localStorage.getItem("lead_category") != null && leadcategory().toString() != "Site_Visitors")) {
        localStorage.setItem("lead_category", leadcategory());
    }
    if (gclid() != null) {
        localStorage.setItem("gclid", gclid());
    }
    if (localStorage.getItem("gclid") != null) {
        gclidvalue = localStorage.getItem("gclid");
    }
    if (localStorage.getItem("referralurl") != null) {
        referralurlvalue = localStorage.getItem("referralurl");
    }
    if (localStorage.getItem("secondaryreferralurl") != null) {
        scoundaryreferralurlvalue = localStorage.getItem("secondaryreferralurl");
    }
    if (localStorage.getItem("opportunity_source") == null || (localStorage.getItem("opportunity_source") != null && opportunitySource().toString().indexOf(domain) === -1)) {
        localStorage.setItem("opportunity_source", opportunitySource());
    }
    if (localStorage.getItem("opportunity_category") == null || (localStorage.getItem("opportunity_category") != null && opportunitycategory().toString() != "Site_Visitors")) {
        localStorage.setItem("opportunity_category", opportunitycategory());
    }

    appendQueryParam = "&leadsource=" + localStorage.getItem("lead_source") + "&gclid=" + gclidvalue + "&referrerroriginurl="
            + referralurlvalue + "&secondaryreferraloriginurl=" + scoundaryreferralurlvalue + "&leadcategory=" + localStorage.getItem("lead_category") + "&opportunitysource=" + localStorage.getItem("opportunity_source") + "&opportunitycategory=" + localStorage.getItem("opportunity_category") + "&uuid=" + uidValue + "&secondaryleadsource=Bold_BI";
}

// append the query string in registeration url
const append_query_string = () => {
    modificationurl.forEach((url) => {
        var links = document.querySelectorAll("a[href^='" + url + "']");
        links.forEach(function (link) {
            link.href = link.href + appendQueryParam;
        });
    });
};

const append_query_string_access_demo_link = () => {
    var links = document.querySelectorAll("#access-live-demo a");
    links.forEach(function (link) {
        var modifiedParam = appendQueryParam.replace('&', '?');
        link.href = link.href + modifiedParam;
    });
}

const append_request_demo_form_lead_details = () => {
    if (localStorage.getItem("gclid") != null) {
        var gclidInput = document.querySelector('input[name="Gclid"]');
        if (gclidInput) {
            gclidInput.value = localStorage.getItem("gclid");
        }
    }
    
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            var ipInput = document.querySelector('input[name="IpAddress"]');
            if (ipInput) {
                ipInput.value = ip;
            }
        });

    var referralUrlInput = document.querySelector('input[name="ReferrerUrl"]');
    if (referralUrlInput && localStorage.referralurl) {
        referralUrlInput.value = localStorage.referralurl;
    }

    var secondaryReferralUrlInput = document.querySelector('input[name="SecondaryReferrerUrl"]');
    if (secondaryReferralUrlInput && localStorage.secondaryreferralurl) {
        secondaryReferralUrlInput.value = localStorage.secondaryreferralurl;
    }

    var leadSourceInput = document.querySelector('input[name="LeadSource"]');
    if (leadSourceInput && localStorage.lead_source) {
        leadSourceInput.value = localStorage.lead_source;
    }

    var leadCategoryInput = document.querySelector('input[name="LeadCategory"]');
    if (leadCategoryInput && localStorage.lead_category) {
        leadCategoryInput.value = localStorage.lead_category;
    }

    var referralOriginUrlInput = document.querySelector('input[name="ReferralOriginUrl"]');
    if (referralOriginUrlInput && localStorage.getItem("referralurl")) {
        referralOriginUrlInput.value = localStorage.getItem("referralurl");
    }

    var secondaryReferralOriginUrlInput = document.querySelector('input[name="SecondaryReferralOriginurl"]');
    if (secondaryReferralOriginUrlInput && localStorage.getItem("secondaryreferralurl")) {
        secondaryReferralOriginUrlInput.value = localStorage.getItem("secondaryreferralurl");
    }

    var pageUrlInput = document.querySelector('input[name="PageURL"]');
    if (pageUrlInput) {
        pageUrlInput.value = location.href;
    }

    var uuidInput = document.querySelector('input[name="Uuid"]');
    if (uuidInput && localStorage.getItem("uuid")) {
        uuidInput.value = localStorage.getItem("uuid");
    }
}

//check is internal site leadsource.
const internalleadsource = (url) => {
    for (const [key, value] of Object.entries(internal_domains)) {
        if (url.toString().indexOf(key) !== -1) {
            return value;
        }
    }
    return null;
}

//set exprie date to localstorage.
const storageExpriedate = () => {
    var date = new Date();
    date.setHours(date.getHours() + expriehours);
    if (localStorage.getItem("localstorageexpriedate") == null) {
        localStorage.setItem("localstorageexpriedate", date)
    }
    if (new Date(localStorage.getItem("localstorageexpriedate")) < new Date()) {
        localStorage.removeItem("lead_source");
        localStorage.removeItem("referralurl");
        localStorage.removeItem("secondaryreferralurl");
        localStorage.removeItem("gclid");
        localStorage.removeItem("localstorageexpriedate");
        localStorage.removeItem("lead_category");
        localStorage.removeItem("opportunity_source");
        localStorage.removeItem("opportunity_category");
    }
}

// Call the functions
setlocalstorage();
append_query_string();
storageExpriedate();
append_query_string_access_demo_link();
append_request_demo_form_lead_details();
