//UUID Passing to GTM - Starts Here

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

function setCookie(name, value, expiryDays = 30) {
    if (!value) return;

    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + expiryDays * 24 * 60 * 60 * 1000);

    const cookieString = name + "=" + encodeURIComponent(value) + "; path=/; domain=.boldbi.com; expires=" + expiryDate.toUTCString();
    document.cookie = cookieString;
}

function generateVisitorUid() {
    const now = new Date();
    const jan = new Date(now.getFullYear(), 0, 1);
    const jul = new Date(now.getFullYear(), 6, 1);

    const estOffset = (Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset()) <= now.getTimezoneOffset() ? -4 : -5) * 3600000;
    const loadTimeOffset = now.getTimezoneOffset() * 60000;
    const timestamp = now.getTime() + loadTimeOffset + estOffset;
    const random = Math.floor(Math.random() * 1000) + 1;

    return "" + random + timestamp;
}

function getVisitorUid() {
    const cookieUuid = getCookie("_uid");

    if (cookieUuid) return cookieUuid;

    const newUuid = generateVisitorUid();
    setCookie('_uid', newUuid, 365);

    return newUuid;
}

const visitorUid = getVisitorUid() || "";

if (visitorUid) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'visitor_uid': visitorUid
    });
}

//UUID Passing to GTM - ends here