    // import {fetchRecipes} from './cards.js';
    // const PAGINATION_CONTAINER = document.querySelector('.pagination');
    // const PAGE_NUMBERS_CONTAINER = document.querySelector('.page-numbers');
    // let firstBtn = document.querySelector('.pagination .first') ;
    // let secondBtn =document.querySelector('.pagination .second') ;
    // let thirdBtn = document.querySelector('.pagination .third') ;
    // const RIGHT_ONE = document.querySelector('.pagination .right-one');
    // const RIGHT_END = document.querySelector('.pagination .right-end');
    // const ALL_BTN_ARR = [firstBtn,secondBtn,thirdBtn];
    // let total_page =  await fetchRecipes();
    // let current_page = 1;
    
    // function allReset(){
    //     firstBtn?.classList.remove('active-page');
    //     secondBtn?.classList.remove('active-page');
    //     thirdBtn?.classList.remove('active-page');
    // }

    // function changePage(page){
    //     current_page = page;
    //     allReset();
    //     ALL_BTN_ARR[current_page]?.classList.add('active-page');
    // }
    // function previousPage(){

    // }
    // function nextPage(type){
    //     if(type="one"){
    //         current_page++;
    //     }
    //     if(type="end"){
    //         current_page=total_page;
    //     }
    // }
    // export function resetPageSize(totalPage){  // Çağırılırken totalPage varsa o yoksa 1 gönderilmeli
    //     total_page = totalPage;
    //     changePage(1);
    // }
  

    // async function fetchRecipes() {
    //     try {
    //       const response = await fetch(
    //         'https://tasty-treats-backend.p.goit.global/api/recipes?limit=9'
    //       );
    //       const data = await response.json();
    //       return data.totalPages;
    //     } catch (error) {
    //       console.error('API verisi alınırken hata oluştu:', error);
    //       return "hata";
    //     }
    //   }

    // let currentPage = 1;
    // let totalPages = await fetchRecipes();

    // function updatePagination(newTotalPages) {
    //     totalPages = newTotalPages;
    //     updatePageButtons();
    // }

    // function updatePageButtons() {
    //     const pageButtons = document.querySelectorAll('.page-number');
    //     pageButtons.forEach((button, index) => {
    //         const pageNum = currentPage - 1 + index;
    //         button.textContent = pageNum;
    //         button.classList.toggle('active', pageNum === currentPage);
    //         button.style.display = pageNum > 0 && pageNum <= totalPages ? 'inline-block' : 'none';
    //     });
    // }

    // function changePage(newPage) {
    //     if (newPage >= 1 && newPage <= totalPages) {
    //         currentPage = newPage;
    //         updatePageButtons();
    //         requestPage(currentPage);
    //     }
    // }

    // function requestPage(page) {
    //     // Bu fonksiyonu API isteği göndermek için kullanabilirsiniz
    //     console.log(`Sayfa ${page} için istek gönderildi`);
    // }

    // document.addEventListener('DOMContentLoaded', () => {
    //     const pagination = document.querySelector('.pagination');
        
    //     pagination.addEventListener('click', (e) => {
    //         if (e.target.classList.contains('page-number')) {
    //             changePage(parseInt(e.target.textContent));
    //         } else if (e.target.id === 'singleLeft') {
    //             changePage(currentPage - 1);
    //         } else if (e.target.id === 'singleRight') {
    //             changePage(currentPage + 1);
    //         } else if (e.target.id === 'doubleLeft') {
    //             changePage(1);
    //         } else if (e.target.id === 'doubleRight') {
    //             changePage(totalPages);
    //         }
    //     });

    //     updatePageButtons();
    // });
    // import { getQueryData } from "./form/form-read";
    // async function fetchRecipes() {
    //     try {
    //         const response = await fetch(
    //             'https://tasty-treats-backend.p.goit.global/api/recipes?limit=9'
    //         );
    //         const data = await response.json();
    //         return data.totalPages;
    //     } catch (error) {
    //         console.error('API verisi alınırken hata oluştu:', error);
    //         return 1; // Hata durumunda varsayılan olarak 1 sayfa döndür
    //     }
    // }
    
    // let currentPage = 1;
    // let totalPages = 1; // Varsayılan değer
    
    // async function initPagination() {
    //     totalPages = await fetchRecipes();
    //     updatePageButtons();
    // }
    
    // function updatePagination(newTotalPages) {
    //     totalPages = newTotalPages;
    //     updatePageButtons();
    // }
    // // Buraya bak doğru çalışmıyor
    // function updatePageButtons() {
    //     const pageButtons = document.querySelectorAll('.page-number');
    //     pageButtons.forEach((button, index) => {
    //         const pageNum = currentPage - 1 + index;
    //         button.textContent = pageNum;
    //         button.classList.toggle('active-page', pageNum === currentPage);
    //         button.style.display = pageNum > 0 && pageNum <= totalPages ? 'inline-block' : 'none';
    //     });
    
    //     // Sayfa navigasyon butonlarının durumunu güncelle
    //     document.getElementById('singleLeft').disabled = currentPage === 1;
    //     document.getElementById('doubleLeft').disabled = currentPage === 1;
    //     document.getElementById('singleRight').disabled = currentPage === totalPages;
    //     document.getElementById('doubleRight').disabled = currentPage === totalPages;
    // }
    
    // function changePage(newPage) {
    //     if (newPage >= 1 && newPage <= totalPages) {
    //         currentPage = newPage;
    //         updatePageButtons();
    //         requestPage(currentPage);
    //     }
    // }
    // export {changePage }
    // function requestPage(page) {
    //     console.log(`Sayfa ${page} için istek gönderildi`);
    //     getQueryData(`https://tasty-treats-backend.p.goit.global/api/recipes?category=&page=${page}&limit=9`)
    // }
    
    // document.addEventListener('DOMContentLoaded', () => {
    //     const pagination = document.querySelector('.pagination');
        
    //     pagination.addEventListener('click', (e) => {
    //         if (e.target.classList.contains('page-number')) {
    //             changePage(parseInt(e.target.textContent));
    //         } else if (e.target.id === 'singleLeft') {
    //             changePage(currentPage - 1);
    //         } else if (e.target.id === 'singleRight') {
    //             changePage(currentPage + 1);
    //         } else if (e.target.id === 'doubleLeft') {
    //             changePage(1);
    //         } else if (e.target.id === 'doubleRight') {
    //             changePage(totalPages);
    //         }
    //     });
    
    //     initPagination(); // Sayfalama başlatma
    // });

    
    // Gerekli DOM elementlerini seçiyoruz
