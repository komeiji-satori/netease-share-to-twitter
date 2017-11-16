var background = chrome.extension.getBackgroundPage();

chrome.tabs.getSelected(null, function(tab) {
    url = new URL(tab.url)
    domain = url.hostname;
    if (domain == 'music.163.com') {
        var song_id = getParameterByName('id', url);
        var urls = encodeURI('https://music.163.com/song?id=' + song_id);
        $('#jump_to_twitter').href = "https://twitter.com/intent/tweet?url=" + urls + "&text=分享:" + tab.title.split(' - 单曲 - 网易云音乐')[0] + "&original_referer=" + urls + "&via=satori_moe&hashtags=netease"
    }else{
        $('#jump_to_twitter').addEventListener('click',function(){
            
        });
    }

});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function $(dom) {
    return document.querySelector(dom);
}