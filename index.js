const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const getNum1 = $('.ip1');
const getNum2 = $('.ip2');
const opPl = $('.rt1');
const opMi = $('.rt2');
const opDi = $('.rt3');
const opMu = $('.rt4'); 
const rt = $$('.rt'); 
const getResu = $('.ip-re');
const notify = $('.notif');
const bt = $('.butn')


function checkNumber(str) {
    var reg = /^\d+$/;
    return reg.test(str);
}

const app = {
    value1: '',
    value2: '',
    optr: '',
    
    handleEvent() {
        that = this;
        getNum1.oninput = function(e) {
            if(checkNumber(e.target.value)){
                notify.innerText = '';
                that.value1 = parseInt(e.target.value);
            }
            else{
                notify.innerText = `Giá trị nhập ở ô ${e.target.parentElement.previousElementSibling.textContent} không phải là số.`;
            }
        }
        getNum2.oninput = function(e) {
            if(checkNumber(e.target.value)){
                notify.innerText = '';
                that.value2 = parseInt(e.target.value);
            }
            else{
                notify.innerText = `Giá trị nhập ở ô ${e.target.parentElement.previousElementSibling.textContent} không phải là số.`;
            }
        }
        rt.forEach(function(item){
            item.onchange = function(e) {
                rt.forEach( function(it) {
                    it.checked =false;
                })
                e.target.checked = true; 
                that.optr = e.target.value;
                console.log(that.optr);
            }
        })
        bt.onclick = function(e) {
            if(that.value1 == '' || that.value2 == '')
            {
                notify.innerText = `Vui lòng nhập giá trị vào ô`;
            }
            if(that.optr == '')
            {
                notify.innerText = `Vui lòng chọn phép tính`;
                
            }
            else{
                switch(that.optr){
                    case('plus'):
                        getResu.value = `${that.value1 + that.value2}`;
                        break;
                    case('minus'):
                        getResu.value = `${that.value1 - that.value2}`;
                        break;
                    case('multi'):
                        getResu.value = `${that.value1 * that.value2}`;
                        break;
                    case('divide'):
                        getResu.value = `${that.value1 / that.value2}`;
                        break;
                }
                    

            }
            
        }


    }
}

app.handleEvent();








