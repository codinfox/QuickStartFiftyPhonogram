/**
 * @author Ben
 */
function JMHelper(ping, pian, yin) {
    this.ping = ping;
    this.pian = pian;
    this.yin = yin;
}

var data = new Array();

data[0] = new JMHelper('あ', 'ア', 'a');
data[1] = new JMHelper('い', 'イ', 'i');
data[2] = new JMHelper('う', 'ウ', 'u');
data[3] = new JMHelper('え', 'エ', 'e');
data[4] = new JMHelper('お', 'オ', 'o');
data[5] = new JMHelper('か', 'カ', 'ka');
data[6] = new JMHelper('き', 'キ', 'ki');
data[7] = new JMHelper('く', 'ク', 'ku');
data[8] = new JMHelper('け', 'ケ', 'ke');
data[9] = new JMHelper('こ', 'コ', 'ko');
data[10] = new JMHelper('さ', 'サ', 'sa');
data[11] = new JMHelper('し', 'シ', 'shi');
data[12] = new JMHelper('す', 'ス', 'su');
data[13] = new JMHelper('せ', 'セ', 'se');
data[14] = new JMHelper('そ', 'ソ', 'so');
data[15] = new JMHelper('た', 'タ', 'ta');
data[16] = new JMHelper('ち', 'チ', 'chi');
data[17] = new JMHelper('つ', 'ツ', 'tsu');
data[18] = new JMHelper('て', 'テ', 'te');
data[19] = new JMHelper('と', 'ト', 'to');
data[20] = new JMHelper('な', 'ナ', 'na');
data[21] = new JMHelper('に', 'ニ', 'ni');
data[22] = new JMHelper('ぬ', 'ヌ', 'nu');
data[23] = new JMHelper('ね', 'ネ', 'ne');
data[24] = new JMHelper('の', 'ノ', 'no');
data[25] = new JMHelper('は', 'ハ', 'ha');
data[26] = new JMHelper('ひ', 'ヒ', 'hi');
data[27] = new JMHelper('ふ', 'フ', 'fu');
data[28] = new JMHelper('へ', 'ヘ', 'he');
data[29] = new JMHelper('ほ', 'ホ', 'ho');
data[30] = new JMHelper('ま', 'マ', 'ma');
data[31] = new JMHelper('み', 'ミ', 'mi');
data[32] = new JMHelper('む', 'ム', 'mu');
data[33] = new JMHelper('め', 'メ', 'me');
data[34] = new JMHelper('も', 'モ', 'mo');
data[35] = new JMHelper('や', 'ヤ', 'ya');
data[36] = new JMHelper('ゆ', 'ユ', 'yu');
data[37] = new JMHelper('よ', 'ヨ', 'yo');
data[38] = new JMHelper('ら', 'ラ', 'ra');
data[39] = new JMHelper('り', 'リ', 'ri');
data[40] = new JMHelper('る', 'ル', 'ru');
data[41] = new JMHelper('れ', 'レ', 're');
data[42] = new JMHelper('ろ', 'ロ', 'ro');
data[43] = new JMHelper('わ', 'ワ', 'wa');
data[44] = new JMHelper('を', 'ヲ', 'wo');
data[45] = new JMHelper('ん', 'ン', 'n');

function getData() {
    var t = Math.floor(Math.random() * data.length);
    return data[t];
}

var currentData = getData();
var mode = 1;

function copyClick() {
    document.getElementById("rome").style.display = "block";
}

function reciteClick() {
    document.getElementById("rome").style.display = "none";
}

function modeSwitch(m) {
    mode = m;
}

function load() {
    document.getElementById("display").innerHTML = currentData.ping;
    document.getElementById("rome").innerHTML = currentData.yin;
}

function keyUpFunc() {
    var v = document.getElementById("input_box");
    if (currentData.yin == v.value) {
        currentData = getData();
        var dis;
        if (mode == 1) {
            dis = currentData.ping;
        } else if (mode == 2) {
            dis = currentData.pian;
        } else if (mode == 3) {
            if (Math.floor(Math.random() * 2) == 0) {
                dis = currentData.ping;
            } else {
                dis = currentData.pian;
            }
        }
        document.getElementById("display").innerHTML = dis;
        document.getElementById("rome").innerHTML = currentData.yin;
        v.value = "";
    }
}

