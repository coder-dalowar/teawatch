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
  document.addEventListener("DOMContentLoaded", function () {
    const wrappers = document.querySelectorAll(".copy_wraper");

    if (!wrappers.length) return;

    wrappers.forEach(function (wrapper) {
      const copyBtn = wrapper.querySelector(".copy_btn");
      const copyText = wrapper.querySelector(".copy_text");

      if (!copyBtn || !copyText) return;

      copyBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const textToCopy = copyText.innerText.trim();
        if (!textToCopy) return;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy)
            .then(() => {
              copyBtn.classList.add("copied");
              setTimeout(() => copyBtn.classList.remove("copied"), 800);
            })
            .catch(() => {
              // silent fail, no console noise
            });
        }
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



// ==================== custom calender =================
{
  document.addEventListener('DOMContentLoaded', function () {

    const calendars = document.querySelectorAll('.calendar-wrapper');
    if (!calendars.length) return;

    calendars.forEach(calendar => {

        const input     = calendar.querySelector('.calendar-input');
        const dropdown  = calendar.querySelector('.calendar-dropdown');
        const text      = calendar.querySelector('.calendar-text');
        const monthYear = calendar.querySelector('.month-year');
        const datesBox  = calendar.querySelector('.calendar-dates');
        const prevBtn   = calendar.querySelector('.prev');
        const nextBtn   = calendar.querySelector('.next');

        if (!input || !dropdown) return;

        let currentDate = new Date();

        /* =========================
           TOGGLE CALENDAR
        ==========================*/
        input.addEventListener('click', function (e) {
            e.stopPropagation();

            const isOpen = calendar.classList.contains('open');

            // -------------------------
            // CLOSE OTHER DROPDOWNS
            // -------------------------
            // Close all other calendars
            calendars.forEach(cal => {
                if (cal !== calendar) {
                    cal.classList.remove('open');
                    const dd = cal.querySelector('.calendar-dropdown');
                    if (dd) dd.style.display = 'none';
                }
            });

            // Close all custom selects
            document.querySelectorAll('.custom_select').forEach(sel => sel.classList.remove('open'));

            // Close all search dropdowns
            document.querySelectorAll('.search_game_dropdown').forEach(dd => dd.classList.remove('show'));

            // -------------------------
            // TOGGLE CURRENT CALENDAR
            // -------------------------
            if (!isOpen) {
                calendar.classList.add('open');
                dropdown.style.display = 'block';
            } else {
                calendar.classList.remove('open');
                dropdown.style.display = 'none';
            }
        });

        /* Prevent dropdown click from closing */
        dropdown.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        /* =========================
           RENDER CALENDAR
        ==========================*/
        function renderCalendar() {
            datesBox.innerHTML = '';

            const year  = currentDate.getFullYear();
            const month = currentDate.getMonth();

            monthYear.textContent = currentDate.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
            });

            const firstDay  = new Date(year, month, 1).getDay() || 7; // start from Monday
            const totalDays = new Date(year, month + 1, 0).getDate();

            // Empty spans for previous month's days
            for (let i = 1; i < firstDay; i++) {
                datesBox.appendChild(document.createElement('span'));
            }

            // Render days
            for (let d = 1; d <= totalDays; d++) {
                const day = document.createElement('span');
                day.textContent = d;

                day.addEventListener('click', function () {
                    text.textContent = `${d}/${month + 1}/${year}`;
                    // Close calendar after selection
                    calendar.classList.remove('open');
                    dropdown.style.display = 'none';
                });

                datesBox.appendChild(day);
            }
        }

        /* Month navigation */
        prevBtn && prevBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });

        nextBtn && nextBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });

        renderCalendar();
    });

    /* =========================
       OUTSIDE CLICK CLOSE
    ==========================*/
    document.addEventListener('click', function () {
        calendars.forEach(calendar => {
            calendar.classList.remove('open');
            const dropdown = calendar.querySelector('.calendar-dropdown');
            if (dropdown) dropdown.style.display = 'none';
        });
    });

  });
  
}



// ==================== progressbar functionalify =================
{
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('rankingModal');

    // Exit safely if the modal does not exist on this page
    if (!modal) return;

    // Animate progress bars when the modal is fully shown
    modal.addEventListener('shown.bs.modal', () => {
        animateProgressBars(modal);
    });

    // reset progress when modal is closed
    modal.addEventListener('hidden.bs.modal', () => {
        resetProgressBars(modal);
    });
  });

  function animateProgressBars(scope) {
      const bars = scope.querySelectorAll('.progress');

      bars.forEach((bar, index) => {
          const value = Number(bar.dataset.progress);

          // data-progress is missing or invalid
          if (!Number.isFinite(value)) return;

          // Reset width before animating (important for re-open)
          bar.style.width = '0%';

          // Small stagger for smoother visual flow
          setTimeout(() => {
              bar.style.width = `${value}%`;
          }, index * 150);
      });
  }

  function resetProgressBars(scope) {
      const bars = scope.querySelectorAll('.progress');

      bars.forEach(bar => {
          bar.style.width = '0%';
      });
  }
}



// ==================== circle progressbar functionalify =================
{
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".progress_circle").forEach(function (wrap) {
      const circle = wrap.querySelector(".progress_line");
      if (!circle) return;

      const radius = 90;
      const circumference = 2 * Math.PI * radius;
      const percent = 75;

      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset =
        circumference - (percent / 100) * circumference;
    });
  });
}



