const academicLevel = document.querySelector('.academic-level');
const typeofpaper = document.querySelector('[name= typeOfPaper]');
const numberofpages = document.querySelector('.numberOfPages');
const urgencyInput = document.querySelector('.urgency');
const totalCost = document.querySelector('.total');
const words = document.querySelector('.numberOfWords');
const orderButton = document.querySelector('.orderButton');
const checkout = document.querySelector('.checkout');
const bodyWrapper = document.querySelector('.bodyWrapper');
const checkoutText = document.querySelector('.checkoutText')
const checkoutTotal = document.querySelector('.checkoutTotal')


                const calc = () => {
                    paper = typeofpaper.value;
                    academic = academicLevel.value;
                    pages = numberofpages.value;
                    urgent = urgencyInput.value;
                    const wordsPerPage = pages * 250;
                    words.innerText = ` ${wordsPerPage} Words`
                    const price = academic * paper * pages * urgent;
                    totalCost.innerText = `Total Price(USD):$ ${price.toFixed()}
                    `;
                    checkoutTotal.innerText = `Total: $${price.toFixed()}`;
                    
                    }
                calc();
                

                const order = (e) => {    
                    paperInput = typeofpaper.options[typeofpaper.selectedIndex].text;
                    academicInput = academicLevel.options[academicLevel.selectedIndex].text;
                    pagesInput = numberofpages.options[numberofpages.selectedIndex].text;
                    urgentInput = urgencyInput.options[urgencyInput.selectedIndex].text;

                    if(window.confirm(`Your order for ${pagesInput} on ${paperInput} paper with a deadline of ${urgentInput} has been received`)){                       

                        checkout.style.display = 'grid';
                        bodyWrapper.style.display = 'none';
                        checkoutText.innerText = 'Your order:' + pagesInput + paperInput;


                    }
                    e.preventDefault();
                }



        academicLevel.addEventListener( 'input', calc);
        typeofpaper.addEventListener( 'input', calc)
        numberofpages.addEventListener( 'input', calc);
        urgencyInput.addEventListener( 'input', calc);
        orderButton.addEventListener( 'click', order);


