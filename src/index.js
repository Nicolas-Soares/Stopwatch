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

    let STR_hr_span = document.querySelector('#hr').innerText
    let STR_min_span = document.querySelector('#min').innerText
    let STR_sec_span = document.querySelector('#sec').innerText

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
            StartLabel.innerHTML = 'START'
            intervalID = null
        } else {
            StartLabel.innerHTML = 'PAUSE'

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
                
                sec_span.innerHTML = time[2]
                min_span.innerHTML = time[1]
                hr_span.innerHTML = time[0]
                
                // if (STR_sec_span.length === 3) {

                // } else {
                //     sec_span.innerHTML = STR_sec_span.substr(0, 1) + time[2]
                //     min_span.innerHTML = STR_min_span.substr(0, 1) + time[1]
                //     hr_span.innerHTML = STR_hr_span.substr(0, 1) + time[0]
                // }
            }, 1000);
        }
    }

    function resetClock() {
        let res = confirm('Do you want to reset the STOPWATCH?')

        if (res === true) {
            if (intervalID != null) {
                clearInterval(intervalID)
                StartLabel.innerHTML = 'START'
                intervalID = null
            }
            sec_span.innerHTML = '00'
            min_span.innerHTML = '00'
            hr_span.innerHTML = '00'
        }
    }
})