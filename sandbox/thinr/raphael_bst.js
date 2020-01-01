Raphael.elems=[];
Raphael.gravities=[];
g=Raphael(0,300,window.innerWidth,window.innerHeight);
g.recent_element=null;
Raphael.layer=g.set([]);
game=[];
keycode=[];
mmove=[];
eyeball=[];

//import SVG
String.prototype.importSVG=function(){
	return g.importSVG(this);
}
String.prototype.importSVG.test=function(){
	return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" /></svg>'.importSVG();
}

Raphael.el.fill = function(c){
	return this.attr({fill: c});
}


//for draggable
Raphael.el.dragstart = function () {
	g.recent_element = this;
    this.dx = this.type.include(["ellipse","circle"]) ? this.attr("cx") : this.attr("x");
    this.dy = this.type.include(["ellipse","circle"]) ? this.attr("cy") : this.attr("y");
    this.attr({opacity: .5});
};
Raphael.el.dragmove = function (dx, dy) {
    var att = this.type.include(["ellipse","circle"]) ? {cx: this.dx + dx, cy: this.dy + dy} : {x: this.dx + dx, y: this.dy + dy};
	g.recent_element = this;
    //this.update(dx - (this.dx || 0), dy - (this.dy || 0));
    //this.dx = dx;
    //this.dy = dy;
    this.attr(att);
    if (this.type=="path"){
    	this.transform("t"+this.attr("x")+","+this.attr("y")+"s2,2");
    }
	g.safari();
};
Raphael.el.dragup = function () {
    this.attr({opacity: 1});
    this.dx = this.dy = 0;
};
function setmove(dx, dy) {
	g.recent_element = this;
    this.update(dx - (this.dx || 0), dy - (this.dy || 0));
    this.dx = dx;
    this.dy = dy;
}
Raphael.el.draggable=function(){
	this.drag(this.dragmove,this.dragstart,this.dragup);
	return this;
}


Raphael.el.get_x = function(){
	return this.type.include(["ellipse","circle"]) ? this.attr("cx") : this.attr("x");
}
Raphael.el.get_y = function(){
    return this.type.include(["ellipse","circle"]) ? this.attr("cy") : this.attr("y");
}

Raphael.el.moveto=function(x,y){
    var att = this.type.include(["ellipse","circle"]) ? {cx: x, cy: y} : {x: x, y: y};
   	this.attr(att);
    if (this.type=="path"){
    	this.transform("t"+this.attr("x")+","+this.attr("y")+"s2,2");
    }
	return this;
}

String.prototype.to_path=function(){
	return g.path(this).attr({fill: Raphael.getColor()}).draggable().transform("s2,2");
}


demo_animation=function(){
	p = g.path("M295.186,122.908c12.434,18.149,32.781,18.149,45.215,0l12.152-17.736c12.434-18.149,22.109-15.005,21.5,6.986l-0.596,21.49c-0.609,21.992,15.852,33.952,36.579,26.578l20.257-7.207c20.728-7.375,26.707,0.856,13.288,18.29l-13.113,17.037c-13.419,17.434-7.132,36.784,13.971,43.001l20.624,6.076c21.103,6.217,21.103,16.391,0,22.608l-20.624,6.076c-21.103,6.217-27.39,25.567-13.971,43.001l13.113,17.037c13.419,17.434,7.439,25.664-13.287,18.289l-20.259-7.207c-20.727-7.375-37.188,4.585-36.578,26.576l0.596,21.492c0.609,21.991-9.066,25.135-21.5,6.986L340.4,374.543c-12.434-18.148-32.781-18.148-45.215,0.001l-12.152,17.736c-12.434,18.149-22.109,15.006-21.5-6.985l0.595-21.492c0.609-21.991-15.851-33.951-36.578-26.576l-20.257,7.207c-20.727,7.375-26.707-0.855-13.288-18.29l13.112-17.035c13.419-17.435,7.132-36.785-13.972-43.002l-20.623-6.076c-21.104-6.217-21.104-16.391,0-22.608l20.623-6.076c21.104-6.217,27.391-25.568,13.972-43.002l-13.112-17.036c-13.419-17.434-7.439-25.664,13.288-18.29l20.256,7.207c20.728,7.374,37.188-4.585,36.579-26.577l-0.595-21.49c-0.609-21.992,9.066-25.136,21.5-6.986L295.186,122.908z").attr({stroke: "#666", opacity: .3, "stroke-width": 10});
	maru = g.circle(130, 130, 30).attr({fill: Raphael.getColor()}).draggable();
	over = g.path().attr({stroke: "#fff"});
	len = p.getTotalLength();
	ame = g.ellipse(0, 0, 7, 3).attr({stroke: "none", fill: "#fff"}).onAnimation(function () {
//    var t = this.attr("transform");
//    over.attr({path: "M316,248L" + t[0][1] + "," + t[0][2] + "z"});
	});
//g.circle(316, 248, 5).attr({stroke: "none", fill: "#fff"});
	g.customAttributes.along = function (v) {
    	var point = p.getPointAtLength(v * len);
    	point.x.px();
    	point.x.py();
    	maru.moveto(point.x, point.y);
    	return {
        	transform: "t" + [point.x, point.y] + "r" + point.alpha
	    };
	};
	ame.attr({along: 0});
	var rotateAlongThePath = true;
	function run() {
    	ame.animate({along: 1}, 2e4, function () {
        	ame.attr({along: 0});
        	setTimeout(run);
	    });
	}
	run();
}