// ==================== analytics chart =================
{
  function createLineChart(canvasEl, dataset1, dataset2, labels) {
    if (!canvasEl) return;

    const ctx = canvasEl.getContext('2d');

    // Animation state
    let animationProgress = 0;
    let animationDone = false;

    const h = canvasEl.height || 400;

    /* =====================
       Create gradients
    ====================== */
    const gradient1 = ctx.createLinearGradient(0, 0, 0, h);
    gradient1.addColorStop(0, '#A11B1B');
    gradient1.addColorStop(1, '#A11B1B');

    const gradient2 = ctx.createLinearGradient(0, 0, 0, h);
    gradient2.addColorStop(0, '#4072EE');
    gradient2.addColorStop(1, '#4072EE');

    /* =====================
       Chart instance
    ====================== */
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                    data: dataset1,
                    borderColor: gradient1,
                    borderWidth: 2,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 7,
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderWidth: 3,
                    pointHoverBorderColor: '#A11B1B',
                    fill: false
                },
                {
                    data: dataset2,
                    borderColor: gradient2,
                    borderWidth: 2,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 7,
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderWidth: 3,
                    pointHoverBorderColor: '#4072EE',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,

            // Chart animation configuration
            animation: {
                duration: 2000,
                easing: 'linear',
                onProgress(anim) {
                    animationProgress = anim.currentStep / anim.numSteps;
                },
                onComplete() {
                    animationProgress = 1;
                    animationDone = true;
                }
            },

            interaction: {
                mode: 'nearest',
                intersect: false
            },

            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: true,
                    yAlign: 'bottom',
                    backgroundColor: '#370B0B',
                    bodyColor: '#FFF',
                    bodyFont: { weight: 'bold', size: 15 },
                    displayColors: false,
                    padding: 10,
                    cornerRadius: 6,
                    caretPadding: 10,
                    callbacks: {
                        title: () => '',
                        label: ctx => ctx.raw
                    }
                }
            },

            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: '#748AA1' }
                },
                y: {
                    min: 100,
                    max: 4500,
                    grid: { color: '#262A2E' },
                    ticks: { display: false },
                    border: { display: false }
                }
            }
        },

        plugins: [
            /* =====================
               Left-to-right reveal animation
            ====================== */
            {
                id: 'horizontalReveal',
                beforeDatasetsDraw(chartInstance) {
                    if (animationDone) return;

                    const { ctx, chartArea } = chartInstance;
                    ctx.save();
                    ctx.beginPath();
                    ctx.rect(
                        chartArea.left,
                        chartArea.top,
                        chartArea.width * animationProgress,
                        chartArea.height
                    );
                    ctx.clip();
                },
                afterDatasetsDraw(chartInstance) {
                    if (!animationDone) {
                        chartInstance.ctx.restore();
                    }
                }
            },

            /* =====================
               Vertical hover indicator line
            ====================== */
            {
                id: 'verticalLine',
                afterDraw(chartInstance) {
                    if (!chartInstance.tooltip?._active?.length) return;

                    const activePoint = chartInstance.tooltip._active[0].element;
                    const x = activePoint.x;
                    const { ctx, chartArea } = chartInstance;

                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(x, chartArea.top);
                    ctx.lineTo(x, chartArea.bottom);
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = 'rgba(0,0,0,0.1)';
                    ctx.stroke();
                    ctx.restore();
                }
            }
        ]
    });

    /* =====================
       Force resize after initial render
    ====================== */
    setTimeout(() => {
        animationProgress = 0;
        animationDone = false;
        chart.resize();
        chart.update();
    }, 0);

    /* =====================
       Instant dataset toggle
    ====================== */
    chart.toggleDataset = function (idx, btn) {
        this.data.datasets[idx].hidden = !this.data.datasets[idx].hidden;
        if (btn) btn.classList.toggle('hidden');
        this.update('none');
    };

    /* =====================
       Set default tooltip
    ====================== */
    chart.setDefaultTooltip = function (datasetIndex, dataIndex) {
        setTimeout(() => {
            this.tooltip.setActiveElements(
                [{ datasetIndex, index: dataIndex }],
                { x: 0, y: 0 }
            );
            this.update('none');
        }, 2100);
    };

    return chart;
  }

  /* =====================
    Usage
  ====================== */

  const labels = ['דצמ׳','נוב׳','אוק׳','ספט׳','אוג׳','יול׳','יונ׳','מאי','אפר׳','מרץ','פבר׳','ינו׳'];
  const redData  = [1500,1200,1800,1400,1100,2200,1800,2400,2100,2300,2600,1600];
  const blueData = [800,1800,1100,2800,2100,2300,2345,1500,2400,2500,3500,2200];

  const canvas = document.getElementById('analytics_chart');

  if (canvas) {
      const chart1 = createLineChart(
          canvas,
          redData,
          blueData,
          labels
      );

      //  default tooltip ---------
      if (chart1?.setDefaultTooltip) {
          chart1.setDefaultTooltip(1, 6);
      }

      // Toggle buttons --------
      const toggleRed  = document.getElementById('toggleRed');
      const toggleBlue = document.getElementById('toggleBlue');

      if (toggleRed) {
          toggleRed.addEventListener('click', () =>
              chart1.toggleDataset(0, toggleRed)
          );
      }

      if (toggleBlue) {
          toggleBlue.addEventListener('click', () =>
              chart1.toggleDataset(1, toggleBlue)
          );
      }
  }   

}

