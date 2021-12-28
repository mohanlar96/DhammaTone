var tone;

function playTone(time) {
  var playTime = 0;

  // console.log("hi play time"+time );

  var interval = setInterval(function () {
    playTime++;
    tone = new Audio("assets/tone.mp3");

    tone.play();
    // console.log("played time"+playTime);
    if (playTime == time) {
      clearInterval(interval);
    }
  }, 30000);
}

function callTone(day, h, m, s, amPM) {
  if (day != 4 && day != 10) {
    //if day is not 4 or 10
    // console.log("lay and tone ma nyi"+day);
    if (amPM == "AM") {
      if (h == "3" && m == "59" && s == "20") {
        playTone(7);
      } else if (h == "4" && m == "19" && s == "20") {
        playTone(5);
      } else if (h == "6" && m == "31" && s == "20") {
        playTone(1);
      } else if (h == "7" && m == "49" && s == "20") {
        playTone(5);
      } else if (h == "9" && m == "4" && s == "20") {
        playTone(3);
      } else if (h == "10" && m == "59" && s == "20") {
        playTone(1);
      } else if (h == "0" && m == "0" && s == "0") {
        var val = document.getElementById("dayChange").value;
        val = parseInt(val) + 1;

        document.getElementById("dayChange").value = val;
        document.getElementById("day").innerHTML = val;
      }
    } else {
      //if PM

      if (h == "12" && m == "49" && s == "20") {
        playTone(5);
      } else if (h == "2" && m == "14" && s == "20") {
        playTone(1);
      } else if (h == "2" && m == "19" && s == "20") {
        playTone(3);
      } else if (h == "3" && m == "34" && s == "20") {
        playTone(3);
      } else if (h == "4" && m == "59" && s == "20") {
        playTone(1);
      } else if (h == "5" && m == "49" && s == "20") {
        playTone(5);
      } else if (h == "7" && m == "4" && s == "20") {
        playTone(3);
      }
    }
  } else if (day == 4) {
    if (amPM == "AM") {
      if (h == "3" && m == "59" && s == "20") {
        playTone(7);
      } else if (h == "4" && m == "19" && s == "20") {
        playTone(5);
      } else if (h == "6" && m == "29" && s == "20") {
        playTone(1);
      } else if (h == "7" && m == "49" && s == "20") {
        playTone(5);
      } else if (h == "9" && m == "4" && s == "20") {
        playTone(3);
      } else if (h == "10" && m == "59" && s == "20") {
        playTone(1);
      } else if (h == "0" && m == "0" && s == "0") {
        var val = document.getElementById("dayChange").value;
        val = parseInt(val) + 1;
        document.getElementById("dayChange").value = val;
        document.getElementById("day").innerHTML = val;
      }
    } else {
      if (h == "12" && m == "49" && s == "20") {
        playTone(5);
      } else if (h == "1" && m == "44" && s == "20") {
        playTone(1);
      } else if (h == "1" && m == "49" && s == "20") {
        playTone(3);
      } else if (h == "4" && m == "59" && s == "20") {
        playTone(1);
      } else if (h == "5" && m == "49" && s == "20") {
        playTone(5);
      } else if (h == "7" && m == "4" && s == "20") {
        playTone(3);
      }
    }
  } else if (day == 10) {
    if (amPM == "AM") {
      if (h == "3" && m == "59" && s == "20") {
        playTone(7);
      } else if (h == "4" && m == "19" && s == "20") {
        playTone(5);
      } else if (h == "6" && m == "29" && s == "20") {
        playTone(1);
      } else if (h == "7" && m == "49" && s == "20") {
        playTone(5);
      } else if (h == "9" && m == "4" && s == "20") {
        playTone(3);
      } else if (h == "10" && m == "59" && s == "20") {
        playTone(1);
      } else if (h == "0" && m == "0" && s == "0") {
        val = 1;
        document.getElementById("dayChange").value = val;
        document.getElementById("day").innerHTML = val;
      }
    }else{

      if (h == "2" && m == "19" && s == "20") {
        playTone(3);
      }if (h == "5" && m == "49" && s == "20") {
        playTone(5);
      }

    }

  } else if (day == 0) {
    if (h == "0" && m == "0" && s == "0") {
      var val = document.getElementById("dayChange").value;
      val = parseInt(val) + 1;
      document.getElementById("dayChange").value = val;
      document.getElementById("day").innerHTML = val;
    }
  }
} 
//end callTone

setInterval(function () {
  var d = new Date();
  var amPM = "AM";
  var hour = d.getHours();
  if (hour > 12) {
    hour = hour % 12; //23-12=11
    amPM = "PM";
  }
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var day = document.getElementById("dayChange").value;
  callTone(day, hour, min, sec, amPM);

  document.getElementById("displayTime").innerHTML =
    hour + ":" + min + ":" + sec + " " + amPM;
}, 1000);

//Manual Tone
var tone1 = new Audio("assets/tone.mp3");
tone1.loop = true;
var onOff = 1;
document.getElementById("dayChange").onchange = function () {
  document.getElementById("day").innerHTML = this.value;
};

document.getElementById("btnManual").onclick = function () {
  if (onOff == 2) {
    
    onOff = 1;
    tone1.pause();
    this.innerHTML = "Play Bell Manually";
    this.setAttribute("class", "btn btn-primary btn-block fa-lg gradient-custom-2 mb-3");
    tone1.load();
  } else if (onOff == 1) {
    onOff = 2;
    tone1.play();
    this.innerHTML = "Hitting... (Off Tone)";
    this.setAttribute("class", "btn btn-primary btn-block fa-lg mb-3");
    
  }
};
