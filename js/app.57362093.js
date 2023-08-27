(function(){"use strict";var t={122:function(t,n,e){var s=e(144),i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"page-wrapper"},[n("div",{staticClass:"page"},[n("div",{staticClass:"page-inner"},[n("HelloWorld")],1)])])},o=[],a=function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{staticClass:"resume",attrs:{id:"resume2"}},[n("div",{staticClass:"left-column"},[n("div",[n("div",{staticClass:"headline"},[n("span",[t._v(" "+t._s(t.person.name.first)+" "+t._s(t.person.name.middle)+" ")]),n("span",[t._v(" "+t._s(t.person.name.last)+" ")])]),n("p",[n("span",{staticClass:"txt-full-white"},[t._v(" "+t._s(t.person.position)+" ")]),n("br"),n("span",[t._v(" "+t._s(t.person.contact.city)+" ")])])]),n("div",{staticClass:"multi-line-txt txt-notfull-white"},[t._v(" "+t._s(t.person.about)+" ")]),n("div",{staticClass:"multi-line-txt"},[t._v(" "+t._s(t.person.knowledge)+" ")]),n("a",{attrs:{href:t.contactLinks.email}},[n("div",{staticClass:"block-marged txt-full-white"},[t._v(" "+t._s(t.person.contact.email)+" ")])]),n("div",{staticClass:"block-marged txt-full-white"},[t._v(" "+t._s(t.person.contact.phone)+" ")]),n("div",{staticClass:"social-container"},[t.person.contact.website?n("a",{attrs:{href:t.person.contact.website}},[n("div",{staticClass:"block-marged txt-full-white"},[n("i",{staticClass:"fa fa-globe contact-icon"}),t._v(" "+t._s(t.person.contact.website)+" ")])]):t._e(),t.person.contact.github?n("a",{staticClass:"external-link",attrs:{href:t.contactLinks.github}},[n("i",{staticClass:"fa fa-github contact-icon"}),n("span",{staticClass:"block-marged txt-full-white"},[t._v(" "+t._s(t.person.contact.github)+" ")])]):t._e(),t.person.contact.codefights?n("a",{staticClass:"external-link",attrs:{href:t.contactLinks.codefights}},[n("svg",{staticClass:"contact-icon-svg",attrs:{width:"20",height:"20",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 15.2L9.2 4.8 0 3.2l1.7 2.6 5.7.7.7 2.3-3.7-.4 1.3 2 3 .3L12 20.8l3.3-10.1 3-.3 1.3-2-3.7.4.7-2.3 5.7-.7L24 3.2l-9.2 1.6"}})]),n("span",{staticClass:"block-marged txt-full-white"},[t._v(" "+t._s(t.person.contact.codefights)+" ")])]):t._e(),t.person.contact.medium?n("a",{staticClass:"external-link",attrs:{href:t.contactLinks.medium}},[n("i",{staticClass:"fab fa-medium contact-icon"}),n("span",{staticClass:"block-marged txt-full-white"},[t._v(" "+t._s(t.person.contact.medium)+" ")])]):t._e()]),n("div",{staticClass:"hobbies-container"},[n("div",{staticClass:"hobbies-content"},t._l(t.person.hobbies,(function(e,s){return n("a",{key:s,staticClass:"hobby-item",attrs:{href:e.url}},[e.iconClass?n("i",{class:e.iconClass+" hobby-item__icon"}):t._e(),n("span",{staticClass:"hobby-item__icon-label"},[t._v(" "+t._s(e.name)+" ")])])})),0)])]),n("div",{staticClass:"left-column-bg"}),n("div",{staticClass:"right-column"},[n("div",{staticClass:"experience-section section"},[n("div",{staticClass:"icon"},[n("i",{staticClass:"material-icons small-icon"},[t._v("work")]),n("span",{staticClass:"section-headline"},[t._v(t._s(t.lang.experience))])]),n("div",{staticClass:"section-content"},t._l(t.person.experience,(function(e,s){return n("span",{key:s,staticClass:"section-content__item",attrs:{href:e.website}},[n("span",{staticClass:"section-content__header"},[t._v(" "+t._s(e.position))]),n("span",{staticClass:"section-content__subheader"},[t._v(" "+t._s(e.company))]),n("div",{staticClass:"section-content__text"},[t._v(" "+t._s(e.timeperiod))]),n("span",{staticClass:"section-content__text--bold"},[t._v(" "+t._s(e.title))]),t._l(e.description,(function(e){return n("li",{key:e,staticClass:"section-content__text--bold"},[t._v(" "+t._s(e)+" ")])}))],2)})),0)]),n("div",{staticClass:"education-section section"},[n("div",{staticClass:"icon"},[n("i",{staticClass:"material-icons"},[t._v("record_voice_over")]),n("span",{staticClass:"section-headline"},[t._v(t._s(t.lang.educational_activity))])]),n("div",{staticClass:"section-content"},t._l(t.person.educational_activity,(function(e,s){return n("a",{key:s,staticClass:"section-content__item"},[n("span",{staticClass:"section-content__header"},[t._v(" "+t._s(e.company)+" ")]),n("span",{staticClass:"section-content__text"},[t._v(" "+t._s(e.timeperiod)+" ")]),n("span",{staticClass:"section-content__text--light"},[t._v(" "+t._s(e.description)+" ")])])})),0)]),n("div",{staticClass:"education-section section"},[n("div",{staticClass:"icon"},[n("i",{staticClass:"material-icons"},[t._v("school")]),n("span",{staticClass:"section-headline"},[t._v(t._s(t.lang.education))])]),n("div",{staticClass:"section-content"},t._l(t.person.education,(function(e,s){return n("a",{key:s,staticClass:"section-content__item",attrs:{href:e.website}},[n("span",{staticClass:"section-content__header"},[t._v(" "+t._s(e.school)+" ")]),n("span",{staticClass:"section-content__subheader"},[t._v(t._s(e.degree))]),n("span",{staticClass:"section-content__text"},[t._v(" "+t._s(e.timeperiod)+" ")]),n("span",{staticClass:"section-content__text--light"},[t._v(" "+t._s(e.description)+" ")])])})),0)]),t.person.projects?n("div",{staticClass:"projects-section section"},[n("div",{staticClass:"icon"},[n("i",{staticClass:"material-icons"},[t._v("code")]),n("span",{staticClass:"section-headline"},[t._v(" "+t._s(t.lang.projects)+" ")])]),n("div",{staticClass:"section-content"},t._l(t.person.projects,(function(e,s){return n("a",{key:s,staticClass:"section-content__item",attrs:{href:e.url}},[n("span",{staticClass:"section-content__header"},[t._v(" "+t._s(e.name)+" ")]),n("span",{staticClass:"section-content__subheader"},[t._v(t._s(e.platform))]),n("span",{staticClass:"section-content__text"},[t._v(" "+t._s(e.description)+" ")]),n("span",{staticClass:"section-content__text--light"},[t._v(" "+t._s(e.url)+" ")])])})),0)]):t._e(),t.person.skills?n("div",{staticClass:"skills-section section"},[n("div",{staticClass:"icon"},[n("i",{staticClass:"material-icons"},[t._v("done_all")]),n("span",{staticClass:"section-headline"},[t._v(" "+t._s(t.lang.skills)+" ")])]),n("div",{staticClass:"section-content-grid"},t._l(t.person.skills,(function(e,s){return n("a",{key:s,staticClass:"grid-item",attrs:{href:e.url}},[e.iconClass?n("i",{class:"lang-icon "+e.iconClass}):n("span",{staticClass:"squarred-grid-item"},[t._v(" "+t._s(e.name)+" ")])])})),0)]):t._e(),t.person.contributions?n("div",{staticClass:"contributions-section section"},[n("div",{staticClass:"icon"},[n("i",{staticClass:"fa fa-heart font-awesome-icons"}),n("span",{staticClass:"section-headline"},[t._v(" "+t._s(t.lang.contributions)+" ")])]),n("div",{staticClass:"section-content-grid"},t._l(t.person.contributions,(function(e,s){return n("a",{key:s,staticClass:"section-content__item-grid",attrs:{href:e.url}},[n("span",{staticClass:"section-content__header"},[t._v(" "+t._s(e.name)+" ")]),n("span",{staticClass:"section-content__text"},[t._v(" "+t._s(e.description)+" ")]),n("span",{staticClass:"section-content__text--light",staticStyle:{"word-break":"break-all"}},[t._v(" "+t._s(e.url)+" ")])])})),0)]):t._e()])])},c=[],r=e(320),l=e.n(r);const p='\n# Any fields left unchanged, please delete so your resume is fully yours!\n\nname:\n  first: Илья\n  middle:\n  last: Гусаров\nabout: Привет! Меня зовут Илья и я разработчик в социальной сети "Одноклассники",\n интересуюсь разработкой высоконагруженных систем на языке Java, поэтому пошел работать в компанию со сложной, распределенной серверной архитектурой. \n Но сначала попал на Android, получил много продуктового опыта и знаний в коммерческой разработке. Сейчас занимаюсь написанием бэкенда в проекте фото. \nposition: Бэкенд разработчик\n\nbirth:\n  year: 2000\n  location: Санкт-Петербург\n\n# you may add more experiences by duplicating the template\n\nexperience:\n\n- company: VK, проект Одноклассники\n  position: Бэкенд разработчик\n  timeperiod: С февраля 2023\n  title: Команда seo + новые пользователи\n  description: \n  - Дежурства\n  - Поддержка кластеризации ЧПУ ссылок\n  - Генерация sitemap\n\n- company: VK, проект Одноклассники\n  position: Бэкенд разработчик\n  timeperiod: С августа 2022\n  title: Команда фото\n  description: \n  - Поддержка инфраструктуры фото сервисов.\n  - Добавлял срок жизни ссылкам на картинки\n  - Учавствовал в переезде на новую CDN площадку\n  - Развитие сервиса воспоминаний\n\n- company: VK, проект Одноклассники\n  position: Разработчик мобильных приложений\n  timeperiod: Февраль 2022 - Август 2022\n  title: Команда фото\n  description: \n  - Разрабатывал фильтры для фотографий на основе библиотеки Open GL.\n  - Кэширование информации о фотографиях в SQLite с помощью Room\n  - Принимал участие в продуктовых запусках.\n\n- company: VK, проект Одноклассники\n  position: Младший разработчик мобильных приложений\n  timeperiod: С ноября 2020\n  title: Команда фото\n  description:\n  - Разрабатывал эффект отображения фото на основе Open GL\n  - Принимал участие в разработке раздела загрузок в приложении.\n  - Учавствовал в поддержке перехода приложения на target sdk 30.\n  - Редизайн раздела профиля пользователя.\n\neducational_activity:\n\n- company: Яндекс Практикум\n  timeperiod: С ноября 2022\n  description: Проверка работ на курсе Android разработки\n\n- company: VK Джуниор\n  timeperiod: Февраль 2023 - Июнь 2023\n  description: Ментор на курсе Android разработки\n\neducation:\n- degree: Санкт-Петербургский Политехнический Университет\n  timeperiod: Сентябрь 2018 - Июнь 2022\n  description: Институт компьютерных наук и технологий, степень бакалавра по направлению "Программная инженерия".\n  website: https://icst.spbstu.ru/edu/09.03.04/09.03.04_01/\n\n- degree: VK Джуниор\n  timeperiod: Сентябрь 2019 - Июнь 2021\n  description: Java-разработчик высоконагруженных приложений.\n  website: https://polis.vk.company/\n\n- degree: Тинькофф Generation\n  timeperiod: Сентябрь 2019 - Январь 2020\n  description: Machine learning\n  website: https://fintech.tinkoff.ru/study/generation/ml/\n\n# skill level goes from 0 to 100\nskills:\n- name: Java\n  level: 99\n- name: Kotlin\n  level: 95\n- name: Coroutines\n  level: 99\n- name: Multithreading\n  level: 99\n- name: Spring Boot\n  level: 99\n- name: Cassandra DB\n  level: 70\n- name: Voldemort DB\n  level: 70\n- name: Rx Java\n  level: 60\n- name: Android SDK\n  level: 97\n- name: Dagger 2\n  level: 97\n- name: OkHttp 3\n  level: 99\n- name: Room\n  level: 80\n- name: Open GL ES\n  level: 93\n- name: Git\n  level: 99\n\nknowledge: Английский уровня intermediate\n\nprojects:\n- name: Клиент для VK Джуниор\n  platform: Android\n  timeperiod: Октябрь 2020\n  description: Мобильный клиент для образовательных программ VK\n  url: https://github.com/KoDim97/technopolis-android-project\n\n# optional, not all resume templates have hobbies included\n# hobbies:\n# - name: Video Games\n#   iconClass: fa fa-gamepad\n#   url: https://example.com\n\n# - name: Drawing\n#   iconClass: fa fa-pencil\n#   url: https://example.com\n\n# contributions:\n# - name: best-resume-ever\n#   description: 👔 💼 Build fast 🚀 and easy multiple beautiful resumes.\n#   url: https://github.com/salomonelli/best-resume-ever\n\ncontact:\n  email: gusarov2000@gmail.com\n  phone: +7 (921) 775-85-15\n  street: 1234 Broadway\n  city: Санкт-Петербург\n  website: \n  github: gogun\n# en, de, fr, pt, ca, cn, it, es, th, pt-br, ru, sv, id, hu, pl, ja, ka, nl, he, zh-tw, lt, ko, el, nb-no\nlang: ru\n',u={contact:"Contact",born:"Born",bornIn:"in",experience:"Experience",education:"Education",skills:"Skills",projects:"Projects",contributions:"Contributions",about:"About me"};var d=u;const m={contact:"Kontakt",born:"Geboren",bornIn:"in",experience:"Berufserfahrung",education:"Schulbildung",skills:"Qualifikationen",projects:"Projekte",contributions:"Mitarbeit",about:"Über mich"};var v=m;const _={contact:"Contact",born:"Né en",bornIn:"à",experience:"Expérience professionnelle",education:"Formation",skills:"Compétences",projects:"Projets",contributions:"Contributions",about:"À propos de moi"};var b=_;const h={contact:"Contactos",experience:"Experiência Profissional",education:"Educação",skills:"Competências",projects:"Projetos",contributions:"Contribuições",about:"Sobre mim"};var f=h;const C={contact:"Contacte",experience:"Experiència",education:"Educació",skills:"Habilitats",projects:"Projectes",contributions:"Contribucions",about:"Sobre mi"};var g=C;const k={contact:"联系方式",experience:"工作经历",education:"教育经历",skills:"技能专长",projects:"项目",contributions:"贡献",about:"自我介绍"};var x=k;const y={contact:"Contatti",born:"Nato nel",bornIn:"a",experience:"Esperienza professionale",education:"Formazione",skills:"Competenze",contributions:"Contributi",projects:"Progetti",about:"Su di me"};var j=y;const w={contact:"Contacto",born:"Nacido en",bornIn:"en",experience:"Experiencia",education:"Educación",skills:"Habilidades",projects:"Proyectos",contributions:"Contribuciones",about:"Sobre mí"};var P=w;const K={contact:"ข้อมูลติดต่อ",experience:"ประสบการณ์ทำงาน",education:"ประวัติการศึกษา",skills:"ทักษะและความสามารถ",about:"ข้อมูลส่วนตัว"};var O=K;const E={contact:"Kontak",experience:"Pengalaman",education:"Pendidikan",skills:"Keterampilan",projects:"Proyek",contributions:"Kontribusi",about:"Tentang Saya"};var S=E;const A={contact:"Kontakt",born:"Fødd",bornIn:"i",experience:"Erfaring",education:"Utdanning",skills:"Ting eg kan",projects:"Prosjekt",contributions:"Bidrag",about:"Om meg"};var L=A;const z={contact:"Kontakt",experience:"Arbetslivserfarenhet",education:"Utbildning",skills:"Kunskaper",about:"Om mig"};var B=z;const I={contact:"Контакты",born:"Родился",bornIn:"в г.",experience:"Опыт",education:"Образование",educational_activity:"Образовательная деятельность",skills:"Навыки",projects:"Проекты",contributions:"взносы",about:"Обо мне"};var V=I;const D={contact:"Contato",experience:"Experiência Profissional",education:"Formação Acadêmica",skills:"Competências",projects:"Projetos",contributions:"Contribuições",about:"Sobre",born:"Nascido em",bornIn:"em"};var F=D;const G={contact:"Kapcsolat",experience:"Munkatapasztalat",education:"Tanulmány",skills:"Készségek",projects:"Projektek",contributions:"Hozzájárulások",about:"Rólam"};var H=G;const $={contact:"Kontakt",experience:"Doświadczenie",education:"Wykształcenie",skills:"Umiejętności",projects:"Projektowanie",contributions:"Składki",about:"O mnie"};var M=$;const T={contact:"יצירת קשר",experience:"ניסיון",education:"השכלה",skills:"כישורים",projects:"פרויקטים",contributions:"תרומות",about:"תמצית"};var N=T;const Z={contact:"連絡先",experience:"職務経歴",education:"学歴",skills:"スキル",projects:"プロジェクト",contributions:"貢献",about:"自己紹介"};var J=Z;const R={contact:"聯絡方式",experience:"經歷",education:"學歷",skills:"技能專長",projects:"專案",contributions:"貢獻",about:"自我介紹"};var U=R;const W={contact:"Contact",experience:"Ervaringen",education:"Opleidingen",skills:"Skills",projects:"Projecten",contributions:"Bijdragen",about:"Over mij"};var Q=W;const q={contact:"Kontaktai",experience:"Patirtis",education:"Išsilavinimas",skills:"Įgūdžiai",about:"Apie mane"};var Y=q;const X={contact:"İletişim",experience:"Deneyim",education:"Eğitim",skills:"Yetenekler",about:"Hakkımda"};var tt=X;const nt={contact:"연락처",experience:"경력",education:"학력",skills:"보유스킬",projects:"프로젝트",contributions:"기고",about:"자기소개"};var et=nt;const st={contact:"Επικοινωνία",experience:"Επαγγελματική εμπειρία",education:"Εκπαίδευση",skills:"Δεξιότητες",about:"Σχετικά με εμένα"};var it=st;const ot={contact:"Kontakt",born:"Født",bornIn:"i",experience:"Arbeidserfaring",education:"Utdannelse",skills:"Ferdigheter",projects:"Prosjekter",contributions:"Bidrag",about:"Om meg"};var at=ot;const ct={en:d,de:v,fr:b,pt:f,ca:g,cn:x,it:j,es:P,th:O,"pt-br":F,ru:V,sv:B,id:S,"no-nn":L,hu:H,pl:M,ja:J,nl:Q,he:N,"zh-tw":U,lt:Y,tr:tt,ko:et,el:it,"nb-no":at};function rt(t){const n={name:t,data(){return{person:l().load(p),terms:ct}},computed:{lang(){const t=this.terms.en,n=this.terms[this.person.lang];return Object.keys(t).filter((t=>!n[t])).forEach((e=>{console.log(e),n[e]=t[e]})),n},contactLinks(){const t={};return this.person.contact.github&&(t.github=`https://github.com/${this.person.contact.github}`),this.person.contact.codefights&&(t.codefights=`https://codefights.com/profile/${this.person.contact.codefights}`),this.person.contact.medium&&(t.medium=`https://medium.com/@${this.person.contact.medium}`),this.person.contact.email&&(t.email=`mailto:${this.person.contact.email}`),this.person.contact.linkedin&&(t.linkedin=`https://linkedin.com/in/${this.person.contact.linkedin}`),this.person.contact.phone&&(t.phone=`tel:${this.person.contact.phone}`),t}}};return n}const lt="creative";var pt=s.ZP.component(lt,rt(lt)),ut=pt,dt=e(1),mt=(0,dt.Z)(ut,a,c,!1,null,"91069dde",null),vt=mt.exports,_t={name:"App",components:{HelloWorld:vt}},bt=_t,ht=(0,dt.Z)(bt,i,o,!1,null,"48986dca",null),ft=ht.exports;s.ZP.config.productionTip=!1,new s.ZP({render:t=>t(ft)}).$mount("#app")}},n={};function e(s){var i=n[s];if(void 0!==i)return i.exports;var o=n[s]={exports:{}};return t[s].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,s,i,o){if(!s){var a=1/0;for(p=0;p<t.length;p++){s=t[p][0],i=t[p][1],o=t[p][2];for(var c=!0,r=0;r<s.length;r++)(!1&o||a>=o)&&Object.keys(e.O).every((function(t){return e.O[t](s[r])}))?s.splice(r--,1):(c=!1,o<a&&(a=o));if(c){t.splice(p--,1);var l=i();void 0!==l&&(n=l)}}return n}o=o||0;for(var p=t.length;p>0&&t[p-1][2]>o;p--)t[p]=t[p-1];t[p]=[s,i,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,s){var i,o,a=s[0],c=s[1],r=s[2],l=0;if(a.some((function(n){return 0!==t[n]}))){for(i in c)e.o(c,i)&&(e.m[i]=c[i]);if(r)var p=r(e)}for(n&&n(s);l<a.length;l++)o=a[l],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(p)},s=self["webpackChunkilya_gusarov_cv"]=self["webpackChunkilya_gusarov_cv"]||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(122)}));s=e.O(s)})();
//# sourceMappingURL=app.57362093.js.map