// Gerekli DOM elementlerini seçiyoruz
import {getQueryData} from "./form/form-read";
const pagination = document.querySelector('.pagination');
const pageButtons = document.querySelectorAll('.page-number');
const singleLeft = document.getElementById('singleLeft');
const singleRight = document.getElementById('singleRight');
const doubleLeft = document.getElementById('doubleLeft');
const doubleRight = document.getElementById('doubleRight');

let currentPage = 1;
let totalPages = 1;
let allPages = null;
// Sayfa yüklendiğinde çalışacak fonksiyon
async function initPagination() {
    totalPages = await fetchRecipes();
    allPages = totalPages;
    updatePageButtons();
}

// Toplam sayfa sayısını almak için API'ye istek gönderen fonksiyon
async function fetchRecipes() {
    try {
        const response = await fetch('https://tasty-treats-backend.p.goit.global/api/recipes?limit=9');
        const data = await response.json();
        return data.totalPages;
    } catch (error) {
        console.error('API verisi alınırken hata oluştu:', error);
        return 1; // Hata durumunda varsayılan olarak 1 sayfa döndür
    }
}

// Sayfa butonlarını güncelleyen fonksiyon
function updatePageButtons() {
    let balance = -1;
    if(currentPage == totalPages && totalPages !=1){
        balance = -2
    }
    if(currentPage != totalPages && currentPage == 1){
        balance = 0
    }
    pageButtons.forEach((button, index) => {
        const pageNum = currentPage + balance + index;
        button.textContent = pageNum;
        button.classList.toggle('active-page', pageNum == currentPage);
        button.style.display = pageNum > 0 && pageNum <= totalPages ? 'inline-block' : 'none';
    });

    // Navigasyon butonlarının durumunu güncelle
    singleLeft.disabled = currentPage == 1;
    doubleLeft.disabled = currentPage == 1;
    singleRight.disabled = currentPage == totalPages;
    doubleRight.disabled = currentPage == totalPages;
}

// Sayfa değiştirme fonksiyonu
function changePage(newPage, from) {
        console.log("page : ", newPage);
        
        totalPages = localStorage.getItem('totalPage') ? Number(localStorage.getItem('totalPage')) : allPages;
        
        console.log("total page : ", totalPages);
        
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        updatePageButtons();
    }
    if(from == "page-number"){
        requestPage(newPage);
    }
}
export {changePage}
// Yeni sayfa için istek gönderen fonksiyon
function requestPage(page) {
        //Kendin istek at
}

// Event listener'ları ayarlama
pagination.addEventListener('click', (e) => {
    if (e.target.classList.contains('page-number')) {
        changePage(parseInt(e.target.textContent),"page-number");
    } else if (e.target.id === 'singleLeft') {
        changePage(currentPage - 1,"page-number");
    } else if (e.target.id === 'singleRight') {
        changePage(currentPage + 1,"page-number");
    } else if (e.target.id === 'doubleLeft') {
        changePage(1,"page-number");
    } else if (e.target.id === 'doubleRight') {
        changePage(totalPages,"page-number");
    }
});

// Sayfalama başlatma
document.addEventListener('DOMContentLoaded', initPagination);