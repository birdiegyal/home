/* // adding active class into the clicked <a></a> elements.

const links = document.querySelectorAll("div.link > a")

function addActiveClassname(e) {
    console.log(window.location.href, window.location.hash)
    this.className = ["active"]
    // console.info(e.srcElement.hash !== window.location.hash ? "not same" : "same")
}

// we can use the prototype chain to set its "this" value to the elem instead of passing it into it.
function removeActiveClassname(e) {
    console.log(e.srcElement.hash, window.location.hash)
    this.className = e.srcElement.hash !== window.location.hash && []
}

links.forEach((link) => {
    link.addEventListener("click", addActiveClassname)
    link.addEventListener("focusout", removeActiveClassname)
})

// addEventListener("") */