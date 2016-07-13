    var x = new Date(document.lastModified);
    document.getElementById("mod").innerHTML = formatAsUSDate(x);
    function formatAsUSDate(date) {
  var day = date.getDate();
  var month = date.getMonth()+1;
  var year = date.getFullYear();
  return  month + '/' + day + '/' + year;
}