function d2r2(d) { return d / 180 * Math.PI; }
function r2d2(r) { return r * 180 / Math.PI; }
r=0;
Raphael.el.mv = function(r_distance) {
    var x_distance, y_distance, point, saved_x, saved_y, EPSILON = 1e-3;
    point = Math.abs(r_distance) < EPSILON;
    if (point) {
      saved_x = "x".get(this);
      saved_y = "y".get(this);
      distance = EPSILON;
    }
    x_distance = "x".get(this) + (r_distance * Math.cos(r));
    y_distance = "y".get(this) - (r_distance * Math.sin(r));
    if (point) {
	    this.moveto(saved_x, saved_y);
    }else{
	    this.moveto(x_distance, y_distance);
    }
	return this;
};
Raphael.el.tr = function(angle) {
    r -= d2r2(angle);
	return this;
};

_counter =function(max) { var i = 0;
    return function() {i = i + 1;if (i>max){i=1;}return i;}
};



Raphael.el.delay = _counter(30);
//jj=["tr(30)","mv(10)","tr(31)","mv(11)","tr(32)","mv(12)"];
Raphael.el.slow=function(i){//test code
    this.delay=_counter(i);
	return this;
}
Raphael.el.addJob=function(a){//test code
    this.jj=a;
	return this;
}

keyevent=function(e){
	//e.keyCode.p();
  if (e.keyCode == 39) {
//	  "right".p();
  }else   if (e.keyCode == 37) {
//	  "left".p();
  }
  keycode.each(function(){
	  return e.keyCode.p();
  })
}
var mouse_event;
function mousemove(e){
  mouse_event=e;
}

MouseEvent.prototype.get_x = function(){
	return this.pageX;
}
MouseEvent.prototype.get_y = function(){
	return this.pageY;
}

Raphael.el.get_r=function(){
	return this.attr("r");
}

//gravity


