window.onload = function () {
    var gary = document.getElementById("gary");
    var spuzi = document.getElementById("spuzi");

    var speed = 1.5;

    var path = [
        {x: 615, y:135}, {x: 655, y:180}, {x: 667, y:175}, {x: 677, y:182},
        {x: 690, y:177}, {x: 697, y:185}, {x: 690, y:200}, {x: 707, y:219},
        {x: 719, y:214}, {x: 730, y:220}, {x: 740, y:215}, {x: 750, y:225},
        {x: 737, y:255}, {x: 750, y:250}, {x: 770, y:270}, {x: 782, y:260},
        {x: 765, y:240}, {x: 773, y:227}, {x: 767, y:215}, {x: 775, y:208},
        {x: 795, y:228}, {x: 785, y:240}, {x: 795, y:250}, {x: 820, y:235},
        {x: 840, y:255}, {x: 850, y:245}, {x: 843, y:235}, {x: 864, y:215},
        {x: 885, y:238}, {x: 874, y:247}, {x: 893, y:273}, {x: 918, y:255},
        {x: 928, y:263}, {x: 940, y:255}, {x: 930, y:242}, {x: 940, y:233},
        {x: 933, y:217}, {x: 970, y:192}, {x: 988, y:213}, {x: 1000, y:204},
        {x: 1020, y:225}, {x: 1033, y:218}, {x: 1025, y:206}, {x: 1033, y:196},
        {x: 1017, y:173}, {x: 1027, y:163}, {x: 1047, y:185}, {x: 1061, y:176},
        {x: 1068, y:187}, {x: 1047, y:208}, {x: 1053, y:220}, {x: 1033, y:240},
        {x: 1040, y:252}, {x: 1007, y:283}, {x: 1024, y:306}, {x: 1037, y:298},
        {x: 1047, y:308}, {x: 1059, y:300}, {x: 1068, y:310}, {x: 1059, y:321},
        {x: 1067, y:331}, {x: 1057, y:343}, {x: 1065, y:355}, {x: 1053, y:365},
        {x: 1043, y:355}, {x: 1020, y:374}, {x: 1058, y:422}, {x: 1023, y:452},
        {x: 1013, y:442}, {x: 1000, y:450}, {x: 990, y:440}, {x: 968, y:457},
        {x: 975, y:470}, {x: 965, y:480}, {x: 973, y:492}, {x: 962, y:498},
        {x: 928, y:510}, {x: 918, y:500}, {x: 906, y:507}, {x: 923, y:530},
        {x: 890, y:563}, {x: 907, y:586}, {x: 896, y:596}, {x: 887, y:586},
        {x: 875, y:596}, {x: 865, y:586}, {x: 855, y:595}, {x: 870, y:615},
        {x: 884, y:608}, {x: 894, y:618}, {x: 918, y:600}, {x: 928, y:610},
        {x: 918, y:625}, {x: 928, y:633}, {x: 948, y:618}, {x: 958, y:625},
        {x: 970, y:618}, {x: 980, y:628}, {x: 970, y:638}, {x: 1000, y:673},
        {x: 955, y:715}, {x: 980, y:750}, {x: 995, y:743}, {x: 1005, y:753},
        {x: 995, y:763}, {x: 1003, y:775}, {x: 993, y:785}, {x: 980, y:775},
        {x: 930, y:810}, {x: 950, y:835}, {x: 940, y:850}, {x: 950, y:860},
        {x: 940, y:870}, {x: 950, y:880}, {x: 985, y:855}, {x: 995, y:865},
        {x: 985, y:875}, {x: 1015, y:910}, {x: 1025, y:900}, {x: 1015, y:890},
        {x: 1035, y:870}, {x: 1030, y:855}, {x: 1050, y:835}, {x: 1045, y:825},
        {x: 1055, y:815}, {x: 1065, y:825}, {x: 1085, y:808}, {x: 1060, y:770},
        {x: 1045, y:775}, {x: 1010, y:735}, {x: 1016, y:720}, {x: 1010, y:710},
        {x: 1030, y:690}, {x: 1025, y:680}, {x: 1035, y:667}, {x: 1015, y:647},
        {x: 1003, y:653}, {x: 993, y:643}, {x: 1005, y:630}, {x: 965, y:583},
        {x: 940, y:600}, {x: 930, y:590}, {x: 940, y:580}, {x: 935, y:565},
        {x: 958, y:548}, {x: 938, y:524}, {x: 948, y:514}, {x: 968, y:534},
        {x: 980, y:530}, {x: 990, y:540}, {x: 1005, y:532}, {x: 1033, y:565},
        {x: 1008, y:583}, {x: 1000, y:573}, {x: 990, y:583}, {x: 1003, y:603}, 
		{x: 1030, y:610}
    ];

    // ---- GARY ----
    let xGary = path[0].x;
    let yGary = path[0].y;
    let indexGary = 0;

    gary.style.left = xGary + "px";
    gary.style.top = yGary + "px";

    // ---- SPUZI ----
    let xSpuzi = path[0].x;
    let ySpuzi = path[0].y;
    let spuziQueue = [];

    spuzi.style.left = xSpuzi + "px";
    spuzi.style.top = ySpuzi + "px";

    // ---- KONČNA SLIKA ----
    var overlay = document.createElement("div");
    overlay.style.display = "block"; // skrita na začetku
	
    document.body.appendChild(overlay);

    function animate() {
        // --- GARY ---
        if (indexGary < path.length) {
            let target = path[indexGary];
            let dx = target.x - xGary;
            let dy = target.y - yGary;
            let dist = Math.sqrt(dx*dx + dy*dy);

            if (dist < speed) {
                xGary = target.x;
                yGary = target.y;
                spuziQueue.push({x: xGary, y: yGary});
                indexGary++;
            } else {
                xGary += (dx / dist) * speed;
                yGary += (dy / dist) * speed;
            }

            gary.style.left = xGary + "px";
            gary.style.top = yGary + "px";
        }

        // --- SPUZI ---
        if (spuziQueue.length > 0) {
            let target = spuziQueue[0];
            let dx = target.x - xSpuzi;
            let dy = target.y - ySpuzi;
            let dist = Math.sqrt(dx*dx + dy*dy);

            if (dist < speed) {
                xSpuzi = target.x;
                ySpuzi = target.y;
                spuziQueue.shift();
            } else {
                xSpuzi += (dx / dist) * speed;
                ySpuzi += (dy / dist) * speed;
            }

            spuzi.style.left = xSpuzi + "px";
            spuzi.style.top = ySpuzi + "px";
        }

        // --- KONEC: prikaži sliko, ko oba dosežeta konec ---
        if (indexGary >= path.length && spuziQueue.length === 0) {
             overlay.classList.add("show"); // prikaže overlay
        } else {
            requestAnimationFrame(animate);
        }
    }

    animate();
};
