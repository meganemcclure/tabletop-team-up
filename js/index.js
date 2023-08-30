function closeAll() {
    let interactiveElementsList = document.getElementsByClassName("interactive-section")

    for (let i = 0; i < interactiveElementsList.length; i++) {
        let element = interactiveElementsList[i]
        element.classList.add("closed-state")
    }
}

let interactiveElementsList = document.getElementsByClassName("interactive-section")

for (let i = 0; i < interactiveElementsList.length; i++) {
    let element = interactiveElementsList[i]
    element.addEventListener("click", () => {
        console.log(element)
        closeAll()
        if (element.classList.contains("closed-state")) {
            element.classList.remove("closed-state")
        } else {
            element.classList.add("closed-state")
        }
    })
}
