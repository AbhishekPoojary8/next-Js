import { selector } from "recoil";
import { pageState } from "../atoms/page";
const pagePrimaryColor = selector({
    key:"pagePrimaryColor",
    get:({get})=>{
        const currentPage = get(pageState);
        return getPagePrimaryColor(currentPage);
    }
});

const getPagePrimaryColor = (currentPage) => {
    switch(currentPage){
        case 'About Me':
            return 'customGreen';
        case 'Resume':
            return 'customBlue';
        default:
            return null;
    }
}
export default pagePrimaryColor