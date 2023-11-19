let vid;

function draw() {
  // Den anden ting den checker er der kun for at man ikke klikker på den imens det ikke er meningen at man skal
  if(mouseIsPressed && parent.document.getElementById(window.name).classList == "page show"){
  noCanvas()
  select("#klikMig").addClass("notShown")
  select("#theImage").addClass("notShown")
  vid = createVideo('crismasSong.mp4');
  vid.loop();
  vid.volume(0.1);
  vid.size(windowWidth-10, windowHeight-10);
  }
}
