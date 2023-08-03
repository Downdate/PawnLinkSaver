let myLinks     = []
const listEl    = document.getElementById("list-el");
const inputBtn  = document.getElementById("input-btn");
const clearBtn  = document.getElementById("clear-btn");
const inputEl   = document.getElementById("input-el");
const saveTabBtn= document.getElementById("saveTab-btn");


clearBtn.addEventListener("dblclick",function (){
    localStorage.clear()
    myLinks     = []
    listEl.textContent = `my links: `
})

function getData() {
    if (localStorage.getItem("myLinks") != null){
        myLinks = JSON.parse(localStorage.getItem("myLinks"))
        console.log(myLinks)
        renderLinks()
    }

}

saveTabBtn.addEventListener("click", function (){
    chrome.tabs.getSelected(null,function(tab) {
        let link = tab.url;
        saveLink(link)
    });

})

inputBtn.addEventListener("click", function (){
    saveLink(inputEl.value)
    inputEl.value = ""


})
function saveLink(link) {
    myLinks.push(link)
    localStorage.setItem(`myLinks`, JSON.stringify(myLinks) )
    renderLinks()
}
function renderLinks() {
    let listItems = ""
    listEl.textContent = `my links: `
    for (let i = 0; i < myLinks.length; i++) {
        //listItems += "<li><a target='_blank' href='"+ myLeads[i] +"'>" + myLeads[i] + " </a> </li>"
        listItems +=    `
                        <li>
                            <a target='_blank' href= '${myLinks[i]}'>
                             ${myLinks[i]}
                            </a> 
                        </li>
        `
        //const li = document.createElement("li")
        //li.textContent = myLeads[i]
        //listEl.append(li)
    }
    listEl.innerHTML += listItems
}


