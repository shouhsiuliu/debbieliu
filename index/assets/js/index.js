function openGrid(evt, tabGrid) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabGrid).style.display = "block";
  evt.currentTarget.className += " active";


}


function tabLinkActive(){
  // var tablinks = document.getElementsByClassName("tablinks");
  var profile_icon = document.getElementById('profile_icon');

  // if (tablinks.classList.contains('active')) {
  //   profile_icon.setAttribute('d', "M12.5,2.5C9,2.5,6.2,5.4,6.2,8.8s2.8,6.3,6.3,6.3c3.5,0,6.3-2.8,6.3-6.3S16,2.5,12.5,2.5z");
  // }
    // var profile_icon = document.getElementById('profile_icon');
    // profile_icon.setAttribute('d', "M12.5,2.5C9,2.5,6.2,5.4,6.2,8.8s2.8,6.3,6.3,6.3c3.5,0,6.3-2.8,6.3-6.3S16,2.5,12.5,2.5z");
    // if($(this).hasClass("active")){
    //   profile_icon.setAttribute('d', "M12.5,2.5C9,2.5,6.2,5.4,6.2,8.8s2.8,6.3,6.3,6.3c3.5,0,6.3-2.8,6.3-6.3S16,2.5,12.5,2.5z");
    // }
    

  }
  var profile_icon = document.getElementById('profile_icon');
  profile_icon.setAttribute('d', "M12.5,2.5C9,2.5,6.2,5.4,6.2,8.8s2.8,6.3,6.3,6.3c3.5,0,6.3-2.8,6.3-6.3S16,2.5,12.5,2.5z");

