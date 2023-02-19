

const btn = document.getElementById("btn")

btn.addEventListener("click", async () => {
    console.log("click");
    let [tab] = await chrome.tabs.query({active: true, currentWindow : true});
    console.log(tab);
    console.log(tab.url);
    if(tab.url === "https://ums.lpu.in/lpuums/"){
        chrome.scripting.executeScript({
            target: {tabId : tab.id},
            function : bakchodi,
        });
    }



})

function bakchodi() {

    const x = document.getElementById('txtU')
    x.value="12017878"

    const y = document.getElementById('TxtpwdAutoId_8767')
    y.value="i@Anmol123"

    const btn2 = document.getElementById('iBtnLogins')
    btn2.click()

}


const placement = document.getElementById("placement")

placement.addEventListener("click", async () => {
    console.log("click");
    let [tab] = await chrome.tabs.query({active: true, currentWindow : true});

    chrome.scripting.executeScript({
        target: {tabId : tab.id},
        function : placementlink,
    });
})

function placementlink() {
    location.href = "https://ums.lpu.in/Placements/HomePlacementStudent.aspx";
}