let aboutUsTitle = document.getElementById("about-us-title")
let aboutUs = document.getElementById("about-us-content")

let browseTitle = document.getElementById("browse-title")
let browse = document.getElementById("browse-content")

let helpTitle = document.getElementById("help-title")
let help = document.getElementById("help-content")

let policyTitle = document.getElementById("policy-title")
let policy = document.getElementById("policy-content")

function closeAll() {
    document.querySelectorAll(".footer-content-section").forEach((element) => {
        if (!element.classList.contains("mobile-hidden")) {
            element.classList.add("mobile-hidden")
        }
    })
}

aboutUsTitle.onclick = () => {
    if (aboutUs.classList.contains("mobile-hidden")) {
        closeAll()
        aboutUs.classList.remove("mobile-hidden")
    } else {
        aboutUs.classList.add("mobile-hidden")
    }
}

browseTitle.onclick = () => {
    if (browse.classList.contains("mobile-hidden")) {
        closeAll()
        browse.classList.remove("mobile-hidden")
    } else {
        browse.classList.add("mobile-hidden")
    }
}

helpTitle.onclick = () => {
    if (help.classList.contains("mobile-hidden")) {
        closeAll()
        help.classList.remove("mobile-hidden")
    } else {
        help.classList.add("mobile-hidden")
    }
}

policyTitle.onclick = () => {
    if (policy.classList.contains("mobile-hidden")) {
        closeAll()
        policy.classList.remove("mobile-hidden")
    } else {
        policy.classList.add("mobile-hidden")
    }
}

