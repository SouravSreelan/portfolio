"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const listItems = Array.from(document.querySelectorAll("#pagination-list li"));

    const itemsPerPage = 5; 
    let currentPage = 1; 

    function showPage(pageNumber) {
      
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

     
      listItems.forEach(function(item, index) {
        if (index >= startIndex && index < endIndex) {
          item.style.display = "list-item";
        } else {
          item.style.display = "none";
        }
      });
    }

    showPage(currentPage);

    const paginationLinks = Array.from(document.querySelectorAll(".pagination a"));
    paginationLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetPage = parseInt(this.innerText);
        if (!isNaN(targetPage) && targetPage !== currentPage) {
          currentPage = targetPage;
          showPage(currentPage);
        }
      });
    });
  });

   
 
const filterPub = document.getElementById('portfolio-flters');
const pubBtn = document.getElementById('filter-published');
const manuBtn = document.getElementById('filter-manu');
const patentBtn = document.getElementById('filter-patent');
const bookBtn = document.getElementById('filter-book');
const manuDiv = document.getElementById('manuscript');
const bookDiv = document.getElementById('book');
const patentDiv = document.getElementById('patent');
const pubDiv = document.getElementById('published');
const pageNo = document.getElementById('pageNo');

manuBtn.addEventListener('click', function(){
  
  pubDiv.style.display="none";
  manuDiv.style.display="block";
  bookDiv.style.display="none";
  patentDiv.style.display="none";
  manuBtn.classList.add('active');
  pubBtn.classList.remove('active');
  patentBtn.classList.remove('active');
  bookBtn.classList.remove('active')
  document.getElementById("bolis").style.display="none";
  document.getElementById("palis").style.display="none";
  pageNo.classList.add('hidden');

 
    var myList = document.getElementById("pagination-listt");
    var listItems = myList.getElementsByTagName("li");

    for (var i = 0; i < listItems.length; i++) {
      listItems[i].style.display = "list-item";
    }


})

patentBtn.addEventListener('click', function(){
  
  pubDiv.style.display="none";
  manuDiv.style.display="none";
  bookDiv.style.display="none";
  patentDiv.style.display="block";
  patentBtn.classList.add('active');
  pubBtn.classList.remove('active')
  manuBtn.classList.remove('active')
  bookBtn.classList.remove('active')
  document.getElementById("pagination-list").style.display="block";
  document.getElementById("palis").style.display="block";
  document.getElementById("bolis").style.display="none";
  pageNo.classList.add('hidden');



})


bookBtn.addEventListener('click', function(){
  
  pubDiv.style.display="none";
  manuDiv.style.display="none";
  bookDiv.style.display="block";
  patentDiv.style.display="none";
  pubBtn.classList.remove('active')
  manuBtn.classList.remove('active')
  bookBtn.classList.add('active')
  patentBtn.classList.remove('active')
  document.getElementById("pagination-list").style.display="block";
  document.getElementById("bolis").style.display="block";
  document.getElementById("palis").style.display="none";
  pageNo.classList.add('hidden');


})

pubBtn.addEventListener('click', function(){
  pubBtn.classList.add('active')
  manuBtn.classList.remove('active')
  bookBtn.classList.remove('active')
  patentBtn.classList.remove('active')
  manuDiv.style.display="none";
  bookDiv.style.display="none";
  patentDiv.style.display="none";
  pubDiv.style.display="block";
  
  document.addEventListener("DOMContentLoaded", function() {
    const listItems = Array.from(document.querySelectorAll("#pagination-list li"));

    const itemsPerPage = 10; 
    let currentPage = 1; 

    function showPage(pageNumber) {
      
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

     
      listItems.forEach(function(item, index) {
        if (index >= startIndex && index < endIndex) {
          item.style.display = "list-item";
        } else {
          item.style.display = "none";
        }
      });
    }

    showPage(currentPage);

    const paginationLinks = Array.from(document.querySelectorAll(".pagination a"));
    paginationLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetPage = parseInt(this.innerText);
        if (!isNaN(targetPage) && targetPage !== currentPage) {
          currentPage = targetPage;
          showPage(currentPage);
        }
      });
    });
  });
  pageNo.classList.remove('hidden');

})
