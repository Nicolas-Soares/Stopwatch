window.addEventListener('load', () => {
    //BUTTONS -----
    const StartButton = document.querySelector('#btn-start')
    const ResetButton = document.querySelector('#btn-reset')

    //LABELS -----
    const StartLabel = document.querySelector('#label-start')

    //SPANS -----
    const hr_span = document.querySelector('#hr')
    const min_span = document.querySelector('#min')
    const sec_span = document.querySelector('#sec')

    //OTHER -----
    let intervalID = null

    //EVENTS -----
    StartButton.addEventListener('click', startClock)
    ResetButton.addEventListener('click', resetClock)

    //FUNCTIONS -----
    function startClock() {
        const time = [Number(hr_span.innerText), Number(min_span.innerText), Number(sec_span.innerText)]

        if (intervalID != null) {
            clearInterval(intervalID)
            StartLabel.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
            `
            intervalID = null
        } else {
            StartLabel.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
            </svg>
            `

            //MASTER INTERVAL -----
            intervalID = setInterval(() => {
                if (time[2] === 59) {
                    time[2] = 0
                    time[1] += 1

                    if (time[1] === 60) {
                        time[1] = 0
                        time[0] += 1

                        if (time[0] === 100) {
                            time[0] = 0
                            alert('YOU REACHED THE STOPWATCH LIMIT\r\nFOUND AN EASTER EGG!!!\r\nTHE STOPWATCH HAS RESTARTED')
                        }
                    }
                }
                time[2] += 1

                if (time[2].toString().length === 2) {
                    sec_span.innerHTML = time[2]
                } else {
                    sec_span.innerHTML = '0' + time[2]
                }

                if (time[1].toString().length === 2) {
                    min_span.innerHTML = time[1]
                } else {
                    min_span.innerHTML = '0' + time[1]
                }

                if (time[0].toString().length === 2) {
                    hr_span.innerHTML = time[0]
                } else {
                    hr_span.innerHTML = '0' + time[0]
                }
            }, 1000);
        }
    }

    function resetClock() {
        let res = confirm('Do you want to reset the STOPWATCH?')

        if (res === true) {
            if (intervalID != null) {
                clearInterval(intervalID)
                StartLabel.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>
                `
                intervalID = null
            }
            sec_span.innerHTML = '00'
            min_span.innerHTML = '00'
            hr_span.innerHTML = '00'
        }
    }
})