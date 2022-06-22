// html load

// sliderBar load
$(document).ready(()=>{
    $('#list-group').load("sliderBar.html");    // list
});

// pageContent load
function changePageContent(htmlFileName) {
    $(document).ready(() => {
        $("#pageContent").load(htmlFileName);
    });
};
