
// from https://github.com/liabru/matter-js/wiki/Getting-started
// module aliases
let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Svg = Matter.Svg,
    Bodies = Matter.Bodies

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

// svg
$('#sticky').find('path').each(function(i, path){
    // vertexSets.push(Svg.pathToVertices(path, 100));
    var v = Bodies.fromVertices(100+(i*80), 80, Svg.pathToVertices(path, 20), {
        render: {
            fillStyle: '#556270',
            strokeStyle: '#556270'
        }
    }, true);
    vertexSets.push(v);
  // World.add(engine.world, v);
});

// static body
let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true })
// ramp
let ground2 = Bodies.rectangle(300, 500, 810, 60, { isStatic: true, angle: Math.PI * 0.2})

// add all of the bodies to the world
World.add(engine.world, [circle1, ground, ground2])

// run the engine
Engine.run(engine)

// run the renderer
Render.run(render)

// resets page
$('.reset').click(()=>{
    location.reload()
})