Raphael.el.grav=0;
Raphael.gravity=function(){
	if (eyeball.length>0){
	  if(g.recent_element){
	    if (!eyeball.include(g.recent_element)){  
			x_obj="x".get(g.recent_element);
		  	y_obj="y".get(g.recent_element);
	    }
	  }else{
	  	x_obj="x".get(mouse_event);
	  	y_obj="y".get(mouse_event)-300;
	  }
//	  x_obj=x_debug;
//	  y_obj=y_debug;
	  
	  ground=eyeball[0];	
	  bit=eyeball[1];	
	  x_distance = x_obj - "x".get(ground);
	  y_distance = y_obj - "y".get(ground);
	  r_distance= "sqrt".evl(x_distance.pow2()+y_distance.pow2());
	  r_limit=("r".get(ground)-"r".get(bit));
	  x = "x".get(ground)+((r_distance < r_limit)? x_distance : x_distance*(r_limit/r_distance));
	  y = "y".get(ground)+((r_distance < r_limit)? y_distance : y_distance*(r_limit/r_distance));
	  var att = bit.type == "circle" ? {cx: x, cy: y} : {x: x, y: y};
	  bit.attr(att);

	  ground=eyeball[2];	
	  bit=eyeball[3];	
	  x_distance = x_obj - "x".get(ground);
	  y_distance = y_obj - "y".get(ground);
	  r_distance= "sqrt".evl(x_distance.pow2()+y_distance.pow2());
	  r_limit=("r".get(ground)-"r".get(bit));
	  x = "x".get(ground)+((r_distance < r_limit)? x_distance : x_distance*(r_limit/r_distance));
	  y = "y".get(ground)+((r_distance < r_limit)? y_distance : y_distance*(r_limit/r_distance));
	  var att = bit.type == "circle" ? {cx: x, cy: y} : {x: x, y: y};
	  bit.attr(att);
	}

  Raphael.elems.each(function(){
   if (this.delay() == 1){//test code
		com = this.jj.shift();
		this[com](1);
		this.jj.push(com)
   }
  })
  Raphael.gravities.each(function(){
    	var yy = this.type.include(["ellipse","circle"]) ? this.attr("cy") : this.attr("y");
		if(yy < 500) {
			this.grav+=.98;
		} else {
      		var att = this.type.include(["ellipse","circle"]) ? { cy: 501} : {y: 501};
	  		this.attr(att)
    		if (this.type=="path"){
    			this.transform("t"+this.attr("x")+","+this.attr("y")+"s2,2");
    		}
	  		this.grav= Math.floor(- (this.grav / 2));
		}
		
    	var att = this.type.include(["ellipse","circle"]) ? { cy:this.attr("cy")+this.grav} : {y:this.attr("y")+this.grav};
    	this.attr(att);
   		if (this.type=="path"){
   			this.transform("t"+this.attr("x")+","+this.attr("y")+"s2,2");
   		}
		return this;
	})	
	setTimeout("Raphael.gravity()" , 10);
}
setTimeout('Raphael.gravity()' , 10);


Array.prototype.balls=function(){
	//draw balls according to 2d array
	this.each(function(){return g.circle(this[0],this[1],15).attr({fill:Raphael.getColor(),opacity:.5})});
	return this;
};
Array.prototype.balls.test=function(){//test code
	return [].sin().balls();
};

