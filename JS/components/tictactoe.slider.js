define(function(){
    var mouseDwn = false,
        currentVal = 0;

        function _getMousePos(e){
            var posX = 0,
                posY = 0;

            if(!e){
                var e = window.event;
            }
            if (e.pageX || e.pageY) {
                posx = e.pageX;
                posy = e.pageY;
            }else if (e.clientX || e.clientY) {
                posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                posy = e.clientY + document.body.scrollTop  + document.documentElement.scrollTop;
            }

          return { 'x': posx, 'y': posy };
        }

    return{
        render: function(){
            var slider = document.querySelector('.sliderControl');

            slider.addEventListener('mousedown', this.startSlide);
            slider.addEventListener('mousemove', this.updateSlide);
            slider.addEventListener('mouseup', this.stopSlide);
        },
        startSlide : function(e){
            mouseDwn = true;
            var pos = _getMousePos(e);
            startMouseX = pos.x;
            console.log(startMouseX);
        },
        updateSlide : function(e){

        },
        stopSlide : function(e){
        }

    }

});