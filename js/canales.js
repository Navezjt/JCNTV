///Modal aviso legal para que carge al inicar la página https://www.tutorialrepublic.com/faq/how-to-launch-bootstrap-modal-on-page-load.php///
$(document).ready(function() {
    $("#modalabout").modal('show');
});
/////////////////////////////////////////////////////////

///copiar enlace a portapapeles//////////////////////////
function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}
/////////////////////////////////////////////////////////

///share buttons https://github.com/wcoder/share-buttons ////
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (global = global || self, global.ShareButtons = factory());
}(this, function() {
    'use strict';

    var w = window;
    var d = w.document;

    /**
     * Class to display the buttons of social networks.
     *
     * @author Yauheni Pakala <https://wcoder.github.io>
     * @version 1.5
     * @license MIT
     */
    function ShareButtons() {

        var FB_LINK_FORMAT = 'https://www.facebook.com/sharer/sharer.php?u={0}',
            VK_LINK_FORMAT = 'https://vk.com/share.php?url={0}&title={1}',
            TW_LINK_FORMAT = 'https://twitter.com/intent/tweet?url={0}&text={1}',
            TG_LINK_FORMAT = 'https://t.me/share/url?url={0}&text={1}',
            POCKET_LINK_FORMAT = 'https://getpocket.com/edit?url={0}&title={1}',
            RE_LINK_FORMAT = 'https://reddit.com/submit/?url={0}',
            EV_LINK_FORMAT = 'https://www.evernote.com/clip.action?url={0}&t={1}',
            IN_LINK_FORMAT = 'https://www.linkedin.com/shareArticle?mini=true&url={0}&title={1}&summary={2}&source={0}',
            PI_LINK_FORMAT = 'https://pinterest.com/pin/create/button/?url={0}&media={0}&description={1}',
            SK_LINK_FORMAT = 'https://web.skype.com/share?url={0}&source=button&text={1}',
            WA_LINK_FORMAT = 'https://web.whatsapp.com/send?text={0}%20{1}',
            OK_LINK_FORMAT = 'https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={0}',
            TU_LINK_FORMAT = 'https://www.tumblr.com/widgets/share/tool?posttype=link&title={0}&caption={0}&content={1}&canonicalUrl={1}&shareSource=tumblr_share_button',
            HN_LINK_FORMAT = 'https://news.ycombinator.com/submitlink?t={0}&u={1}',
            XI_LINK_FORMAT = 'https://www.xing.com/app/user?op=share;url={0};title={1}',
            MAIL_LINK_FORMAT = 'mailto:?subject={0}&body={1}',
            FB_CLASS_NAME = 'fb',
            VK_CLASS_NAME = 'vk',
            TW_CLASS_NAME = 'tw',
            TG_CLASS_NAME = 'tg',
            PK_CLASS_NAME = 'pk',
            RE_CLASS_NAME = 're',
            EV_CLASS_NAME = 'ev',
            IN_CLASS_NAME = 'in',
            PI_CLASS_NAME = 'pi',
            SK_CLASS_NAME = 'sk',
            WA_CLASS_NAME = 'wa',
            OK_CLASS_NAME = 'ok',
            TU_CLASS_NAME = 'tu',
            HN_CLASS_NAME = 'hn',
            XI_CLASS_NAME = 'xi',
            MAIL_CLASS_NAME = 'mail',
            PRINT_CLASS_NAME = 'print';

        /**
         * Method for get string in the special format by arguments
         * from https://wcoder.github.io/notes/string-format-for-string-formating-in-javascript
         * @param {string} str
         * @param {Array} args
         */
        var stringFormat = function(str, args) {
            return str.replace(/\{(\d+)\}/g, function(m, n) {
                return args[n] || m;
            });
        };

        /**
         * Method for merge array of strings to the special format string
         * @param {Array} texts
         */
        var mergeForTitle = function(texts) {
            return texts.join(' - ');
        };

        /**
         * Method for initialize class for all elements
         */
        this.i = function() {
            var i, share = d.querySelectorAll('.share-btn');

            for (i = share.length; i--;) {
                initForElement(share[i]);
            }
        };

        /**
         * Method for initialize class for all elements
         * @param {HTMLElement} el Parent container
         */
        var initForElement = function(el) {
            var i, a = el.querySelectorAll('a');

            for (i = a.length; i--;) {
                prepareLink(a[i], {
                    id: '',
                    url: getUrl(el),
                    title: getTitle(el),
                    desc: getDesc(el)
                });
            }
        };

        /**
         * Method for handling click event to link
         * @param {HTMLElement} el
         * @param {Object} options
         */
        var prepareLink = function(el, options) {
            options.id = getAttribute(el, 'data-id');
            if (options.id) {
                addEventListener(el, 'click', options);
            }
        };

        /**
         * Method for getting url from page or options
         * @param {HTMLElement} share
         */
        var getUrl = function(share) {
            return getAttribute(share, 'data-url') || location.href || ' ';
        };

        /**
         * Method for getting title from page or options
         * @param {HTMLElement} share
         */
        var getTitle = function(share) {
            return getAttribute(share, 'data-title') || d.title || ' ';
        };

        /**
         * Method for getting description from page or options
         * @param {HTMLElement} share
         */
        var getDesc = function(share) {
            var metaDesc = d.querySelector('meta[name=description]');
            return getAttribute(share, 'data-desc') || (metaDesc && getAttribute(metaDesc, 'content')) || ' ';
        };

        /**
         * Method for attaching event to the element
         * @param {HTMLElement} el
         * @param {string} eventName
         * @param {Object} opt
         */
        var addEventListener = function(el, eventName, opt) {
            var handler = function() {
                share(opt.id, opt.url, opt.title, opt.desc);
            };

            if (el.addEventListener) {
                el.addEventListener(eventName, handler);
            } else {
                el.attachEvent('on' + eventName, function() {
                    handler.call(el);
                });
            }
        };

        /**
         * Method for get attribute value by name
         * @param {HTMLElement} el
         * @param {string} attrName
         */
        var getAttribute = function(el, attrName) {
            return el.getAttribute(attrName);
        };

        /**
         * Method for encoding text to URL format
         * @param {string} text
         */
        var encode = function(text) {
            return encodeURIComponent(text);
        };

        /**
         * Method for handling chosen links
         * @param {string} id
         * @param {string} urlDef
         * @param {string} titleDef
         * @param {string} descDef
         */
        var share = function(id, urlDef, titleDef, descDef) {
            var url = encode(urlDef),
                desc = encode(descDef),
                title = encode(titleDef),
                text = title || desc || '';

            switch (id) {
                case FB_CLASS_NAME:
                    popupCenter(
                        stringFormat(FB_LINK_FORMAT, [url]),
                        titleDef);
                    break;

                case VK_CLASS_NAME:
                    popupCenter(
                        stringFormat(VK_LINK_FORMAT, [
                            url,
                            mergeForTitle([title, desc])
                        ]),
                        titleDef);
                    break;

                case TW_CLASS_NAME:
                    popupCenter(
                        stringFormat(TW_LINK_FORMAT, [
                            url,
                            mergeForTitle([title, desc])
                        ]),
                        titleDef);
                    break;

                case TG_CLASS_NAME:
                    popupCenter(
                        stringFormat(TG_LINK_FORMAT, [
                            url,
                            mergeForTitle([title, desc])
                        ]),
                        titleDef);
                    break;

                case PK_CLASS_NAME:
                    popupCenter(
                        stringFormat(POCKET_LINK_FORMAT, [
                            url,
                            mergeForTitle([title, desc])
                        ]),
                        titleDef);
                    break;

                case RE_CLASS_NAME:
                    popupCenter(
                        stringFormat(RE_LINK_FORMAT, [url]),
                        titleDef);
                    break;

                case EV_CLASS_NAME:
                    popupCenter(
                        stringFormat(EV_LINK_FORMAT, [url, title]),
                        titleDef);
                    break;

                case IN_CLASS_NAME:
                    popupCenter(
                        stringFormat(IN_LINK_FORMAT, [
                            url,
                            title,
                            mergeForTitle([title, desc])
                        ]),
                        titleDef);
                    break;

                case PI_CLASS_NAME:
                    popupCenter(
                        stringFormat(PI_LINK_FORMAT, [
                            url,
                            mergeForTitle([title, desc])
                        ]),
                        titleDef);
                    break;

                case SK_CLASS_NAME:
                    popupCenter(
                        stringFormat(SK_LINK_FORMAT, [
                            url,
                            mergeForTitle([title, desc])
                        ]),
                        titleDef);
                    break;

                case WA_CLASS_NAME:
                    popupCenter(
                        stringFormat(WA_LINK_FORMAT, [
                            mergeForTitle([title, desc]),
                            url
                        ]),
                        titleDef);
                    break;

                case OK_CLASS_NAME:
                    popupCenter(
                        stringFormat(OK_LINK_FORMAT, [url]),
                        titleDef);
                    break;

                case TU_CLASS_NAME:
                    popupCenter(
                        stringFormat(TU_LINK_FORMAT, [
                            mergeForTitle([title, desc]),
                            url
                        ]),
                        titleDef);
                    break;

                case HN_CLASS_NAME:
                    popupCenter(
                        stringFormat(HN_LINK_FORMAT, [
                            mergeForTitle([title, desc]),
                            url
                        ]),
                        titleDef);
                    break;

                case XI_CLASS_NAME:
                    popupCenter(
                        stringFormat(XI_LINK_FORMAT, [
                            url,
                            mergeForTitle([title, desc])
                        ]),
                        titleDef);
                    break;

                case MAIL_CLASS_NAME:
                    if (title.length > 0 && desc.length > 0) {
                        text = mergeForTitle([title, desc]);
                    }
                    if (url.length > 0) {
                        text = text + ' / ' + url;
                    }

                    location.href = stringFormat(MAIL_LINK_FORMAT, [title, text]);
                    break;

                case PRINT_CLASS_NAME:
                    window.print();
                    break;

                default:
                    break;
            }
        };

        /**
         * Method for opening popup window
         * @param {string} url
         */
        var popupCenter = function(url, title) {
            var _w = 600,
                _h = 400,
                dualScreenLeft = typeof w.screenLeft !== 'undefined' ? w.screenLeft : screen.left,
                dualScreenTop = typeof w.screenTop !== 'undefined' ? w.screenTop : screen.top,
                width = w.innerWidth || d.documentElement.clientWidth || screen.width,
                height = w.innerHeight || d.documentElement.clientHeight || screen.height,
                left = ((width / 2) - (_w / 2)) + dualScreenLeft,
                top = ((height / 3) - (_h / 3)) + dualScreenTop,
                windowFormat = 'resizable,toolbar=yes,location=yes,scrollbars=yes,menubar=yes,width={0},height={1},top={2},left={3}',
                newWindow = w.open(url, '', stringFormat(windowFormat, [_w, _h, top, left]));

            if (newWindow !== null && newWindow.focus) {
                newWindow.focus();
            }
        };
    }

    // start
    var shareButtons = new ShareButtons();
    shareButtons.i();

    return {
        update: function() {
            shareButtons.i();
        }
    };

}));

