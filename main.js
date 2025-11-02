let save = JSON.parse(localStorage.getItem("save")) || [];




function save(){
    localStorage.setItem("save", JSON.stringify(save))
}