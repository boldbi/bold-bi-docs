import { useEffect } from "react";

const useAnalytics = () => {

    useEffect(() => {
        const trackPageVisit = async () => {
            try {
                const today = new Date();
                const url = window.location.href;
                let uuid = getCookie("_uid") || generateUUID();
                let sid = getCookie("_sid") || "";
                let pageCount = parseInt(getCookie("_pageCount")) || 0;

                pageCount += 1;
                createCookie("_uid", uuid, 24);
                createCookie("_pageCount", pageCount, 24);

                // Fetch public IP address
                const ipResponse = await fetch("https://api64.ipify.org?format=json");
                const ipData = await ipResponse.json();
                const myip = ipData.ip;

                // Build data model object
                const dataModel = {
                    UUID: uuid,
                    PageUrl: url,
                    CurrentTime: today.toISOString(),  // Ensure proper date format
                    PageCount: pageCount,
                    CustomerIP: myip,
                    CustomerID: sid,
                    ReferrerUrl: document.referrer,
                    Queue: "Bold BI",
                };

                await postRequest(dataModel);
            } catch (error) {
                console.error("Error in tracking script:", error);
            }
        };

        trackPageVisit();
    }, []);

    // Helper functions
    function createCookie(name, value, months) {
        const d = new Date();
        d.setMonth(d.getMonth() + months);
        document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/;domain=.boldbi.com`;
    }

    function getCookie(name) {
        const cookies = document.cookie.split(";").map((c) => c.trim());
        const found = cookies.find((c) => c.startsWith(name + "="));
        return found ? found.split("=")[1] : "";
    }

    function generateUUID() {
        return Math.random().toString(36).substr(2, 9);
    }

    async function postRequest(dataModel) {
      try {
        const response = await fetch(`https://www.boldbi.com/account/ug-page-visit-log/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataModel),
        });
      } catch (error) {
          console.error("Error sending Page visit logs data:", error);
      }
    }   

};

export default useAnalytics;
