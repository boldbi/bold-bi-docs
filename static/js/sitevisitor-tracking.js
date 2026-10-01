(() => {
// Cookie and Expire dates
const cookieDomain = ".boldbi.com";
const uuidCookieExpireDays = 365; // 1 year
const localStorageExpireDays = 30; // 30 days

// Tracking Parameter Names
const uuidName = "_uid";
const sidName = "_sid";
const gclidName = "gclid";
const utmCampaignName = "utm_campaign";
const utmSourceName = "utm_source";
const leadSourceName = "lead_source";
const leadCategoryName = "lead_category";
const opportunitySourceName = "opportunity_source";
const opportunityCategoryName = "opportunity_category";
const referralUrlName = "referralurl";
const secondaryReferralUrlName = "secondaryreferralurl";
const landingPageUrlName = "landingpageurl";
const pageCountName = "page_count";
const localStorageExpireDateName = "localstorageexpiredate";

// Tracking Parameter values
deleteTrackingValues();
const uuidValue = getUuid() || "";
const gclidValue = getGclid(gclidName) || "";
const sidValue = getTrackingValue(sidName) || "";
const leadSourceValue = getLeadSource() || "";
const leadCategoryValue = getLeadCategory() || "";
const referrerUrlValue = getReferrerUrl() || "";
const referrerOriginUrlValue = getCleanUrl(referrerUrlValue) || "";
const secondaryReferrerUrlValue = getSecondaryReferrerUrl() || "";
const secondaryReferrerOriginUrlValue = getCleanUrl(secondaryReferrerUrlValue) || "";
const landingPageUrlValue = getCleanUrl(window.location.href) || "";
const pageCountValue = getPageCount() || "";

// Set tracking values in local storage
setTrackingValue(uuidName, uuidValue);
setTrackingValue(gclidName, gclidValue);
setTrackingValue(leadSourceName, leadSourceValue);
setTrackingValue(leadCategoryName, leadCategoryValue);
setTrackingValue(opportunitySourceName, leadSourceValue);
setTrackingValue(opportunityCategoryName, leadCategoryValue);
setTrackingValue(referralUrlName, referrerUrlValue);
setTrackingValue(secondaryReferralUrlName, secondaryReferrerUrlValue);
setTrackingValue(landingPageUrlName, landingPageUrlValue);
setTrackingValue(localStorageExpireDateName, getLocalStorageExpireDate());

// Query parameter
const appendQueryParam =
    "&leadsource=" + leadSourceValue +
    "&leadcategory=" + leadCategoryValue +
    "&opportunitysource=" + leadSourceValue +
    "&opportunitycategory=" + leadCategoryValue +
    "&uuid=" + uuidValue +
    "&gclid=" + gclidValue +
    "&referrerroriginurl=" + referrerOriginUrlValue +
    "&secondaryreferraloriginurl=" + secondaryReferrerOriginUrlValue +
    "&landingpageurl=" + landingPageUrlValue +
    "&secondaryleadsource=Bold_BI";

// Get tracking value
function getTrackingValue(key) {
    key = key.trim();
    const encodedKey = encodeURIComponent(key);

    let value = localStorage.getItem(key);

    if (!value) {
        const cookieName = `${encodedKey}=`;
        const cookies = document.cookie.split(";");

        for (let cookie of cookies) {
            cookie = cookie.trim();

            if (cookie.startsWith(cookieName)) {
                value = decodeURIComponent(cookie.substring(cookieName.length));

                localStorage.setItem(key, value);
                break;
            }
        }
    }

    return value || null;
}

// Set tracking value
function setTrackingValue(key, value) {
    key = key.trim();
    value = String(value).trim();

    // LocalStorage
    localStorage.setItem(key, value);
}

// Delete tracking values
function deleteTrackingValues() {
    const now = new Date();
    const expiryDate = getTrackingValue(localStorageExpireDateName);

    if (expiryDate && new Date(expiryDate) < now) {
        const keysToRemove = [
            leadSourceName,
            leadCategoryName,
            opportunitySourceName,
            opportunityCategoryName,
            referralUrlName,
            secondaryReferralUrlName,
            landingPageUrlName,
            gclidName,
            localStorageExpireDateName
        ];

        keysToRemove.forEach(key => {
            localStorage.removeItem(key);
        });
    }
}

// Get local storage expire date
function getLocalStorageExpireDate() {
    let expiryDate = getTrackingValue(localStorageExpireDateName);

    if (!expiryDate) {
        const newExpiry = new Date();
        newExpiry.setDate(newExpiry.getDate() + localStorageExpireDays);

        const expiryValue = newExpiry.toISOString();

        return expiryValue;
    }

    return expiryDate;
}

// Get Clean Urls
function getCleanUrl(url) {
    if (!url) {
        return "";
    }

    try {
        const parsedUrl = new URL(url);
        return parsedUrl.origin + parsedUrl.pathname;
    } catch {
        // Fallback for invalid/relative URLs
        return url.split(/[?#]/)[0];
    }
}

// Get UUID
function getUuid() {

    const localUuid = localStorage.getItem(uuidName);

    const cookieValue = document.cookie
        .split("; ")
        .find(row => row.startsWith(`${uuidName}=`))
        ?.split("=")[1];

    const cookieUuid = cookieValue
        ? decodeURIComponent(cookieValue)
        : null;

    // Both exist
    if (localUuid && cookieUuid) {

        if (localUuid !== cookieUuid) {
            localStorage.setItem(uuidName, cookieUuid);
        }

        return cookieUuid;
    }

    // Cookie exists, localStorage missing
    if (cookieUuid) {
        localStorage.setItem(uuidName, cookieUuid);
        return cookieUuid;
    }

    // localStorage exists, cookie missing
    if (localUuid) {
        setUuidCookie(localUuid);
        return localUuid;
    }

    // Neither exists
    const newUuid = generateUuid();

    localStorage.setItem(uuidName, newUuid);
    setUuidCookie(newUuid);

    return newUuid;
}

// Uuid Generator
function generateUuid() {
    const date = new Date();

    return (
        date.getFullYear() +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        ("0" + date.getDate()).slice(-2) +
        ("0" + date.getHours()).slice(-2) +
        ("0" + date.getMinutes()).slice(-2) +
        ("0" + date.getSeconds()).slice(-2) +
        ("00" + date.getMilliseconds()).slice(-3) +
        Math.floor(Math.random() * 10000)
    );
}

// Set Uuid in Cookie 
function setUuidCookie(uuid) {
    const expiryDate = new Date();
    expiryDate.setTime(
        expiryDate.getTime() +
        uuidCookieExpireDays * 24 * 60 * 60 * 1000
    );

    document.cookie = `${uuidName}=${encodeURIComponent(uuid)}; expires=${expiryDate.toUTCString()}; path=/; domain=${cookieDomain}`;
}

// Get Query Parameter
function getQueryParameter(parameterName) {
    if (!parameterName) {
        return null;
    }

    var queryString = window.location.search.substring(1);
    var parameters = queryString.split("&");

    for (var i = 0; i < parameters.length; i++) {
        var pair = parameters[i].split("=");

        if (pair[0] === parameterName) {
            return decodeURIComponent(pair[1] || "").trim();
        }
    }

    return null;
}

// Get Gclid
function getGclid() {
    return getQueryParameter(gclidName) || getTrackingValue(gclidName) || null;
}

// Get lead source
function getLeadSource() {
    // 1. Check UTM campaign
    const utmCampaign = getQueryParameter(utmCampaignName);
    if (utmCampaign) {
        return utmCampaign;
    }

    // 2. Check Google Ads click ID
    const gclid = getQueryParameter(gclidName);
    if (gclid) {
        return gclid;
    }

    // 3. Check stored lead source and not a organic
    const storedLeadSource = getTrackingValue(leadSourceName);
    if (storedLeadSource && storedLeadSource !== "www.google.com") {
        return storedLeadSource;
    }

    // 4. Return referrer domain or current hostname
    const referrer = getReferrerUrl();
    return referrer?.split("/")[2] || location.hostname;
};

// Get lead category
function getLeadCategory() {
    // 1. Check UTM source
    const utmSource = getQueryParameter(utmSourceName);

    if (utmSource) {
        return utmSource;
    }

    // 2. Check Google Ads
    if (getQueryParameter(gclidName)) {
        return "Google_Ads";
    }

    // 3. Check Bing Ads
    const utmCampaign = getQueryParameter(utmCampaignName);

    if (utmCampaign && utmCampaign.includes("_biad")) {
        return "Bing_Ads";
    }

    // 4. Check YouTube Ads
    if (utmSource?.toLowerCase().includes("youtube_ads") || utmCampaign?.toLowerCase().includes("youtube_ads")) {
        return "Youtube_Ads";
    }

    // 5. Check stored lead category
    const storedLeadCategory = getTrackingValue(leadCategoryName);
    if (storedLeadCategory) {
        return storedLeadCategory;
    }

    // 6. Check referrer URL
    const referrer = getReferrerUrl();
    const referrerDomain = referrer?.split("/")[2] || "";

    const referrerMappings = {
        "medium.com": "medium",
        "nuget.org": "nuget",
        "npmjs.com": "npm",
        "github.com": "github",
        "facebook.com": "facebook",
        "linkedin.com": "linkedin",
        "twitter.com": "twitter",
        "x.com": "twitter"
    };

    for (const key in referrerMappings) {
        if (referrerDomain.includes(key)) {
            return referrerMappings[key];
        }
    }

    // 7. Default category
    return "Site_Visitors";
}

// Get referrer URL
function getReferrerUrl() {
    // 1. Stored referral URL
    // 2. Check browser referrer URL
    // 3. Fallback to current page URL
    return getTrackingValue(referralUrlName) || document.referrer || window.location.href;
}

// Get secondary referrer URL
function getSecondaryReferrerUrl() {
    // 1. Stored secondary referrer
    // 2. Fallback to current page URL
    return getTrackingValue(secondaryReferralUrlName) || window.location.href;
};

// Page Count
function getPageCount() {

    var count = getTrackingValue(pageCountName);
    var pageCount = Number(count);

    if (!pageCount || isNaN(pageCount)) {
        pageCount = 1;
    } else {
        pageCount = pageCount + 1;
    }

    setTrackingValue(pageCountName, pageCount);

    return pageCount;
}

// Append query string to URLs -- STARTS HERE
function appendQueryString(appendQueryParam) {
    const modificationurl = [
        "https://www.boldbi.com/",
        "https://app.boldid.net"
    ];

    modificationurl.forEach((url) => {
		document.querySelectorAll(`a[href^="${url}"]`).forEach((link) => {
			if (link.href.includes("evaluation=v2")) {
				link.href = link.href.split("evaluation=v2")[0] + "evaluation=v2" + appendQueryParam;
			}
		});
	});
};
appendQueryString(appendQueryParam);
// Append query string to URLs -- ENDS HERE

// Form tracking injector -- STARTS HERE
function setFormInputFieldValue(selector, value) {
    var inputs = document.querySelectorAll(selector);
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = value;
    }
}

function appendTrackingParamInForms() {
    setFormInputFieldValue('input[name="PageURL"]', window.location.href);
    setFormInputFieldValue('input[name="Uuid"]', uuidValue);
    setFormInputFieldValue('input[name="Gclid"]', gclidValue);
    setFormInputFieldValue('input[name="LeadSource"]', leadSourceValue);
    setFormInputFieldValue('input[name="LeadCategory"]', leadCategoryValue);
    setFormInputFieldValue('input[name="ReferrerUrl"]', referrerUrlValue);
    setFormInputFieldValue('input[name="ReferralOriginUrl"]', referrerOriginUrlValue);
    setFormInputFieldValue('input[name="SecondaryReferrerUrl"]', secondaryReferrerUrlValue);
    setFormInputFieldValue('input[name="SecondaryReferralOriginurl"]', secondaryReferrerOriginUrlValue);
}

appendTrackingParamInForms();
// Form tracking injector -- ENDS HERE

// Page Visit logs -- STARTS HERE
async function sendToPageVisitLog() {

    try {

        // Get IP address
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();

        const ipAddress = data.ip || "";

        setFormInputFieldValue('input[name="IpAddress"]', ipAddress);

        const payload = {
            UUID: uuidValue || "",
            PageUrl: window.location.href,
            CurrentTime: new Date().toLocaleString(),
            PageCount: pageCountValue || 0,
            CustomerIP: ipAddress,
            CustomerID: sidValue || "",
            ReferrerUrl: document.referrer || "",
            Queue: "Bold BI"
        };

		const apiUrl = "https://www.boldbi.com/account/page-visit-log/" + payload;

		fetch(apiUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(payload)
		})
			.catch(error => {
				console.error("Error:", error);
			});

    } catch (error) {
        console.error("IP fetch failed:", error);
    }
}
sendToPageVisitLog();
// Page Visit logs -- ENDS HERE

// Removes unwanted tracking parameters (like _gl) from all anchor links -- STARTS HERE
function removeTrackingParams(event) {
    const link = event.target.closest("a");
    if (!link) return;

    let href = link.getAttribute("href");
    if (!href) return;

    // Process only external links
    const isInternal =
        href.startsWith(location.origin) ||
        href.startsWith("/") ||
        href.startsWith("#");

    if (!isInternal) {
        // Remove `_gl` parameter
        const modifiedHref = href
            .replace(/\&_gl=[^#]*/, '')  // remove &_gl=...
            .replace(/\?_gl=[^#]*/, ''); // remove ?_gl=...

        link.setAttribute("href", modifiedHref);
    }
}

// Attach events
["mouseover", "click", "contextmenu"].forEach(evt =>
    document.addEventListener(evt, removeTrackingParams)
);
// Removes unwanted tracking parameters (like _gl) from all anchor links -- ENDS HERE
})();