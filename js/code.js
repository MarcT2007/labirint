window.onload = function () {

    const gary = document.getElementById("gary");
    const spuzi = document.getElementById("spuzi");
    const overlay = document.getElementById("overlay");
    const restartBtn = document.getElementById("restartBtn");
    const box = document.getElementById("box");

    let animationId = null;
    const speed =0.8;

    // ---- POT ----
    let path = [
        {"x":99,"y":130},{"x":121,"y":132},{"x":141,"y":138},{"x":154,"y":146},{"x":166,"y":153},
        {"x":177,"y":165},{"x":190,"y":177},{"x":196,"y":187},{"x":209,"y":184},{"x":216,"y":194},
        {"x":226,"y":186},{"x":233,"y":193},{"x":225,"y":201},{"x":232,"y":210},{"x":241,"y":221},
        {"x":253,"y":216},{"x":260,"y":226},{"x":271,"y":216},{"x":279,"y":227},{"x":270,"y":235},
        {"x":260,"y":242},{"x":268,"y":255},{"x":277,"y":246},{"x":287,"y":259},{"x":296,"y":267},
        {"x":307,"y":257},{"x":296,"y":247},{"x":289,"y":238},{"x":297,"y":230},{"x":290,"y":218},
        {"x":301,"y":212},{"x":309,"y":220},{"x":316,"y":228},{"x":311,"y":235},{"x":306,"y":240},
        {"x":313,"y":248},{"x":322,"y":244},{"x":331,"y":238},{"x":342,"y":240},{"x":349,"y":251},
        {"x":352,"y":253},{"x":364,"y":244},{"x":355,"y":234},{"x":375,"y":219},{"x":394,"y":238},
        {"x":381,"y":246},{"x":397,"y":267},{"x":417,"y":250},{"x":426,"y":260},{"x":438,"y":253},
        {"x":431,"y":241},{"x":441,"y":233},{"x":431,"y":221},{"x":461,"y":199},{"x":478,"y":217},
        {"x":490,"y":210},{"x":506,"y":229},{"x":517,"y":222},{"x":508,"y":209},{"x":519,"y":203},
        {"x":501,"y":185},{"x":510,"y":175},{"x":525,"y":192},{"x":539,"y":185},{"x":547,"y":197},
        {"x":528,"y":212},{"x":536,"y":225},{"x":514,"y":238},{"x":524,"y":250},{"x":493,"y":274},
        {"x":511,"y":296},{"x":521,"y":287},{"x":526,"y":299},{"x":539,"y":289},{"x":546,"y":300},
        {"x":537,"y":311},{"x":546,"y":318},{"x":534,"y":327},{"x":544,"y":337},{"x":533,"y":348},
        {"x":526,"y":335},{"x":504,"y":353},{"x":539,"y":393},{"x":508,"y":419},{"x":500,"y":408},
        {"x":487,"y":417},{"x":481,"y":408},{"x":459,"y":425},{"x":469,"y":434},{"x":458,"y":443},
        {"x":465,"y":451},{"x":456,"y":461},{"x":448,"y":450},{"x":429,"y":468},{"x":419,"y":456},
        {"x":407,"y":467},{"x":423,"y":485},{"x":394,"y":512},{"x":411,"y":533},{"x":399,"y":542},
        {"x":394,"y":533},{"x":379,"y":541},{"x":372,"y":531},{"x":363,"y":537},{"x":379,"y":558},
        {"x":389,"y":552},{"x":398,"y":560},{"x":417,"y":545},{"x":427,"y":554},{"x":418,"y":563},
        {"x":425,"y":573},{"x":444,"y":558},{"x":454,"y":567},{"x":465,"y":559},{"x":473,"y":567},
        {"x":465,"y":575},{"x":487,"y":604},{"x":448,"y":639},{"x":472,"y":670},{"x":483,"y":662},
        {"x":490,"y":671},{"x":482,"y":681},{"x":490,"y":691},{"x":481,"y":699},{"x":471,"y":691},
        {"x":439,"y":719},{"x":429,"y":722},{"x":437,"y":732},{"x":448,"y":742},{"x":442,"y":750},
        {"x":440,"y":757},{"x":445,"y":763},{"x":438,"y":773},{"x":436,"y":773},{"x":442,"y":781},
        {"x":475,"y":756},{"x":481,"y":766},{"x":473,"y":775},{"x":482,"y":788},{"x":495,"y":803},
        {"x":508,"y":798},{"x":501,"y":789},{"x":507,"y":782},{"x":519,"y":771},{"x":512,"y":760},
        {"x":528,"y":749},{"x":528,"y":738},{"x":524,"y":733},{"x":536,"y":725},{"x":541,"y":733},
        {"x":563,"y":716},{"x":540,"y":687},{"x":527,"y":693},{"x":497,"y":658},{"x":502,"y":648},
        {"x":499,"y":639},{"x":499,"y":632},{"x":509,"y":625},{"x":516,"y":618},{"x":509,"y":610},
        {"x":519,"y":599},{"x":502,"y":581},{"x":490,"y":586},{"x":483,"y":579},{"x":491,"y":570},
        {"x":480,"y":556},{"x":473,"y":544},{"x":460,"y":530},{"x":450,"y":537},{"x":436,"y":546},
        {"x":429,"y":535},{"x":439,"y":527},{"x":432,"y":517},{"x":440,"y":511},{"x":451,"y":501},
        {"x":443,"y":489},{"x":436,"y":479},{"x":444,"y":473},{"x":457,"y":484},{"x":472,"y":486},
        {"x":483,"y":489},{"x":491,"y":487},{"x":501,"y":497},{"x":507,"y":507},{"x":513,"y":515},
        {"x":509,"y":523},{"x":497,"y":530},{"x":489,"y":521},{"x":483,"y":526},{"x":480,"y":532},
        {"x":489,"y":540},{"x":497,"y":548},{"x":514,"y":565},{"x":531,"y":581}
    ];

    let xGary, yGary, indexGary;
    let xSpuzi, ySpuzi, spuziQueue;
    let lastDirection = 1; // 1 = desno, -1 = levo

    function setPosition(el, x, y) {
        el.style.left = x + "px";
        el.style.top = y + "px";
    }

    // Gary se obrne glede na prejšnjo x-smer
    function updateGaryDirection(dx) {
        if (dx > 1) lastDirection = -1;
        else if (dx < -1) lastDirection = 1;
        gary.style.transform = `translate(-50%, -50%) scaleX(${lastDirection})`;
    }

    function updateSpuziDirection(dx) {
        if (dx > 1) spuzi.style.transform = "translate(-50%, -50%) scaleX(1)";
        else if (dx < -1) spuzi.style.transform = "translate(-50%, -50%) scaleX(-1)";
    }

    function resetAnimation() {
        if (animationId) cancelAnimationFrame(animationId);

        xGary = path[0].x; yGary = path[0].y; indexGary = 0;
        xSpuzi = path[0].x; ySpuzi = path[0].y; spuziQueue = [];
        overlay.classList.remove("show");
        lastDirection = 1;

        setPosition(gary, xGary, yGary);
        setPosition(spuzi, xSpuzi, ySpuzi);
        setPosition(box, path[path.length - 1].x, path[path.length - 1].y);

        animate();
    }

    function animate() {
        if (indexGary < path.length) {
            let target = path[indexGary];
            let dx = target.x - xGary;
            let dy = target.y - yGary;
            let dist = Math.sqrt(dx*dx + dy*dy);

            if (dist < speed) {
                xGary = target.x; yGary = target.y;
                spuziQueue.push({x: xGary, y: yGary});
                indexGary++;
            } else {
                xGary += (dx / dist) * speed;
                yGary += (dy / dist) * speed;
            }

            setPosition(gary, xGary, yGary);
            updateGaryDirection(dx);
        }

        if (spuziQueue.length > 0) {
            let target = spuziQueue[0];
            let dx = target.x - xSpuzi;
            let dy = target.y - ySpuzi;
            let dist = Math.sqrt(dx*dx + dy*dy);

            if (dist < speed) {
                xSpuzi = target.x; ySpuzi = target.y; spuziQueue.shift();
            } else {
                xSpuzi += (dx / dist) * speed;
                ySpuzi += (dy / dist) * speed;
            }

            setPosition(spuzi, xSpuzi, ySpuzi);
            updateSpuziDirection(dx);
        }

        if (indexGary >= path.length && spuziQueue.length === 0) {
            overlay.classList.add("show");
            animationId = null;
        } else {
            animationId = requestAnimationFrame(animate);
        }
    }

    restartBtn.addEventListener("click", resetAnimation);

    window.addEventListener("resize", () => {
        setPosition(gary, xGary, yGary);
        setPosition(spuzi, xSpuzi, ySpuzi);
        setPosition(box, path[path.length - 1].x, path[path.length - 1].y);
    });

    resetAnimation();
};