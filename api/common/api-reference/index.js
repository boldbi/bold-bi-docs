$(window).on('load', function() {
    setTimeout(function() {
        $("body").find("p a").attr('target', '_blank');
        $(document.getElementById("section/Getting-Started/Pagination")).find("p a").removeAttr('target');
        $(document.getElementById("operation/PasswordAuthentication")).find("div.sc-gjNGvZ.ZZRiy").css("display", "none");
        $(document.getElementById("operation/EmbedSecretAuthentication")).find("div.sc-gjNGvZ.ZZRiy").css("display", "none");
        document.querySelectorAll('ul.react-tabs__tab-list').forEach(function(node) {
            if ($(node.children).html().toLowerCase() === 'payload') {
                $(node).css("display", "none");
            } else {
                $(node).css("margin-bottom", "15px");
                var responseContent = $($($($($($(node).parents('.sc-iCfLBT.sc-eWfWgB.BvbdQ.jwdikc'))[0].firstChild)[0]).find("button.sc-eFehXo.jekxwK"))[0]).find('p').html();
                $(node.children)[0].innerHTML = $(node.children).html() + '&nbsp<span style="font-weight: 400;">' + responseContent + '</span>';
            }
        });
        $(".api-content" ).append("<div id='doc-footer'><div id='footer-copyright'><a id='copyright' target='_blank' href='https://www.boldbi.com/copyright'>Copyright © 2001 - <span id='copyright-year'> 2022</span> Syncfusion Inc. All Rights Reserved</a></div><div id='footer-powered_by'></div></div>");
    }, 2000);
});

function scrollWin() {
    var url = window.location.href
    if (url.toLowerCase().indexOf("#") >= 0) {
    } else {
        window.scrollBy(0, 5); //after dom gets loaded manually scroll upto 5 px.
    }
}

$(window).scroll(function () {// scroll event
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function () {//scroll complete event - to fix the alignment issues
        if ($(window).width() > 1000) {

            var url = window.location.href;
            if (url.toLowerCase().indexOf("#") >= 0) {
                if ($("methods-list .tag").css("margin-top") === "0px") {
                    $("methods-list .tag").css("margin-top", "1px");//by applying the 1 px margin-top, we can avoid to execute the display header function.
                    $(".api-content .api-info-wrapper").css("margin-top", "0px");

                    $(".api-content[_ngcontent-redoc-45] .methods .sharable-header").css("padding-top", "40px");
                    $(".api-content[_ngcontent-redoc-45] .methods .method-samples").css("padding-top", "40px");
                    $(".api-content[_ngcontent-redoc-45] .api-info-wrapper[_ngcontent-redoc-41] .redoc-markdown-block h1:first-child").css("padding-top", "120px");
                    setTimeout(displayHeader, 10);

                }
                else {//called if the page loads with permalink
                    $("methods-list .tag").css("margin-top", "1px");//by applying the 1 px margin-top, we can avoid to execute the display header function.
                    $(".api-content .api-info-wrapper").css("margin-top", "0px");

                    $(".api-content[_ngcontent-redoc-45] .methods .sharable-header").css("padding-top", "40px");
                    $(".api-content[_ngcontent-redoc-45] .methods .method-samples").css("padding-top", "40px");
                    $(".api-content[_ngcontent-redoc-45] .api-info-wrapper[_ngcontent-redoc-41] .redoc-markdown-block h1:first-child").css("padding-top", "120px");
                }

            } else {// called while loading fresh page
                $("methods-list .tag").css("margin-top", "1px");//by applying the 1 px margin-top, we can avoid to execute the display header function.
                $(".api-content .api-info-wrapper").css("margin-top", "0px");

                $(".api-content[_ngcontent-redoc-45] .methods .sharable-header").css("padding-top", "40px");
                $(".api-content[_ngcontent-redoc-45] .methods .method-samples").css("padding-top", "40px");
                $(".api-content[_ngcontent-redoc-45] .api-info-wrapper[_ngcontent-redoc-41] .redoc-markdown-block h1:first-child").css("padding-top", "120px");
            }
        }

    }, 100));
});

function displayHeader() {
    $(".api-content .api-info-wrapper").css("margin-top", "1px");
    var url = window.location.href;
    var a = url.substring(url.lastIndexOf("#") + 1);
    var parent = $(".api-content[_ngcontent-redoc-45] .methods .sharable-header [href='#" + a + "']").parent();
    $('body,html').animate({
        scrollTop: $(parent).offset().top
    }, 20);

    setTimeout(permalink_Adjust, 50);
};

function permalink_Adjust() {
    var url = window.location.href;
    var a = url.substring(url.lastIndexOf("#") + 1);
    $(".api-content[_ngcontent-redoc-45] .methods .sharable-header [href='#" + a + "']").parent().css("margin-top", "20px");
	$(".api-content[_ngcontent-redoc-45] .methods .sharable-header [href='#" + a + "']").closest(".method").find(".method-samples").css("margin-top", "30px");
};

$(document).on("click", "#resources-nav side-menu-items li", function () {//menu's and sub menu's click event
    if ($(window).width() > 1000) {

        var url = window.location.href;
        if (url.toLowerCase().indexOf("#") >= 0) {
            var a = url.substring(url.lastIndexOf("#") + 1);
            $(".api-content[_ngcontent-redoc-45] .methods .sharable-header [href='#" + a + "']").parent().css("margin-top", "0px");
			$(".api-content[_ngcontent-redoc-45] .methods .sharable-header [href='#" + a + "']").closest(".method").find(".method-samples").css("margin-top", "0px");
        }
    }
});

function changeUrl() {
    $('.method-api-url-path').each(function () {
        var text = $(this).text();
        $(this).text(text.replace('v5.O', 'v5.0'));
    });
};