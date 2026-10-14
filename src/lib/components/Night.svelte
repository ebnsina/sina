<script lang="ts">
  // Deterministic star field so SSR and client agree
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const stars = Array.from({ length: 90 }, () => ({ x: rnd() * 1440, y: rnd() * 520, r: 0.6 + rnd() * 1.4 }));
</script>

<svg class="night" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
  <defs>
    <linearGradient id="nsky" x1="0" y1="0" x2="0" y2="1"><stop class="s0" offset="0" stop-color="#f4f1ea" /><stop class="s1" offset="0.3" stop-color="#f1d4b8" /><stop class="s2" offset="0.6" stop-color="#d7a894" /><stop class="s3" offset="1" stop-color="#7b6f82" /></linearGradient>
    <radialGradient id="mglow"><stop offset="0" stop-color="#f6d98a" stop-opacity="0.35" /><stop offset="1" stop-color="#f6d98a" stop-opacity="0" /></radialGradient>
    <linearGradient id="n1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#22362a" /><stop offset="1" stop-color="#14231a" /></linearGradient>
    <linearGradient id="n2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#132019" /><stop offset="1" stop-color="#0b140f" /></linearGradient>
  </defs>
  <rect width="1440" height="900" fill="url(#nsky)" />
  <g class="stars" fill="#f4f1ea" opacity="0">
    {#each stars as s}<circle class="star" cx={s.x} cy={s.y} r={s.r} />{/each}
  </g>
  <g class="moon" opacity="0">
    <circle cx="1000" cy="500" r="180" fill="url(#mglow)" />
    <circle cx="1000" cy="500" r="46" fill="#f6e7bf" />
    <circle cx="1018" cy="488" r="40" fill="#0f1a14" opacity="0.92" />
  </g>
  <path class="nridge r1" fill="url(#n1)" d="M0 700 50 680 90 696 150 646 190 668 230 652 290 690 340 660 380 676 430 632 470 656 510 644 560 686 620 660 660 672 720 628 760 650 800 640 850 684 900 664 950 676 1000 642 1040 662 1080 650 1130 692 1180 666 1230 680 1280 646 1320 664 1370 654 1440 696V1000H0Z" />
  <path class="nridge r2" fill="url(#n2)" d="M0 800 60 780 100 792 150 756 200 776 240 766 300 804 350 784 400 794 450 752 500 774 540 764 600 806 650 786 700 798 760 758 800 778 850 770 900 810 950 788 1000 798 1050 762 1090 780 1140 772 1200 812 1250 790 1300 800 1350 768 1400 784 1440 778V1000H0Z" />
</svg>

<style>
  .night { position: absolute; inset: 0; z-index: -1; width: 100%; height: 100%; pointer-events: none; }
  .moon { transform-origin: 1000px 500px; }
</style>
