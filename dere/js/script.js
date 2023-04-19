window.addEventListener('DOMContentLoaded',()=>{
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items')

    function hideTabContent(){
        tabsContent.forEach((item) =>{
            item.classList.add('hide');
            item.classList.remove('show','fade')
        })

        tabs.forEach(item=>{
            item.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(i = 0){
        tabsContent[i].classList.add('show','fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active');

    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click',(event)=>{
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i)=>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    const timerId = setTimeout(logger,2000)

    function logger(i){
        if(i === 3){
            clearInterval(ert)
        }
        console.log('Hil')
        i++
    }

    // let ert,
    //     i= 0;
    // tabs[0].addEventListener('clik',()=>{
    //     ert = setInterval(logger,2000)
    // })
    
    // function myAnimation(){
    //     let pos = 0;
    //     const id = setInterval(frame,10)
    //     function frame(){
    //         if(pos==300){
    //             clearInterval(id)
    //         }else{
    //             pos++;
    //             tabs[0].style.top = pos + "px";
    //             tabs[0].style.left = pos + "px;"
    //         }
    //     }
    // }
    // tabs[0].addEventListener('click',myAnimation)



    //Timer
    const deadline = '2023-04-11';

    function getTimeRemaining(endTime){
        const t = Date.parse(endTime) - Date.parse(new Date());
        days = Math.floor(t/(1000*60*60*24)),
        hours = Math.floor((t/(1000*60*60))%24),
        minutes = Math.floor((t/1000/60)%60),
        seconds = Math.floor((t/1000)%60);
        return {
            'total':t,
            'days':days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        }
    }
    function getZero(num){
        if(num >=0 && num < 10){
            return `0${num}`
        }else{
            return num
        }
    }

    function setClock(selector,endTime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock,1000)
              
              updateClock()
        function updateClock(){
            let t = getTimeRemaining(endTime)
            days.textContent = `${getZero(t.days)}`;
            hours.textContent = `${getZero(t.hours)}`;
            minutes.textContent = `${getZero(t.minutes)}`;
            seconds.textContent = `${getZero(t.seconds)}`;
            if(t.total<0){
                clearInterval(timeInterval)
            }
        }
    } 
    setClock('.timer',deadline)

    //Modal

    const modalTriger = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal'),
          closeTriger = document.querySelector('[data-close]');
    modalTriger.forEach(item=>{
        item.addEventListener('click',show)
    })
    function show(){
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function hide(){
        modalWindow.style.display = 'none';
        document.body.style.overflow = '';
    }

    closeTriger.addEventListener('click',hide)
    modalWindow.addEventListener('click',(e)=>{
        if(e.target === modalWindow){
            hide()
        }
    })
    document.addEventListener('keydown',(e)=>{
        if (e.code === 'Escape' && modalWindow.style.display === 'block'){
            hide()
        }
    })
    const time = 5000;
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 5){
        let y = setTimeout(show,time);
        y()
    }
    // let string = "apple banana orange apple apple reter apple derrr apple banana",j=[],j1='';
    // for (let i = 0;i<=string.length;i++){
    //     if (string[i]==' ' || i == string.length){j.push(j1);j1=''}else{j1+=string[i]}
    // }
    // let number = 0;
    // let r

    // j.forEach((item,y)=>{
    //     for (let fr = 0;fr< j.length;fr++){
    //         if (item == j[fr]){
    //             number++;
    //             if(r){
    //                 delete j[r]
    //             }
    //             r = fr
    //         }
    //     }
    // console.log(`${item} - ${number}`);
    // delete j[y]
    // number = 0;
    

    // })

    // function User(name,id){
    //     this.name = name;
    //     this.id = id;
    //     this.human = true;
    //     this.hello = function(){
    //         console.log(`Hello ${this.name}`)
    //     }
    // }
    // User.prototype.exit = function(){
    //     console.log(`User ${this.name} was exit`)
    // }
    // const ivan = new User('Ivan', 28)
    // ivan.hello()
    // ivan.exit()
    // console.log(ivan)

    class Menu{
        constructor(nameMenu,textMenu,priceMenu,altOfPrint,srcImage,...classes){
            this.nameMenu = nameMenu;
            this.textMenu = textMenu;
            this.priceMenu = priceMenu;
            this.classes = classes;
            this.altOfPrint = altOfPrint;
            this.srcImage = srcImage;
        }

        render(){
            const menu = document.querySelector('.menu__field'),
                  container = menu.querySelector('.container'),
                  itemMenu = container.querySelector('.menu__item');
                  
            this.classes.forEach(className => container.classList.add(className))
            container.insertAdjacentHTML(
                'beforeEnd',
                `<div class="menu__item">
                <img src=${this.srcImage} alt=${this.altOfPrint}>
                <h3 class="menu__item-subtitle">${this.nameMenu}</h3>
                <div class="menu__item-descr">${this.textMenu}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.priceMenu}</span> грн/день</div>
                </div>
            </div>`)
        }
    }
    new Menu(
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        '229',
        'vegy',
        'img/tabs/vegy.jpg',
        'hei',
        'big'
    ).render();
    new Menu(
        'Меню "Премиум"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        '550',
        'elite',
        'img/tabs/elite.jpg',
    ).render();
    new Menu(
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        '430',
        'post',
        "img/tabs/post.jpg",
    ).render();

    //Forms

    const forms = document.querySelectorAll('form');
    const message = {
        loading:'Loading...',
        success: 'Thanks! See later !',
        failure:'Something went wrong...',
    }
    forms.forEach(item=>{
        postData(item)
    })

    function postData(form){
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            const statusMessage = document.createElement('div')
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST','server.php');
            request.setRequestHeader('Content-type','multipart/form-data')
            const formData = new FormData(form);
            request.send(formData);
            request.addEventListener('load',()=>{
                if (request.status === 200){
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                }else{
                    statusMessage.textContent = message.failure;
                }
            })
        })
    }
})

