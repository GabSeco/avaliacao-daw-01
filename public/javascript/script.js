showCurrentDate = () => {
    var date = new Date();
    document.getElementById("current-date").innerHTML = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
}

setTimeout(showCurrentDate(), 4000);