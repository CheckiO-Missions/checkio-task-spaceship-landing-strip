requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        var colorOrange4 = "#F0801A";
        var colorOrange3 = "#FA8F00";
        var colorOrange2 = "#FAA600";
        var colorOrange1 = "#FABA00";

        var colorBlue4 = "#294270";
        var colorBlue3 = "#006CA9";
        var colorBlue2 = "#65A1CF";
        var colorBlue1 = "#8FC7ED";

        var colorGrey4 = "#737370";
        var colorGrey3 = "#9D9E9E";
        var colorGrey2 = "#C5C6C6";
        var colorGrey1 = "#EBEDED";

        var colorWhite = "#FFFFFF";

        var goodCell = "SG";
        var badCell = "WRT";
        var zx = 10;
        var zy = 10;
        var cellSize = 20;

        var colorCell = "#737370";
        var colorDark = "#294270";
        var colorOrange = "#F0801A";
        var colorLightOrange = "#FABA00";
        var colorBlue = "#006CA9";
        var colorLightBlue = "#8FC7ED";
        var colorWhite = "#FFFFFF";

        var attrCell = {"stroke": colorCell, "stroke-width": 1};
        var attrGoodCell = {"fill": colorLightBlue};
        var attrBadCell = {"fill": colorLightOrange};
        var attrGoodText = {"stroke": colorBlue, "fill": colorBlue, "font-family": "Verdana", "font-size": 16};
        var attrBadText = {"stroke": colorOrange, "fill": colorOrange, "font-family": "Verdana", "font-size": 16};
        var attrPreResult = {"stroke": colorBlue, "stroke-width": 3};
        var attrResult = {"stroke": colorDark, "stroke-width": 5, "r": 4};

        var delay = 300;
        var stepDelay = delay * 2;

        //FUNCTIONS
        function convertStringToArrayMap(strMap) {
            var res = [];
            for (var i = 0; i < strMap.length; i++) {
                res.push(strMap[i].split(""));
            }
            return res;
        }

        function createStrip(paper, stripMap) {
            var arrayMap = convertStringToArrayMap(stripMap);
            var rowQuantity = arrayMap.length;
            var columnQuantity = arrayMap[0].length;
            var mapSet = paper.set();
            for (var i = 0; i < rowQuantity; i++) {
                var rowSet = paper.set();
                for (var j = 0; j < columnQuantity; j++) {
                    var cellSet = paper.set();
                    cellSet.push(paper.rect(
                        zx + j * cellSize, zy + i * cellSize,
                        cellSize, cellSize).attr(attrCell));
                    cellSet.push(paper.text(zx + (j + 0.5) * cellSize,
                        zy + (i + 0.5) * cellSize,
                        arrayMap[i][j]));
                    if (goodCell.indexOf(arrayMap[i][j]) !== -1) {
                        cellSet[0].attr(attrGoodCell);
                        cellSet[1].attr(attrGoodText);
                    }
                    else {
                        cellSet[0].attr(attrBadCell);
                        cellSet[1].attr(attrBadText);
                    }
                    cellSet[0].mark = [i, j];
                    cellSet[1].mark = [i, j];
                    rowSet.push(cellSet);
                }
                mapSet.push(rowSet);
            }
            return mapSet;
        }

        var $tryit;

        var io = new extIO({
            multipleArguments: false,
            functions: {
                python: 'checkio',
                js: 'landingArea'
            },
            animation: function ($expl, data) {

                var checkioInput = data.in;
                var rightResult = data.ext["answer"];
                var userResult = data.out;
                var result = data.ext["result"];
                var result_addon = data.ext["result_addon"];
                var explanation = data.ext["explanation"];


                var canvas = Raphael($expl[0],
                    zx * 2 + cellSize * checkioInput[0].length,
                    zy * 2 + cellSize * checkioInput.length,
                    0, 0);
                var mapSet = createStrip(canvas, checkioInput);
                var resultRect = canvas.rect(zx, zy, 0, 0).attr(attrPreResult);

                for (var e = 0; e < explanation.length - 1; e++) {
                    setTimeout(function() {
                        var t = e;
                        return function() {
                            resultRect.animate({"x": zx + explanation[t][1] * cellSize,
                                "y": zy + explanation[t][0] * cellSize,
                                "width": explanation[t][3] * cellSize,
                                "height": explanation[t][2] * cellSize}, delay);
                        }
                    }(), stepDelay * e);
                }
                setTimeout(function() {
                    var t = e;
                    return function() {
                        resultRect.animate({"x": zx + explanation[e][1] * cellSize,
                            "y": zy + explanation[e][0] * cellSize,
                            "width": explanation[e][3] * cellSize,
                            "height": explanation[e][2] * cellSize}, delay);
                        resultRect.animate(attrResult, delay);
                    }
                }(), stepDelay * e);
            },

            retConsole: function(ret){
                $tryit.find(".checkio-result-in").html(ret);
            },

            tryit: function(this_e) {
                $tryit = this_e.extSetHtmlTryIt(this_e.getTemplate('tryit'));
                var tMap = [
                    "GSGSGS",
                    "GSGSGS",
                    "GSRTGS",
                    "GSWRGS",
                    "GSGSGS",
                    "GSGSGS"
                ];


                var tCanvas = Raphael($tryit.find(".tryit-canvas")[0],
                    zx * 2 + cellSize * tMap[0].length,
                    zy * 2 + cellSize * tMap.length,
                    0, 0);
                var mapSet = createStrip(tCanvas, tMap);

                mapSet.click(function(e) {
                    var i = this.mark[0];
                    var j = this.mark[1];
                    var cell = mapSet[i][j];
                    var ch = cell[1].attr().text;
                    if (goodCell.indexOf(ch) !== -1) {
                        cell[1].attr("text",
                            badCell[Math.floor(Math.random() * badCell.length)]);
                        cell[0].attr(attrBadCell);
                        cell[1].attr(attrBadText);
                    }
                    else {
                        cell[1].attr("text",
                            goodCell[Math.floor(Math.random() * goodCell.length)]);
                        cell[0].attr(attrGoodCell);
                        cell[1].attr(attrGoodText);
                    }
                });

                $tryit.find('.bn-check').click(function (e) {
                    var data = [];
                    for (var i = 0; i < mapSet.length; i++) {
                        var row = "";
                        for (var j=0; j < mapSet[i].length; j++){
                            row += mapSet[i][j][1].attr().text;

                        }
                        data.push(row);
                    }
                    this_e.extSendToConsoleCheckiO(data);
                    e.stopPropagation();
                    return false;
                });
            }
        });
        io.start();
    }
);

