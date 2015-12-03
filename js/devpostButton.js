var devpostButton = document.getElementsByClassName("devpostButton")[0];
var devpostButtonDeadline = Date.parse(devpostButton.dataset.deadline);
var devpostButtonStart = Date.parse(devpostButton.dataset.begin);

if (devpostButtonStart>=devpostButtonDeadline){
  console.log("deadline / start date error");
  alert('deadline / start date error');
}

if (Date.parse(new Date()) <= devpostButtonStart){
  devpostButton.innerHTML = "Register on Devpost";
  devpostButton.setAttribute('href', "http://" + devpostButton.dataset.slug + ".devpost.com/");
  console.log('subs not open yet')
} else

if (devpostButtonDeadline > Date.parse(new Date())){
  devpostButton.innerHTML = "Submit your hack on Devpost";
  devpostButton.setAttribute('href', "http://" + devpostButton.dataset.slug + ".devpost.com/submissions/new");
  console.log('subs open');
}

else if (devpostButtonDeadline <= Date.parse(new Date())){
  devpostButton.innerHTML = "Submissions are now closed";
  devpostButton.setAttribute('href', "http://" + devpostButton.dataset.slug + ".devpost.com/submissions");
  console.log('subs closed');
}

/*HACK DEM STYLES THO!*/

if (devpostButton.dataset.defcss != "false"){

  devpostButton.style.backgroundColor = "#2d9eb2";
  devpostButton.style.borderColor = "#237a89";
  devpostButton.style.color = "white";
  devpostButton.style.boxShadow = "none";
  devpostButton.style.borderRadius = "2px";
  devpostButton.style.transition = "all 200ms ease-out";
  devpostButton.style.display = "inline-block";
  devpostButton.style.borderStyle = "solid";
  devpostButton.style.borderWidth = "0 0 3px";
  devpostButton.style.cursor = "pointer";
  devpostButton.style.fontFamily = "'ClearSans', 'HelveticaNeue-Bold', 'Helvetica Neue Bold', sans-serif";
  devpostButton.style.fontWeight = "bold";
  devpostButton.style.lineHeight = "normal";
  devpostButton.style.margin = "0 0 1.25em";
  devpostButton.style.position = "relative";
  devpostButton.style.textDecoration = "none";
  devpostButton.style.textAlign = "center";
  devpostButton.style.display = "inline-block";
  devpostButton.style.paddingTop = "0.5625em";
  devpostButton.style.paddingRight = "1.125em";
  devpostButton.style.paddingBottom = "0.625em";
  devpostButton.style.paddingLeft = "1.125em";
  devpostButton.style.fontSize = "1em";
}
