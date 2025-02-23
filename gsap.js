// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor: "blue",
//     borderRadius:"50%",
//     // repeat:-1,
//     // yoyo:true
// })

// gsap.from("#box2",{
//     x:1000,
//     duration:2,
//     delay:3,
//     borderRadius:25,
//     scale:0.5,
//     // repeat:-1,
//     // yoyo:true
// })

// gsap.to("#box3",{
//     x:1000,
//     duration:2,
//     delay:6,
//     rotate:360,
//     backgroundColor: "white",
//     borderRadius:"30%",
//     // repeat:-1,
//     // yoyo:true
// })
// gsap.from("h1",{
//     opacity:0,
//     duration:1,
//     y:30,
//     delay:1,
//     stagger:1,
//     repeat:-1,
//     yoyo:true

// })

var tl = gsap.timeline()

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:1
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:1,
    scale:0.2
    
})

tl.to("#box1",{
    x:1500,
    duration:1.5,
    rotate:360,
    backgroundColor: "blue",
    borderRadius:"50%"
})

tl.to("#box2",{
    x:1500,
    duration:1.5,
    borderRadius:"20%"
})

tl.to("#box3",{
    x:1500,
    duration:1.5,
    rotate:360,
    backgroundColor: "gray",
    borderRadius:"32%"
})