const searchData = document.querySelector("#search-data");
const submitData = document.querySelector(".submit");

submitData.onclick = function(){
    const urlData = "https://www.baidu.com/s?wd="+ searchData.value;
    window.location.href = urlData;
    // window.open(urlData);
}

