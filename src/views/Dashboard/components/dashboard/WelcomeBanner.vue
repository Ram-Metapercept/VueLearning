<template>
  <div class="section">
    <!-- Background illustration -->
    <div class="section_part" aria-hidden="true">
      <svg width="319" height="198" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
          <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
          <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
            <stop stop-color="#A5B4FC" offset="0%" />
            <stop stop-color="#818CF8" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="50%"
            y1="24.537%"
            x2="50%"
            y2="100%"
            id="welcome-c"
          >
            <stop stop-color="#4338CA" offset="0%" />
            <stop stop-color="#6366F1" stop-opacity="0" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <g transform="rotate(64 36.592 105.604)">
            <mask id="welcome-d" fill="#fff">
              <use xlink:href="#welcome-a" />
            </mask>
            <use fill="url(#welcome-b)" xlink:href="#welcome-a" />
            <path
              fill="url(#welcome-c)"
              mask="url(#welcome-d)"
              d="M64-24h80v152H64z"
            />
          </g>
          <g transform="rotate(-51 91.324 -105.372)">
            <mask id="welcome-f" fill="#fff">
              <use xlink:href="#welcome-e" />
            </mask>
            <use fill="url(#welcome-b)" xlink:href="#welcome-e" />
            <path
              fill="url(#welcome-c)"
              mask="url(#welcome-f)"
              d="M40.333-15.147h50v95h-50z"
            />
          </g>
          <g transform="rotate(44 61.546 392.623)">
            <mask id="welcome-h" fill="#fff">
              <use xlink:href="#welcome-g" />
            </mask>
            <use fill="url(#welcome-b)" xlink:href="#welcome-g" />
            <path
              fill="url(#welcome-c)"
              mask="url(#welcome-h)"
              d="M40.333-15.147h50v95h-50z"
            />
          </g>
        </g>
      </svg>
    </div>
    <div class="title-card">
      <h1 class="uppperText">Good afternoon, Metapercept. 👋</h1>
      <p>
        Here is what’s happening with your projects today:
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeBanner",
};
</script>

<style>
.section {
  background-color: #a5b4fc;
  overflow: hidden;
  padding: 2rem;
  position: relative;
}
.section_part {
  margin-bottom: 2rem;
  margin-right: 4rem;
  position: absolute;
  right: 0px;
  top: 0px;
  display: block;
  margin-top: -1rem;
  pointer-events: none;
}
.title-card {
  position: relative;
}
.uppperText {
  font-size: 1.5rem /* 24px */;
  line-height: 1.33;
  letter-spacing: -0.01em;
  font-weight: bold;
  margin-bottom: 0.25rem;
}
@media (min-width: 768px) {
  .uppperText {
    font-size: 1.88rem /* 30.08px */;
    line-height: 1.33;
    letter-spacing: -0.01em;
  }
}
</style>
