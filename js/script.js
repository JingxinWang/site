

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1000},"pages":[{"id":"page-home-page","displayName":"Home Page","link":{"linkType":"LinkTypePage","href":"#!page-home-page"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-product-details","displayName":"Product Details","link":{"linkType":"LinkTypePage","href":"#!page-product-details"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-about","displayName":"About","link":{"linkType":"LinkTypePage","href":"#!page-about"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-test","displayName":"test","link":{"linkType":"LinkTypePage","href":"#!page-test"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true},{"id":"page-nts-horse-summoner","displayName":"NTS - Horse Summoner","link":{"linkType":"LinkTypePage","href":"#!page-nts-horse-summoner"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true},{"id":"page-daine","displayName":"Daine","link":{"linkType":"LinkTypePage","href":"#!page-daine"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true}]}

        $(function() {
            /* hamburger menu */
            $('.close-btn, .open-btn').click(function() {
                $('body').toggleClass('is-not-active is-active');
            });

            /*
                animation widget from here: https://github.com/silexlabs/Silex/issues/443
            */

            window.sr = ScrollReveal({
                distance: '100px'
            });
            sr.reveal('.from-left', { origin:  'left'});
            sr.reveal('.from-right', { origin:  'right'});
            sr.reveal('.from-top', { origin:  'top'});
            sr.reveal('.from-bottom', { origin:  'bottom'});

        })
    