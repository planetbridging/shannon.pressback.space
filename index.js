import $ from "jquery";
import styles from "./master.css";
import home_page from './pages/home.html';
import work_study_page from './pages/worknstudy.html';
import cert_of_comp from './pages/certofcomp.html';
import me_pic from './imgs/me.jpg';

$(document).ready(function () {
    $( "#pills-home" ).html( home_page );
    $( "#pills-profile" ).html( work_study_page );
    $( "#pills-contact" ).html( cert_of_comp );
    $("#PICme").html('<img id="Me" class="card-img-top" src="'+me_pic+'" alt="Card image cap">');
});
  
