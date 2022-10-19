// References
const ball = document.getElementById('ball')
const mainGame = document.getElementById('main-game')
const paddle1 = document.getElementById('paddle1')
const paddle2 = document.getElementById('paddle2')

// Ball movement 
let horizontalSpeed = 0.6 // in %
let verticalSpeed = 0.6
const ballPosition = ball.getBoundingClientRect()
const horizontalPercentage = parseInt(ball.style.left.replace('%', ''))
const verticalPercentage = parseInt(ball.style.top.replace('%', ''))



const interval = setInterval(()=>{
    const horizontalPercentage = parseInt(ball.style.left.replace('%', ''))
    const verticalPercentage = parseInt(ball.style.top.replace('%', ''))
    // Check for horizontal boundary 
    if (horizontalPercentage > 94) {

        horizontalSpeed = -horizontalSpeed
        let newhorizontalPercentage = 93
        ball.style.left = `${newhorizontalPercentage}%`

        return 
    }

    if (horizontalPercentage < 0){

        horizontalSpeed = -horizontalSpeed
        let newhorizontalPercentage = 1
        ball.style.left = `${newhorizontalPercentage}%`
        return
    }

    // Check for vertical boundaries 
    if (verticalPercentage > 94) {

        verticalSpeed = -verticalSpeed
        let newverticalPercentage = 93
        ball.style.top = `${newverticalPercentage}%`

        return 
    }

    if (verticalPercentage < 0){

        verticalSpeed = -verticalSpeed
        let newverticalPercentage = 1
        ball.style.top = `${newverticalPercentage}%`
        return
    }

    

    let newhorizontalPercentage = Math.round(horizontalPercentage+horizontalSpeed) || 0.5 
    ball.style.left = `${newhorizontalPercentage}%`
    let newverticalPercentage = Math.round(verticalPercentage+verticalSpeed) || 0.5 
    ball.style.top = `${newverticalPercentage}%`


},24)


ballStartPosition()





// Movements 
const gameloop = ()=>{
    const interval = setInterval(()=>{
        // const horizontalPercentage = parseInt(ball.style.left.replace('%', ''))
        // const newhorizontalPercentage = horizontalPercentage+1 
        // ball.style.left = `${newhorizontalPercentage}%`
        console.log('Hello')

    },1000)
}


// Utility functions
function ballStartPosition(){
    ball.style.left = '45%'
}

// Controls 
const paddleMovementSpeed = 5

document.onkeydown = function(e){
    console.log('PRESSSS', e.key)
    if (e.key=='w') {
        let pervPercentage = parseInt(paddle1.style.top.replace('%', '')) || 50
        let newPercentage = pervPercentage - paddleMovementSpeed
    
       if (newPercentage <= 0 ) newPercentage = 1
        
        console.log('paddle1.style.top', paddle1.style.top)
        console.log('pervPercentage', pervPercentage)
        paddle1.style.top = `${newPercentage}%`
    }
    if (e.key=='s') {
        let pervPercentage = parseInt(paddle1.style.top.replace('%', '')) || 50
        let newPercentage = pervPercentage + paddleMovementSpeed
    
       if (newPercentage >= 90 ) newPercentage = 90
        
        console.log('paddle1.style.top', paddle1.style.top)
        console.log('pervPercentage', pervPercentage)
        paddle1.style.top = `${newPercentage}%`
    }
    // right paddles
    if (e.key=='ArrowUp') {
        let pervPercentage = parseInt(paddle2.style.top.replace('%', '')) || 50
        let newPercentage = pervPercentage - paddleMovementSpeed
    
       if (newPercentage <= 0 ) newPercentage = 1
        
        console.log('paddle2.style.top', paddle2.style.top)
        console.log('pervPercentage', pervPercentage)
        paddle2.style.top = `${newPercentage}%`
    }
    if (e.key=='ArrowDown') {
        let pervPercentage = parseInt(paddle2.style.top.replace('%', '')) || 50
        let newPercentage = pervPercentage + paddleMovementSpeed
    
       if (newPercentage >= 90 ) newPercentage = 90
        
        console.log('paddle2.style.top', paddle2.style.top)
        console.log('pervPercentage', pervPercentage)
        paddle2.style.top = `${newPercentage}%`
    }
}


