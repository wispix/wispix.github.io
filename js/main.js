class Page{
    constructor(){
        this.dsList = document.querySelectorAll('.dslist li'),
        this.rightWrapper = [
            document.querySelector('#sqlistWrapper'),
            document.querySelector('#chainWrapper'),
            document.querySelector('#stackWrapper'),
            document.querySelector('#queueWrapper'),
            document.querySelector('#stringWrapper'),
            document.querySelector('#bitreeWrapper'),
            document.querySelector('#graphWrapper'),
            document.querySelector('#sortWrapper'),
        ]
        this.dataStructures = {
            sqlist : new OperateSqlist(),
            chain : new OperateChain(),
            stack : new OperateStack(),
            queue : new OperateQueue(),
            string : new OperateString(),
            bitree : new OperateBitree(),
            graph : new OperateGraph(),
            sort : new OperateSort(),
        }
        this.addEventListenerToDslist()
    }
    addEventListenerToDslist(){
        // 遍历dsList，给每一项添加点击事件监听
        for(let i = 0; i < this.dsList.length; i++){
            this.dsList[i].addEventListener('click',()=>{
                this.rightWrapper[i].style.display = 'flex'
                console.log(this.dsList[i].innerHTML, " is clicked")
                // dsList[i]被点击，除此i外的rightWrapper隐藏
                for(let j = 0; j < this.dsList.length; j++){
                    if(j != i){
                        this.rightWrapper[j].style.display = 'none'
                    }
                }
            })
        }
    }
}

const page = new Page()
