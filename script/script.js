gsap.registerPlugin(ScrollTrigger);

const heroTitle = document.querySelector(
  ".hero-virtual-assets-section .hero-virtual-assets-section__title"
);
if (heroTitle) {
  gsap.to(heroTitle, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
  });
}

const subSectionAnimate = (selectedSection) => {
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.trigger === selectedSection) {
      trigger.kill();
    }
  });

  const titleElement = selectedSection.querySelector(
    ".active.content-section .title-wrapper h2"
  );
  if (titleElement) {
    gsap.to(titleElement, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: selectedSection,
        start: "top 90%",
        end: "top 30%",
        toggleActions: "play none none none",
      },
    });
  }

  gsap.utils
    .toArray([
      ".main-assets-section .active.content-section .left-img-wrapper",
      ".main-assets-section .active.content-section .right-img-wrapper",
    ])
    .forEach((item) => {
      const imgMob = item.querySelectorAll(".img-mob");
      if (imgMob.length) {
        gsap.from(imgMob, {
          opacity: 0,
          y: -120,
          duration: 1,
          scrollTrigger: {
            trigger: selectedSection,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
      const textList = item.querySelectorAll(".text-list");
      if (textList.length) {
        gsap.from(textList, {
          opacity: 0,
          x: 120,
          duration: 1,
          scrollTrigger: {
            trigger: selectedSection,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
      const textBorderWrappers = item.querySelectorAll(".text-border-wrappers");
      if (textBorderWrappers.length) {
        gsap.from(textBorderWrappers, {
          opacity: 0,
          y: 120,
          duration: 1,
          scrollTrigger: {
            trigger: selectedSection,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
      const imgDeck = item.querySelectorAll(".img-deck");
      if (imgDeck.length) {
        gsap.from(imgDeck, {
          opacity: 0,
          y: -120,
          duration: 1,
          scrollTrigger: {
            trigger: selectedSection,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
      const imgWrapper = item.querySelectorAll(".img-wrapper");
      if (imgWrapper.length) {
        gsap.from(imgWrapper, {
          opacity: 0,
          y: -120,
          duration: 1,
          scrollTrigger: {
            trigger: selectedSection,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
      const h3Mob = item.querySelectorAll(".h3-mob");
      if (h3Mob.length) {
        gsap.from(h3Mob, {
          opacity: 0,
          x: 120,
          duration: 1,
          scrollTrigger: {
            trigger: selectedSection,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    });

  const marqueesTop = document.querySelector(".marquees.top .marquees-inner");
  if (marqueesTop) {
    gsap.to(marqueesTop, {
      xPercent: 250,
      duration: 16,
      ease: "none",
      scrollTrigger: {
        trigger: ".content-section .white-accent-section",
        start: "top center",
        onEnter: () => {
          gsap.to(marqueesTop, {
            xPercent: 250,
            duration: 16,
            ease: "none",
          });
        },
      },
    });
  }

  const marqueesBottom = document.querySelector(
    ".marquees.bottom .marquees-inner"
  );
  if (marqueesBottom) {
    gsap.to(marqueesBottom, {
      xPercent: -250,
      duration: 16,
      ease: "none",
      scrollTrigger: {
        trigger: ".content-section .white-accent-section",
        start: "top center",
        onEnter: () => {
          gsap.to(marqueesBottom, {
            xPercent: -250,
            duration: 16,
            ease: "none",
          });
        },
      },
    });
  }
};

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    const target = this.getAttribute("data-target");
    const selectedSection = document.querySelector(target);

    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.remove("active");
    });
    this.classList.add("active");

    if (selectedSection.classList.contains("active")) {
      return;
    }

    document.querySelectorAll(".content-section").forEach((section) => {
      if (section.classList.contains("active")) {
        gsap.to(section, {
          opacity: 0,
          y: 200,
          duration: 0.5,
          onComplete: () => {
            section.style.display = "none";
            section.classList.remove("active");
          },
        });
      }
    });

    selectedSection.style.display = "block";
    gsap.fromTo(
      selectedSection,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        onComplete: () => {
          selectedSection.classList.add("active");

          subSectionAnimate(selectedSection);
        },
      }
    );
  });
});

subSectionAnimate(document.querySelector(".content-section.active"));

const swiper2 = new Swiper(".tab-virtual-assets-section .swiper", {
  slidesPerView: 1.496,
  spaceBetween: 16,
  loop: false,
  speed: 800,
  pagination: {
    el: ".tab-virtual-assets-section .swiper-pagination",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: "slide",
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 5,
      enabled: false,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 16,
      enabled: false,
    },
  },
});

swiper2.on("slideChangeTransitionEnd", function () {
  if (swiper2.isEnd) {
    swiper2.autoplay.stop();
  }
});
