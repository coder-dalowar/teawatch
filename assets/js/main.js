// ================= hero_slider =================
{
  var swiper = new Swiper(".hero_slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,      
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}



// ================= game_slider =================
{
  document.querySelectorAll(".game_wraper").forEach((wrap) => {
    new Swiper(wrap.querySelector(".game_slider"), {
      slidesPerView: 4,
      spaceBetween: 15,
      loop: true,
      navigation: {
        nextEl: wrap.querySelector(".swiper-button-next"),
        prevEl: wrap.querySelector(".swiper-button-prev"),
      },
    });
  });
}



// ================= collaboration_slider =================
{
  document.querySelectorAll(".collaboration_slider").forEach(slider => {
    new Swiper(slider, {
      slidesPerView: 2,
      spaceBetween: 15,
      loop: true,
      speed: 700,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,      
      },
      breakpoints: {
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5, spaceBetween: 25, },
      },
      centeredSlides: true,
    });
  });
}



// ================= game_item toggle class =================
{
  document.addEventListener("DOMContentLoaded", function () {
      const gameItems = document.querySelectorAll(".game_item");

      gameItems.forEach(item => {
          item.addEventListener("click", function () {

              // remove active from all
              gameItems.forEach(i => i.classList.remove("active"));

              // add active to clicked one
              this.classList.add("active");
          });
      });
  });
}



// ================= image border focus =================   
{
  document.querySelectorAll('.login_card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault(); 
      card.classList.toggle('active');
    });
  });
}



// ================= box border focus =================   
{
  const items = document.querySelectorAll('.signup_team_item');
  items.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}



// ================= drag and drop upload ================= 
{ 
  document.addEventListener("DOMContentLoaded", () => {
    const uploadBox = document.getElementById('uploadBox');
    const fileInput = document.getElementById('fileInput');
    const uploadContent = document.getElementById('uploadContent');

    if (!uploadBox || !fileInput || !uploadContent) return;

    uploadBox.addEventListener('click', () => fileInput.click());

    uploadBox.addEventListener('dragover', (e) => e.preventDefault());

    uploadBox.addEventListener('drop', (e) => {
      e.preventDefault();
      showImage(e.dataTransfer.files[0]);
    });

    fileInput.addEventListener('change', () => showImage(fileInput.files[0]));

    function showImage(file) {
      if (!file || !file.type.startsWith('image/')) return;

      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);

      uploadContent.innerHTML = '';
      uploadContent.appendChild(img);

      const name = document.createElement('p');
      name.textContent = file.name;
      uploadContent.appendChild(name);
    }
  });
}



// ================= copy clipboard ================= 
{
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".copy_btn a").forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();
        const text = btn.closest(".invite_wraper").querySelector(".invite_text h4 a").innerText.trim();
        navigator.clipboard.writeText(text);
        btn.classList.add("copied");
        setTimeout(() => btn.classList.remove("copied"), 800);
      });
    });
  });
}



// ===================== friend_list hide none ================
{
  document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".search_userbar .form_field");
    const friendList = document.querySelector(".friend_list");

    // if there is no element → code stop
    if (!input || !friendList) return;

    // focus show
    input.addEventListener("focus", () => {
      friendList.classList.add("show");
    });

    // click outside hide
    document.addEventListener("click", (e) => {
      if (
        !friendList.contains(e.target) &&
        e.target !== input
      ) {
        friendList.classList.remove("show");
      }
    });
  });
}



// ===================== toggle invite button ================
{
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".invite_btn button").forEach(btn => {
      btn.addEventListener("click", () => {
        const spans = btn.querySelectorAll("span"); 
        if (btn.classList.contains("cancel_btn")) {
          // click default text
          btn.innerHTML = "הזמנה";
          spans.forEach(span => btn.appendChild(span));
          btn.classList.remove("cancel_btn");
        } else {
          // first click → cancel state
          btn.innerHTML = "בטל הזמנה";
          spans.forEach(span => btn.appendChild(span));
          btn.classList.add("cancel_btn");
        }
      });
    });
  });
}