document.getElementById('num').oninput = function () {
    this.value = this.value.replace(/[^0-9]/g, '');
}
function convert() {
    let n = document.getElementById('num').value;
    if (n == '' || n > 999) { alert('Enter number 0–999'); return; }
    const o = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const t = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const e = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    let w = '';
    if (n >= 100) { w += o[Math.floor(n / 100)] + ' Hundred '; n %= 100; }
    if (n >= 20) w += t[Math.floor(n / 10)] + ' ' + o[n % 10];
    else if (n >= 10) w += e[n - 10];
    else w += o[n];
    document.getElementById('result').innerText = w;
    document.getElementById('result').style.color = 'green';
}