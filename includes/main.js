(function () {
    var i;
    var Side=document.getElementById("L3Boxes");
    var Main=document.getElementById("DynamicBox");
    for (i = 0; i < 4; i++) {
        CreateBox(Side);
    }

    var count =0;
    var addHeight=250;
    var toAdd=3;
    document.getElementById("button").addEventListener("click", add);
        function add() {
            if(count>7 && count%4==0) {
                document.getElementById("DynamicBox").style.height=(toAdd * addHeight) + "px";
                toAdd++;
            }
            count++;
            CreateBox(Main);
        }

    function CreateBox(parent) {
        var opac = Math.random();
        var newBox = document.createElement("article");
        parent.appendChild(newBox);
        newBox.style.width = "250px";
        newBox.style.height = "250px";
        newBox.style.background = "black";
        newBox.style.cssFloat = "left";
        newBox.style.position = "relative";
        newBox.style.opacity = opac;
        newBox.onmouseover = (function () {
            newBox.style.background = "white";
            newBox.style.opacity = 1;
        })
        newBox.onmouseout = (function () {
            newBox.style.background = "black";
            newBox.style.opacity = opac;
        })
    }
}) ();

