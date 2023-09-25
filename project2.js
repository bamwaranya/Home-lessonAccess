// เลือกองค์ประกอบที่มี id "solutionToggle"
const solutionToggle = document.getElementById("solutionToggle");
const solutionContent = document.querySelector(".solutionContent");

const solutionToggle2 = document.getElementById("solutionToggle2");
const solutionContent2 = document.querySelector(".solutionContent2");

const solutionToggle3 = document.getElementById("solutionToggle3");
const solutionContent3 = document.querySelector(".solutionContent3");

const solutionToggle4 = document.getElementById("solutionToggle4");
const solutionContent4 = document.querySelector(".solutionContent4");

solutionToggle.addEventListener("click", () => {
    // สลับสถานะการแสดงผล
    const isContentVisible = solutionContent.style.display === "block";
    solutionContent.style.display = isContentVisible ? "none" : "block";
  
    solutionToggle.classList.toggle("clicked", !isContentVisible);
});

solutionToggle2.addEventListener("click", () => {
    // สลับสถานะการแสดงผล
    const isContentVisible = solutionContent2.style.display === "block";
    solutionContent2.style.display = isContentVisible ? "none" : "block";
  
    solutionToggle2.classList.toggle("clicked", !isContentVisible);
    });

solutionToggle3.addEventListener("click", () => {
    // สลับสถานะการแสดงผล
    const isContentVisible = solutionContent3.style.display === "block";
    solutionContent3.style.display = isContentVisible ? "none" : "block";
  
    // เปลี่ยนสีข้อความ
    solutionToggle3.classList.toggle("clicked", !isContentVisible);
  });

solutionToggle4.addEventListener("click", () => {
// สลับสถานะการแสดงผล
const isContentVisible = solutionContent4.style.display === "block";
solutionContent4.style.display = isContentVisible ? "none" : "block";

// เปลี่ยนสีข้อความ
solutionToggle4.classList.toggle("clicked", !isContentVisible);
});