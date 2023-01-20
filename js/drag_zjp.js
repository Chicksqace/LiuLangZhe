// 陈攀宇做
function getElem (id) {
  return document.getElementById(id);
}

function trimPX (_px) {
  if(_px==null || _px=="")
    return 0;
  return parseInt(_px.substr(0, _px.lastIndexOf("px")));
}

function hitInRect (hitX, hitY, rcLeft, rcTop, rcWidth, rcHeight) {
  return (hitX>=rcLeft && hitX<rcLeft+rcWidth && hitY>=rcTop && hitY<rcTop+rcHeight);
}

function outerDiv () {
  return getElem("_outerDiv");
}

function imageDiv () {
  return getElem("_imageDiv");
}

var dragging = false;
var startTop = 0; 
var startLeft = 0;
var dragPosY = 0;
var dragPosX = 0;

window.addEventListener("load", initPage, false);

function initPage () {
  outerDiv().addEventListener("mousedown", 
    function (event) {
      startTop = trimPX(imageDiv().style.top);
      startLeft = trimPX(imageDiv().style.left);
      var width = trimPX(imageDiv().style.width);
      var height = trimPX(imageDiv().style.height);

      if (hitInRect(event.clientX, event.clientY, startLeft, startTop, width, height)) {
        dragging = true;
        dragPosX = event.clientX;
        dragPosY = event.clientY;
        event.preventDefault(); 
      }
    },
    false
  );

  outerDiv().addEventListener("mousemove", 
    function (event) {
      if (dragging){
        imageDiv().style.cursor="pointer";
        //imageDiv().style.top = parseInt(startTop)+(event.clientY - dragPosY) + "px";
        imageDiv().style.top = "0px";
  var dx = parseInt(startLeft)+(event.clientX - dragPosX);
  if(dx< -800){
    dx = -800;
  }else if(dx > 0){  //可拖动框宽度减去图片宽度
    dx = 0;
  }
        imageDiv().style.left = dx + "px";
        //imageDiv().style.left = parseInt(startLeft)+(event.clientX - dragPosX) + "px";
  //alert(imageDiv().style.left);
      }
      event.preventDefault();
    },
    false
  );

  outerDiv().addEventListener("mouseup", 
    function (event) {
      dragging = false;
      imageDiv().style.cursor="default";          
      event.preventDefault();
    },
    false
  );
}