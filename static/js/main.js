window.onload = function () {
    var loc_dict = {
        'docs': '索引',
        'basic': '基础文档',
        'origin': '起源与发展',
        'form': '活动形式',
        'struct': '组织结构变迁',
        'progress': '进步意义',
        'geng': '梗',
        'about': '关于本站'
    };

    var modules = document.getElementById('modules');

    function changeContent() {
        box2_3.innerHTML = document.getElementById(modules.title).innerHTML;
    }

    function locate() {
        var loc_split = modules.title.split('-');
        var locTxt = '';
        for (var i = 0; i < loc_split.length; i++) {
            locTxt += loc_dict[loc_split[i]];
            if (i < loc_split.length - 1) {
                locTxt += '-';
            }
        }
        document.getElementById('loc').innerText = locTxt;
    }

    var items = document.getElementsByName('item');
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            modules.title = this.title;
        }
    }

    var lastTitle = modules.title;
    changeContent();

    var links = document.getElementsByName('link');

    setInterval(function () {
        if (lastTitle != modules.title) {
            changeContent();
            locate();
            lastTitle = modules.title;
        }
        for (var i = 0; i < items.length; i++) {
            if (items[i].title == modules.title.split('-')[0]) {
                items[i].className = 'btn_b';
            } else {
                items[i].className = 'btn_a';
            }
        }
        links = document.getElementsByName('link');
        for (var i = 0; i < links.length; i++) {
            links[i].onclick = function () {
                modules.title = this.title;
            }
        }
    }, 10);

    var backBtn = document.getElementById('back');
    backBtn.onclick = function() {
        var newLoc = '';
        for (var i = 0; i < modules.title.split('-').length - 1; i++) {
            newLoc += modules.title.split('-')[i];
            if (i < modules.title.split('-').length - 2) {
                newLoc += '-';
            }
        }
        modules.title = newLoc;
    }
}
