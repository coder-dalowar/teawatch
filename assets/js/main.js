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



// =================== custom select dropdown ================
{
  document.querySelectorAll(".custom_select").forEach(select => {
    const btn = select.querySelector(".select_btn");
    const dropdown = select.querySelector(".select_dropdown");
    const selected = select.querySelector(".selected");

    btn.addEventListener("click", () => {
      select.classList.toggle("open");
    });

    dropdown.querySelectorAll("li").forEach(option => {
      option.addEventListener("click", () => {
        selected.textContent = option.textContent;
        dropdown.querySelectorAll("li").forEach(li => li.classList.remove("active"));
        option.classList.add("active");
        select.classList.remove("open");
      });
    });

    document.addEventListener("click", e => {
      if (!select.contains(e.target)) {
        select.classList.remove("open");
      }
    });
  });
}



// =================== search_game_dropdown toggle ================
{
  document.addEventListener('DOMContentLoaded', function () {

    const wrappers = document.querySelectorAll('.serachBar_wraper');

    // If no search bar exists on the page, exit safely
    if (!wrappers.length) return;

    wrappers.forEach(wrapper => {

        const input = wrapper.querySelector('.search_field');
        const dropdown = wrapper.querySelector('.search_game_dropdown');
        const items = dropdown ? dropdown.querySelectorAll('li') : [];

        // Safety check to prevent errors on other pages
        if (!input || !dropdown) return;

        // Function to show dropdown
        const showDropdown = () => {
            dropdown.classList.add('show');
        };

        // Function to hide dropdown
        const hideDropdown = () => {
            dropdown.classList.remove('show');
        };

        // Show dropdown when input is focused
        input.addEventListener('focus', showDropdown);

        // Show dropdown when input is clicked
        input.addEventListener('click', showDropdown);

        // Handle dropdown item click
        items.forEach(item => {
            item.addEventListener('click', () => {
                // Set clicked item text into input field
                input.value = item.textContent.trim();

                // Hide dropdown after selection
                hideDropdown();
            });
        });

        // Hide dropdown when clicking outside the search wrapper
        document.addEventListener('click', (event) => {
            if (!wrapper.contains(event.target)) {
                hideDropdown();
            }
        });
    });

  });
}



// =================== game change custom slider ================
{
  document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.gameChange_wrap').forEach(wrap => {

        const track = wrap.querySelector('.gameChange_track');
        const down = wrap.querySelector('.up_arrow');
        const up = wrap.querySelector('.down_arrow');

        let slides = [...track.children];
        let index = 1;
        let busy = false;

        // Clone for infinite loop
        track.prepend(slides[slides.length - 1].cloneNode(true));
        track.append(slides[0].cloneNode(true));

        slides = [...track.children];
        const total = slides.length;

        // Initial position (NO animation)
        track.style.transition = 'none';
        track.style.transform = `translateY(-100%)`;
        track.offsetHeight;
        track.style.transition = 'transform 0.4s ease';

        const move = () => {
            track.style.transform = `translateY(-${index * 100}%)`;
        };

        const next = () => {
            if (busy) return;
            busy = true;
            index++;
            move();
        };

        const prev = () => {
            if (busy) return;
            busy = true;
            index--;
            move();
        };

        track.addEventListener('transitionend', () => {

            if (index === total - 1) {
                track.style.transition = 'none';
                index = 1;
                move();
            }

            if (index === 0) {
                track.style.transition = 'none';
                index = total - 2;
                move();
            }

            track.offsetHeight;
            track.style.transition = 'transform 0.4s ease';
            busy = false;
        });

        up.addEventListener('click', prev);
        down.addEventListener('click', next);
    });

  });
}




