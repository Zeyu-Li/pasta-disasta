
// from https://github.com/liabru/matter-js/wiki/Getting-started
// module aliases
let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Common = Matter.Common,
    Svg = Matter.Svg,
    Bodies = Matter.Bodies,
    Vertices = Matter.Vertices

let engine = Engine.create()


// create a renderer
let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1500,
        height: 700,
        pixelRatio: 1,
        background: '#111',
        wireframeBackground: '#222',
        hasBounds: false,
        enabled: true,
        wireframes: true,
        showSleeping: true,
        showDebug: false,
        showBroadphase: false,
        showBounds: false,
        showVelocity: true,
        showCollisions: false,
        showSeparations: false,
        showAxes: false,
        showPositions: false,
        showAngleIndicator: false,
        showIds: false,
        showShadows: false,
        showVertexNumbers: false,
        showConvexHulls: false,
        showInternalEdges: false,
        showMousePosition: false
    }
})

// create two boxes and a ground
let circle1 = Bodies.circle(100, 50, 80, { density: 1 })
// let circle2 = Bodies.circle(400, 400, 40)

// svg not working!
// let path =`
//     <path class="st0" d="M56.9,109.3L34.1,86.5c0,0-0.1,0-0.1-0.1V56.6h19.1c1.5,0,2.7-1.2,2.7-2.7c0-1.5-1.2-2.7-2.7-2.7H34v-5.8
//         c9.3-1.7,16.4-9.9,16.4-19.7c0-11.1-9-20.1-20.1-20.1s-20.1,9-20.1,20.1c0,10.5,8,19,18.2,20v5.6H11.2c-1.5,0-2.7,1.2-2.7,2.7
//         c0,1.5,1.2,2.7,2.7,2.7h17.3v30.1c0,0.2,0,0.4,0.1,0.6L6.6,109.3c-1.1,1.1-1.1,2.8,0,3.9c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8
//         l21.3-21.3l21.3,21.3c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8C58,112.1,58,110.4,56.9,109.3z M28,34.5c-0.8,0-1.5-0.7-1.5-1.5V14
//         c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5v17.5h7c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5H28z"/>
// `

// var vertices = Svg.pathToVertices(path, 130)
// console.log(vertices)
let person = [Bodies.rectangle(600-20, 450, 30, 100), Bodies.rectangle(600+15, 450, 30, 100), Bodies.rectangle(600, 350, 60, 100), Bodies.circle(600, 250, 30)]

// static body
let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true })
// ramp
let ground2 = Bodies.rectangle(300, 500, 810, 60, { isStatic: true, angle: Math.PI * 0.2})

// add all of the bodies to the world
World.add(engine.world, [circle1, ground, ground2].concat(person))

// run the engine
Engine.run(engine)

// run the renderer
Render.run(render)

// resets page
$('.reset').click(()=>{
    location.reload()
})
