const slides = document.querySelectorAll('.slide');
let counter = 0;

slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index * 100}%`;
    })

    // const goNext = ()=>{
    //     counter++;
    //     slideImage();
    // }
    // const goPrev=()=>{
    //     counter--;
    //     slideImage();
    // }

    const slideShow = ()=>{
        slides.forEach(
            (slide)=>{
                slide.style.transform = `translateX(-${counter * 100}%)`
            }
        )
    }

    const goPrev = () => {
        if (counter == 0) {
            counter = slides.length - 1;
            slideShow();
        } else {
            counter--;
            slideShow();
        }
    }
    
    const goNext = () => {
        if (counter == slides.length - 1) {
            counter = 0;
            slideShow();
        } else {
            counter++;
            slideShow();
        }
    }
    