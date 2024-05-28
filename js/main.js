class DsList{
    constructor(){
        this.li
    }
    displayChoosed(dsWrapperChoosed){
        for(let i = 0; i < this.dslist.length; i++){
            if(this.dslist[i] == dsWrapperChoosed){
                this.dslist[i].style.display = 'flex'
            }else{
                this.dslist[i].style.display = 'none'
            }
        }
    }
    addEventListenerToDs(){
        for(let i = 0; i < this.dslist.length; i++){
        }
    }
}
class DataStructrue{
    constructor(){
        this.dsListBar = document.querySelector('.dslist')
        this.sqlist = new OperateSqlist()
    }
    addEventListenerToSidebar(){

    }
}
