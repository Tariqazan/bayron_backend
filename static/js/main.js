
// loading screen js
var loadingScreen;

function loader() {
    loadingScreen = setTimeout(showPage, 1500);
}

function showPage() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-body").style.display = "block";
}

// scrolling animation
$("#info_1").hide();
$("#info_2").hide();
$("#info_3").hide();
$("#company_info").hide();
$("#company").hide();
$(".side-text").hide();
document.addEventListener('wheel', scrollPage);

function scrollPage(e) {
    const maxHeight = window.innerHeight - document.getElementById('company_info').scrollHeight
    const company_info_top = (window.pageYOffset * 100) / maxHeight;
    var nodesName = ['SECTION'];
    if (nodesName.includes(e.target.nodeName)) {
        var next = e.target.nextElementSibling;
        var prev = e.target.previousElementSibling;
    } else {
        var next = e.target.closest(nodesName).nextElementSibling;
        var prev = e.target.closest(nodesName).previousElementSibling;
    }
    var prev_id = prev.getAttribute("id")
    var next_id = next.getAttribute("id")
    if (e.deltaY < 0) {
        e.preventDefault();
        if (prev_id === 'info_1') {
            $(".side-text").show();
            document.getElementById("navigation").style.display = "block";
            document.getElementById("bottom-nav").style.display = "block";
            $("#info_1").show();
            $(".info_1").removeClass("padding-transition");
            $("#banner").hide();
            $("#info_2").hide();
            $("#info_3").hide();
            $("#company_info").hide();
            $("#company").hide();
            $("#contact").hide();
        } else if (prev_id === 'info_2') {
            document.getElementById("bottom-nav").style.display = "block";
            $("#info_2").show();
            $("#banner").hide();
            $("#info_1").hide();
            $("#info_3").hide();
            $("#company_info").hide();
            $("#company").hide();
            $("#contact").hide();
        } else if (prev_id === 'info_3' && company_info_top == 0) {
            document.getElementById("bottom-nav").style.display = "block";
            $("#info_3").show();
            $("#banner").hide();
            $("#info_1").hide();
            $("#info_2").hide();
            $("#company_info").hide();
            $("#company").hide();
            $("#contact").hide();
        } else if (prev_id === 'banner') {
            $(".side-text").hide();
            document.getElementById("bottom-nav").style.display = "none";
            document.getElementById("navigation").style.display = "none";
            $("#banner").show();
            $("#info_2").hide();
            $("#info_1").hide();
            $("#info_3").hide();
            $("#company_info").hide();
            $("#company").hide();
            $("#contact").hide();
        } else if (prev_id === 'company_info') {
            document.getElementById("bottom-nav").style.display = "none";
            $("#company_info").show();
            $("#company_info").addClass('fixed');
            $("#banner").hide();
            $("#info_2").hide();
            $("#info_1").hide();
            $("#info_3").hide();
        }
        else {
            $("#company_info").removeClass('fixed');
            $("#company").show();
            $("#contact").show();
        }
    } else if (e.deltaY > 0) {
        e.preventDefault();
        if (next_id === 'info_1') {
            $(".side-text").show();
            document.getElementById("navigation").style.display = "block";
            document.getElementById("bottom-nav").style.display = "block";
            $("#info_1").show();
            $(".info_1").addClass("padding-transition");
            $("#banner").hide();
            $("#info_2").hide();
            $("#info_3").hide();
            $("#company_info").hide();
            $("#company").hide();
            $("#contact").hide();
        } else if (next_id === 'info_2') {
            document.getElementById("bottom-nav").style.display = "block";
            $("#info_2").show();
            $(".info_2").addClass("padding-transition");
            $("#banner").hide();
            $("#info_1").hide();
            $("#info_3").hide();
            $("#company_info").hide();
            $("#company").hide();
            $("#contact").hide();
        } else if (next_id === 'info_3') {
            document.getElementById("bottom-nav").style.display = "block";
            $("#info_3").show();
            $(".info_3").addClass("padding-transition");
            $("#banner").hide();
            $("#info_1").hide();
            $("#info_2").hide();
            $("#company_info").hide();
            $("#company").hide();
            $("#contact").hide();
        } else if (next_id === 'banner') {
            $(".side-text").hide();
            document.getElementById("bottom-nav").style.display = "none";
            document.getElementById("navigation").style.display = "none";
            $("#banner").show();
            $("#info_2").hide();
            $("#info_1").hide();
            $("#info_3").hide();
            $("#company_info").hide();
            $("#company").hide();
            $("#contact").hide();
        } else if (next_id === 'company_info') {
            document.getElementById("bottom-nav").style.display = "none";
            $("#company_info").addClass('fixed');
            $("#company_info").show();
            $("#banner").hide();
            $("#info_2").hide();
            $("#info_1").hide();
            $("#info_3").hide();
        } else {
            $("#company_info").removeClass('fixed');
            $("#company").show();
            $("#contact").show();
        }
    } else {
        return false;
    }
}

// onclick filter overseas brand
$("#overseas").click(function () {
    $(".overseas-brands").hide(500);
    $(".domestic-brands").show(500);
});
// onclick filter domestic brand
$("#domestic").click(function () {
    $(".domestic-brands").hide(500);
    $(".overseas-brands").show(500);
});