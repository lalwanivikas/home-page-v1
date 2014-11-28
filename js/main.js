$(function() {
	var canvas = $("#c");
	var canvasHeight;
	var canvasWidth;
	var ctx;
	var dt = 0.1;
	
	var pointCollection;
	
	function init() {
		updateCanvasDimensions();
		
		var g =  [new Point(47, 146, 0, 10, "hsl(357.224,69.168%,53.824%)"),
			new Point(38, 128, 0, 9, "hsl(357.224,69.168%,53.824%)"),
			new Point(33, 111, 0, 8, "hsl(357.224,69.168%,53.824%)"),
			new Point(26, 81, 0, 8, "hsl(357.224,69.168%,53.824%)"),
			new Point(22, 66, 0, 7, "hsl(357.224,69.168%,53.824%)"),
			new Point(19, 54, 0, 8, "hsl(357.224,69.168%,53.824%)"),
			new Point(56, 130, 0, 8, "hsl(357.224,69.168%,53.824%)"),
			new Point(86, 55, 0, 8, "hsl(357.224,69.168%,53.824%)"),
			new Point(77, 70, 0, 8, "hsl(355.286,78.402%,60.436%)"),
			new Point(72, 85, 0, 8, "hsl(355.048,79.536%,61.248%)"),
			new Point(66, 100, 0, 8, "hsl(353.977,84.639%,64.902%)"),
			new Point(61, 115, 0, 8, "hsl(355.048,79.536%,61.248%)"),
			new Point(30, 96, 0, 8, "hsl(355.048,79.536%,61.248%)"),
			new Point(116, 60, 0, 10, "hsl(40.564,82.548%,52.664%)"),
			new Point(115, 91, 0, 9, "hsl(39.612,87.084%,55.912%)"),
			new Point(114, 111, 0, 8, "hsl(38.337,93.159%,60.262%)"),
			new Point(112, 130, 0, 7, "hsl(38.048,94.536%,61.248%)"),
			new Point(114, 148, 0, 6, "hsl(37.096000000000004,99.072%,64.496%)"),
			new Point(153, 148, 0, 8, "hsl(127.428,63.196%,32.128%)"),
			new Point(154, 131, 0, 7, "hsl(127.428,63.196%,32.128%)"),
			new Point(202, 149, 0, 10, "hsl(127.428,63.196%,32.128%)"),
			new Point(192, 134, 0, 8, "hsl(127.428,63.196%,32.128%)"),
			new Point(184, 123, 0, 6, "hsl(127.428,63.196%,32.128%)"),
			new Point(199, 83, 0, 6, "hsl(126.595,67.165%,34.97%)"),
			new Point(155, 44, 0, 7, "hsl(125.133,74.131%,39.958%)"),
			new Point(155, 59, 0, 6, "hsl(124.589,76.723%,41.814%)"),
			new Point(155, 72, 0, 5, "hsl(124.096,79.072%,43.496%)"),
			new Point(155, 85, 0, 6, "hsl(124.096,79.072%,43.496%)"),
			new Point(155, 99, 0, 6, "hsl(124.827,75.589%,41.002%)"),
			new Point(187, 99, 0, 5, "hsl(124.266,78.262%,42.916%)"),
			new Point(193, 90, 0, 6, "hsl(125.15,74.05%,39.9%)"),
			new Point(176, 110, 0, 10, "hsl(125.507,72.349%,38.682%)"),
			new Point(154, 115, 0, 7, "hsl(126.595,67.165%,34.97%)"),
			new Point(165, 122, 0, 5, "hsl(125.915,70.405%,37.29%)"),
			new Point(270, 94, 0, 8, "hsl(224.286,86.402%,60.436%)"),
			new Point(257, 89, 0, 7, "hsl(223.827,88.589%,62.002%)"),
			new Point(243, 91, 0, 7, "hsl(222.977,92.639%,64.902%)"),
			new Point(232, 99, 0, 7, "hsl(223.453,90.371%,63.278%)"),
			new Point(224, 111, 0, 7, "hsl(224.133,87.131%,60.958%)"),
			new Point(223, 124, 0, 8, "hsl(225.595,80.165%,55.97%)"),
			new Point(241, 151, 0, 8, "hsl(225.595,80.165%,55.97%)"),
			new Point(257, 149, 0, 7, "hsl(225.595,80.165%,55.97%)"),
			new Point(277, 153, 0, 6, "hsl(225.595,80.165%,55.97%)"),
			new Point(269, 126, 0, 6, "hsl(225.595,80.165%,55.97%)"),
			new Point(269, 112, 0, 6, "hsl(226.734,74.738%,52.084%)"),
			new Point(270, 142, 0, 8, "hsl(226.734,74.738%,52.084%)"),
			new Point(227, 140, 0, 9, "hsl(226.734,74.738%,52.084%)"),
			new Point(296, 143, 0, 8, "hsl(357.751,66.657%,52.025999999999996%)"),
			new Point(309, 150, 0, 8, "hsl(357.564,67.548%,52.664%)"),
			new Point(330, 149, 0, 8, "hsl(357.343,68.601%,53.418%)"),
			new Point(343, 135, 0, 8, "hsl(356.646,71.922%,55.796%)"),
			new Point(330, 122, 0, 8, "hsl(356.595,72.165%,55.97%)"),
			new Point(311, 114, 0, 8, "hsl(355.337,78.159%,60.262%)"),
			new Point(303, 98, 0, 7, "hsl(355.337,78.159%,60.262%)"),
			new Point(319, 91, 0, 7, "hsl(355.048,79.536%,61.248%)"),
			new Point(331, 88, 0, 7, "hsl(354.266,83.262%,63.916%)"),
			new Point(343, 91, 0, 7, "hsl(354.266,83.262%,63.916%)"),
			new Point(412, 152, 0, 9, "hsl(39.85,85.95%,55.1%)"),
			new Point(411, 135, 0, 8, "hsl(39.85,85.95%,55.1%)"),
			new Point(412, 118, 0, 8, "hsl(39.85,85.95%,55.1%)"),
			new Point(413, 86, 0, 7, "hsl(39.85,85.95%,55.1%)"),
			new Point(415, 71, 0, 6, "hsl(39.85,85.95%,55.1%)"),
			new Point(414, 55, 0, 7, "hsl(39.85,85.95%,55.1%)"),
			new Point(464, 145, 0, 10, "hsl(39.85,85.95%,55.1%)"),
			new Point(452, 148, 0, 9, "hsl(37.827,95.589%,62.002%)"),
			new Point(440, 151, 0, 7, "hsl(36.977,99.639%,64.902%)"),
			new Point(428, 153, 0, 7, "hsl(38.15,94.05%,60.9%)"),
			new Point(413, 101, 0, 7, "hsl(37.827,95.589%,62.002%)"),
			new Point(533, 94, 0, 8, "hsl(125.286,73.402%,39.436%)"),
			new Point(520, 89, 0, 7, "hsl(124.827,75.589%,41.002%)"),
			new Point(506, 91, 0, 7, "hsl(123.977,79.639%,43.902%)"),
			new Point(495, 99, 0, 7, "hsl(124.453,77.371%,42.278%)"),
			new Point(487, 111, 0, 7, "hsl(125.133,74.131%,39.958%)"),
			new Point(486, 124, 0, 8, "hsl(126.595,67.165%,34.97%)"),
			new Point(504, 151, 0, 8, "hsl(126.595,67.165%,34.97%)"),
			new Point(520, 149, 0, 7, "hsl(126.595,67.165%,34.97%)"),
			new Point(540, 153, 0, 6, "hsl(126.595,67.165%,34.97%)"),
			new Point(532, 126, 0, 6, "hsl(126.595,67.165%,34.97%)"),
			new Point(532, 112, 0, 6, "hsl(127.734,61.738%,31.084%)"),
			new Point(533, 142, 0, 8, "hsl(127.734,61.738%,31.084%)"),
			new Point(490, 140, 0, 9, "hsl(127.734,61.738%,31.084%)"),
			new Point(569, 150, 0, 10, "hsl(224.048,87.536%,61.248%)"),
			new Point(571, 52, 0, 10, "hsl(224.048,87.536%,61.248%)"),
			new Point(569, 71, 0, 9, "hsl(225.595,80.165%,55.97%)"),
			new Point(570, 133, 0, 8, "hsl(225.85,78.95%,55.1%)"),
			new Point(570, 88, 0, 7, "hsl(226.428,76.196%,53.128%)"),
			new Point(570, 120, 0, 6, "hsl(226.751,74.657%,52.025999999999996%)"),
			new Point(569, 104, 0, 6, "hsl(226.751,74.657%,52.025999999999996%)"),
			new Point(613, 148, 0, 10, "hsl(357.734,66.738%,52.084%)"),
			new Point(656, 151, 0, 10, "hsl(357.734,66.738%,52.084%)"),
			new Point(623, 133, 0, 9, "hsl(356.612,72.084%,55.912%)"),
			new Point(650, 134, 0, 9, "hsl(356.612,72.084%,55.912%)"),
			new Point(665, 132, 0, 8, "hsl(356.612,72.084%,55.912%)"),
			new Point(605, 130, 0, 8, "hsl(356.612,72.084%,55.912%)"),
			new Point(603, 112, 0, 7, "hsl(355.15,79.05%,60.9%)"),
			new Point(629, 118, 0, 7, "hsl(355.15,79.05%,60.9%)"),
			new Point(647, 117, 0, 7, "hsl(355.15,79.05%,60.9%)"),
			new Point(671, 117, 0, 7, "hsl(354.589,81.723%,62.814%)"),
			new Point(675, 100, 0, 7, "hsl(354.589,81.723%,62.814%)"),
			new Point(640, 101, 0, 7, "hsl(354.589,81.723%,62.814%)"),
			new Point(600, 95, 0, 7, "hsl(354.589,81.723%,62.814%)"),
			new Point(745, 94, 0, 8, "hsl(38.286,93.402%,60.436%)"),
			new Point(732, 89, 0, 7, "hsl(37.827,95.589%,62.002%)"),
			new Point(718, 91, 0, 7, "hsl(36.977,99.639%,64.902%)"),
			new Point(707, 99, 0, 7, "hsl(37.453,97.371%,63.278%)"),
			new Point(699, 111, 0, 7, "hsl(38.133,94.131%,60.958%)"),
			new Point(698, 124, 0, 8, "hsl(39.595,87.165%,55.97%)"),
			new Point(716, 151, 0, 8, "hsl(39.595,87.165%,55.97%)"),
			new Point(732, 149, 0, 7, "hsl(39.595,87.165%,55.97%)"),
			new Point(752, 153, 0, 6, "hsl(39.595,87.165%,55.97%)"),
			new Point(744, 126, 0, 6, "hsl(39.595,87.165%,55.97%)"),
			new Point(744, 112, 0, 6, "hsl(40.734,81.738%,52.084%)"),
			new Point(745, 142, 0, 8, "hsl(40.734,81.738%,52.084%)"),
			new Point(702, 140, 0, 9, "hsl(40.734,81.738%,52.084%)"),
			new Point(778, 148, 0, 10, "hsl(127.564,62.548%,31.664%)"),
			new Point(823, 149, 0, 10, "hsl(127.564,62.548%,31.664%)"),
			new Point(778, 125, 0, 9, "hsl(126.85,65.95%,34.1%)"),
			new Point(823, 127, 0, 9, "hsl(126.595,67.165%,34.97%)"),
			new Point(822, 107, 0, 8, "hsl(125.507,72.349%,38.682%)"),
			new Point(784, 104, 0, 8, "hsl(124.827,75.589%,41.002%)"),
			new Point(776, 86, 0, 7, "hsl(124.827,75.589%,41.002%)"),
			new Point(797, 94, 0, 7, "hsl(124.827,75.589%,41.002%)"),
			new Point(816, 92, 0, 7, "hsl(124.827,75.589%,41.002%)"),
			new Point(859, 60, 0, 10, "hsl(226.564,75.548%,52.664%)"),
			new Point(858, 91, 0, 9, "hsl(225.612,80.084%,55.912%)"),
			new Point(857, 111, 0, 8, "hsl(224.337,86.159%,60.262%)"),
			new Point(855, 130, 0, 7, "hsl(224.048,87.536%,61.248%)"),
			new Point(857, 148, 0, 6, "hsl(223.096,92.072%,64.496%)")];
		
		gLength = g.length;
		for (var i = 0; i < gLength; i++) {
			g[i].curPos.x = (canvasWidth/2 - 180) + g[i].curPos.x;
			g[i].curPos.y = (canvasHeight/2 - 65) + g[i].curPos.y;
			
			g[i].originalPos.x = (canvasWidth/2 - 180) + g[i].originalPos.x;
			g[i].originalPos.y = (canvasHeight/2 - 65) + g[i].originalPos.y;
		};
		
		pointCollection = new PointCollection();
		pointCollection.points = g;
		
		initEventListeners();
		timeout();
	};
	
	function initEventListeners() {
		$(window).bind('resize', updateCanvasDimensions).bind('mousemove', onMove);
		
		canvas.get(0).ontouchmove = function(e) {
			e.preventDefault();
			onTouchMove(e);
		};
		
		canvas.get(0).ontouchstart = function(e) {
			e.preventDefault();
		};
	};
	
	function updateCanvasDimensions() {
		canvas.attr({height: $(window).height(), width: $(window).width()});
		canvasWidth = canvas.width();
		canvasHeight = canvas.height();

		draw();
	};
	
	function onMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.pageX, e.pageY);
	};
	
	function onTouchMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
	};
	
	function timeout() {
		draw();
		update();
		
		setTimeout(function() { timeout() }, 30);
	};
	
	function draw() {
		var tmpCanvas = canvas.get(0);

		if (tmpCanvas.getContext == null) {
			return; 
		};
		
		ctx = tmpCanvas.getContext('2d');
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		
		if (pointCollection)
			pointCollection.draw();
	};
	
	function update() {		
		if (pointCollection)
			pointCollection.update();
	};
	
	function Vector(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
 
		this.addX = function(x) {
			this.x += x;
		};
		
		this.addY = function(y) {
			this.y += y;
		};
		
		this.addZ = function(z) {
			this.z += z;
		};
 
		this.set = function(x, y, z) {
			this.x = x; 
			this.y = y;
			this.z = z;
		};
	};
	
	function PointCollection() {
		this.mousePos = new Vector(0, 0);
		this.points = new Array();
		
		this.newPoint = function(x, y, z) {
			var point = new Point(x, y, z);
			this.points.push(point);
			return point;
		};
		
		this.update = function() {		
			var pointsLength = this.points.length;
			
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];
				
				if (point == null)
					continue;
				
				var dx = this.mousePos.x - point.curPos.x;
				var dy = this.mousePos.y - point.curPos.y;
				var dd = (dx * dx) + (dy * dy);
				var d = Math.sqrt(dd);
				
				if (d < 150) {
					point.targetPos.x = (this.mousePos.x < point.curPos.x) ? point.curPos.x - dx : point.curPos.x - dx;
					point.targetPos.y = (this.mousePos.y < point.curPos.y) ? point.curPos.y - dy : point.curPos.y - dy;
				} else {
					point.targetPos.x = point.originalPos.x;
					point.targetPos.y = point.originalPos.y;
				};
				
				point.update();
			};
		};
		
		this.draw = function() {
			var pointsLength = this.points.length;
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];
				
				if (point == null)
					continue;

				point.draw();
			};
		};
	};
	
	function Point(x, y, z, size, colour) {
		this.colour = colour;
		this.curPos = new Vector(x, y, z);
		this.friction = 0.8;
		this.originalPos = new Vector(x, y, z);
		this.radius = size;
		this.size = size;
		this.springStrength = 0.1;
		this.targetPos = new Vector(x, y, z);
		this.velocity = new Vector(0.0, 0.0, 0.0);
		
		this.update = function() {
			var dx = this.targetPos.x - this.curPos.x;
			var ax = dx * this.springStrength;
			this.velocity.x += ax;
			this.velocity.x *= this.friction;
			this.curPos.x += this.velocity.x;
			
			var dy = this.targetPos.y - this.curPos.y;
			var ay = dy * this.springStrength;
			this.velocity.y += ay;
			this.velocity.y *= this.friction;
			this.curPos.y += this.velocity.y;
			
			var dox = this.originalPos.x - this.curPos.x;
			var doy = this.originalPos.y - this.curPos.y;
			var dd = (dox * dox) + (doy * doy);
			var d = Math.sqrt(dd);
			
			this.targetPos.z = d/100 + 1;
			var dz = this.targetPos.z - this.curPos.z;
			var az = dz * this.springStrength;
			this.velocity.z += az;
			this.velocity.z *= this.friction;
			this.curPos.z += this.velocity.z;
			
			this.radius = this.size*this.curPos.z;
			if (this.radius < 1) this.radius = 1;
		};
		
		this.draw = function() {
			ctx.fillStyle = this.colour;
			ctx.beginPath();
			ctx.arc(this.curPos.x, this.curPos.y, this.radius, 0, Math.PI*2, true);
			ctx.fill();
		};
	};
	
	init();
});
