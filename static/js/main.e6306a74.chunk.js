(this["webpackJsonpnew-portfolio"]=this["webpackJsonpnew-portfolio"]||[]).push([[0],{30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},42:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(17),a=s.n(n),r=(s(30),s(10)),o=s(2),l=(s(31),s(32),s(33),s.p+"static/media/logoVFH.b728f8c6.svg"),h=s(0),j=function(e){var t=e.style,s=e.onClick,c=Object(o.f)();return Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:l,alt:"logo",className:t,onClick:function(){s(),window.screen.width>=421&&window.scrollTo(0,0),c.push("/")}})})},d=s(13),m=s(20),u=s(4),b=s(25),x=(s(42),s(11)),p=s.n(x);s(52);p.a.setAppElement("#root");var O=function(e){var t=e.name,s=(e.src,e.className,e.className2,Object(c.useState)(!1)),i=Object(u.a)(s,2),n=i[0],a=i[1],r=Object(c.useState)(""),o=Object(u.a)(r,2),l=o[0],j=o[1],x=Object(c.useState)({nombre:"",email:"",phone:"",textarea:""}),O=Object(u.a)(x,2),v=O[0],g=O[1];console.log(v.nombre);Object(c.useRef)();function w(e){g(Object(m.a)(Object(m.a)({},v),{},Object(d.a)({},e.target.name,e.target.value))),console.log([e.target.name]+": "+e.target.value),j("")}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p.a,{isOpen:n,onRequestClose:function(){return a(!1)},style:{overlay:{background:"#C0C0C0",width:"100%",margin:"0 auto"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",overflow:"hidden",background:"#C0C0C0"}},children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=v.nombre,s=v.email,c=v.phone,i=v.textarea;""!==t&""!==s&""!==c&""!==i?(console.log(t+" "+s+" "+c+" "+i),b.a.sendForm("service_lausod2","template_abu8jdt",e.target,"user_iWFLiJoHRNUY2yoUbWCKE").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),j("Message has been sent correctly"),g({nombre:"",email:"",phone:"",textarea:""}),setTimeout((function(){a(!1)}),2e3)):j("nothing")},className:"form__container",children:[Object(h.jsx)("p",{className:"form_title",id:"title",children:"Please fill in to contact me"}),Object(h.jsx)("input",{type:"text",onChange:w,placeholder:"Your Name",name:"nombre",className:"form_input",id:"inputName",value:v.nombre}),Object(h.jsx)("input",{type:"email",onChange:w,placeholder:"Your Email",name:"email",className:"form_input",id:"inputEmail",value:v.email}),Object(h.jsx)("input",{type:"phone",onChange:w,placeholder:"Phone Number",name:"phone",className:"form_input",id:"inputTel",value:v.phone}),Object(h.jsx)("textarea",{type:"text",onChange:w,placeholder:"Your Message",name:"textarea",className:"form_textarea",id:"iinputTextarea",value:v.textarea}),Object(h.jsx)("input",{type:"submit",value:"Send",className:"button_submit",id:"button"}),l&&Object(h.jsx)("span",{className:"Message has been sent correctly"===l?"message-valid":"message-not-valid",children:l})]})}),Object(h.jsx)("div",{onClick:function(){a(!0),j("")},className:"mailform-texto-button",children:t})]})},v=function(e){e.onClick;var t=Object(h.jsx)("svg",{className:"email-icon-footer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"})}),s=Object(h.jsxs)("a",{className:"phone_text",children:[Object(h.jsx)("span",{children:"Email"}),Object(h.jsx)("svg",{className:"email-icon-footer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"})})]});return Object(h.jsxs)("div",{className:"contact__container",children:[window.screen.width<=421&&Object(h.jsxs)("div",{className:"contact_items",children:[Object(h.jsx)("div",{className:"email_contact_section",children:Object(h.jsx)(O,{name:t})}),Object(h.jsx)("div",{className:"whatsapp_contact_section",children:Object(h.jsx)("a",{className:"phone_text",href:"https://wa.me/34680535856",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("svg",{className:"whatsapp-icon-footer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"})})})}),Object(h.jsx)("div",{className:"phone_contact_section",children:Object(h.jsx)("a",{className:"phone_text",href:"tel:0034680535856",rel:"noreferrer",children:Object(h.jsx)("svg",{className:"phone-icon-footer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M16 0v3h-8c-1.104 0-2 .896-2 2v17c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2v-22h-2zm-6 21h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 4h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 4h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm0-3h-8v-8h8v8z"})})})})]}),window.screen.width>=422&&Object(h.jsxs)("div",{className:"contact_items",children:[Object(h.jsx)("div",{className:"email_contact_section",children:Object(h.jsx)(O,{name:s})}),Object(h.jsx)("div",{className:"whatsapp_contact_section",children:Object(h.jsxs)("a",{className:"phone_text",href:"https://wa.me/34680535856",target:"_blank",rel:"noreferrer",children:[Object(h.jsx)("span",{children:"Whatsapp"}),Object(h.jsx)("svg",{className:"whatsapp-icon-footer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"})})]})}),Object(h.jsx)("div",{className:"phone_contact_section",children:Object(h.jsxs)("a",{className:"phone_text",href:"tel:0034680535856",rel:"noreferrer",children:[Object(h.jsx)("span",{children:"Phone"}),Object(h.jsx)("svg",{className:"phone-icon-footer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M16 0v3h-8c-1.104 0-2 .896-2 2v17c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2v-22h-2zm-6 21h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 4h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 4h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm0-3h-8v-8h8v8z"})})]})})]})]})},g=(s(56),s.p+"static/media/git-icon.c60b7e5a.svg"),w=s.p+"static/media/whatsapp-symbol.a1c0a1e0.svg",_=s.p+"static/media/linkedin-icon-2.32e20978.svg",f=s.p+"static/media/profile_picture.f1f49055.png",N=(s(57),function(e){var t=e.style,s=e.onClick,i=Object(c.useState)(!1),n=Object(u.a)(i,2),a=n[0],r=n[1],l=Object(o.f)();return Object(h.jsxs)("div",{className:"skills__container",onClick:s,children:[Object(h.jsxs)("div",{className:t,onClick:function(){r(!a)},children:[" ",Object(h.jsx)("p",{children:"Skills "})]}),Object(h.jsx)(p.a,{isOpen:a,onRequestClose:function(){return r(!1)},style:{overlay:{background:"",cursor:"pointer"},content:{marginTop:"200px",border:"none",width:"100%",height:"270px",cursor:"pointer",background:"",overflow:"auto"}},children:Object(h.jsxs)("div",{className:"skillsList_container",onClick:function(){window.screen.width>=421&&window.scrollTo(0,400),l.push("/quiz")},children:[Object(h.jsxs)("div",{className:"first_list_skills",onClick:function(){return r(!1)},children:[Object(h.jsx)("p",{className:"list_skill",children:"React JS"}),Object(h.jsx)("p",{className:"list_skill",children:"Javascript ES6"}),Object(h.jsx)("p",{className:"list_skill",children:"G-Suites"})]}),Object(h.jsxs)("div",{className:"second_list_skills",onClick:function(){return r(!1)},children:[Object(h.jsx)("p",{className:"list_skill",children:"HTML 5"}),Object(h.jsx)("p",{className:"list_skill",children:"CSS 3"}),Object(h.jsx)("p",{className:"list_skill",children:"SASS"}),Object(h.jsx)("p",{className:"list_skill",children:"Canva"}),Object(h.jsx)("p",{className:"list_skill",children:"Jquery"}),Object(h.jsx)("p",{className:"list_skill",children:"GIT"})]}),Object(h.jsxs)("div",{className:"third_list_skills",onClick:function(){return r(!1)},children:[Object(h.jsx)("p",{className:"list_skill",children:"Docker"}),Object(h.jsx)("p",{className:"list_skill",children:"Node JS"}),Object(h.jsx)("p",{className:"list_skill",children:"Express"}),Object(h.jsx)("p",{className:"list_skill",children:"Insomnia"}),Object(h.jsx)("p",{className:"list_skill",children:"Sendgrid"}),Object(h.jsx)("p",{className:"list_skill",children:"Mongodb"})]})]})})]})}),y=(s(58),function(e){var t=e.className,s=(e.onClickA,e.onClickB,e.onClickC,Object(o.f)()),c=function(){window.screen.width>=421&&window.scrollTo(0,400)};return Object(h.jsxs)("div",{className:t,children:[Object(h.jsx)("div",{className:"question",onClick:function(){s.push("/myStory"),c()},children:Object(h.jsx)("p",{children:"My Story"})}),Object(h.jsx)("div",{className:"question",onClick:function(){c(),s.push("/quiz")},children:Object(h.jsx)("p",{children:"Quiz"})}),Object(h.jsx)("div",{className:"question",onClick:function(){c(),s.push("/projects")},children:Object(h.jsx)("p",{children:"Projects"})})]})}),k=s.p+"static/media/cv.d2db3421.svg",C=function(){var e=Object(o.f)(),t=Object(c.useState)(!1),s=Object(u.a)(t,2),i=s[0],n=s[1];return Object(h.jsxs)("div",{className:"header__container",children:[Object(h.jsx)("div",{className:"header_logo_container",children:Object(h.jsx)(j,{style:"logo_header",onClick:function(){return n(!i)}})}),Object(h.jsxs)("div",{className:"profile_section",children:[Object(h.jsx)("img",{src:f,className:"profilePicture",alt:"profile_Picture",onClick:function(){window.screen.width>=421&&window.scrollTo(0,0),e.push("/")}}),Object(h.jsx)("p",{className:"name_title",children:"Valery Figueroa Huam\xe1n"})]}),Object(h.jsxs)("div",{className:"headerIcon_container",children:[Object(h.jsxs)("div",{className:"iconSection",children:[Object(h.jsxs)("div",{onClick:function(){return n(!i)},className:"navBarIcon2",children:[i?Object(h.jsx)("i",{className:"fas fa-times"}):Object(h.jsx)("i",{className:"fas fa-bars"}),!0===i&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(y,{className:"navBarIcon"})})]}),Object(h.jsxs)("div",{className:"icon_container",children:[Object(h.jsx)("a",{href:"https://github.com/valery2590",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:g,className:"iconHeader",alt:"git_Icon"})}),Object(h.jsx)("a",{href:"https://wa.me/34680535856",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:w,className:"iconHeader",alt:"whatsapp_Icon"})}),Object(h.jsx)("a",{href:"https://drive.google.com/uc?export=download&id=1pIMFghw77B2UhCLjzBg9SkHB3i-jAxpS",download:"cv.valery",children:Object(h.jsx)("img",{src:k,className:"iconHeader",alt:"cv_Icon"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/valery-figueroa-huaman-01517982/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:_,className:"iconHeader",alt:"linkdin_Icon"})})]})]}),Object(h.jsx)("div",{className:"skills_header_hidden",children:Object(h.jsx)(N,{style:"skills_header_button"})})]})]})},I=(s(59),function(){var e=Object(o.f)();return Object(h.jsx)("div",{className:"projects_section_container",children:Object(h.jsx)("p",{className:"projects",onClick:function(){window.screen.width>=421&&window.scrollTo(0,400),e.push("/projects")},children:"Projects"})})}),q=(s(60),function(){var e=Object(o.f)();return Object(h.jsxs)("div",{className:"landingPage__container",children:[Object(h.jsx)(y,{className:"questions_container_row"}),Object(h.jsx)(N,{style:"skills_button",onClick:function(){return e.push("/quiz")}}),Object(h.jsx)(I,{})]})}),z=s.p+"static/media/web.555003ca.svg",T=(s(61),function(e){var t=e.name,s=e.link,c=e.link2,i=e.img,n=e.img2;return Object(h.jsxs)("div",{className:"project_link",children:[Object(h.jsx)("p",{className:"link_project",children:t}),Object(h.jsxs)("div",{className:"links_images",children:[Object(h.jsx)("a",{href:s,target:"_blank",title:"link",rel:"noreferrer",children:Object(h.jsx)("img",{src:i,className:"headerIconProject",alt:"link"})}),Object(h.jsx)("a",{href:c,target:"_blank",title:"link2",rel:"noreferrer",children:Object(h.jsx)("img",{src:n,className:"headerIconProject",alt:"link2"})})]})]})}),S=(s(62),function(){var e=Object(o.f)();return Object(h.jsxs)("div",{className:"ProjectsPage__container",children:[Object(h.jsx)(y,{className:"questions_container_sidebar",onClickA:function(){return e.push("/myhistory")},onClickB:function(){return e.push("/myhistory")},onClickC:function(){return e.push("/myhistory")}}),Object(h.jsx)("div",{className:"projectsPage_section",children:Object(h.jsxs)("div",{className:"eachProject_section",children:[Object(h.jsx)(T,{name:"Knou",img:g,img2:z,link:"https://github.com/valery2590/knou-react",link2:"https://hardcore-hawking-033be2.netlify.app/"}),Object(h.jsx)(T,{name:"Image Seeker",link:"https://github.com/valery2590/images_seeker",img:g,link2:"https://valery2590.github.io/images_seeker/",img2:z}),Object(h.jsx)(T,{name:"Email Signature",link:"https://github.com/valery2590/email",img:g,link2:"https://email-signature-v.herokuapp.com/",img2:z}),Object(h.jsx)(T,{name:"Crypto Coin Search",link:"https://github.com/valery2590/cryptoCoin",img:g,link2:"https://valery2590.github.io/cryptoCoin/",img2:z}),Object(h.jsx)(T,{name:"Product App",link:"https://github.com/valery2590/productApp",img:g,link2:"https://valery2590.github.io/productApp/",img2:z}),Object(h.jsx)(T,{name:"BPM",link:"https://github.com/valery2590/cryptoCoin",img:g,link2:"https://valery2590.github.io/cryptoCoin/",img2:z}),Object(h.jsx)(T,{name:"Action Patern",link:"https://github.com/valery2590/cryptoCoin",img:g,link2:"https://valery2590.github.io/cryptoCoin/",img2:z})]})})]})}),B=(s(63),s.p+"static/media/small-tree.f4e88099.jpeg"),P=s.p+"static/media/middle-tree.1e01c79a.jpeg",M=s.p+"static/media/big-tree.04e69acf.jpeg",A=s.p+"static/media/cv.02b00606.png",F=function(){var e=B,t=P,s=M,i=Object(c.useState)(e,t,s),n=Object(u.a)(i,2),a=n[0],r=n[1];return Object(h.jsxs)("div",{className:"questionsPage__container",children:[Object(h.jsx)(y,{className:"questions_container_sidebar"}),Object(h.jsxs)("div",{className:"secction_story",children:[Object(h.jsxs)("div",{className:"question_secction_button",children:[Object(h.jsx)("div",{className:"question_I",onClick:function(){r(e)},children:Object(h.jsx)("p",{children:"Who was I?"})}),Object(h.jsx)("div",{className:"question_I",onClick:function(){r(t)},children:Object(h.jsx)("p",{children:"Who am I?"})}),Object(h.jsx)("div",{className:"question_I",onClick:function(){r(s)},children:Object(h.jsx)("p",{children:"Who will I become?"})})]}),Object(h.jsxs)("div",{className:"myHistory__container",children:[a===e&&Object(h.jsxs)("div",{className:"history_section",children:[Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"question_title_history",children:"Who was I?"})}),Object(h.jsxs)("div",{className:"text_history_section",children:[Object(h.jsx)("p",{className:"question_text_history",children:"Perhaps, you are wondering why you are reading when you can hear it, well, this is just to sum up my history. "}),Object(h.jsx)("p",{className:"question_text_history",children:"I was born in Per\xfa and raised in Barcelona. I think this is the reason why I decided to study Tourism for four 4 years at the University. Furthermore, I realized that it was easy for me to learn other languages. The first one was Catalan in Barcelona. However, that time was not my coding time. It was too soon for me to realize."}),Object(h.jsx)("p",{className:"question_text_history",children:"I had the chance to live for a while in several European cities, however, the one I loved the most was Derry (Northern Ireland), that place is astonishing. Definitely, I should retire there"})]}),Object(h.jsx)("div",{className:"picture_history_section",children:Object(h.jsx)("img",{src:e,alt:"small_plant",className:"question_picture"})})]}),a===t&&Object(h.jsxs)("div",{className:"history_section",children:[Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"question_title_history",children:"Who am I?"})}),Object(h.jsxs)("div",{className:"text_history_section",children:[Object(h.jsx)("p",{className:"question_text_history",children:"This question is much easier to respond to, I am someone who struggles the Customer Care position by implementing new tools to improve our daily work. "}),Object(h.jsx)("p",{className:"question_text_history",children:"I know, it does not look like is the task for the job position I have, however, I realized that I can do more. I am not saying that I am a superhero, I just want to do the best I can. "}),Object(h.jsx)("p",{className:"question_text_history",children:"So, besides all my duties, I decided to be a self-learner to get the necessary to create tools. But then, I realized that it was not enough, I needed to go further, I needed to go deeper. That was the moment I made a Full-Stack Bootcamp for 5 months. "}),Object(h.jsx)("p",{className:"question_text_history",children:"Do you really want to know who am I? someone who has the courage to adapt and the guts to start over."})]}),Object(h.jsx)("div",{className:"picture_history_section",children:Object(h.jsx)("img",{src:t,alt:"baby_groot",className:"question_picture"})})]}),a===s&&Object(h.jsxs)("div",{className:"history_section",children:[Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"question_title_history",children:"Who will I become?"})}),Object(h.jsxs)("div",{className:"text_history_section",children:[Object(h.jsx)("p",{className:"question_text_history",children:"This question is tricky, I mean, we cannot see the future, unless you are a fortune-teller, otherwise, we will never have an answer."}),Object(h.jsx)("p",{className:"question_text_history",children:"However, we can say what we would like to accomplish after time."}),Object(h.jsx)("p",{className:"question_text_history",children:"I want to learn more. I want to have more challenges."}),Object(h.jsx)("p",{className:"question_text_history",children:"Ready to become a challenge to me?"}),Object(h.jsxs)("p",{className:"question_text_history",children:[Object(h.jsx)("span",{className:"cv_title",children:"Take a look at my personal CV"})," "]}),Object(h.jsxs)("a",{href:"https://drive.google.com/file/d/1pIMFghw77B2UhCLjzBg9SkHB3i-jAxpS/view?usp=sharing",target:"_blank",rel:"noreferrer",children:[" ",Object(h.jsx)("img",{src:A,alt:"cv",className:"cv_icon"})]})]}),Object(h.jsx)("div",{className:"picture_history_section",children:Object(h.jsx)("img",{src:s,alt:"big_tree",className:"question_picture"})})]})]})]})]})},H=(s(64),s(65),function(){var e=[{questionText:"I was born in South America, however, do you remember in which country was?",answerOptions:[{answerText:"Brazil",isCorrect:!1},{answerText:"Ecuador",isCorrect:!1},{answerText:"Argentina",isCorrect:!1},{answerText:"Per\xfa",isCorrect:!0}]},{questionText:"which one was the first language I had to learn once I got Barcelona?",answerOptions:[{answerText:"German",isCorrect:!1},{answerText:"Catalan",isCorrect:!0},{answerText:"Galician",isCorrect:!1},{answerText:"Portuguese",isCorrect:!1}]},{questionText:"I had to study and work for 4 years to get a degree, do you remember which career I did?",answerOptions:[{answerText:"Economics",isCorrect:!0},{answerText:"Medicine",isCorrect:!1},{answerText:"Tourism",isCorrect:!0},{answerText:"Laws",isCorrect:!1}]},{questionText:"How did I discover the programming world?",answerOptions:[{answerText:"working as a Customer Care Manager",isCorrect:!0},{answerText:"cycling through a mountain",isCorrect:!1},{answerText:"sleeping like a dog",isCorrect:!1},{answerText:"watching Grey's Anatomy  ",isCorrect:!1}]},{questionText:"I had the chance to live in Nothern Ireland. Can you tell me the city?",answerOptions:[{answerText:"Belfast",isCorrect:!1},{answerText:"Cork",isCorrect:!1},{answerText:"Derry",isCorrect:!0},{answerText:"Kiev",isCorrect:!1}]}],t=Object(c.useState)(0),s=Object(u.a)(t,2),i=s[0],n=s[1],a=Object(c.useState)(!1),r=Object(u.a)(a,2),o=r[0],l=r[1],j=Object(c.useState)(0),d=Object(u.a)(j,2),m=d[0],b=d[1];return Object(h.jsx)("div",{className:"app",children:o?Object(h.jsx)("div",{className:"score_section",children:Object(h.jsxs)("p",{children:["You scored ",m," out of ",e.length]})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"question-section",children:[Object(h.jsxs)("div",{className:"question-count",children:[Object(h.jsxs)("span",{children:["Question ",i+1]}),"/",e.length]}),Object(h.jsx)("div",{className:"question-text",children:e[i].questionText})]}),Object(h.jsx)("div",{className:"answer-section",children:e[i].answerOptions.map((function(t){return Object(h.jsx)("button",{onClick:function(){return function(t){t&&b(m+1);var s=i+1;s<e.length?n(s):l(!0)}(t.isCorrect)},children:t.answerText})}))})]})})}),W=function(){var e=Object(o.f)(),t=Object(c.useState)(!1),s=Object(u.a)(t,2),i=s[0],n=s[1],a=Object(c.useState)(!1),r=Object(u.a)(a,2),l=r[0],j=r[1];return Object(h.jsxs)("div",{className:"whyPage__container",children:[Object(h.jsx)(y,{className:"questions_container_sidebar",onClickA:function(){return e.push("/myhistory")},onClickB:function(){return e.push("/myhistory")},onClickC:function(){return e.push("/myhistory")}}),Object(h.jsxs)("div",{className:"whyPage_section",children:[Object(h.jsx)("div",{className:"title_WhyPage",children:Object(h.jsx)("p",{children:"Best way to know WHY you need to hire me"})}),Object(h.jsx)("div",{className:"subtitle_WhyPage",children:Object(h.jsx)("p",{children:"Let's see if you have paid attention to my history"})}),Object(h.jsxs)("div",{className:"button_container_WhyPage",children:[Object(h.jsx)("button",{onClick:function(){n(!0),j(!0),console.log("hello valery")},className:"quizButton_section",children:" Let's play"}),Object(h.jsx)("button",{onClick:function(){return n(!1)},className:"quizButton_section",value:l,children:" Another day!"})]}),Object(h.jsxs)("div",{className:"trivia_container_whyPage",children:[" ",!0===i&&Object(h.jsx)(H,{})]})]})]})};var E=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(r.a,{children:[Object(h.jsx)(C,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",children:Object(h.jsx)(q,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/mystory",children:Object(h.jsx)(F,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/quiz",children:Object(h.jsx)(W,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/projects",children:Object(h.jsx)(S,{})})]}),Object(h.jsx)(v,{})]})})},L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,67)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),i(e),n(e),a(e)}))};a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(r.a,{children:Object(h.jsx)(E,{})})}),document.getElementById("root")),L()}},[[66,1,2]]]);
//# sourceMappingURL=main.e6306a74.chunk.js.map