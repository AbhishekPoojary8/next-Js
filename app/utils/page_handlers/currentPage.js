const pages = ["About Me", "Resume", "Blog", "Projects", "Contact"]

export function targetPage(Currentpage){
    const Index = pages.findIndex(page=> page === Currentpage);
    return Index;
}