import $ from "jquery";
import styles from "./master.css";
import home_page from './pages/home.html';
import me_pic from './imgs/me.jpg';

$(document).ready(function () {
    $( "#pills-home" ).html( home_page );
    $("#PICme").html('<img id="Me" class="card-img-top" src="'+me_pic+'" alt="Card image cap">');
});
  
