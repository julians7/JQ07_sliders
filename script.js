const jQuery = window.jQuery;
/*
(function ($){
    if(!$)
        throw new Error('jQuery not found!');

    $.fn.welcome = function (options){
        let settings = $.extend({
            name: 'Jone Doe',
            color: 'yellow',
            background: 'green'
        }, options);
        return this.append('Hey ' + settings.name + '!').css({color: 'red', background: "yellow"});
    };
}(jQuery));

/**
*-*-*-**-HTML*-*-*-*-**-

 $(document).ready(function (){
    $('div.test').playBtn();
    $('div.test2').playBtn();
 });
 -*-*-*-*-*-*-*-*-**-

(function ($){

    $.fn.playBtn = function (){
        const that = this;
        const btnShow = $(this).find('.show-btn');
        const btnHide = $(this).find('.hide-btn');
        const btnToggle = $(this).find('.toggle-btn');

        if(btnShow.length && btnHide.length) {
            $(btnShow).click(function (event){
                event.preventDefault();
                //this - element, kde volam ten plugin
                $(that).find('p').show();
            });

            $(btnHide).click(function (event){
                event.preventDefault();
                $(that).find('p').hide();
            });
        } else if(btnToggle.length) {
            $(btnToggle).click(function (event){
                event.preventDefault();
                $(that).find('p').toggle();
            });
        } else {
            throw new Error('missing buttons!');
        }
        return this;
    }
}(jQuery));

 */


/*

        let x = 0;
        let y = 0;
        let z = 0;

        const totalSum = function (x, y, z) {
            const result = x + y + z;
            console.log(x,y,z);
            $('p.result').text("Result: " + result + ".")
        };
        totalSum(x,y,z);

        $("form input[name=datum]").datepicker();

        $("div#progressbar").progressbar({
            value: 80
        });

        $("div#slider1").slider({
            change: function (event, ui){
                x =  ui.value;
                totalSum(x,y,z);
            }
        });


        $("div#slider2").slider({
            change: function (event, ui) {
                y = ui.value;
                totalSum(x,y,z);
            }
        })

        $("div#slider3").slider({
            change: function (event, ui){
                z =  ui.value;
                totalSum(x,y,z);
            }
        })

        $("div#slider").slider({
            step: 5,
            change: function (event, ui) {
                $("div#progressbar").progressbar("value", ui.value);
            }
        });
        $("div#slider").slider("value", 0);
        $( "#accordion" ).accordion();

    })


</script>
<div id="calculator">
    <p>
    <div id="slider1" >Slider 1</div>
    </p>
    <p>
    <div id="slider2">Slider 2</div>
    </p>
    <p>
    <div id="slider3">Slider 3</div>
    </p>

    <p class="result">Result</p>

</div>

*/


(function ($){

      $.fn.calculator = function (options = {}){
const defaultSettings = {
    slider1: 0,
    slider2: 0,
    slider3: 0
}

          //defoult setting
          const settings = $.extend(defaultSettings,options);

        let x = settings.slider1;
        let y = settings.slider2;
        let z = settings.slider3;

        const resultP = $('<p></p>');
        const slider1 = $('<div></div>');
        const slider2 = $('<div></div>');
        const slider3 = $('<div></div>');


        const totalSum = function (x, y, z) {
            const result = x + y + z;
            console.log(x,y,z);
            $(resultP).text("Result: " + result + ".")
        };
        totalSum(x,y,z);

        $(slider1).slider({
            change: function (event, ui){
                x =  ui.value;
                totalSum(x,y,z);

            },
            // setting1
            value: settings.slider1
        });

        $(slider2).slider({
            change: function (event, ui) {
                y = ui.value;
                totalSum(x,y,z);
            },
            value: settings.slider2
        })

        $(slider3).slider({
            change: function (event, ui){
                z =  ui.value;
                totalSum(x,y,z);
            },
            value: settings.slider3
        })
    $(this).append(slider1, slider2, slider3, resultP);

        return this;

    };
}(jQuery));