////////////////////////////////////////////////////////////////////////////////////






///canales/////////////////////////////////////////////////////////
var size = 4;
var sizeMobile = 12;
var App = {
    channels: {
        'tv-senado': {
            'nombre': '🏛️ TV Senado <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://janus-tv.senado.cl/embed.php" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'tv-senado-m3u': {
            'nombre': '🏛️ TV Senado 2 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/tv-senado" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'tv-senado-yutu': {
            'nombre': '🏛️ TV Senado 3 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC4GJ43VNn4AYfiYa0RBCHQg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cam-dipu-m3u-1': {
            'nombre': '🏛️ Cámara Diputados <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/camara-diputados1" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cam-dipu-m3u-2': {
            'nombre': '🏛️ Cámara Diputados 2 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/camara-diputados2" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cam-dipu-m3u-3': {
            'nombre': '🏛️ Cámara Diputados 3 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/camara-diputados3" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cima': {
            'nombre': 'Galeria CIMA <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC4GOcOKkEefz5NamN4WyMFg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cima-mirror': {
            'nombre': 'Galeria CIMA mirror <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://invidio.us/embed/live_stream?channel=UC4GOcOKkEefz5NamN4WyMFg&autoplay=1&volume=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'venticuatro': {
            'nombre': '24 horas <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCTXNz3gjAypWp3EhlIATEJQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                //        },
                //        '24-horas-señal2': {
                //            'nombre': '24 Horas 2 <img src="icons/chile.png"></img>',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/24-horas-2" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        '24-horas-m3u': {
            'nombre': '24 Horas 3 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/24-horas" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'canal-13-m3u': {
            'nombre': 'Canal 13 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/canal13" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'meganoticias': {
            'nombre': 'Meganoticias <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCkccyEbqhhM3uKOI6Shm-4Q&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                //        },
                //        'meganoticias-2': {
                //            'nombre': 'Meganoticias 2 <img src="icons/chile.png"></img>',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/woiFDaVcOKY?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                //        },
                //        'meganoticias-3': {
                //            'nombre': 'Meganoticias 3 <img src="icons/chile.png"></img>',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/ZPaBjdvr0QM?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'meganoticias-mirror': {
            'nombre': 'Meganoticias op1 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://invidio.us/embed/live_stream?channel=UCkccyEbqhhM3uKOI6Shm-4Q&autoplay=1&volume=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        't13': {
            'nombre': 'T13 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/bOvhCYr1NYk?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                //        },
                //        't13-2': {
                //            'nombre': 'T13 2 <img src="icons/chile.png"></img>', 
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCsRnhjcUCR78Q3Ud6OXCTNg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        't13-m3u': {
            'nombre': 'T13 op1 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/t13" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'mbf': {
            'nombre': 'MBF Tobalaba <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://invidio.us/embed/xZFIwLIxdaY&autoplay=1&volume=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                //       },
                //       'tribunal-consti': {
                //           'nombre': '🏛️ Tribunal Constitucional de Chile <img src="icons/chile.png"></img>', 
                //           'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCZaI-1N1oaGb-U8K2VNztjg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                //        },
                //        'cnn-cl': {
                //            'nombre': 'CNN Chile <img src="icons/chile.png"></img>',
                //            'code':'<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCpOAcjJNAp0Y0fhznRrXIJQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cnn-m3u': {
            'nombre': 'CNN Chile 2 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/cnn1" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'tv-chile-m3u': {
            'nombre': 'TV Chile <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/tv-chile" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'chv-m3u-1': {
            'nombre': 'CHV <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/chv1" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'uoct-tobalaba': {
            'nombre': 'UOCT <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/tobalaba" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cooperativa': {
            'nombre': '📻 Cooperativa <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/coopetv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'bbtv': {
            'nombre': '📻 Biobio TV <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/bbtv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'adn': {
            'nombre': '📻 ADN <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/adntv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'duna': {
            'nombre': '📻 Duna <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/dunatv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'infinita': {
            'nombre': '📻 Infinita <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/infinitatv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'universo': {
            'nombre': '📻 Universo <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/universotv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'radio-ae': {
            'nombre': '📻 AE (DUOC) <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://live.grupoz.cl/3991add90400a25a1580f290246f90eb?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'mi-radiols': {
            'nombre': '📻 Mi Radio LS <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UClJiriqxFwmmVIQeASJfICQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'holvoet-tv-m3u': {
            'nombre': 'Holvoet TV <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/holvoet-tv" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'tv-central-m3u': {
            'nombre': 'TV El Central <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/tv-central" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'canal-9': {
            'nombre': 'Canal 9 (Conce) <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/c9?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'tvu': {
            'nombre': 'TVU (Conce) <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/tvu?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'canal-21': {
            'nombre': 'Canal 21 (Chillán) <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://live.grupoz.cl/8b383d0a9cef5560a1bfbbeaf6ad4a38?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'ucv': {
            'nombre': 'UCV TV <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/ucvtv2?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'uatv': {
            'nombre': 'UATV <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/uatv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'vtv': {
            'nombre': 'VTV <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/vtv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'canal-33': {
            'nombre': 'Canal 33 (Temuco) <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://streaminghd.cl/player.video/index.php?s=eduardo555/eduardo555" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                //      },
                //      'left-voice-cima2': {
                //          'nombre': 'Left Voice 🌍', 
                //          'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UClUHLX_Rd-SNOl8Ws2C_EJQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'tn': {
            'nombre': 'Todonoticias 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCj6PcyLvpnIRT_2W_mwa9Aw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'c5n': {
            'nombre': 'C5N 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCFgk2Q2mVO1BklRQhSv6p0w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cnn-español': {
            'nombre': 'CNN en Español 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC_lEiu6917IJz03TnntWUaQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                //        },
                //        'el-tiempo': {
                //            'nombre': 'EL TIEMPO 🌍',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCe5-b0fCK3eQCpwS6MT0aNw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                //       },
                //        'revista-semana': {
                //           'nombre': 'Revista Semana 🌍',
                //           'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC4oQAvXFuNlKivYjUynQKTA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'noti-caracol': {
            'nombre': 'Noticias Caracol 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC2Xq2PK-got3Rtz9ZJ32hLQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'euronews': {
            'nombre': 'euronews (Español) 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCyoGb3SMlTlB8CLGVH4c8Rw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'dw': {
            'nombre': 'DW Español 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCT4Jg8h03dD0iN3Pb5L0PMA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cronica-tv': {
            'nombre': 'Crónica TV 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCT7KFGv6s2a-rh2Jq8ZdM1g&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'RT-español': {
            'nombre': 'RT en Español 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC2mtXUpAYLYJIZ2deSPhlqw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'RT-español2': {
            'nombre': 'RT en vivo 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCEIhICHOQOonjE6V0SLdrHQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                //       },
                //        'rt-en-vivo2': {
                //           'nombre': 'RT en vivo 2 🌍',
                //           'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/culxRjPWWYs?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'RT-News': {
            'nombre': 'RT News 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCpwvZwUam-URkxB7g4USKpg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'RT-america': {
            'nombre': 'RT America 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCczrL-2b-gYK3l4yDld4XlQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'MILENIO': {
            'nombre': 'MILENIO 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCFxHplbcoJK9m70c4VyTIxg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'vpitv': {
            'nombre': 'VPItv 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCVFiIRuxJ2GmJLUkHmlmj4w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'canal-26-arg': {
            'nombre': 'Canal 26 Argentina 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'a24': {
            'nombre': 'A24 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCR9120YBAqMfntqgRTKmkjQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'noticias-uno-colombia': {
            'nombre': 'NoticiasUnoColombia 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC3NUgxBBl05tthfGBS6kPkA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'tv-publica-arg': {
            'nombre': 'TV Pública Argentina 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://invidio.us/embed/live_stream?channel=UCs231K71Bnu5295_x0MB5Pg&autoplay=1&volume=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'france-24': {
            'nombre': 'FRANCE 24 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCQfwfsi5VrQ8yKZ-UWmAEFg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><'
        },
        'sky-news': {
            'nombre': 'Sky News 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCoMdktPbSTixAyNGwb-UYkQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                //       },
                //       'America TV': {
                //           'nombre': 'America TV 🌍',
                //           'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC6NVDkuzY2exMOVFw4i9oHw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'la-nacion': {
            'nombre': 'LA NACION 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCba3hpU7EFBSk817y9qZkiA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'telesur-tv': {
            'nombre': 'teleSUR tv 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCbHFKMtqLYkIBRiPHJwxu_w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'news-nigeria': {
            'nombre': 'TVC News Nigeria  🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCq9e_hCv2jvgck8WowW1NXg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'abc7': {
            'nombre': 'ABC7 SWFL  🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCgp4A6I8LCWrhUzn-5SbKvA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'HK-apple-daily': {
            'nombre': 'HK Apple Daily 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCeqUUXaM75wrK5Aalo6UorQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'HK-cable-tv': {
            'nombre': 'CABLE TV & CABLE News 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC_q7e5XYJB0JDGagcF0KW0w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'live-chino': {
            'nombre': '三立LIVE新聞 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC2TuODJhC03pLgd6MpWP0iw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'live-japones': {
            'nombre': 'ANNnewsCH 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCGCZAYq5Xxojl_tSXcVJhiQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'chilledCow': {
            'nombre': 'ChilledCow 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'chillhop': {
            'nombre': 'Chillhop 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCOxqgCwgOqC2lMqC5PYz_Dg&autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'steezyasfuck': {
            'nombre': 'Steezyasfuck 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCsIg9WMfxjZZvwROleiVsQg&autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'relaxdaily': {
            'nombre': 'Relaxdaily 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCc9EzBNAtdnNiDrMw5CAxUw&autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'imuc-radio-chile': {
            'nombre': 'IMUC Chile <img src="icons/chile.png"></img> 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCIIDtZoaK9UZi4FaGMmL_hw&autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                //        }, 
                //        'kultura': {
                //            'nombre': 'KuLtura.cl <img src="icons/chile.png"></img> 🎵',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCV61cDcwrwFh35OsM8yWp3Q&autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'radio-placeres': {
            'nombre': '📻 Radio Placeres 87.7 FM <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="/radios-solo-audio/radio-placeres" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'radio-manque': {
            'nombre': '📻 Radio Manque 102.9 FM <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="/radios-solo-audio/radio-manque" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'radio-usach': {
            'nombre': '📻 Radio USACH 94.5 FM <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="/radios-solo-audio/radio-usach" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cam-dipu-yutu': {
            'nombre': 'Cámara Diputados Señal Youtube <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCYd5k2TyOyOmUJNx0SH17KA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cam-dipu-05-yutu': {
            'nombre': 'Cámara Diputados YT 05 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC0QKtI8NpeMObauDylsSUDA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cam-dipu-06-yutu': {
            'nombre': 'Cámara Diputados YT 06 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCspWzpGflwb6A8PZqWw49CQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cam-dipu-07-yutu': {
            'nombre': 'Cámara Diputados YT 07 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cam-dipu-08-yutu': {
            'nombre': 'Cámara Diputados YT 08 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCCtDbZzh63vgU_BWHRGsbug&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cam-dipu-11-yutu': {
            'nombre': 'Cámara Diputados YT 11 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCYPKjGKq2yLbAnmth5rFZmQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cam-dipu-12-yutu': {
            'nombre': 'Cámara Diputados YT 12 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCVOWFY-sgbDglBsfOap9okg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'cam-dipu-13-yutu': {
            'nombre': 'Cámara Diputados YT 13 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC33MG3YdoQ16a8a3wODh6lw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'corona-pagina': {
            'nombre': '🦠 COVID-19 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'corona1': {
            'nombre': '🦠 COVID-19 1 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://www.youtube.com/embed/sK5-DfNyewA?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'corona2': {
            'nombre': '🦠 COVID-19 2 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://www.youtube.com/embed/rjYp-_DOJWA?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'corona3': {
            'nombre': '🦠 COVID-19 3 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCDGiCfCZIV5phsoGiPwIcyQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        'corona-pag-chile': {
            'nombre': '🦠 COVID-19 Chile <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://bing.com/covid/local/chile" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                //        },
                //        'corona-realtime2': {
                //            'nombre': 'COVID-19 Realtime Counter ESP 🌍',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCeTLfdV50E3osW8WO4U3Kug&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        },
        '31-minutos': {
            'nombre': '31 minutos - Todos los episodios <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/videoseries?list=PLVI9tQggdGtFXgCwpjTM_d2pdH6ABeRFL&autoplay=0&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        }
    },
    add: function(canal) {
        if (App.channels[canal]) {
            var thisCanal = document.createElement("div");
            thisCanal.innerHTML = App.channels[canal].code;

            if (App.isMobile()) {
                thisCanal.classList.add("col-" + sizeMobile);
            } else {
                thisCanal.classList.add("col-" + size);
            }
            thisCanal.classList.add("stream");
            thisCanal.setAttribute("data-canal", canal);
            var losCanales = document.getElementById("los-canales");
            losCanales.appendChild(thisCanal);
            var n = document.querySelector('button[data-canal="' + canal + '"]');
            n.classList.remove("btn-outline-secondary");
            n.classList.add("btn-primary");
        }
    },
    remove: function(canal) {
        var findCanal = document.querySelector('div[data-canal="' + canal + '"]');
        var losCanales = document.getElementById("los-canales");
        if (findCanal != null) {
            losCanales.removeChild(findCanal);
            var n = document.querySelector('button[data-canal="' + canal + '"]');
            n.classList.remove("btn-primary");
            n.classList.add("btn-outline-secondary");
        }
    },
    isMobile: function() {
        var check = false;
        (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    },

    seedModal: function() {
        for (const llave in App.channels) {
            let buttonTV;
            buttonTV = document.createElement("button");
            buttonTV.classList.add("btn");
            buttonTV.classList.add("btn-outline-secondary");
            buttonTV.setAttribute("data-canal", llave);
            buttonTV.innerHTML = App.channels[llave].nombre;
            let n = document.querySelector(".modal-body");
            n.appendChild(buttonTV);
            buttonTV.addEventListener("click", function() {
                if (buttonTV.getAttribute("class").includes("btn-outline-secondary")) {
                    App.add(llave);
                } else if (buttonTV.getAttribute("class").includes("btn-primary")) {
                    App.remove(llave);
                }
            })
        };
    },


    init: function() {
        App.seedModal();
        App.add("cima");
        if (!App.isMobile()) {
            App.add("cam-dipu-m3u-1");
            App.add("tv-senado-yutu");
            App.add("corona1");
        }
    }
};

App.init();

function updateClock() {
    var now = new Date();
    localtime = now.toTimeString().slice(0, 8);
    utctime = now.toUTCString().slice(17, 25);
    var santiago = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDay(), now.getUTCHours() - 3, now.getUTCMinutes(), now.getUTCSeconds());
    santiagotime = santiago.toTimeString().slice(0, 8);
    document.getElementById("time").innerHTML = localtime;
    document.getElementById("UTCtime").innerHTML = utctime;
    document.getElementById("santiagotime").innerHTML = santiagotime;
    setTimeout(updateClock, 1000);
}

updateClock();

var modal = document.getElementById("custom-modal");
var btn = document.getElementById("custom-btn");
var span = document.getElementById("custom-close");
var span2 = document.getElementById("custom-close2");

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

span2.onclick = function() {
    modal.style.display = "none";
}

var hue = document.getElementById("FormControlSelect1");

hue.onchange = function(event) {
    size = event.target.value
    sizeMobile = event.target.value
    let canal2 = document.querySelectorAll(".stream");
    for (let videos of canal2) {
        videos.classList.remove("col-12", "col-6", "col-4", "col-3", "col-2");
        videos.classList.add("col-" + event.target.value);
        console.log(videos)
    }
}

var anchoStreams = document.getElementById("formControlRange");

anchoStreams.oninput = function(event) {
        let streams2 = document.getElementById("los-canales");
        console.log(streams2)
        streams2.style.maxWidth = event.target.value + "%"
    }
    /////////////////////////////////////////////////////////

//////share buttons//////////
$('.share-button').on('click', function() {
    $(this).addClass('open');
})
$(".share-items").draggable({
    axis: "x",
    containment: ".share-items-wrapper"
});
$(".share-item").on('click', function() {
    $('.share-button').addClass('shared');
    setTimeout(function() {
        $('.share-button').addClass('thankyou');
    }, 800);
    setTimeout(function() {
        $('.share-button').removeClass('open');
        $('.share-button').removeClass('shared');
        $('.share-button').removeClass('thankyou');
    }, 2500);
});
