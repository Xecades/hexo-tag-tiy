const appendToBody = (document, content) => document.replace(/<\/body>/i, `${content}</body>`);

const conf = hexo.config.tiy;

const enable       = conf && conf.enable        || true;
const base         = conf && conf.base_url      || "https://tiy.xecades.xyz/";
const heightPC     = conf && conf.height_pc     || "500px";
const heightMobile = conf && conf.height_mobile || "700px";
const widthPC      = conf && conf.width_pc      || "100%";
const widthMobile  = conf && conf.width_mobile  || "100%";
const margin       = conf && conf.margin        || "1rem 0";
const border       = conf && conf.border        || "1px solid #eee";

var cnt = 0;

function tiy(args, str) {
    str = Buffer.from(unescape(encodeURIComponent(str)), "latin1").toString('base64');
    return `<div class="tiy-container"><iframe id="tiy${cnt}" frameborder="no" src="${base}" width="100%" height="100%" onload="(document ? this.contentWindow : this.contentDocument).postMessage('${str}', '*')"></iframe></div>`;
}

enable && hexo.extend.tag.register('tiy', tiy, {
    ends: true,
    async: true
});

enable && hexo.extend.filter.register("after_render:html", document => {
    return appendToBody(document,
        `<style>
        .tiy-container {
            position: relative;
            overflow: hidden;
            display: inline-block;
            border: ${border};
            margin: ${margin};
            width: ${widthPC};
            height: ${heightPC};
        }
        
        .tiy-container iframe {
            position: relative;
            top: 0;
            display: inline-block;
            background-color: white;
        }
        
        @media screen and (max-width: 600px) {
            .tiy-container {
                height: ${heightMobile};
                width: ${widthMobile};
            }
        }
        </style>`
    );
});