g.bezier=function(x, y, ax, ay, bx, by, zx, zy, color){//test code
    var path = [["M", x, y], ["C", ax, ay, bx, by, zx, zy]],
        path2 = [["M", x, y], ["L", ax, ay], ["M", bx, by], ["L", zx, zy]],
        curve = g.path(path).attr({stroke: color || Raphael.getColor(), "stroke-width": 8, "stroke-linecap": "round"}),
        controls = g.set([]);
        g.path(path2).attr({stroke: "#ccc", "stroke-width": 4,"stroke-dasharray": ". "}).pushin(Raphael.layer).pushin(controls);//0
        g.circle(x, y, 9).attr({fill: "#aa0", stroke: "none"}).pushin(Raphael.layer).pushin(controls);//1
        g.circle(ax, ay, 9).attr({fill: "#fff", stroke: "none"}).pushin(Raphael.layer).pushin(controls);//2
        g.circle(bx, by, 9).attr({fill: "#fff", stroke: "none"}).pushin(Raphael.layer).pushin(controls);//3
        g.circle(zx, zy, 9).attr({fill: "#aaa", stroke: "none"}).pushin(Raphael.layer).pushin(controls);//4
        path4 = [["M", zx, zy], ["L", zx+100, zy], ["M", zx+60, zy+100], ["L", zx+160, zy+100]];
        g.path(path4).attr({stroke: "#ccc", "stroke-width": 4,"stroke-dasharray": ". "}).pushin(Raphael.layer).pushin(controls);//add
        g.circle(zx+100, zy, 9).attr({fill: "#fff", stroke: "none"}).pushin(Raphael.layer).pushin(controls);//add
        g.circle(zx+60, zy+100, 9).attr({fill: "#fff", stroke: "none"}).pushin(Raphael.layer).pushin(controls);//add
        g.circle(zx+160, zy+100, 9).attr({fill: "#aaa", stroke: "none"}).pushin(Raphael.layer).pushin(controls);//add
        var path3 = [["M", zx, zy], ["C", zx+100, zy, zx+60, zy+100, zx+160, zy+100]];
        curve2 = g.path(path3).attr({stroke: color || Raphael.getColor(), "stroke-width": 8, "stroke-linecap": "round"}).toBack();


		//xy
        controls[1].update = function (x, y) {
            var X = this.attr("cx") + x,
                Y = this.attr("cy") + y;
            this.attr({cx: X, cy: Y});
            path[0][1] = X;
            path[0][2] = Y;
            path2[0][1] = X;
            path2[0][2] = Y;
            curve.attr({path: path});
            //dash-line
            controls[0].attr({path: path2});
        };
        //axay
        controls[2].update = function (x, y) {
            var X = this.attr("cx") + x,
                Y = this.attr("cy") + y;
            this.attr({cx: X, cy: Y});
            path[1][1] = X;
            path[1][2] = Y;
            path2[1][1] = X;
            path2[1][2] = Y;
            curve.attr({path: path});
            //dash-line
            controls[0].attr({path: path2});
        };
        //bxby
        controls[3].update = function (x, y) {
            var X = this.attr("cx") + x,
                Y = this.attr("cy") + y;
            this.attr({cx: X, cy: Y});
            path[1][3] = X;
            path[1][4] = Y;
            path2[2][1] = X;
            path2[2][2] = Y;
            curve.attr({path: path});
            //dash-line
            controls[0].attr({path: path2});
        };
        //zxzy
        controls[4].update = function (x, y) {
            var X = this.attr("cx") + x,
                Y = this.attr("cy") + y;
            this.attr({cx: X, cy: Y});
            path[1][5] = X;
            path[1][6] = Y;
            path2[3][1] = X;
            path2[3][2] = Y;
            curve.attr({path: path});
            //dash-line
            controls[0].attr({path: path2});
            path3[0][1] = X;
            path3[0][2] = Y;
            curve2.attr({path: path3});
            path4[0][1] = X;
            path4[0][2] = Y;
            //dash-line
            controls[5].attr({path: path4});

        };
        controls[6].update = function (x, y) {//add
            var X = this.attr("cx") + x,
                Y = this.attr("cy") + y;
            this.attr({cx: X, cy: Y});
            path3[1][1] = X;
            path3[1][2] = Y;
            path4[1][1] = X;
            path4[1][2] = Y;
            curve2.attr({path: path3});
            //dash-line
            controls[5].attr({path: path4});
        };
        controls[7].update = function (x, y) {//add
            var X = this.attr("cx") + x,
                Y = this.attr("cy") + y;
            this.attr({cx: X, cy: Y});
            path3[1][3] = X;
            path3[1][4] = Y;
            path4[2][1] = X;
            path4[2][2] = Y;
            curve2.attr({path: path3});
            //dash-line
            controls[5].attr({path: path4});
        };
        controls[8].update = function (x, y) {//add
            var X = this.attr("cx") + x,
                Y = this.attr("cy") + y;
            this.attr({cx: X, cy: Y});
            path3[1][5] = X;
            path3[1][6] = Y;
            path4[3][1] = X;
            path4[3][2] = Y;
            curve2.attr({path: path3});
            //dash-line
            controls[5].attr({path: path4});
        };




        controls.drag(setmove,Raphael.el.dragup);
    return controls;
}
g.bezier.test=function(){
	return g.bezier(70, 100, 70+100, 100, 70+60, 100+100, 70+160, 100+100, Raphael.getColor());
}

