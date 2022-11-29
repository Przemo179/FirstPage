function myFilterFunction() {
    var input, ul, li, a, i, txtValue, filter;
    input = document.getElementById("userInput");
    ul = document.getElementById("myUL");
    li = document.getElementsByTagName("li");
    filter = input.value.toUpperCase();

    for(i=0;i<li.length;i++)    {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent;

        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display ="";
        } else {
            li[i].style.display = "none";
        }
    }
}