if (window.top === window && window.location.href.indexOf("/stamp.jsp") != -1) {
  var loc = window.location.href.replace("/stamp.jsp", "PDF/getPDF.jsp")
  window.location.href = loc;
}
