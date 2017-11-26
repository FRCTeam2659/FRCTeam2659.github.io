// set and cache variables
var w, container, carousel, item, radius, itemLength, rY, ticker, fps;
var mouseX = 0;
var mouseY = 0;
var mouseZ = 0;
var addX = 0;


var hover=1;

// www.jq22.com,
// no need to create my own :)
var fps_counter = {

    tick: function ()
    {
        // this has to clone the array every tick so that
        // separate instances won't share state
        this.times = this.times.concat(+new Date());
        var seconds, times = this.times;

        if (times.length > this.span + 1)
        {
            times.shift(); // ditch the oldest time
            seconds = (times[times.length - 1] - times[0]) / 1000;
            return Math.round(this.span / seconds);
        }
        else return null;
    },

    times: [],
    span: 20
};
var counter = Object.create(fps_counter);



$(document).ready( init )

function init()
{
    w = $(window);
    container = $( '#contentContainer' );
    carousel = $( '#carouselContainer' );
    item = $( '.carouselItem' );
    itemLength = $( '.carouselItem' ).length;
    fps = $('#fps');
    rY = 360 / itemLength;
    radius = Math.round( (160) / Math.tan( Math.PI / itemLength ) );

    // set container 3d props
    TweenMax.set(container, {perspective:600})
    //TweenMax.set(carousel, {z:-(radius)})
    TweenMax.set(carousel, {z:-1200})//G

    //matrix（1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1）
    // create carousel item props
    mouseX=-0.2;


    for ( var i = 0; i < itemLength; i++ )
    {
        var $item = item.eq(i);
        var $block = $item.find('.carouselItemInner');

        //thanks @chrisgannon!        
        TweenMax.set($item, {rotationY:rY * i, z:radius, transformOrigin:"50% 50% " + -radius + "px"});

        animateIn( $item, $block )
    }

    // set mouse x and y props and looper ticker
    window.addEventListener( "mousemove", onMouseMove, false );
    ticker = setInterval( looper, 1000/60 );
}

function animateIn( $item, $block )
{
    var $nrX = 360 * getRandomInt(2);
    var $nrY = 360 * getRandomInt(2);

    var $nx = -(2000) + getRandomInt( 4000 )
    var $ny = -(2000) + getRandomInt( 4000 )
    var $nz = -4
    000 +  getRandomInt( 4000 )

    var $s = 1.5 + (getRandomInt( 10 ) * .1)
    var $d = 1 - (getRandomInt( 8 ) * .1)

    TweenMax.set( $item, { autoAlpha:1, delay:$d } )
    TweenMax.set( $block, { z:$nz, rotationY:$nrY, rotationX:$nrX, x:$nx, y:$ny, autoAlpha:0} )
    TweenMax.to( $block, $s, { delay:$d, rotationY:0, rotationX:0, z:0,  ease:Expo.easeInOut} )
    TweenMax.to( $block, $s-.5, { delay:$d, x:0, y:0, autoAlpha:1, ease:Expo.easeInOut} )
}

function onMouseMove(event)
{
    //mouseX = -(-(window.innerWidth * .5) + event.pageX) * .0025;
    mouseX=-0.2;

    mouseY = -(-(window.innerHeight * .5) + event.pageY ) * .01;

    //G
    //console.log(mouseY)
    //if(hover==0){
    if(mouseY>-0.42 && mouseY<0.6){
        mouseX=0;
    }else{
        mouseX=-0.2;
    }
    mouseY=0;
    mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY ) - 200);
}

// loops and sets the carousel 3d properties
var kk = 1;
function looper()
{
    addX += mouseX
    TweenMax.to( carousel, 1, { rotationY:addX, rotationX:mouseY, ease:Quint.easeOut } )

    //TweenMax.set( carousel, {z:mouseZ } )
    //TweenMax.set( $(".aaa"), {z:mouseZ+100 } )


    //TweenMax.set( $(".content3d"), {rotationX:50,rotationY:-10, } )

    //fps.text( 'Framerate: ' + counter.tick() + '/60 FPS' )
}

function getRandomInt( $n )
{
    return Math.floor((Math.random()*$n)+1);
}










//G	
$(document).ready(function(){
    var length=$(".carouselItem").length;
    var ind;
    for(var i=1;i<=length;i++){
        (function(){
            var ind1=i;
            $("#item"+i).hover(function(){
                hover=0;
                ind=ind1;
                $(".sec1_xiang").stop().animate({"opacity":"0"},500);
                $(".sec1_xiang").eq(ind-1).stop().animate({"opacity":"1"},500);
            })
        })()
    }
    $("body").on("mouseleave",function(){
        hover=1;
        $(".sec1_xiang").stop().animate({"opacity":"0"},500);
    })



})