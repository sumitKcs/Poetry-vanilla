import APP_DATA from "./assets/js/data.js";
import { Header, ToggleSideBar } from "./components/Header.js";
import BottomMenu from "./components/BottomMenu.js";
import ImageSlider from "./components/ImageSlider.js";
import SearchInputAndButton from "./components/SearchInputAndButton.js";
import Mood from "./components/Mood.js";
import Collections from "./components/Collections.js";
import Categories from "./components/Categories.js";
import LatestBLogs from "./components/LatestBlogs.js";
LatestBLogs;
import Writers from "./components/Writers.js";
import QuoteOfTheDay from "./components/QuoteOfTheDay.js";
import AppDownloadBanner from "./components/AppDownlodBanner.js";

Header(APP_DATA.MENU, APP_DATA.LOGO);
ToggleSideBar();
ImageSlider(APP_DATA.SLIDER_IMAGES);
BottomMenu();

SearchInputAndButton();
Mood();
Collections(APP_DATA.COLLECTIONS);
Categories(APP_DATA.CATEGORIES);
LatestBLogs(APP_DATA.BLOGS_LATEST);
Writers(APP_DATA.WRITERS);
QuoteOfTheDay(APP_DATA.QUOTE_OF_THE_DAY);
AppDownloadBanner();
