class Sqlist{
    #arr
    #size
    constructor(size){
        this.#arr = [];
        this.#size = size;
    }

    push(item){
        if(this.#arr.length === this.#size){
            return false;
        }
        this.#arr.push(item);
    }
    pop(){
        return this.#arr.pop();
    }
    get(index){
        if(index < 0 || index >= this.#arr.length){
            return false;
        }
        return this.#arr[index];
    }
    // index是arr的下标，从0开始
    insert(item, index){
        if(index < 0 || index > this.#arr.length || this.#arr.length === this.#size){
            return false;
        }
        for(let i = this.#arr.length; i > index; i--){
            this.#arr[i] = this.#arr[i-1];
        }
        this.#arr[index] = item;
        return true;
    }
    delete(index){
        // index是arr的下标，从0开始
        if(index < 0 || index >= this.#arr.length){
            return false;
        }
        for(let i = index; i < this.#arr.length; i++){
            this.#arr[i+1] = this.#arr[i];
        }
        return true;
    }
    modify(item, index){
        if(index < 0 || index >= this.#arr.length){
            return false;
        }
        this.#arr[index] = item;
        return true;
    }
    search(item){
        for(let i = 0; i < this.#arr.length; i++){
            if(this.#arr[i] === item){
                return i;
            }
        }
        return -1;
    }
}

class ShowPlace{
    constructor(){
        this.showPlace = document.querySelector('#sqlistWrapper .showPlace');
    }
    createAndAppendTable(length){
        console.log(`Now to create and append table to ${this.showPlace}`);
        //创建之前删除this.showPlace的所有child
        this.showPlace.innerHTML = '';
        sqlist.cells = []; // 清空cells
        sqlist.dataLength = 0; // dataLength置零

        // 创建一个总div 作为table的宿主，并将其进入到this.showPlace的孩子中
        var tableWrapper = document.createElement('div'); // 创建总div
        tableWrapper.className = 'tableWrapper'; // 总div的class名设置为tableWrapper
        tableWrapper.style.display = 'flex';
        tableWrapper.style.flexDirection = 'column';
        tableWrapper.style.flexGrow = 1;
        // 总div设置完毕，然后将其加到this.showPlace当中 ↓
        this.showPlace.appendChild(tableWrapper);

        let counter = 0; // 记录顺序表单元个数
        const rows = (length/20)+1; // 确定table行数
        if(rows > 7){
            this.showPlace.style.minHeight = 'initial';
        }
        const columns = length>=20 ? 20 : length; // 确定table列数
        //----开始创建table（div表示）----
        for(let i = 0; i < rows; i++){
            // 创建一个行元素
            var rowDiv = document.createElement('div');
            rowDiv.style.display = 'flex';
            rowDiv.style.flexDirection = 'row';
            rowDiv.className = 'rowDiv';
            rowDiv.style.margin = '5px';
            for(let j = 0; j < columns; j++){
                // 创建newcell， 包含两部分：地址和数据，地址在上，数据在下
                var newCell = document.createElement('div');
                newCell.className = 'tableCell';
                newCell.style.display = 'flex';
                newCell.style.flexDirection = 'column';
                // 先解决地址cell
                var addDiv = document.createElement('div');
                addDiv.className = 'addressCell';
                addDiv.style.width = '57px';
                addDiv.style.height = '32px';
                addDiv.style.color = 'black';
                // addDiv.style.backgroundColor = "#f9f9f9";
                addDiv.style.display = 'flex';
                addDiv.style.alignItems = 'center';
                addDiv.style.justifyContent = 'center';
                addDiv.style.flexWrap = 'wrap';
                addDiv.style.border = '1px solid #555555';
                addDiv.style.textAlign = 'center';
                var addText = document.createTextNode(`${counter+1}`);
                addDiv.appendChild(addText);
                // 再解决数据cell
                var dataDiv = document.createElement('div');
                dataDiv.className = 'dataCell';
                dataDiv.style.width = '57px';
                dataDiv.style.height = '32px';
                dataDiv.style.color = 'black';
                // dataDiv.style.backgroundColor = "#f9f9f9";
                dataDiv.style.display = 'flex';
                dataDiv.style.alignItems = 'center';
                dataDiv.style.justifyContent = 'center';
                dataDiv.style.flexWrap = 'wrap';
                dataDiv.style.border = '1px solid #555555';
                // 将addDiv和dataDiv添加到newcell中
                newCell.appendChild(addDiv);
                newCell.appendChild(dataDiv);
                // 将newcell添加到行rowDiv中
                rowDiv.appendChild(newCell); 
                // 将newCell添加到sqlist的成员中
                sqlist.cells.push(newCell)

                counter += 1; // 完成一个单元格，计数器加一
                if(counter >= length){
                    break;
                }
            }
            wrapDiv.appendChild(rowDiv); // 添加一行
            if(counter >= length){
                break;
            }
        }
        //------table创建完毕----
    }
}

class OperateSqlist extends Sqlist{
    constructor(){
        super();
        this.buttonBox = document.querySelector('#sqlistWrapper .operation .btnbox');
        this.inputPlace = document.querySelector('#sqlistWrapper .operation .inputWrapper');
        this.noticeWrapper = document.querySelector('#sqlistWrapper .operation .noticeWrapper');
        this.showPlace = new ShowPlace();
        this.#addEventListnerToButtons();
    }
    #addEventListnerToButtons(){
        this.#addEventListnerToCreate()
    }
    #addEventListnerToCreate(){
        // 1. 为按钮——创建新顺序表——添加事件监听
        btnListCreate = this.buttonBox.querySelector("#listCreate")
        btnListCreate.addEventListener('click', () => {
            // 添加一个输入框用来输入顺序表长度
            this.inputPlace.innerHTML = '' // 清空输入区域
            var inputLabel = document.createElement('label')
            var newInput = document.createElement('input')
            newInput.id = "sqlistLength"
            newInput.addEventListener('keydown', (e) => {
                if(e.key === 13 || e.key === 'Enter'){
                    handleInput(e.target.value)
                    newInput.value = ''
                }
                function handleInput(inputValue){
                    if(inputValue > 0){
                        this.showPlace.innerHTML = ''
                        this.sqlist.cell
                    }
                }
            })
        })
    }
}
