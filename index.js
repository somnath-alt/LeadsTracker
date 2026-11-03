let myLeads=[];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads){
    let listItems = "";
    for(let i=0 ; i<leads.length; i++){
        console.log(leads[i]);
        listItems +=`<li>
                      <a target='_blank' href="${leads[i]}">
                         ${leads[i]}
                      </a>
                    </li>`;
    }
    ulEl.innerHTML = listItems;
}
  

inputBtn.addEventListener("click", function(){
    console.log("Save button has been clicked!");
    myLeads.push(inputEl.value);
    console.log(myLeads);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    
})

tabBtn.addEventListener("click", function(){

   chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
   })

})

deleteBtn.addEventListener("dblclick", function(){
    console.log("Delete button has been double clicked!");
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})
