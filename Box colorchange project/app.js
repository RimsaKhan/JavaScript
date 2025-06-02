const center = document.querySelector("#center");

center.addEventListener("mousemove", function (details) {
    let rectanglelocation = center.getBoundingClientRect();
    let insiderec = details.clientX - rectanglelocation.left;

    if (insiderec < rectanglelocation.width / 2) {
        // Mouse on the left half → Blue
        var bluecolor = gsap.utils.mapRange(
            0,
            rectanglelocation.width / 2,
            255,
            0,
            insiderec
        );
        gsap.to(center, {
            backgroundColor: `rgb(0, 0, ${bluecolor})`,
            ease: "power4.out",
        });
    } else {
        // Mouse on the right half → Red
        var redcolor = gsap.utils.mapRange(
            rectanglelocation.width / 2,
            rectanglelocation.width,
            0,
            255,
            insiderec
        );
        gsap.to(center, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: "power4.out",
        });
    }
});

center.addEventListener("mouseleave", function () {
    gsap.to(center, {
        backgroundColor: "white",
        ease: "power4.out",
    });
});
