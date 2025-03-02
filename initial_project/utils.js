
export def function getRandomColor() {
    const random = '123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++)
        color += random[Math.floor(Math.random() * 16)]
    
    return color
    }