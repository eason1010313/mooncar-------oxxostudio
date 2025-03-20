basic.forever(function () {
    if (mooncar.LineFollowerSensor() == 0) {
        mooncar.MoonCarGo(mooncar.Direction.direct1, 10)
    } else if (mooncar.LineFollowerSensor() == 1) {
        mooncar.MoonCarGo(mooncar.Direction.direct3, 10)
    } else if (mooncar.LineFollowerSensor() == 2) {
        mooncar.MoonCarGo(mooncar.Direction.direct4, 10)
    } else {
        mooncar.MoonCarGo(mooncar.Direction.direct2, 10)
    }
})
