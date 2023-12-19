<template>
  <ul class="flex1  sm:justify-start mb-8 sm:mb-0 -space-x-3 -ml-px">
    <li>
      <router-link class="block" to="#0">
        <img class="w-9 h-9 rounded-full" src="../../../../assets/user-36-01.jpg" width="36" height="36" alt="User 01" />
      </router-link>
    </li>
    <li>
      <router-link class="block" to="#0">
        <img class="w-9 h-9 rounded-full" src="../../../../assets/user-36-02.jpg" width="36" height="36" alt="User 02" />
      </router-link>
    </li>
    <li>
      <router-link class="block" to="#0">
        <img class="w-9 h-9 rounded-full" src="../../../../assets/user-36-03.jpg" width="36" height="36" alt="User 03" />
      </router-link>
    </li>
    <li>
      <router-link class="block" to="#0">
        <img class="w-9 h-9 rounded-full" src="../../../../assets/user-36-04.jpg" width="36" height="36" alt="User 04" />
      </router-link>
    </li>
    <li>
      <button class="flex1 w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500 shadow-sm transition duration-150 ml-2">
        <span class="sr-only">Add new user</span>
        <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
          <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
        </svg>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DashboardAvatars',
}
</script>

<style>

.block{
  display: block;
}
.w-9{
  width: 2.25rem;
}
.h-9{
  width: 2.25rem;
}
.rounded-full {
  border-radius: 9999px;
}

/* Base styling for the list */
ul.flex1 {margin-top: 1rem;
  display: flex;
  list-style: none;
  flex: 1;
}

/* Styling for list items */
ul.flex1 li {
  margin-left: -0.75rem; /* Equivalent to -space-x-3 */
}

/* Styling for the router link */
ul.flex1 li router-link.block {
  display: block;
}

/* Styling for the images within the router link */
ul.flex1 li router-link.block img {
  width: 2.25rem; /* Equivalent to w-9 */
  height: 2.25rem; /* Equivalent to h-9 */
  border-radius: 0.25rem; /* Equivalent to rounded-full */
}

/* Styling for the button */
ul.flex1 li button {
  flex: 1;
  width: 2.25rem; /* Equivalent to w-9 */
  height: 2.25rem; /* Equivalent to h-9 */
  border-radius: 0.25rem; /* Equivalent to rounded-full */
  background-color: #fff; /* Equivalent to bg-white */
  border: 1px solid #cbd5e0; /* Equivalent to border and border-slate-200 */
  color: #4a5568; /* Equivalent to text-indigo-500 */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* Equivalent to shadow-sm */
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; /* Equivalent to transition duration-150 */
  margin-left: 0.5rem; /* Equivalent to ml-2 */
}

/* Styling for the button on hover */
ul.flex1 li button:hover {
  border-color: #a0aec0; /* Equivalent to hover:border-slate-300 */
  color: #667eea; /* Equivalent to dark:hover:border-slate-600 */
}

/* Styling for the SVG icon within the button */
ul.flex1 li button svg {
  width: 1rem; /* Equivalent to w-4 */
  height: 1rem; /* Equivalent to h-4 */
  fill: currentColor; /* Equivalent to fill-current */
}

/* Styling for the "Add new user" span within the button */
ul.flex1 li button span.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}



</style>