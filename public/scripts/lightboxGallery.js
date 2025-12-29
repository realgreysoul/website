(function () {
  const client = {
    mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  };

  function lightboxGallery() {
    this.id = "gallery";
    this.$modal = null;
    this.$modalCaption = null;
    this.$modalImage = null;
    this.$modalNext = null;
    this.$modalPrevious = null;
    this.$links = null;
    this.locked = false;
    this.captions = null;
    this.current = null;
    this.delay = 375;
    this.navigation = null;
    this.mobile = null;
    this.mobileNavigation = null;
    this.protect = null;
    this.zoomIntervalId = null;
    this.initModal();
  }

  lightboxGallery.prototype.init = function (config) {
    const $links = document.querySelectorAll("#" + config.id + " .thumbnail");
    let navigation = config.navigation;
    const captions = config.captions;
    const mobile = config.mobile;
    const mobileNavigation = config.mobileNavigation;
    const protect = config.protect || false;

    let validCount = 0;
    for (let i = 0; i < $links.length; i++) {
      if ($links[i].dataset.lightboxIgnore !== "1") validCount++;
    }
    if (validCount < 2) navigation = false;

    for (let i = 0; i < $links.length; i++) {
      if ($links[i].dataset.lightboxIgnore === "1") continue;
      $links[i].addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        this.show(i, {
          $links: $links,
          navigation: navigation,
          captions: captions,
          mobile: mobile,
          mobileNavigation: mobileNavigation,
          protect: protect
        });
      });
    }
  };

  lightboxGallery.prototype.initModal = function () {
    const $modal = document.createElement("div");
    $modal.id = this.id + "-modal";
    $modal.tabIndex = -1;
    $modal.className = "gallery-modal light";
    $modal.innerHTML =
      '<div class="inner"><img src="" alt="Просмотр изображения" /></div>' +
      '<div class="caption"></div>' +
      '<div class="nav previous"></div>' +
      '<div class="nav next"></div>' +
      '<div class="close"></div>';

    document.body.appendChild($modal);

    const $modalInner = $modal.querySelector(".inner");
    const $modalImage = $modal.querySelector("img");
    const $modalCaption = $modal.querySelector(".caption");
    const $modalNext = $modal.querySelector(".next");
    const $modalPrevious = $modal.querySelector(".previous");

    $modalImage.addEventListener("load", () => {
      $modalImage.style.setProperty("--natural-width", $modalImage.naturalWidth + "px");
      $modalImage.style.setProperty("--natural-height", $modalImage.naturalHeight + "px");
      $modal.classList.add("done");

      setTimeout(() => {
        if (!$modal.classList.contains("visible")) return;
        $modal.classList.add("loaded");
        setTimeout(() => {
          $modal.classList.remove("switching", "from-left", "from-right", "done");
        }, this.delay);
      }, $modal.classList.contains("switching") ? 0 : this.delay);
    });

    $modalImage.addEventListener("contextmenu", (e) => {
      if (this.protect) e.preventDefault();
    }, true);

    $modalImage.addEventListener("dragstart", (e) => {
      if (this.protect) e.preventDefault();
    }, true);

    $modal.show = (index, offset, direction) => {
      let item, found = false;
      if (this.locked) return;
      if (typeof index !== "number") index = this.current;

      if (typeof offset === "number") {
        for (let j = 0; j < this.$links.length; j++) {
          index += offset;
          if (index < 0) index = this.$links.length - 1;
          else if (index >= this.$links.length) index = 0;
          if (index === this.current) break;

          item = this.$links[index];
          if (!item) break;
          if (item.dataset.lightboxIgnore !== "1") {
            found = true;
            break;
          }
        }
        if (!found) return;
      } else {
        if (index < 0) index = this.$links.length - 1;
        else if (index >= this.$links.length) index = 0;
        if (index === this.current) return;

        item = this.$links[index];
        if (!item) return;
        if (item.dataset.lightboxIgnore === "1") return;
      }

      if (client.mobile) {
        this.zoomIntervalId = setInterval(() => {
          this.zoomHandler();
        }, 250);
      }

      this.locked = true;
      if (this.current !== null) {
        $modal.classList.remove("loaded");
        $modal.classList.add("switching");
        if (direction === -1) $modal.classList.add("from-left");
        else if (direction === 1) $modal.classList.add("from-right");

        setTimeout(() => {
          this.current = index;
          $modalImage.src = item.href;
          if (this.captions) {
            $modalCaption.innerHTML = item.querySelector("[data-caption]").dataset.caption;
          }
          setTimeout(() => {
            $modal.focus();
            this.locked = false;
          }, this.delay);
        }, this.delay);
      } else {
        this.current = index;
        $modalImage.src = item.href;
        if (this.captions) {
          $modalCaption.innerHTML = item.querySelector("[data-caption]").dataset.caption;
        }
        $modal.classList.add("visible");
        setTimeout(() => {
          $modal.focus();
          this.locked = false;
        }, this.delay);
      }
    };

    $modal.hide = () => {
      if (this.locked || !$modal.classList.contains("visible")) return;
      this.locked = true;
      $modal.classList.remove("visible", "loaded");
      $modal.classList.remove("switching", "from-left", "from-right", "done");
      clearInterval(this.zoomIntervalId);
      setTimeout(() => {
        $modalImage.src = "";
        this.locked = false;
        document.body.focus();
        this.current = null;
      }, this.delay);
    };

    $modal.next = (direction) => $modal.show(null, 1, direction);
    $modal.previous = (direction) => $modal.show(null, -1, direction);

    $modal.addEventListener("click", (e) => {
      if (e.target.closest(".inner")) return;
      $modal.hide();
    });

    $modal.addEventListener("keydown", (e) => {
      if (!$modal.classList.contains("visible")) return;
      switch (e.key) {
        case "ArrowRight":
        case " ":
          if (!this.navigation) break;
          e.preventDefault();
          $modal.next();
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (!this.navigation) break;
          $modal.previous();
          break;
        case "Home":
          if (!this.navigation) break;
          e.preventDefault();
          $modal.show(0);
          break;
        case "End":
          if (!this.navigation) break;
          e.preventDefault();
          $modal.show(this.$links.length - 1);
          break;
        case "Escape":
          e.preventDefault();
          $modal.hide();
          break;
      }
    });

    $modalNext.addEventListener("click", (e) => {
      e.stopPropagation();
      $modal.next();
    });

    $modalPrevious.addEventListener("click", (e) => {
      e.stopPropagation();
      $modal.previous();
    });

    $modalInner.addEventListener("touchstart", (e) => {
      if (!this.navigation || e.touches.length > 1) return;
      this.dragStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });

    $modalInner.addEventListener("touchmove", (e) => {
      if (!this.navigation || !this.dragStart || e.touches.length > 1) return;
      const dx = this.dragStart.x - e.touches[0].clientX;
      if (Math.abs(dx) < 50) return;
      e.preventDefault();
      if (dx > 0) $modal.next(-1);
      else $modal.previous(1);
    });

    $modalInner.addEventListener("touchend", () => {
      this.dragStart = null;
    });

    this.$modal = $modal;
    this.$modalImage = $modalImage;
    this.$modalCaption = $modalCaption;
    this.$modalNext = $modalNext;
    this.$modalPrevious = $modalPrevious;
  };

  lightboxGallery.prototype.show = function (index, config) {
    this.$links = config.$links;
    this.navigation = config.navigation;
    this.captions = config.captions;
    this.mobile = config.mobile;
    this.mobileNavigation = config.mobileNavigation;
    this.protect = config.protect;

    if (this.navigation) {
      this.$modalNext.style.display = this.$modalPrevious.style.display = "";
      if (client.mobile && !this.mobileNavigation) {
        this.$modalNext.style.display = "none";
        this.$modalPrevious.style.display = "none";
      }
    } else {
      this.$modalNext.style.display = "none";
      this.$modalPrevious.style.display = "none";
    }

    this.$modalCaption.style.display = this.captions ? "" : "none";

    if (this.protect) {
      this.$modalImage.style.WebkitTouchCallout = "none";
      this.$modalImage.style.userSelect = "none";
    } else {
      this.$modalImage.style.WebkitTouchCallout = "";
      this.$modalImage.style.userSelect = "";
    }

    if (client.mobile && !this.mobile) return;
    this.$modal.show(index);
  };

  lightboxGallery.prototype.zoomHandler = function () {
    const threshold = window.matchMedia("(orientation: portrait)").matches ? 50 : 100;
    if (window.outerWidth > window.innerWidth + threshold) {
      this.$modal.classList.add("zooming");
    } else {
      this.$modal.classList.remove("zooming");
    }
  };

  if (document.getElementById("gallery01")) {
    const gallery = new lightboxGallery();
    gallery.init({
      id: "gallery01",
      navigation: true,
      captions: true,
      mobile: true,
      mobileNavigation: true,
      protect: false
    });
  }
})();