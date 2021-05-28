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
            }, 1000);
        }

    }

})