Raphael.fn.connection = function (obj1, obj2, line, bg) {
    if (obj1.line && obj1.from && obj1.to) {
        line = obj1;
        obj1 = line.from;
        obj2 = line.to;
    }
    var bb1 = obj1.getBBox(),
        bb2 = obj2.getBBox(),
        p = [{x: bb1.x + bb1.width / 2, y: bb1.y - 1},
        {x: bb1.x + bb1.width / 2, y: bb1.y + bb1.height + 1},
        {x: bb1.x - 1, y: bb1.y + bb1.height / 2},
        {x: bb1.x + bb1.width + 1, y: bb1.y + bb1.height / 2},
        {x: bb2.x + bb2.width / 2, y: bb2.y - 1},
        {x: bb2.x + bb2.width / 2, y: bb2.y + bb2.height + 1},
        {x: bb2.x - 1, y: bb2.y + bb2.height / 2},
        {x: bb2.x + bb2.width + 1, y: bb2.y + bb2.height / 2}],
        d = {}, dis = [];
    for (var i = 0; i < 4; i++) {
        for (var j = 4; j < 8; j++) {
            var dx = Math.abs(p[i].x - p[j].x),
                dy = Math.abs(p[i].y - p[j].y);
            if ((i == j - 4) || (((i != 3 && j != 6) || p[i].x < p[j].x) && ((i != 2 && j != 7) || p[i].x > p[j].x) && ((i != 0 && j != 5) || p[i].y > p[j].y) && ((i != 1 && j != 4) || p[i].y < p[j].y))) {
                dis.push(dx + dy);
                d[dis[dis.length - 1]] = [i, j];
            }
        }
    }
    if (dis.length == 0) {
        var res = [0, 4];
    } else {
        res = d[Math.min.apply(Math, dis)];
    }
    var x1 = p[res[0]].x,
        y1 = p[res[0]].y,
        x4 = p[res[1]].x,
        y4 = p[res[1]].y;
    dx = Math.max(Math.abs(x1 - x4) / 2, 10);
    dy = Math.max(Math.abs(y1 - y4) / 2, 10);
    var x2 = [x1, x1, x1 - dx, x1 + dx][res[0]].toFixed(3),
        y2 = [y1 - dy, y1 + dy, y1, y1][res[0]].toFixed(3),
        x3 = [0, 0, 0, 0, x4, x4, x4 - dx, x4 + dx][res[1]].toFixed(3),
        y3 = [0, 0, 0, 0, y1 + dy, y1 - dy, y4, y4][res[1]].toFixed(3);
    var path = ["M", x1.toFixed(3), y1.toFixed(3), "C", x2, y2, x3, y3, x4.toFixed(3), y4.toFixed(3)].join(",");
    if (line && line.line) {
        line.bg && line.bg.attr({path: path});
        line.line.attr({path: path});
    } else {
        var color = typeof line == "string" ? line : "#000";
        return {
            bg: bg && bg.split && this.path(path).attr({stroke: bg.split("|")[0], fill: "none", "stroke-width": bg.split("|")[1] || 3}),
            line: this.path(path).attr({stroke: color, fill: "none"}),
            from: obj1,
            to: obj2
        };
    }
};



var el;
dragger = function () {
      this.ox = this.type == "rect" ? this.attr("x") : this.attr("cx");
      this.oy = this.type == "rect" ? this.attr("y") : this.attr("cy");
      this.animate({"fill-opacity": .4}, 500);
      this.affect(this.ox);
};
move = function (dx, dy) {
       var att = this.type == "rect" ? {x: this.ox + dx, y: this.oy + dy} : {cx: this.ox + dx, cy: this.oy + dy};
       this.attr(att);
       for (var i = connections.length; i--;) {
            g.connection(connections[i]);
       }
       g.safari();
};
up = function () {
      this.animate({"fill-opacity": 0}, 500);
};

test = function(){
     connections = [];
     shapes = [  g.ellipse(190, 100, 20, 20).pushin(Raphael.layer),
                 g.rect(290, 80, 60, 40, 10).pushin(Raphael.layer),
                 g.rect(290, 180, 60, 40, 2).pushin(Raphael.layer),
                 g.ellipse(450, 100, 20, 20).pushin(Raphael.layer)
               ];
    for (var i = 0, ii = shapes.length; i < ii; i++) {
        var color = Raphael.getColor();
        shapes[i].attr({fill: color, stroke: color, "fill-opacity": 0, "stroke-width": 2, cursor: "move"});
        shapes[i].drag(move, dragger, up);
    }
    shapes[0].affects = [shapes[1]];
    shapes[1].affects = [shapes[2]];
    shapes[3].affects = [shapes[1]];
    connections.push(g.connection(shapes[0], shapes[1], "#fff"));
    connections.push(g.connection(shapes[1], shapes[2], "#fff", "#fff|5"));
    connections.push(g.connection(shapes[1], shapes[3], "#000", "#fff"));
}


                