var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation.header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar() {

    showSidebar = !showSidebar;

    if (showSidebar) {


        navigation_header.style.marginLeft = '-10vw';
        navigation_header.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';

    } else {

        navigation_header.style.marginLeft = '-100vw';
        navigation_header.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSidebar() {
    if (showSidebar) {

        toggleSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if (window.innerWidth > 768 && showSidebar) {
        toggleSidebar();
    }
})