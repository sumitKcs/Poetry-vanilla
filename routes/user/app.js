if (window.localStorage) {
  if (localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.verified) alert("allowed");
  }
}
