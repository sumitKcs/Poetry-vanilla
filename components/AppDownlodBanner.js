const AppDownloadBanner = () => {
  const element = ` 
<div class="w_full app_download_wrapper gap_lg">


    <span class="items_center text_xl text_bold ">Lekhak App is Coming Soon</span>
    <p class="items_center text_lg">A place to join poetry world</p>
    <div class="items_center">
        <img src="assets/img/google-play.png" alt="google play icon" width="50">
        <span class="self_center">Google Play</span>
    </div>



</div>
</div>`;
  const appDownload = document.createElement("appDownload");
  appDownload.classList.add("w_full");
  appDownload.classList.add("items_center");
  appDownload.classList.add("self_center");
  appDownload.innerHTML = element;

  const main = document.querySelector("main");

  main.appendChild(appDownload);
};

export default AppDownloadBanner;
