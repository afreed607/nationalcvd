(() => {
    'use strict';

    // # Footer
    document.getElementById("site-footer").innerHTML = `
     <div class="container px-4 sm:px-8 py-14 select-none">
     <div class="flex-1 md:flex-row justify-between text-white pb-10">
         <img class="h-16 w-auto" src="./assets/images/white-logo.webp" data-aos="fade-up" data-aos-delay="100" />
         <ul class="flex justify-center items-center flex-wrap gap-0.5 lg:gap-4 mt-5" data-aos="fade-up" data-aos-delay="100">
             <li>
                 <a href="./index.html"
                     class="px-3 py-2 flex items-center gap-2 text-sm md:text-[1rem] font-semibold text-gray-200 hover:text-white rounded transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 10.5 12 3l9 7.5"/>
                        <path d="M5 9.5V21h14V9.5"/>
                        <path d="M9 21v-6h6v6"/>
                    </svg>
                     Home
                 </a>
             </li>
             <li>
             <a href="./inspiration.html"
                 class="px-3 py-2 flex items-center gap-2 text-sm md:text-[1rem] font-semibold text-gray-200 hover:text-white rounded transition-colors duration-200">
                 <svg
                 aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg"
                 width="16"
                 height="16"
                 fill="none"
                 viewBox="0 0 24 24"
               >
                 <!-- Light bulb -->
                 <path
                   stroke="currentColor"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="1.8"
                   d="M9 18h6M10 21h4M8.5 15.5A6 6 0 1 1 15.5 15c-.7.6-1.1 1.4-1.3 2.3H9.8a4.4 4.4 0 0 0-1.3-1.8Z"
                 />
               
                 <!-- Bulb filament -->
                 <path
                   stroke="currentColor"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="1.8"
                   d="M10 12.5c.7-.5 1.2-1.1 1.2-2.1M14 12.5c-.7-.5-1.2-1.1-1.2-2.1"
                 />
               
                 <!-- Inspiration rays -->
                 <path
                   stroke="currentColor"
                   stroke-linecap="round"
                   stroke-width="1.8"
                   d="M12 2v1.5M4.9 4.9 6 6M2 12h1.5M19.1 4.9 18 6M20.5 12H22"
                 />
               </svg>
                 Inspiration
             </a>
         </li>
             <li>
                 <a href="./speakers.html"
                     class="px-3 py-2 flex items-center gap-2 text-sm md:text-[1rem] font-semibold text-gray-200 hover:text-white rounded transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="8" r="3.5"/>
                        <path d="M5 21c.6-3.5 3.1-6 7-6s6.4 2.5 7 6"/>
                    </svg>
                     Speakers
                 </a>
             </li>
             <li>
                 <a href="./agenda.html"
                     class="px-3 py-2 flex items-center gap-2 text-sm md:text-[1rem] font-semibold text-gray-200 hover:text-white rounded transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="5" width="18" height="16" rx="2"/>
                        <path d="M16 3v4M8 3v4M3 10h18"/>
                        <path d="M8 14h2M14 14h2M8 17h2M14 17h2"/>
                    </svg>
                     Agenda
                 </a>
             </li>
             <li>
                 <a href="./contact.html"
                     class="px-3 py-2 flex items-center gap-2 text-sm md:text-[1rem] font-semibold text-gray-200 hover:text-white rounded transition-colors duration-200">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="5" width="18" height="14" rx="2"/>
                        <path d="m3 7 9 6 9-6"/>
                    </svg>
                     Contact
                 </a>
             </li>
             <li>
                 <a href="#"
                     class="px-3 py-2 flex items-center gap-2 text-sm md:text-[1rem] font-semibold text-gray-200 hover:text-white rounded transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 3h9l4 4v14H6z"/>
                        <path d="M14 3v5h5"/>
                        <path d="M9 13h6M9 17h6"/>
                    </svg>
                     Brochure
                 </a>
             </li>
         </ul>
     </div>
     <div class="flex-1 flex-row gap-4 md:gap-6 border-t border-white/20 pt-8" data-aos="fade" data-aos-delay="600">
         <a href="https://in.linkedin.com/company/tricog-health" target="_blank">
         <svg class="lg:w-[28px] lg:h-[28px] w-10 h-10 text-white" aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
         <path fill-rule="evenodd"
             d="M4.25 2.25h15.5a2 2 0 0 1 2 2v15.5a2 2 0 0 1-2 2H4.25a2 2 0 0 1-2-2V4.25a2 2 0 0 1 2-2Zm2.15 6.1a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm1.4 1.35H4.8v8.65h3V9.7Zm1.5 0h2.9v1.18c.6-.9 1.55-1.45 2.75-1.45 2.6 0 3.3 1.7 3.3 4.05v4.87h-3v-4.32c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.28v4.39H9.3V9.7Z"
             clip-rule="evenodd"/>
     </svg>                   
         </a>
         <a href="https://x.com/tricoghealth" target="_blank">
             <svg class="lg:w-[28px] lg:h-[28px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
               </svg>                                           
         </a>
         <a href="https://www.facebook.com/tricog/" target="_blank">
            <svg class="lg:w-[28px] lg:h-[28px] w-10 h-10 text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Zm1.1 5.55h1.65V5.25h-1.65c-1.93 0-3.1 1.17-3.1 3.15v1.35H8.35v2.65H10v6.35h2.8V12.4h1.95l.3-2.65H12.8V8.65c0-.55.1-.85.3-.85Z"
                    clip-rule="evenodd"/>
            </svg>                                                             
         </a>
         <a href="https://www.youtube.com/channel/UCV-uGseptgruiCZrFuPz9SA" target="_blank">
             <svg class="lg:w-[28px] lg:h-[28px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                 <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
               </svg>
         </a>
         <a href="https://www.instagram.com/tricoghealth/" target="_blank">
             <svg class="lg:w-[28px] lg:h-[28px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                 <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
               </svg>                      
         </a>
     </div>
 </div>`;

    // # Header
    /* ── Elements ───────────────────────────────────────────────── */
    const header = document.getElementById('site-header');

    header.innerHTML = `
    <!-- ── Top bar ────────────────────────────────────────────────── -->
    <div class="container mx-auto px-4 sm:px-8 py-4 flex items-center justify-between select-none">

        <!-- Logo -->
      
            <img class="h-14 lg:h-16 xl:h-18 w-auto" src="./assets/images/logo.svg" data-aos="fade-down" />

        <!-- ── Desktop Navigation (≥ 768px) ─────────────────────────── -->
        <nav id="desktop-nav" class="hidden md:flex items-center" aria-label="Primary navigation"
            data-aos="fade-down" data-aos-delay="100">
            <ul class="flex items-center gap-0 lg:gap-5" role="list">

                <li>
                    <a href="./index.html"
                        class="nav-link flex items-center gap-2 px-3 py-2 text-sm md:text-[1rem] font-medium text-gray-200 hover:text-white rounded transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 10.5 12 3l9 7.5"/>
                            <path d="M5 9.5V21h14V9.5"/>
                            <path d="M9 21v-6h6v6"/>
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <a href="./inspiration.html"
                        class="nav-link flex items-center gap-2 px-3 py-2 text-sm md:text-[1rem] font-medium text-gray-200 hover:text-white rounded transition-colors duration-200">
                        <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <!-- Light bulb -->
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.8"
                          d="M9 18h6M10 21h4M8.5 15.5A6 6 0 1 1 15.5 15c-.7.6-1.1 1.4-1.3 2.3H9.8a4.4 4.4 0 0 0-1.3-1.8Z"
                        />
                      
                        <!-- Bulb filament -->
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.8"
                          d="M10 12.5c.7-.5 1.2-1.1 1.2-2.1M14 12.5c-.7-.5-1.2-1.1-1.2-2.1"
                        />
                      
                        <!-- Inspiration rays -->
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="1.8"
                          d="M12 2v1.5M4.9 4.9 6 6M2 12h1.5M19.1 4.9 18 6M20.5 12H22"
                        />
                      </svg>
                        Inspiration
                    </a>
                </li>
                <li>
                    <a href="./speakers.html"
                        class="nav-link px-3 py-2 flex items-center gap-2 text-sm md:text-[1rem] font-medium text-gray-200 hover:text-white rounded transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="8" r="3.5"/>
                            <path d="M5 21c.6-3.5 3.1-6 7-6s6.4 2.5 7 6"/>
                        </svg>
                        Speakers
                    </a>
                </li>
                <li>
                    <a href="./agenda.html"
                        class="nav-link px-3 py-2 flex items-center gap-2 text-sm md:text-[1rem] font-medium text-gray-200 hover:text-white rounded transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="5" width="18" height="16" rx="2"/>
                            <path d="M16 3v4M8 3v4M3 10h18"/>
                            <path d="M8 14h2M14 14h2M8 17h2M14 17h2"/>
                        </svg>
                        Agenda
                    </a>
                </li>
                <li>
                    <a href="./contact.html"
                        class="nav-link px-3 py-2 flex items-center gap-2 text-sm md:text-[1rem] font-medium text-gray-200 hover:text-white rounded transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="5" width="18" height="14" rx="2"/>
                            <path d="m3 7 9 6 9-6"/>
                        </svg>
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="nav-link px-3 py-2 flex items-center gap-2 text-sm md:text-[1rem] font-medium text-gray-200 hover:text-white rounded transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 3h9l4 4v14H6z"/>
                            <path d="M14 3v5h5"/>
                            <path d="M9 13h6M9 17h6"/>
                        </svg>
                        Brochure
                    </a>
                </li>

                <!-- More (desktop — click-only dropdown) -->
                <li class="relative" id="desktop-more-wrapper">
                    <button id="desktop-more-btn" aria-haspopup="true" aria-expanded="false"
                        aria-controls="desktop-dropdown" class="flex items-center gap-1.5 px-3 py-2 text-sm md:text-[1rem] font-medium text-gray-200
             hover:text-white rounded transition-colors duration-200 cursor-pointer">
                        More
                        <svg class="chevron w-4 h-4 opacity-70" id="desktop-chevron" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>

                    <!-- Desktop dropdown panel -->
                    <div id="desktop-dropdown" role="menu" aria-labelledby="desktop-more-btn"
                        class="dropdown-panel absolute right-0 top-[calc(100%+10px)] min-w-[168px] z-50">
                        <div
                            class="dropdown-inner bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-1.5">
                            <a href="#" role="menuitem" class="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700
                  hover:bg-gray-50 hover:text-black transition-colors duration-150">
                                Press
                            </a>
                            <a href="./contact.html#location/map" role="menuitem" class="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700
                  hover:bg-gray-50 hover:text-black transition-colors duration-150">
                                Location
                            </a>
                            <a href="./contact.html#location/map" role="menuitem" class="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700
                  hover:bg-gray-50 hover:text-black transition-colors duration-150">
                                Map
                            </a>
                        </div>
                    </div>
                </li>

            </ul>
        </nav>

        <!-- ── Hamburger (< 768px) ───────────────────────────────────── -->
        <button id="hamburger-btn" aria-label="Open navigation menu" aria-expanded="false"
            aria-controls="mobile-menu" class="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md
       hover:bg-white/10 transition-colors duration-200 shrink-0 cursor-pointer" data-aos="fade-down">
            <span class="ham-wrap flex flex-col gap-[6px]" id="ham-wrap">
                <span class="ham-line"></span>
                <span class="ham-line"></span>
                <span class="ham-line"></span>
            </span>
        </button>

    </div><!-- /top bar -->

    <!-- ══════════════════════════════════════════════════════════════
 MOBILE MENU — absolutely positioned, overlaps page content
══════════════════════════════════════════════════════════════════ -->
    <div id="mobile-menu" role="dialog" aria-modal="false" aria-label="Mobile navigation">

        <nav class="max-w-7xl mx-auto" aria-label="Mobile navigation links">
            <ul role="list" class="flex flex-col py-4">

                <li>
                    <a href="./index.html" class="mob-item flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 10.5 12 3l9 7.5"/>
                    <path d="M5 9.5V21h14V9.5"/>
                    <path d="M9 21v-6h6v6"/>
                </svg>
                    Home
                    </a>
                </li>
                <li>
                <a href="./inspiration.html" class="mob-item flex items-center gap-2">
                <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
              >
                <!-- Light bulb -->
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M9 18h6M10 21h4M8.5 15.5A6 6 0 1 1 15.5 15c-.7.6-1.1 1.4-1.3 2.3H9.8a4.4 4.4 0 0 0-1.3-1.8Z"
                />
              
                <!-- Bulb filament -->
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M10 12.5c.7-.5 1.2-1.1 1.2-2.1M14 12.5c-.7-.5-1.2-1.1-1.2-2.1"
                />
              
                <!-- Inspiration rays -->
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.8"
                  d="M12 2v1.5M4.9 4.9 6 6M2 12h1.5M19.1 4.9 18 6M20.5 12H22"
                />
              </svg>
                Inspiration
                </a>
            </li>
                <li>
                    <a href="./speakers.html" class="mob-item flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="3.5"/>
                    <path d="M5 21c.6-3.5 3.1-6 7-6s6.4 2.5 7 6"/>
                </svg>
                    Speakers
                    </a>
                </li>
                <li>
                    <a href="./agenda.html" class="mob-item flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="5" width="18" height="16" rx="2"/>
                    <path d="M16 3v4M8 3v4M3 10h18"/>
                    <path d="M8 14h2M14 14h2M8 17h2M14 17h2"/>
                </svg>
                    Agenda
                    </a>
                </li>
                <li>
                    <a href="./contact.html" class="mob-item flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2"/>
                    <path d="m3 7 9 6 9-6"/>
                </svg>
                    Contact
                    </a>
                </li>
                <li>
                    <a href="#" class="mob-item flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 3h9l4 4v14H6z"/>
                    <path d="M14 3v5h5"/>
                    <path d="M9 13h6M9 17h6"/>
                </svg>
                    Brochure
                    </a>
                </li>

                <!-- More — click expands black submenu below -->
                <li id="mobile-more-wrapper">
                    <button id="mobile-more-btn" aria-haspopup="true" aria-expanded="false"
                        aria-controls="mobile-more-dropdown" class="mob-item w-full flex items-center justify-between cursor-pointer
             border-b border-white/7">
                        <span>More</span>
                        <svg class="chevron w-5 h-5 opacity-50 shrink-0" id="mobile-chevron" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>

                    <!-- Mobile More dropdown: black, inline below the More row -->
                    <div id="mobile-more-dropdown" role="menu" aria-labelledby="mobile-more-btn"
                        class="dropdown-panel">
                        <div class="border-t border-white/8">
                            <a href="#" role="menuitem" class="mob-item pl-8 gap-3 flex items-center">
                                Press
                            </a>
                            <a href="./contact.html#location/map" role="menuitem" class="mob-item pl-8 gap-3 flex items-center">
                                Location
                            </a>
                            <a href="./contact.html#location/map" role="menuitem" class="mob-item pl-8 gap-3 flex items-center border-b-0">
                                Map
                            </a>
                        </div>
                    </div>
                </li>

            </ul>
        </nav>
    </div><!-- /mobile-menu -->
    `

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const hamWrap = document.getElementById('ham-wrap');
    const mobileMenu = document.getElementById('mobile-menu');

    const desktopMoreBtn = document.getElementById('desktop-more-btn');
    const desktopDropdown = document.getElementById('desktop-dropdown');
    const desktopChevron = document.getElementById('desktop-chevron');

    const mobileMoreBtn = document.getElementById('mobile-more-btn');
    const mobileMoreDropdown = document.getElementById('mobile-more-dropdown');
    const mobileChevron = document.getElementById('mobile-chevron');

    /* ── State ──────────────────────────────────────────────────── */
    let mobileOpen = false;
    let desktopDropOpen = false;
    let mobileDropOpen = false;

    /* ════════════════════════════════════════════════════════════
       Helpers
    ════════════════════════════════════════════════════════════ */
    function setOpen(el, state) {
        el.classList.toggle('open', state);
    }

    /* ════════════════════════════════════════════════════════════
       Mobile menu (hamburger)
    ════════════════════════════════════════════════════════════ */
    function openMobileMenu() {
        mobileOpen = true;
        setOpen(mobileMenu, true);
        hamWrap.classList.add('active');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        hamburgerBtn.setAttribute('aria-label', 'Close navigation menu');
    }

    function closeMobileMenu() {
        mobileOpen = false;
        setOpen(mobileMenu, false);
        hamWrap.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.setAttribute('aria-label', 'Open navigation menu');
        // also close the mobile More dropdown
        if (mobileDropOpen) closeMobileMoreDropdown();
    }

    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileOpen ? closeMobileMenu() : openMobileMenu();
    });

    /* ════════════════════════════════════════════════════════════
       Mobile "More" dropdown (click-only, white panel)
    ════════════════════════════════════════════════════════════ */
    function openMobileMoreDropdown() {
        mobileDropOpen = true;
        setOpen(mobileMoreDropdown, true);
        mobileMoreBtn.setAttribute('aria-expanded', 'true');
        mobileChevron.classList.add('rotated');
    }

    function closeMobileMoreDropdown() {
        mobileDropOpen = false;
        setOpen(mobileMoreDropdown, false);
        mobileMoreBtn.setAttribute('aria-expanded', 'false');
        mobileChevron.classList.remove('rotated');
    }

    mobileMoreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileDropOpen ? closeMobileMoreDropdown() : openMobileMoreDropdown();
    });

    /* ════════════════════════════════════════════════════════════
       Desktop "More" dropdown (click-only)
    ════════════════════════════════════════════════════════════ */
    function openDesktopDropdown() {
        desktopDropOpen = true;
        setOpen(desktopDropdown, true);
        desktopMoreBtn.setAttribute('aria-expanded', 'true');
        desktopChevron.classList.add('rotated');
    }

    function closeDesktopDropdown() {
        desktopDropOpen = false;
        setOpen(desktopDropdown, false);
        desktopMoreBtn.setAttribute('aria-expanded', 'false');
        desktopChevron.classList.remove('rotated');
    }

    desktopMoreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        desktopDropOpen ? closeDesktopDropdown() : openDesktopDropdown();
    });

    /* ════════════════════════════════════════════════════════════
       Close everything on outside click
    ════════════════════════════════════════════════════════════ */
    document.addEventListener('click', (e) => {
        // Close desktop dropdown if clicking outside
        if (desktopDropOpen && !document.getElementById('desktop-more-wrapper').contains(e.target)) {
            closeDesktopDropdown();
        }
        // Close mobile More dropdown if clicking outside its wrapper
        if (mobileDropOpen && !document.getElementById('mobile-more-wrapper').contains(e.target)) {
            closeMobileMoreDropdown();
        }
        // Close entire mobile menu if clicking outside the header
        if (mobileOpen && !header.contains(e.target)) {
            closeMobileMenu();
        }
    });

    /* ════════════════════════════════════════════════════════════
       Escape key closes everything
    ════════════════════════════════════════════════════════════ */
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (mobileDropOpen) {
            closeMobileMoreDropdown();
            mobileMoreBtn.focus();
        } else if (desktopDropOpen) {
            closeDesktopDropdown();
            desktopMoreBtn.focus();
        } else if (mobileOpen) {
            closeMobileMenu();
            hamburgerBtn.focus();
        }
    });

    /* ════════════════════════════════════════════════════════════
       Keyboard navigation inside desktop dropdown
    ════════════════════════════════════════════════════════════ */
    desktopDropdown.addEventListener('keydown', (e) => {
        const items = [...desktopDropdown.querySelectorAll('a[role="menuitem"]')];
        const idx = items.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            items[(idx + 1) % items.length]?.focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            items[(idx - 1 + items.length) % items.length]?.focus();
        }
    });

    /* ════════════════════════════════════════════════════════════
       Breakpoint sync — clean up state when crossing 768px
    ════════════════════════════════════════════════════════════ */
    const mq = window.matchMedia('(min-width: 768px)');

    mq.addEventListener('change', (e) => {
        if (e.matches) {
            // → desktop: close mobile stuff
            if (mobileOpen) closeMobileMenu();
            if (mobileDropOpen) closeMobileMoreDropdown();
        } else {
            // → mobile: close desktop dropdown
            if (desktopDropOpen) closeDesktopDropdown();
        }
    });

    /* ════════════════════════════════════════════════════════════
       Scroll shadow
    ════════════════════════════════════════════════════════════ */
    window.addEventListener('scroll', () => {
        header.classList.toggle('header-scrolled', window.scrollY > 10);
    }, { passive: true });


})();